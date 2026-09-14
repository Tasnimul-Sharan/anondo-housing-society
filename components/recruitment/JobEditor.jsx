import { useState } from "react";
import { FaSave } from "react-icons/fa";
import Dialog from "./Dialog";
import { Field } from "./ApplicationForm";
import { apiRequest } from "@/lib/recruitment/client";
import { JOB_TYPES, JOB_STATUSES } from "@/lib/recruitment/validation.mjs";
import s from "@/styles/Recruitment.module.css";

export default function JobEditor({ job, onClose, onSaved }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function save(event) {
    event.preventDefault();
    setBusy(true); setError("");
    const input = Object.fromEntries(new FormData(event.currentTarget));
    input.responsibilities = input.responsibilities.split("\n").filter(Boolean);
    input.requirements = input.requirements.split("\n").filter(Boolean);
    try {
      await apiRequest(job.id ? `/api/admin/jobs/${job.id}` : "/api/admin/jobs", { method: job.id ? "PATCH" : "POST", body: JSON.stringify(input) }, true);
      onSaved();
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
        <label className={s.field}>Status<select className={s.input} name="status" defaultValue={job.status || "draft"}>{JOB_STATUSES.map(status => <option key={status} value={status}>{status[0].toUpperCase() + status.slice(1)}</option>)}</select></label>
        <div className={s.full}><Field label="Job description" name="description" multiline defaultValue={job.description} maxLength={12000} required /></div>
        <Field label="Responsibilities (one per line)" name="responsibilities" multiline defaultValue={job.responsibilities?.join("\n")} maxLength={30000} />
        <Field label="Requirements (one per line)" name="requirements" multiline defaultValue={job.requirements?.join("\n")} maxLength={30000} />
      </fieldset>
      {error && <p role="alert" className={s.error}>{error}</p>}
      <div className={s.actions}><button type="button" className={s.secondary} disabled={busy} onClick={onClose}>Cancel</button><button className={s.button} disabled={busy}><FaSave />{busy ? "Saving..." : "Save position"}</button></div>
    </form>
  </Dialog>;
}
