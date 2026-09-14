-- Run once in Supabase SQL Editor. This does not modify existing project tables.
begin;

create table if not exists public.recruitment_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.recruitment_jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  department text not null,
  location text not null,
  type text not null check (type in ('Full-time', 'Part-time', 'Contract', 'Internship')),
  experience text not null,
  salary text not null default '',
  deadline date,
  description text not null,
  responsibilities jsonb not null default '[]'::jsonb check (jsonb_typeof(responsibilities) = 'array'),
  requirements jsonb not null default '[]'::jsonb check (jsonb_typeof(requirements) = 'array'),
  status text not null default 'draft' check (status in ('draft', 'published', 'closed', 'archived')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.recruitment_applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.recruitment_jobs(id) on delete restrict,
  full_name text not null,
  email text not null check (email = lower(email)),
  phone text not null,
  address text not null,
  education text not null,
  experience text not null,
  current_company text not null default '',
  expected_salary text not null default '',
  availability text not null,
  portfolio_url text not null default '',
  cover_letter text not null default '',
  consent_at timestamptz not null,
  cv_url text not null,
  cv_public_id text not null unique,
  cv_name text not null,
  cv_bytes integer not null check (cv_bytes > 0 and cv_bytes <= 3145728),
  status text not null default 'new' check (status in ('new', 'reviewing', 'shortlisted', 'interview', 'hired', 'rejected')),
  notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(job_id, email)
);

create table if not exists public.recruitment_rate_limits (
  bucket text primary key,
  attempts integer not null,
  expires_at timestamptz not null
);

create index if not exists recruitment_jobs_status_idx on public.recruitment_jobs(status, created_at desc);
create index if not exists recruitment_applications_job_idx on public.recruitment_applications(job_id, created_at desc);
create index if not exists recruitment_applications_status_idx on public.recruitment_applications(status, created_at desc);

alter table public.recruitment_admins enable row level security;
alter table public.recruitment_jobs enable row level security;
alter table public.recruitment_applications enable row level security;
alter table public.recruitment_rate_limits enable row level security;
-- All reads and writes pass through server APIs. Authenticated users cannot self-promote.
revoke all on public.recruitment_admins, public.recruitment_jobs, public.recruitment_applications, public.recruitment_rate_limits from anon, authenticated;
grant all on public.recruitment_admins, public.recruitment_jobs, public.recruitment_applications, public.recruitment_rate_limits to service_role;

create or replace view public.recruitment_open_jobs with (security_invoker = true) as
select id, title, department, location, type, experience, salary, deadline,
       description, responsibilities, requirements, created_at
from public.recruitment_jobs
where status = 'published'
  and (deadline is null or deadline >= (now() at time zone 'Asia/Dhaka')::date);
revoke all on public.recruitment_open_jobs from anon, authenticated;
grant select on public.recruitment_open_jobs to service_role;

create or replace function public.recruitment_touch_updated_at() returns trigger
language plpgsql set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
drop trigger if exists recruitment_jobs_updated on public.recruitment_jobs;
create trigger recruitment_jobs_updated before update on public.recruitment_jobs
for each row execute function public.recruitment_touch_updated_at();
drop trigger if exists recruitment_applications_updated on public.recruitment_applications;
create trigger recruitment_applications_updated before update on public.recruitment_applications
for each row execute function public.recruitment_touch_updated_at();

-- Lock the job against concurrent closing while accepting an application.
create or replace function public.recruitment_require_open_job() returns trigger
language plpgsql set search_path = '' as $$
declare selected_job public.recruitment_jobs;
begin
  select * into selected_job from public.recruitment_jobs where id = new.job_id for share;
  if not found or selected_job.status <> 'published' or
     selected_job.deadline < (now() at time zone 'Asia/Dhaka')::date then
    raise exception 'Job is not accepting applications';
  end if;
  return new;
end;
$$;
drop trigger if exists recruitment_application_open_job on public.recruitment_applications;
create trigger recruitment_application_open_job before insert on public.recruitment_applications
for each row execute function public.recruitment_require_open_job();

-- Atomic across server instances; expired IP hashes are removed on subsequent requests.
create or replace function public.recruitment_take_rate_limit(bucket_key text) returns boolean
language plpgsql set search_path = '' as $$
declare hits integer;
begin
  delete from public.recruitment_rate_limits where expires_at < now();
  insert into public.recruitment_rate_limits(bucket, attempts, expires_at)
  values (bucket_key, 1, now() + interval '1 hour')
  on conflict(bucket) do update set attempts = public.recruitment_rate_limits.attempts + 1
  returning attempts into hits;
  return hits <= 10;
end;
$$;
revoke all on function public.recruitment_take_rate_limit(text) from public, anon, authenticated;
grant execute on function public.recruitment_take_rate_limit(text) to service_role;
revoke all on function public.recruitment_touch_updated_at(), public.recruitment_require_open_job() from public, anon, authenticated;

commit;

-- AFTER creating your user in Authentication > Users, run separately:
-- insert into public.recruitment_admins (user_id)
-- select id from auth.users where lower(email) = lower('YOUR_ADMIN_EMAIL')
-- on conflict (user_id) do nothing;
