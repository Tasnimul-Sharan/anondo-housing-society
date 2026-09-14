import { Fragment, useEffect, useState } from "react";
import { FaDownload, FaLink, FaSave } from "react-icons/fa";
import Dialog from "./Dialog";
import { apiRequest } from "@/lib/recruitment/client";
import { APPLICATION_STATUSES } from "@/lib/recruitment/validation.mjs";
import s from "@/styles/Recruitment.module.css";

export default function ApplicationReview({ id, onClose, onSaved }) {
  const [application, setApplication] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [download, setDownload] = useState(null);
  const [loading, setLoading] = useState(true);
  async function load() {
    setLoading(true); setError("");
    try { const data = await apiRequest(`/api/admin/applications/${id}`, {}, true); setApplication(data.application); }
    catch (err) { setError(err.message); }
    finally { setLoading(false); }
  }
  useEffect(() => { load(); }, [id]);
  async function cvLink(copy = false) {
    setBusy(true); setError(""); setMessage("");
    try {
      const result = await apiRequest(`/api/admin/applications/${id}/cv`, {}, true);
      setDownload(result);
      if (copy) {
        try { await navigator.clipboard.writeText(result.url); setMessage("CV link copied. It expires in 5 minutes."); }
        catch { setMessage("Use the download link below. It expires in 5 minutes."); }
      }
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  }
  async function save(event) {
    event.preventDefault(); setBusy(true); setError(""); setMessage("");
    const body = Object.fromEntries(new FormData(event.currentTarget));
    try {
      await apiRequest(`/api/admin/applications/${id}`, { method: "PATCH", body: JSON.stringify(body) }, true);
      setMessage("Application updated."); onSaved();
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  }
  return <Dialog title={application?.full_name || "Application details"} onClose={onClose} busy={busy}>
    {error && <p role="alert" className={s.error}>{error}</p>}
    {loading ? <p className={s.empty}>Loading application...</p> : !application ? <button className={s.secondary} onClick={load}>Try again</button> : <>
      <p className={`${s.muted} pt-4`}>{application.recruitment_jobs?.title} / {new Date(application.created_at).toLocaleDateString()}</p>
      <dl className={s.details}>
        {[["Email", "email"], ["Phone", "phone"], ["Address", "address"], ["Education", "education"], ["Experience", "experience"], ["Current company", "current_company"], ["Expected salary", "expected_salary"], ["Availability", "availability"], ["Cover letter", "cover_letter"]].map(([label, key]) => <Fragment key={key}><dt>{label}</dt><dd>{application[key] || "Not provided"}</dd></Fragment>)}
        {application.portfolio_url && <><dt>Portfolio</dt><dd><a href={application.portfolio_url} target="_blank" rel="noopener noreferrer">{application.portfolio_url}</a></dd></>}
        <dt>CV</dt><dd>{application.cv_name} ({Math.ceil(application.cv_bytes / 1024)} KB)</dd>
      </dl>
      <div className={s.row}><button className={s.secondary} disabled={busy} onClick={() => cvLink()}><FaDownload />Get CV download</button><button className={s.secondary} disabled={busy} onClick={() => cvLink(true)}><FaLink />Copy CV link</button></div>
      {download && <p className={s.notice}><a className="underline" href={download.url} target="_blank" rel="noopener noreferrer">Download {download.name}</a><br />Link expires in 5 minutes.</p>}
      <details className="my-4 text-sm"><summary className="cursor-pointer">Stored Cloudinary URL</summary><p className="mt-2 break-all text-gray-600">{application.cv_url}</p></details>
      <form onSubmit={save} className={s.formSection}>
        <div className={s.grid}>
          <label className={s.field}>Application status<select className={s.input} name="status" defaultValue={application.status} disabled={busy}>{APPLICATION_STATUSES.map(status => <option key={status} value={status}>{status[0].toUpperCase() + status.slice(1)}</option>)}</select></label>
          <label className={`${s.field} ${s.full}`}>Internal notes<textarea className={s.input} name="notes" defaultValue={application.notes} maxLength={10000} disabled={busy} /></label>
        </div>
        <div className={`${s.actions} mt-6`}><button className={s.button} disabled={busy}><FaSave />{busy ? "Please wait..." : "Save review"}</button></div>
      </form>
      {message && <p className={s.success} role="status">{message}</p>}
    </>}
  </Dialog>;
}
