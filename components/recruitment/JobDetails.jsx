import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaBookmark, FaRegBookmark, FaLink, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import ApplicationForm from "./ApplicationForm";
import { formatJobAge, formatJobDate, JOB_COMPANY_NAME } from "@/lib/recruitment/job-details.mjs";
import { isJobOpen } from "@/lib/recruitment/validation.mjs";
import s from "@/styles/Recruitment.module.css";
import d from "@/styles/JobDetails.module.css";

const sections = [["all", "All"], ["requirements", "Requirements"], ["responsibilities", "Responsibilities"], ["benefits", "Salary & Benefits"]];

function List({ items }) {
  if (!items?.length) return null;
  return <ul className={d.list}>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>;
}

export default function JobDetails({ job, available = true }) {
  const [section, setSection] = useState("all");
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [applying, setApplying] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const contentId = useId();
  const open = available && isJobOpen({ ...job, status: "published" }, now);
  useEffect(() => {
    try { setSaved(localStorage.getItem(`anondo:saved-job:${job.id}`) === "true"); } catch { /* Storage may be disabled. */ }
    setShareUrl(`${window.location.origin}/career-opportunities/${job.id}`);
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(timer);
  }, [job.id]);
  useEffect(() => { if (!open) setApplying(false); }, [open]);
  function toggleSaved() {
    try {
      if (saved) localStorage.removeItem(`anondo:saved-job:${job.id}`);
      else localStorage.setItem(`anondo:saved-job:${job.id}`, "true");
      setSaved(!saved);
      setMessage(saved ? "Removed from saved jobs on this browser." : "Job saved on this browser.");
    } catch { setMessage("Your browser could not save this job."); }
  }
  async function copyLink() {
    try { await navigator.clipboard.writeText(shareUrl); setMessage("Job link copied."); }
    catch { setMessage("Copy the job link from your browser address bar."); }
  }
  const visible = key => section === "all" || section === key;
  const facts = [["Vacancy", job.vacancy ?? "Not specified"], ["Age", formatJobAge(job)], ["Location", job.location], ["Salary", job.salary || "Not disclosed"], ["Experience", job.experience], ["Published", formatJobDate(job.published_date || job.created_at)]];
  return <section className={`${s.scope} ${d.page}`}>
    <div className={d.container}>
      <Link href="/career-opportunities" className={d.back}><FaArrowLeft />All career opportunities</Link>
      <header className={d.header}>
        <div className={d.employer}><Image src="/logo.jpg" width={72} height={72} alt={JOB_COMPANY_NAME} className={d.logo} /><div><p className={d.company}>{JOB_COMPANY_NAME}</p><span className={d.department}>{job.department}</span></div></div>
        <h1>{job.title}</h1>
        <div className={d.headingActions}>
          <p className={d.deadline}>Application Deadline: <strong>{job.deadline ? formatJobDate(job.deadline) : "Open until filled"}</strong></p>
          <div className={s.row}><button className={s.button} disabled={!open} onClick={() => setApplying(true)}>{open ? "Apply Now" : "Applications closed"}<FaArrowRight /></button><button className={s.secondary} aria-pressed={saved} title={saved ? "Remove saved job on this browser" : "Save job on this browser"} onClick={toggleSaved}>{saved ? <FaBookmark /> : <FaRegBookmark />}{saved ? "Saved" : "Save"}</button></div>
        </div>
        <div className={d.share}><span>Share:</span><button className={s.iconButton} aria-label="Copy job link" title="Copy job link" onClick={copyLink}><FaLink /></button>{shareUrl && <><a className={s.iconButton} href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" title="Share on Facebook"><FaFacebookF /></a><a className={s.iconButton} href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" title="Share on LinkedIn"><FaLinkedinIn /></a><a className={s.iconButton} href={`https://wa.me/?text=${encodeURIComponent(`${job.title} - ${shareUrl}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" title="Share on WhatsApp"><FaWhatsapp /></a></>}</div>
        <p role="status" className={d.feedback}>{message}</p>
      </header>
      <nav className={d.nav} aria-label="Job details sections">{sections.map(([key, label]) => <button key={key} type="button" aria-pressed={section === key} aria-controls={contentId} onClick={() => setSection(key)}>{label}</button>)}</nav>
      <dl className={d.facts}>{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <div id={contentId}>
        {visible("requirements") && <section className={d.section} aria-labelledby={`${contentId}-requirements`}>
          <h2 id={`${contentId}-requirements`}>Requirements</h2>
          {!!job.education?.length && <><h3>Education</h3><List items={job.education} /></>}
          {!!job.preferred_institutions?.length && <><h3>Preferred institutions</h3><p>Candidates from the following institutions will get preference:</p><List items={job.preferred_institutions} /></>}
          <h3>Experience</h3><List items={[job.experience]} />
          {!!job.experience_industries?.length && <><p>Experience in the following business areas:</p><List items={job.experience_industries} /></>}
          {job.freshers_allowed && <p className={d.freshers}>Freshers are also encouraged to apply.</p>}
          {(job.requirements?.length > 0 || job.age_min != null || job.age_max != null) && <><h3>Additional Requirements</h3><List items={[...(job.age_min != null || job.age_max != null ? [`Age: ${formatJobAge(job)}`] : []), ...(job.requirements || [])]} /></>}
        </section>}
        {visible("responsibilities") && <section className={d.section} aria-labelledby={`${contentId}-responsibilities`}>
          <h2 id={`${contentId}-responsibilities`}>Responsibilities & Context</h2><p className={d.prose}>{job.description}</p><List items={job.responsibilities} />
          {!!job.skills?.length && <><h3>Skills & Expertise</h3><ul className={d.skills}>{job.skills.map((skill, index) => <li key={index}>{skill}</li>)}</ul></>}
        </section>}
        {visible("benefits") && <section className={d.section} aria-labelledby={`${contentId}-benefits`}>
          <h2 id={`${contentId}-benefits`}>Salary & Benefits</h2><h3>Salary</h3><p>{job.salary || "Not disclosed"}</p>
          {!!job.benefits?.length && <><h3>Compensation & Other Benefits</h3><List items={job.benefits} /></>}
          <div className={d.workFacts}>{job.workplace && <div><h3>Workplace</h3><p>{job.workplace}</p></div>}<div><h3>Employment Status</h3><p>{job.type}</p></div><div><h3>Job Location</h3><p>{job.location}</p></div></div>
        </section>}
      </div>
      <footer className={d.footer}><div><strong>{open ? "Ready to apply?" : "This position is no longer accepting applications."}</strong>{job.deadline && <p className={s.muted}>Application deadline: {formatJobDate(job.deadline)}</p>}</div><button className={s.button} disabled={!open} onClick={() => setApplying(true)}>{open ? "Apply Now" : "Applications closed"}<FaArrowRight /></button></footer>
    </div>
    {applying && open && <ApplicationForm job={job} onClose={() => setApplying(false)} />}
  </section>;
}
