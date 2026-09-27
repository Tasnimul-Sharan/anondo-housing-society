import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import JobDetails from "@/components/recruitment/JobDetails";
import { database } from "@/lib/recruitment/server.mjs";
import { UUID_PATTERN } from "@/lib/recruitment/validation.mjs";
import { JOB_COMPANY_NAME } from "@/lib/recruitment/job-details.mjs";
import s from "@/styles/Recruitment.module.css";

export default function JobPage({ initialJob, loadError = false }) {
  const [job, setJob] = useState(initialJob);
  const [available, setAvailable] = useState(true);
  useEffect(() => {
    setJob(initialJob); setAvailable(true);
    if (!initialJob) return;
    const controller = new AbortController();
    async function refresh() {
      if (document.hidden) return;
      try {
        const response = await fetch(`/api/recruitment/jobs/${initialJob.id}`, { signal: controller.signal });
        if (response.status === 404) { setAvailable(false); return; }
        if (response.ok) { const data = await response.json(); setJob(data.job); setAvailable(true); }
      } catch { /* Keep the last successful response during temporary network failures. */ }
    }
    const timer = setInterval(refresh, 30000);
    window.addEventListener("focus", refresh);
    return () => { controller.abort(); clearInterval(timer); window.removeEventListener("focus", refresh); };
  }, [initialJob]);
  if (loadError || !job) return <main className={s.scope + " " + s.main}><Head><title>Position unavailable | Anondo Housing Society</title><meta name="robots" content="noindex" /></Head><h1>Unable to load this position</h1><p className="my-6">Please try again shortly.</p><Link href="/career-opportunities" className={s.secondary}>All career opportunities</Link></main>;
  const url = `https://www.anondohousing.com/career-opportunities/${job.id}`;
  return <><Head><title>{job.title} | {JOB_COMPANY_NAME}</title><meta name="description" content={job.description.slice(0, 160)} /><link rel="canonical" href={url} /><meta property="og:title" content={job.title} /><meta property="og:description" content={job.description.slice(0, 160)} /><meta property="og:url" content={url} /><meta property="og:image" content="https://www.anondohousing.com/logo.jpg" /></Head><JobDetails key={job.id} job={job} available={available} /></>;
}

export async function getServerSideProps({ params, res }) {
  res.setHeader("Cache-Control", "no-store");
  if (!UUID_PATTERN.test(params.id)) return { notFound: true };
  try {
    const { data, error } = await database().from("recruitment_open_jobs").select("*").eq("id", params.id).maybeSingle();
    if (error) throw error;
    if (!data) return { notFound: true };
    return { props: { initialJob: data } };
  } catch {
    res.statusCode = 503;
    return { props: { initialJob: null, loadError: true } };
  }
}
