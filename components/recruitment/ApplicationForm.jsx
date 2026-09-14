import { useState } from "react";
import Link from "next/link";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import Dialog from "./Dialog";
import { apiRequest } from "@/lib/recruitment/client";
import { MAX_CV_BYTES } from "@/lib/recruitment/validation.mjs";
import s from "@/styles/Recruitment.module.css";

export default function ApplicationForm({ job, onClose }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [receipt, setReceipt] = useState(null);
  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    setError("");
    const form = new FormData(event.currentTarget);
    const file = form.get("cv");
    if (!file?.size || file.size > MAX_CV_BYTES) return setError("Upload a CV up to 3 MB.");
    form.set("job_id", job.id);
    setBusy(true);
    try { setReceipt(await apiRequest("/api/recruitment/applications", { method: "POST", body: form })); }
    catch (err) { setError(err.message); }
    finally { setBusy(false); }
  }
  return (
    <Dialog title={`Apply for ${job.title}`} onClose={onClose} busy={busy}>
      {receipt ? <div className="py-8 text-center" role="status">
        <FaCheckCircle className="mx-auto mb-4 text-4xl text-green-600" />
        <h3>Application received</h3>
        <p className="my-4">Thank you for applying. Our recruitment team will review your application.</p>
        <p className={`${s.muted} break-all`}>Reference: {receipt.id}</p>
        <button type="button" className={`${s.button} mt-6`} onClick={onClose}>Done</button>
      </div> : <form onSubmit={submit} aria-busy={busy}>
        <p className={`${s.muted} py-4`}>{job.department} / {job.location} / {job.type}</p>
        <fieldset disabled={busy}>
          <section className={s.formSection}>
            <h3>Personal information</h3>
            <div className={s.grid}>
              <Field label="Full name" name="full_name" autoComplete="name" maxLength={160} required />
              <Field label="Email address" name="email" type="email" autoComplete="email" maxLength={254} required />
              <Field label="Phone number" name="phone" type="tel" autoComplete="tel" maxLength={30} required />
              <Field label="Current address" name="address" autoComplete="street-address" maxLength={500} required />
            </div>
          </section>
          <section className={s.formSection}>
            <h3>Education and experience</h3>
            <div className={s.grid}>
              <Field label="Education / qualifications" name="education" multiline maxLength={1500} required />
              <Field label="Work experience" name="experience" multiline maxLength={5000} required />
              <Field label="Current company (optional)" name="current_company" maxLength={160} />
              <Field label="Expected salary, BDT (optional)" name="expected_salary" maxLength={100} />
              <Field label="Notice period / available from" name="availability" maxLength={160} required />
              <Field label="LinkedIn / portfolio (optional)" name="portfolio_url" type="url" maxLength={500} />
            </div>
          </section>
          <section className={s.formSection}>
            <h3>CV and cover letter</h3>
            <div className={s.grid}>
              <label className={`${s.field} ${s.full}`}>CV (PDF, DOC or DOCX, maximum 3 MB) *
                <input className={s.input} type="file" name="cv" accept=".pdf,.doc,.docx" required />
              </label>
              <div className={s.full}><Field label="Cover letter (optional)" name="cover_letter" multiline maxLength={8000} /></div>
            </div>
            <div hidden aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>
            <label className={s.check}><input type="checkbox" name="consent" value="true" required /><span>I agree to the <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> and consent to my information and CV being used for recruitment.</span></label>
          </section>
        </fieldset>
        {error && <p role="alert" className={s.error}>{error}</p>}
        <div className={s.actions}>
          <button type="button" className={s.secondary} onClick={onClose} disabled={busy}>Cancel</button>
          <button type="submit" className={s.button} disabled={busy}><FaPaperPlane />{busy ? "Uploading and submitting..." : "Submit application"}</button>
        </div>
      </form>}
    </Dialog>
  );
}

export function Field({ label, multiline, ...props }) {
  return <label className={s.field}>{label}{props.required ? " *" : ""}
    {multiline ? <textarea className={s.input} rows={4} {...props} /> : <input className={s.input} {...props} />}
  </label>;
}
