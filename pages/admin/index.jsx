import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { FaPlus, FaSyncAlt, FaArrowLeft, FaArrowRight, FaTrashAlt } from "react-icons/fa";
import { authClient, apiRequest } from "@/lib/recruitment/client";
import { notifyJobsChanged } from "@/lib/recruitment/events";
import { APPLICATION_STATUSES } from "@/lib/recruitment/validation.mjs";
import AdminShell from "@/components/admin/AdminShell";
import DashboardOverview from "@/components/admin/DashboardOverview";
import RecordsTable from "@/components/admin/RecordsTable";
import PasswordChangeDialog from "@/components/admin/PasswordChangeDialog";
import JobEditor from "@/components/recruitment/JobEditor";
import ApplicationReview from "@/components/recruitment/ApplicationReview";
import Dialog from "@/components/recruitment/Dialog";
import s from "@/styles/Recruitment.module.css";
import a from "@/styles/Admin.module.css";

const titles = {
  overview: ["Dashboard", "Anondo Housing Society"],
  jobs: ["Job positions", "Published positions and drafts"],
  applications: ["Applications", "Candidate submissions and reviews"],
  trash: ["Trash", "Deleted positions"],
};

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState("");
  const [view, setView] = useState("overview");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [jobFilter, setJobFilter] = useState(null);
  const [items, setItems] = useState([]);
  const [overview, setOverview] = useState(null);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [revision, setRevision] = useState(0);
  const [editing, setEditing] = useState(null);
  const [reviewing, setReviewing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [deleteError, setDeleteError] = useState("");
  const [busy, setBusy] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [cleanupPending, setCleanupPending] = useState(0);
  const [deletionSetupRequired, setDeletionSetupRequired] = useState(false);
  const permanent = deleting?.status === "archived";

  useEffect(() => {
    let active = true;
    let subscription;
    async function check() {
      try {
        const client = authClient();
        subscription = client.auth.onAuthStateChange(event => {
          if (event === "SIGNED_OUT" && active) {
            setUser(null);
            router.replace("/admin/login");
          }
        }).data.subscription;
        const { data: { session } } = await client.auth.getSession();
        if (!session) { router.replace("/admin/login"); return; }
        const data = await apiRequest("/api/admin/session", {}, true);
        if (active) setUser(data.user);
      } catch (err) { if (active) setAuthError(err.message); }
    }
    check();
    return () => { active = false; subscription?.unsubscribe(); };
  }, [router]);

  useEffect(() => {
    if (!user) return;
    const controller = new AbortController();
    setLoading(true); setError("");
    const query = new URLSearchParams({ page: String(page) });
    const endpoint = view === "overview" ? "overview" : view === "applications" ? "applications" : "jobs";
    if (status) query.set("status", status);
    if (view === "trash") query.set("trash", "true");
    if (view === "jobs" && search.trim()) query.set("search", search.trim());
    if (view === "applications" && jobFilter) query.set("job_id", jobFilter.id);
    const timer = setTimeout(() => {
      apiRequest("/api/admin/" + endpoint + "?" + query, { signal: controller.signal }, true)
        .then(data => {
          if (controller.signal.aborted) return;
          if (view === "overview") setOverview(data);
          else {
            const lastPage = Math.max(1, Math.ceil(data.total / 20));
            if (page > lastPage) { setPage(lastPage); return; }
            setItems(data[endpoint]); setTotal(data.total);
            if (view === "trash") { setCleanupPending(data.cleanupPending); setDeletionSetupRequired(data.deletionSetupRequired); }
          }
        })
        .catch(err => { if (!controller.signal.aborted) setError(err.message); })
        .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    }, search ? 250 : 0);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [user, view, page, status, search, jobFilter, revision]);

  function navigate(next) {
    setView(next); setPage(1); setStatus(""); setSearch("");
    setJobFilter(null); setItems([]); setError(""); setNotice("");
  }
  function refreshed() { setRevision(value => value + 1); }
  async function logout() {
    try {
      const { error } = await authClient().auth.signOut();
      if (error) throw error;
      setUser(null); router.replace("/admin/login");
    } catch (err) { setError(err.message); }
  }
  async function removeJob() {
    setBusy(true); setDeleteError("");
    try {
      const result = await apiRequest("/api/admin/jobs/" + deleting.id + (permanent ? "?permanent=true" : ""), { method: "DELETE", ...(permanent ? { body: JSON.stringify({ confirmation }) } : {}) }, true);
      notifyJobsChanged(); setDeleting(null);
      setNotice(permanent ? result.cleanup.pending === 0 ? "Job, applications and CVs permanently deleted." : "Job and applications permanently deleted. CV cleanup is pending; use Retry CV cleanup in Trash." : "Job moved to Trash and removed from the careers page."); refreshed();
    } catch (err) { setDeleteError(err.message); }
    finally { setBusy(false); }
  }
  async function retryCleanup() {
    setBusy(true); setError("");
    try {
      const result = await apiRequest("/api/admin/cv-cleanup", { method: "POST" }, true);
      setNotice(result.pending ? `${result.pending} CV files still pending. Retry to continue cleanup.` : "All pending CV files have been deleted.");
      refreshed();
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  }
  async function restoreJob(job) {
    setBusy(true); setError("");
    try {
      await apiRequest("/api/admin/jobs/" + job.id, { method: "PATCH", body: JSON.stringify({ ...job, status: "draft" }) }, true);
      notifyJobsChanged(); setNotice("Job restored as a draft. You can publish it from Jobs."); refreshed();
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  }
  function showApplications(job) {
    navigate("applications"); setJobFilter(job);
  }

  return <div className={s.scope}>
    <Head><title>Administration | Anondo Housing Society</title><meta name="robots" content="noindex,nofollow" /></Head>
    {!user ? <main className={s.main}>{authError ? <><p className={s.error} role="alert">{authError}</p><Link href="/admin/login" className={s.button}>Go to sign in</Link></> : <p role="status">Checking account...</p>}</main> :
      <AdminShell user={user} view={view} onNavigate={navigate} onSignOut={logout} onPasswordChange={() => setChangingPassword(true)}>
        <div className={a.titleRow}>
          <div><h1>{titles[view][0]}</h1><p className={a.subtitle}>{titles[view][1]}</p></div>
          <div className={s.row}>
            <Link href="/career-opportunities" target="_blank" rel="noopener noreferrer" className={s.secondary}>View careers</Link>
            <button className={s.button} onClick={() => setEditing({})}><FaPlus />Post a job</button>
          </div>
        </div>
        {notice && <p className={s.success} role="status">{notice}{notice.startsWith("Job published") && <> <Link href="/career-opportunities" target="_blank" className="underline">View careers</Link></>}</p>}
        {view === "trash" && deletionSetupRequired && <p className={s.notice}>Permanent deletion needs a database update: run <code>supabase/recruitment-permanent-delete.sql</code> in Supabase SQL Editor.</p>}
        {view === "trash" && cleanupPending > 0 && <div className={s.notice} role="status">{cleanupPending} CV files pending deletion. <button className={s.secondary} disabled={busy} onClick={retryCleanup}>{busy ? "Cleaning up..." : "Retry CV cleanup"}</button></div>}
        {view !== "overview" && <div className={a.toolbar}>
          {view === "jobs" && <input className={a.input + " " + a.search} aria-label="Search jobs" placeholder="Search positions..." value={search} onChange={event => { setSearch(event.target.value); setPage(1); }} />}
          {["jobs", "applications"].includes(view) && <select className={a.input} aria-label="Filter status" value={status} onChange={event => { setStatus(event.target.value); setPage(1); }}>
            <option value="">All statuses</option>{(view === "jobs" ? ["published", "draft", "closed"] : APPLICATION_STATUSES).map(value => <option key={value} value={value}>{value[0].toUpperCase() + value.slice(1)}</option>)}
          </select>}
          {jobFilter && <button className={s.secondary} onClick={() => { setJobFilter(null); setPage(1); }}>Clear filter: {jobFilter.title}</button>}
          <span className={s.muted}>{loading ? "Loading..." : total + " records"}</span>
          <button className={s.iconButton} aria-label="Refresh" title="Refresh" disabled={loading} onClick={refreshed}><FaSyncAlt /></button>
        </div>}
        {error && <p className={s.error} role="alert">{error} <button className={s.secondary} onClick={refreshed}>Try again</button></p>}
        {loading ? <p className={s.empty} role="status">Loading...</p> : !error && (view === "overview" ? overview && <DashboardOverview data={overview} onNavigate={navigate} onEdit={setEditing} onReview={setReviewing} /> :
          <RecordsTable items={items} view={view} onEdit={setEditing} onDelete={job => { setDeleting(job); setDeleteError(""); setConfirmation(""); }} onRestore={restoreJob} onReview={setReviewing} onApplications={showApplications} busy={busy} />)}
        {view !== "overview" && total > 20 && !loading && !error && <div className={s.pagination}>
          <button className={s.iconButton} aria-label="Previous page" title="Previous page" disabled={page === 1} onClick={() => setPage(page - 1)}><FaArrowLeft /></button><span>{page} / {Math.ceil(total / 20)}</span>
          <button className={s.iconButton} aria-label="Next page" title="Next page" disabled={page * 20 >= total} onClick={() => setPage(page + 1)}><FaArrowRight /></button>
        </div>}
        {editing && <JobEditor job={editing} onClose={() => setEditing(null)} onSaved={job => {
          setEditing(null); navigate("jobs");
          setNotice(job.status === "published" ? "Job published. It is now available on the careers page." : job.status === "draft" ? "Draft saved." : "Job updated.");
          refreshed();
        }} />}
        {reviewing && <ApplicationReview id={reviewing} onClose={() => setReviewing(null)} onSaved={refreshed} />}
        {changingPassword && <PasswordChangeDialog user={user} onClose={() => setChangingPassword(false)} onSaved={() => { setChangingPassword(false); setNotice("Password updated successfully."); }} />}
        {deleting && <Dialog title={permanent ? "Permanently delete this job?" : "Delete this job?"} busy={busy} onClose={() => setDeleting(null)}>
          <p className="mt-5 font-semibold">{deleting.title}</p>
          <p className="my-5 text-sm leading-7 text-gray-600">{permanent ? "This permanently deletes the job, every associated application and their uploaded CV files from Cloudinary. This cannot be undone." : "This job will be removed from the careers page and moved to Trash. Existing applications and CVs will be retained. You can restore it later."}</p>
          {permanent && <label className={s.field}>Type the exact job title to confirm<input className={s.input} value={confirmation} onChange={event => setConfirmation(event.target.value)} disabled={busy} autoComplete="off" /></label>}
          {deleteError && <p role="alert" className={s.error}>{deleteError}</p>}
          <div className={s.actions}><button className={s.secondary} disabled={busy} onClick={() => setDeleting(null)}>Cancel</button><button className={s.button + " !bg-red-600 !border-red-600"} disabled={busy || (permanent && confirmation !== deleting.title)} onClick={removeJob}><FaTrashAlt />{busy ? "Deleting..." : permanent ? "Permanently delete" : "Delete job"}</button></div>
        </Dialog>}
      </AdminShell>}
  </div>;
}
AdminPage.adminPage = true;
