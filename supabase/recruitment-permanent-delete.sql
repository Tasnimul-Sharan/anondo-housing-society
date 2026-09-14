-- Run after recruitment.sql, including on existing installations.
begin;

create table if not exists public.recruitment_cv_deletions (
  public_id text primary key,
  created_at timestamptz not null default now()
);
alter table public.recruitment_cv_deletions enable row level security;
revoke all on public.recruitment_cv_deletions from anon, authenticated;
grant all on public.recruitment_cv_deletions to service_role;

-- The row lock prevents restoration or new applications during deletion.
-- Keep file IDs durably queued before deleting their application records.
create or replace function public.recruitment_permanently_delete_job(target_id uuid, confirmation text)
returns integer language plpgsql set search_path = '' as $$
declare selected_job public.recruitment_jobs; removed integer;
begin
  select * into selected_job from public.recruitment_jobs where id = target_id for update;
  if not found then raise exception 'Job not found' using errcode = 'P0002'; end if;
  if selected_job.status <> 'archived' then
    raise exception 'Only jobs in Trash can be permanently deleted' using errcode = '23514';
  end if;
  if confirmation is distinct from selected_job.title then
    raise exception 'Type the exact job title to confirm' using errcode = '22023';
  end if;
  insert into public.recruitment_cv_deletions(public_id)
    select cv_public_id from public.recruitment_applications where job_id = target_id
    on conflict do nothing;
  delete from public.recruitment_applications where job_id = target_id;
  get diagnostics removed = row_count;
  delete from public.recruitment_jobs where id = target_id;
  return removed;
end;
$$;
revoke all on function public.recruitment_permanently_delete_job(uuid, text) from public, anon, authenticated;
grant execute on function public.recruitment_permanently_delete_job(uuid, text) to service_role;

commit;
