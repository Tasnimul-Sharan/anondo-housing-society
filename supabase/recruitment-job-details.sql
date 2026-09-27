-- Run in Supabase SQL Editor AFTER recruitment.sql.
-- Additive migration: existing jobs, applications, CVs and admin access are retained.
begin;

alter table public.recruitment_jobs
  add column if not exists vacancy integer check (vacancy between 1 and 100000),
  add column if not exists age_min integer check (age_min between 0 and 100),
  add column if not exists age_max integer check (age_max between 0 and 100),
  add column if not exists education jsonb not null default '[]'::jsonb check (jsonb_typeof(education) = 'array'),
  add column if not exists preferred_institutions jsonb not null default '[]'::jsonb check (jsonb_typeof(preferred_institutions) = 'array'),
  add column if not exists experience_industries jsonb not null default '[]'::jsonb check (jsonb_typeof(experience_industries) = 'array'),
  add column if not exists freshers_allowed boolean not null default false,
  add column if not exists skills jsonb not null default '[]'::jsonb check (jsonb_typeof(skills) = 'array'),
  add column if not exists benefits jsonb not null default '[]'::jsonb check (jsonb_typeof(benefits) = 'array'),
  add column if not exists workplace text not null default '',
  add column if not exists published_date date,
  add column if not exists company_name text not null default 'Anondo Housing Society',
  add column if not exists company_information text not null default '';

do $$
begin
  if not exists (select 1 from pg_constraint where conrelid = 'public.recruitment_jobs'::regclass and conname = 'recruitment_jobs_age_range_check') then
    alter table public.recruitment_jobs add constraint recruitment_jobs_age_range_check
      check (age_min is null or age_max is null or age_min <= age_max);
  end if;
end $$;

-- Record first publication, not every edit or restoration from Trash.
create or replace function public.recruitment_set_published_date()
returns trigger language plpgsql set search_path = public as $$
begin
  if new.status = 'published' and new.published_date is null then
    new.published_date := (now() at time zone 'Asia/Dhaka')::date;
  end if;
  return new;
end;
$$;
revoke all on function public.recruitment_set_published_date() from public, anon, authenticated;
drop trigger if exists recruitment_jobs_published_date on public.recruitment_jobs;
create trigger recruitment_jobs_published_date before insert or update on public.recruitment_jobs
  for each row execute function public.recruitment_set_published_date();

-- Existing publication dates were not stored; retain their original display fallback.
update public.recruitment_jobs
set published_date = (created_at at time zone 'Asia/Dhaka')::date
where published_date is null and status in ('published', 'closed', 'archived');

-- Keep the original columns in the original order; append the new public fields.
create or replace view public.recruitment_open_jobs with (security_invoker = true) as
select id, title, department, location, type, experience, salary, deadline,
  description, responsibilities, requirements, created_at,
  vacancy, age_min, age_max, education, preferred_institutions,
  experience_industries, freshers_allowed, skills, benefits, workplace,
  published_date, company_name, company_information
from public.recruitment_jobs
where status = 'published'
  and (deadline is null or deadline >= (now() at time zone 'Asia/Dhaka')::date);

-- Public pages still read through the server API, not unrestricted browser access.
revoke all on public.recruitment_open_jobs from anon, authenticated;
grant select on public.recruitment_open_jobs to service_role;
notify pgrst, 'reload schema';
commit;
