import { useState } from "react";
import { FaSave } from "react-icons/fa";
import Dialog from "./Dialog";
import { Field } from "./ApplicationForm";
import { apiRequest } from "@/lib/recruitment/client";
import { notifyJobsChanged } from "@/lib/recruitment/events";
import { JOB_TYPES, JOB_STATUSES } from "@/lib/recruitment/validation.mjs";
import { JOB_DETAIL_LISTS } from "@/lib/recruitment/job-details.mjs";
import s from "@/styles/Recruitment.module.css";

export default function JobEditor({ job, onClose, onSaved }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(job.status === "archived" ? "draft" : job.status || "published");
  async function save(event) {
    event.preventDefault();
    setBusy(true); setError("");
    const input = Object.fromEntries(new FormData(event.currentTarget));
    input.status = event.nativeEvent.submitter?.value === "draft" ? "draft" : status;
    for (const key of ["responsibilities", "requirements", ...JOB_DETAIL_LISTS.map(([key]) => key)]) {
      input[key] = input[key].split("\n").map(value => value.trim()).filter(Boolean);
    }
    input.freshers_allowed = input.freshers_allowed === "on";
    try {
      const result = await apiRequest(job.id ? `/api/admin/jobs/${job.id}` : "/api/admin/jobs", { method: job.id ? "PATCH" : "POST", body: JSON.stringify(input) }, true);
      notifyJobsChanged();
      onSaved(result.job);
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  }
  return <Dialog title={job.id ? "Edit position" : "New position"} onClose={onClose} busy={busy}>
    <form onSubmit={save}>
      <fieldset disabled={busy} className={`${s.grid} py-6`}>
        <h3 className={s.full + " font-semibold"}>Position overview</h3>
        <Field label="Job title" name="title" defaultValue={job.title} maxLength={160} required />
        <Field label="Department" name="department" defaultValue={job.department} maxLength={100} required />
        <Field label="Location" name="location" defaultValue={job.location} maxLength={160} required />
        <label className={s.field}>Job type<select className={s.input} name="type" defaultValue={job.type || "Full-time"}>{JOB_TYPES.map(type => <option key={type}>{type}</option>)}</select></label>
        <Field label="Experience" name="experience" defaultValue={job.experience} maxLength={160} required />
        <Field label="Salary (optional)" name="salary" defaultValue={job.salary} maxLength={160} />
        <Field label="Vacancy (optional)" name="vacancy" type="number" min={1} max={100000} step={1} defaultValue={job.vacancy ?? ""} />
        <label className={s.field}>Workplace<select className={s.input} name="workplace" defaultValue={job.workplace || ""}><option value="">Not specified</option>{[...new Set(["Work at office", "Work from home", "Hybrid", "Field-based", job.workplace].filter(Boolean))].map(value => <option key={value}>{value}</option>)}</select></label>
        <Field label="Application deadline (optional)" name="deadline" type="date" defaultValue={job.deadline || ""} />
        <Field label="Published date (optional)" name="published_date" type="date" defaultValue={job.published_date || ""} />
        <label className={s.field}>Status<select className={s.input} name="status" value={status} onChange={event => setStatus(event.target.value)}>{JOB_STATUSES.filter(value => value !== "archived").map(value => <option key={value} value={value}>{value[0].toUpperCase() + value.slice(1)}</option>)}</select></label>
        <h3 className={s.full + " border-t border-gray-200 pt-6 font-semibold"}>Requirements</h3>
        <Field label="Minimum age (optional)" name="age_min" type="number" min={0} max={100} step={1} defaultValue={job.age_min ?? ""} />
        <Field label="Maximum age (optional)" name="age_max" type="number" min={0} max={100} step={1} defaultValue={job.age_max ?? ""} />
        {JOB_DETAIL_LISTS.slice(0, 3).map(([key, label]) => <Field key={key} label={`${label} (one per line)`} name={key} multiline defaultValue={job[key]?.join("\n")} maxLength={30000} />)}
        <Field label="Additional requirements (one per line)" name="requirements" multiline defaultValue={job.requirements?.join("\n")} maxLength={30000} />
        <label className={s.check + " " + s.full}><input type="checkbox" name="freshers_allowed" defaultChecked={job.freshers_allowed || false} />Freshers are also encouraged to apply</label>
        <h3 className={s.full + " border-t border-gray-200 pt-6 font-semibold"}>Responsibilities & context</h3>
        <div className={s.full}><Field label="Job context / description" name="description" multiline defaultValue={job.description} maxLength={12000} required /></div>
        <Field label="Responsibilities (one per line)" name="responsibilities" multiline defaultValue={job.responsibilities?.join("\n")} maxLength={30000} />
        <Field label="Skills & expertise (one per line)" name="skills" multiline defaultValue={job.skills?.join("\n")} maxLength={30000} />
        <h3 className={s.full + " border-t border-gray-200 pt-6 font-semibold"}>Salary & benefits</h3>
        <div className={s.full}><Field label="Compensation & other benefits (one per line)" name="benefits" multiline defaultValue={job.benefits?.join("\n")} maxLength={30000} /></div>
      </fieldset>
      {error && <p role="alert" className={s.error}>{error}</p>}
      <div className={s.actions}><button type="button" className={s.secondary} disabled={busy} onClick={onClose}>Cancel</button>{!job.id && status !== "draft" && <button type="submit" value="draft" className={s.secondary} disabled={busy}>Save draft</button>}<button type="submit" value="save" className={s.button} disabled={busy}><FaSave />{busy ? "Saving..." : status === "published" ? "Publish job" : status === "draft" ? "Save draft" : "Save changes"}</button></div>
    </form>
  </Dialog>;
}
