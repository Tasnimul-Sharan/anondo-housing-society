import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import {
  FaPlus,
  FaEdit,
  FaSignOutAlt,
  FaSyncAlt,
  FaArrowLeft,
  FaArrowRight,
  FaEye,
} from "react-icons/fa";
import { authClient, apiRequest } from "@/lib/recruitment/client";
import { APPLICATION_STATUSES } from "@/lib/recruitment/validation.mjs";
import JobEditor from "@/components/recruitment/JobEditor";
import ApplicationReview from "@/components/recruitment/ApplicationReview";
import s from "@/styles/Recruitment.module.css";

export default function RecruitmentAdmin() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState("");
  const [tab, setTab] = useState("jobs");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [jobFilter, setJobFilter] = useState(null);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [revision, setRevision] = useState(0);
  const [editing, setEditing] = useState(null);
  const [reviewing, setReviewing] = useState(null);
  useEffect(() => {
    let active = true;
    let subscription;
    async function check() {
      try {
        const client = authClient();
        subscription = client.auth.onAuthStateChange((event) => {
          if (event === "SIGNED_OUT" && active) {
            setUser(null);
            router.replace("/admin/login");
          }
        }).data.subscription;
        const {
          data: { session },
        } = await client.auth.getSession();
        if (!session) {
          router.replace("/admin/login");
          return;
        }
        const data = await apiRequest("/api/admin/session", {}, true);
        if (active) setUser(data.user);
      } catch (err) {
        if (active) setAuthError(err.message);
      }
    }
    check();
    return () => {
      active = false;
      subscription?.unsubscribe();
    };
  }, [router]);
  useEffect(() => {
    if (!user) return;
    const controller = new AbortController();
    setLoading(true);
    setError("");
    setItems([]);
    const query = new URLSearchParams({ page: String(page) });
    if (tab === "applications") {
      if (status) query.set("status", status);
      if (jobFilter) query.set("job_id", jobFilter.id);
    }
    apiRequest(
      `/api/admin/${tab}?${query}`,
      { signal: controller.signal },
      true,
    )
      .then((data) => {
        if (!controller.signal.aborted) {
          setItems(data[tab]);
          setTotal(data.total);
        }
      })
      .catch((err) => {
        if (!controller.signal.aborted) setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [user, tab, page, status, jobFilter, revision]);
  async function logout() {
    try {
      const { error } = await authClient().auth.signOut();
      if (error) throw error;
      setUser(null);
      router.replace("/admin/login");
    } catch (err) {
      setError(err.message);
    }
  }
  function changeTab(value) {
    setTab(value);
    setPage(1);
    setItems([]);
  }
  return (
    <div className={`${s.scope} ${s.page}`} data-lenis-prevent>
      <Head>
        <title>Recruitment admin | Anondo Housing Society</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      {!user ? (
        <main className={s.main}>
          {authError ? (
            <>
              <p className={s.error} role="alert">
                {authError}
              </p>
              <Link href="/admin/login" className={s.button}>
                Go to sign in
              </Link>
            </>
          ) : (
            <p role="status">Checking administrator access...</p>
          )}
        </main>
      ) : (
        <>
          <header className={s.topbar}>
            <div>
              <Link href="/" className={s.brand}>
                Anondo Housing Society
              </Link>
              <p className={s.muted}>Recruitment administration</p>
            </div>
            <div className={s.row}>
              <span className={`${s.muted} break-all`}>{user.email}</span>
              <button className={s.secondary} onClick={logout}>
                <FaSignOutAlt />
                Sign out
              </button>
            </div>
          </header>
          <main className={s.main}>
            <div className={s.between}>
              <div>
                <h1>Recruitment</h1>
                <p className={`${s.muted} mt-2`}>
                  Positions and candidate applications
                </p>
              </div>
              <div className={s.row}>
                <Link
                  href="/career-opportunities"
                  target="_blank"
                  className={s.secondary}
                >
                  View careers
                </Link>
                <button className={s.button} onClick={() => setEditing({})}>
                  <FaPlus />
                  New position
                </button>
              </div>
            </div>
            <div
              className={s.tabs}
              role="tablist"
              aria-label="Recruitment views"
            >
              <button
                role="tab"
                aria-selected={tab === "jobs"}
                onClick={() => changeTab("jobs")}
              >
                Positions
              </button>
              <button
                role="tab"
                aria-selected={tab === "applications"}
                onClick={() => changeTab("applications")}
              >
                Applications
              </button>
            </div>
            <div className={s.between}>
              <p className={s.muted}>
                {loading
                  ? "Loading..."
                  : `${total} ${tab === "jobs" ? "positions" : "applications"}`}
              </p>
              <div className={s.row}>
                {tab === "applications" && (
                  <>
                    <label className={s.field}>
                      <span className="sr-only">Filter application status</span>
                      <select
                        className={s.input}
                        value={status}
                        onChange={(event) => {
                          setStatus(event.target.value);
                          setPage(1);
                        }}
                      >
                        <option value="">All statuses</option>
                        {APPLICATION_STATUSES.map((value) => (
                          <option key={value} value={value}>
                            {value[0].toUpperCase() + value.slice(1)}
                          </option>
                        ))}
                      </select>
                    </label>
                    {jobFilter && (
                      <button
                        className={s.secondary}
                        onClick={() => {
                          setJobFilter(null);
                          setPage(1);
                        }}
                      >
                        Clear job filter: {jobFilter.title}
                      </button>
                    )}
                  </>
                )}
                <button
                  className={s.iconButton}
                  title="Refresh"
                  aria-label="Refresh"
                  disabled={loading}
                  onClick={() => setRevision((value) => value + 1)}
                >
                  <FaSyncAlt />
                </button>
              </div>
            </div>
            {error && (
              <p className={s.error} role="alert">
                {error}
              </p>
            )}
            {loading ? (
              <p className={s.empty} role="status">
                Loading {tab}...
              </p>
            ) : (
              !error && (
                <div className={`${s.list} mt-5`}>
                  {items.map((item) => (
                    <article className={s.listItem} key={item.id}>
                      <div>
                        <div className={s.row}>
                          <h2>
                            {tab === "jobs" ? item.title : item.full_name}
                          </h2>
                          <span className={s.pill}>{item.status}</span>
                        </div>
                        <p className={`${s.muted} mt-2`}>
                          {tab === "jobs"
                            ? `${item.department} / ${item.location} / ${item.type}`
                            : `${item.recruitment_jobs?.title} / ${item.email}`}
                        </p>
                        <p className={s.muted}>
                          {tab === "jobs"
                            ? `Deadline: ${item.deadline || "Open until filled"}`
                            : `Applied: ${new Date(item.created_at).toLocaleDateString()}`}
                        </p>
                      </div>
                      <div className={s.row}>
                        {tab === "jobs" ? (
                          <>
                            <button
                              className={s.secondary}
                              onClick={() => {
                                setJobFilter(item);
                                setStatus("");
                                changeTab("applications");
                              }}
                            >
                              Applications
                            </button>
                            <button
                              className={s.iconButton}
                              title="Edit position"
                              aria-label={`Edit ${item.title}`}
                              onClick={() => setEditing(item)}
                            >
                              <FaEdit />
                            </button>
                          </>
                        ) : (
                          <button
                            className={s.secondary}
                            onClick={() => setReviewing(item.id)}
                          >
                            <FaEye />
                            Review application
                          </button>
                        )}
                      </div>
                    </article>
                  ))}
                  {!items.length && (
                    <p className={s.empty}>
                      {tab === "jobs"
                        ? "No positions yet."
                        : "No applications match this view."}
                    </p>
                  )}
                </div>
              )
            )}
            {total > 20 && !loading && !error && (
              <div className={s.pagination}>
                <button
                  className={s.iconButton}
                  aria-label="Previous page"
                  title="Previous page"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  <FaArrowLeft />
                </button>
                <span>
                  {page} / {Math.ceil(total / 20)}
                </span>
                <button
                  className={s.iconButton}
                  aria-label="Next page"
                  title="Next page"
                  disabled={page * 20 >= total}
                  onClick={() => setPage(page + 1)}
                >
                  <FaArrowRight />
                </button>
              </div>
            )}
          </main>
          {editing && (
            <JobEditor
              job={editing}
              onClose={() => setEditing(null)}
              onSaved={() => {
                setEditing(null);
                setRevision((value) => value + 1);
              }}
            />
          )}
          {reviewing && (
            <ApplicationReview
              id={reviewing}
              onClose={() => setReviewing(null)}
              onSaved={() => setRevision((value) => value + 1)}
            />
          )}
        </>
      )}
    </div>
  );
}
RecruitmentAdmin.adminPage = true;
