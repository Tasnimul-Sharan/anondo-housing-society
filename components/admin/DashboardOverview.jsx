import { FaBriefcase, FaGlobe, FaUsers, FaInbox, FaArrowRight } from "react-icons/fa";
import a from "@/styles/Admin.module.css";
import s from "@/styles/Recruitment.module.css";

export function Status({ value }) {
  return <span className={a.status} data-status={value}>{value === "archived" ? "Deleted" : value}</span>;
}

export default function DashboardOverview({ data, onNavigate, onEdit, onReview }) {
  const metrics = [
    ["Jobs", data.stats.jobs, FaBriefcase], ["Live positions", data.stats.live, FaGlobe],
    ["Applications", data.stats.applications, FaUsers], ["Awaiting review", data.stats.new, FaInbox],
  ];
  return <>
    <div className={a.stats}>{metrics.map(([label, value, Icon]) => <div key={label} className={a.stat}><div className={a.statLabel}><Icon />{label}</div><strong className={a.statValue}>{value ?? "--"}</strong></div>)}</div>
    <div className={a.overviewGrid}>
      <section><div className={a.sectionHead}><h2>Recent positions</h2><button className={a.textLink} onClick={() => onNavigate("jobs")}>View all <FaArrowRight /></button></div>
        {data.jobs.map(job => <div className={a.recentItem} key={job.id}><div><button className={a.recordTitle} onClick={() => onEdit(job)}>{job.title}</button><p className={a.recordMeta}>{job.department}</p></div><Status value={job.status} /></div>)}
        {!data.jobs.length && <p className={s.empty}>No positions yet.</p>}
      </section>
      <section><div className={a.sectionHead}><h2>Latest applications</h2><button className={a.textLink} onClick={() => onNavigate("applications")}>View all <FaArrowRight /></button></div>
        {data.applications.map(item => <div className={a.recentItem} key={item.id}><div><button className={a.recordTitle} onClick={() => onReview(item.id)}>{item.full_name}</button><p className={a.recordMeta}>{item.recruitment_jobs?.title}</p></div><Status value={item.status} /></div>)}
        {!data.applications.length && <p className={s.empty}>No applications yet.</p>}
      </section>
    </div>
  </>;
}
