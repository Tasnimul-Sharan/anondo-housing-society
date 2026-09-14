import { useState } from "react";
import { FaSave } from "react-icons/fa";
import Dialog from "./Dialog";
import { Field } from "./ApplicationForm";
import { apiRequest } from "@/lib/recruitment/client";
import { notifyJobsChanged } from "@/lib/recruitment/events";
import { JOB_TYPES, JOB_STATUSES } from "@/lib/recruitment/validation.mjs";
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
    input.responsibilities = input.responsibilities.split("\n").filter(Boolean);
    input.requirements = input.requirements.split("\n").filter(Boolean);
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
        <Field label="Job title" name="title" defaultValue={job.title} maxLength={160} required />
        <Field label="Department" name="department" defaultValue={job.department} maxLength={100} required />
        <Field label="Location" name="location" defaultValue={job.location} maxLength={160} required />
        <label className={s.field}>Job type<select className={s.input} name="type" defaultValue={job.type || "Full-time"}>{JOB_TYPES.map(type => <option key={type}>{type}</option>)}</select></label>
        <Field label="Experience" name="experience" defaultValue={job.experience} maxLength={160} required />
        <Field label="Salary (optional)" name="salary" defaultValue={job.salary} maxLength={160} />
        <Field label="Application deadline (optional)" name="deadline" type="date" defaultValue={job.deadline || ""} />
        <label className={s.field}>Status<select className={s.input} name="status" value={status} onChange={event => setStatus(event.target.value)}>{JOB_STATUSES.filter(value => value !== "archived").map(value => <option key={value} value={value}>{value[0].toUpperCase() + value.slice(1)}</option>)}</select></label>
        <div className={s.full}><Field label="Job description" name="description" multiline defaultValue={job.description} maxLength={12000} required /></div>
        <Field label="Responsibilities (one per line)" name="responsibilities" multiline defaultValue={job.responsibilities?.join("\n")} maxLength={30000} />
        <Field label="Requirements (one per line)" name="requirements" multiline defaultValue={job.requirements?.join("\n")} maxLength={30000} />
      </fieldset>
      {error && <p role="alert" className={s.error}>{error}</p>}
      <div className={s.actions}><button type="button" className={s.secondary} disabled={busy} onClick={onClose}>Cancel</button>{!job.id && status !== "draft" && <button type="submit" value="draft" className={s.secondary} disabled={busy}>Save draft</button>}<button type="submit" value="save" className={s.button} disabled={busy}><FaSave />{busy ? "Saving..." : status === "published" ? "Publish job" : status === "draft" ? "Save draft" : "Save changes"}</button></div>
    </form>
  </Dialog>;
}
