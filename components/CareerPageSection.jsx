"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SectionBadge from "./SectionBadge";
import ApplicationForm from "./recruitment/ApplicationForm";
import { apiRequest } from "@/lib/recruitment/client";
import s from "@/styles/Recruitment.module.css";

export default function CareerPageSection() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const request = useRef(null);
  const load = useCallback(async (background = false) => {
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    if (!background) setLoading(true);
    try {
      const data = await apiRequest("/api/recruitment/jobs", { signal: controller.signal });
      if (!controller.signal.aborted) {
        setJobs(data.jobs); setError("");
        setDepartment(value => data.jobs.some(job => job.department === value) ? value : "");
        setType(value => data.jobs.some(job => job.type === value) ? value : "");
      }
    } catch (err) { if (!controller.signal.aborted && !background) setError(err.message); }
    finally { if (!controller.signal.aborted) setLoading(false); }
  }, []);
  useEffect(() => {
    load();
    const refresh = () => { if (!document.hidden) load(true); };
    const onStorage = event => { if (event.key === "recruitment:jobs-changed") refresh(); };
    window.addEventListener("focus", refresh);
    window.addEventListener("storage", onStorage);
    window.addEventListener("recruitment:jobs-changed", refresh);
    document.addEventListener("visibilitychange", refresh);
    const interval = setInterval(refresh, 30000);
    return () => {
      request.current?.abort(); clearInterval(interval);
      window.removeEventListener("focus", refresh);
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("recruitment:jobs-changed", refresh);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, [load]);
  const filtered = useMemo(() => jobs.filter(job =>
    (!department || job.department === department) && (!type || job.type === type) &&
    [job.title, job.department, job.location, job.description].join(" ").toLowerCase().includes(search.trim().toLowerCase())
  ), [jobs, department, type, search]);
  const pages = Math.ceil(filtered.length / 3);
  const activePage = Math.min(page, Math.max(1, pages));
  function filter(setter, value) { setter(value); setPage(1); }
  return (
    <section className={s.scope + " bg-[#f7fbff] py-16 sm:py-20"}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge label="Career Opportunities" icon={FaBriefcase} />
          <h2 className="mt-5 !text-3xl">Join Anondo Housing Society</h2>
          <p className="mt-4 leading-8 text-gray-600">Build your career with a growing real estate organization focused on trust, service, development, and long-term customer relationships.</p>
        </div>
        <div className={s.filters + " !mt-10"}>
          <label className={s.field}>Search positions<input className={s.input} value={search} onChange={e => filter(setSearch, e.target.value)} placeholder="Job title or location" /></label>
          <label className={s.field}>Department<select className={s.input} value={department} onChange={e => filter(setDepartment, e.target.value)}><option value="">All departments</option>{[...new Set(jobs.map(job => job.department))].map(item => <option key={item}>{item}</option>)}</select></label>
          <label className={s.field}>Job type<select className={s.input} value={type} onChange={e => filter(setType, e.target.value)}><option value="">All job types</option>{[...new Set(jobs.map(job => job.type))].map(item => <option key={item}>{item}</option>)}</select></label>
        </div>
        {loading ? <p className={s.empty} role="status">Loading open positions...</p> : error ? <div className={s.error} role="alert">{error} <button className={s.secondary} onClick={() => load()}>Try again</button></div> : <>
          <p className={s.muted + " mb-5"}>{filtered.length} open position{filtered.length === 1 ? "" : "s"}</p>
          <div className={s.jobs}>
            {filtered.slice((activePage - 1) * 3, activePage * 3).map(job => <article key={job.id} className={s.job}>
              <div className={s.between}>
                <div className="min-w-0 flex-1">
                  <div className={s.row + " mb-3"}><span className={s.pill}>{job.department}</span><span className={s.muted}>{job.type}</span></div>
                  <h3 className="break-words">{job.title}</h3>
                  <div className={s.row + " " + s.muted + " mt-3"}><span className={s.row}><FaMapMarkerAlt />{job.location}</span><span>Experience: {job.experience}</span></div>
                  <p className={s.muted + " mt-2"}>Deadline: {job.deadline || "Open until filled"}{job.salary ? " | Salary: " + job.salary : ""}</p>
                </div>
                <button className={s.button} onClick={() => setSelectedJob(job)}>Apply Now <FaArrowRight /></button>
              </div>
              <p className="my-5 leading-8 text-gray-600">{job.description}</p>
              <button className={s.secondary} aria-expanded={expanded === job.id} onClick={() => setExpanded(expanded === job.id ? null : job.id)}>{expanded === job.id ? "Hide details" : "View details"}</button>
              {expanded === job.id && <div className={s.grid + " mt-6 border-t border-gray-200 pt-6"}>
                {[["Key responsibilities", job.responsibilities], ["Requirements", job.requirements]].map(([label, items]) => <div key={label}><h4 className="font-semibold">{label}</h4><ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-600">{items.map((item, index) => <li key={index}>{item}</li>)}</ul></div>)}
              </div>}
            </article>)}
          </div>
          {!filtered.length && <div className={s.empty}><h3>{jobs.length ? "No matching positions" : "No open positions at the moment"}</h3><p className="mt-3">{jobs.length ? "Try a different search or filter." : "Please check back for future opportunities."}</p></div>}
          {pages > 1 && <div className={s.pagination}><button className={s.iconButton} aria-label="Previous page" title="Previous page" disabled={activePage === 1} onClick={() => setPage(activePage - 1)}><FaArrowLeft /></button><span>{activePage} / {pages}</span><button className={s.iconButton} aria-label="Next page" title="Next page" disabled={activePage === pages} onClick={() => setPage(activePage + 1)}><FaArrowRight /></button></div>}
        </>}
      </div>
      {selectedJob && <ApplicationForm job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </section>
  );
}
