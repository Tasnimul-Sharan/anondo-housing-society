import { apiHandler, database, requireAdmin, pagination } from "../../../../lib/recruitment/server.mjs";
import { validateJob, isJobOpen, RequestError, JOB_STATUSES } from "../../../../lib/recruitment/validation.mjs";

export default apiHandler(["GET", "POST"], async (req, res) => {
  const db = database();
  const user = await requireAdmin(req, db);
  if (req.method === "POST") {
    const job = validateJob({ ...req.body, status: req.body?.status || "published" });
    if (job.status === "published" && !isJobOpen(job)) throw new RequestError("Choose a current or future deadline before publishing.");
    const { data, error } = await db.from("recruitment_jobs").insert({ ...job, created_by: user.id }).select().single();
    if (error?.code === "PGRST204") throw new RequestError("Run supabase/recruitment-job-details.sql in Supabase SQL Editor before saving detailed jobs.", 503);
    if (error) throw error;
    return res.status(201).json({ job: data });
  }
  const { page, from, to } = pagination(req.query);
  let query = db.from("recruitment_jobs").select("*", { count: "exact" });
  if (req.query.trash === "true") query = query.eq("status", "archived");
  else {
    query = query.neq("status", "archived");
    if (req.query.status) {
      if (!JOB_STATUSES.includes(req.query.status) || req.query.status === "archived") throw new RequestError("Invalid job status.");
      query = query.eq("status", req.query.status);
    }
  }
  const search = typeof req.query.search === "string" ? req.query.search.trim().slice(0, 160) : "";
  if (search) query = query.ilike("title", `%${search.replace(/[%_\\]/g, "\\$&")}%`);
  const { data, error, count } = await query.order("created_at", { ascending: false }).range(from, to);
  if (error) throw error;
  let cleanupPending = 0;
  let deletionSetupRequired = false;
  if (req.query.trash === "true") {
    const cleanup = await db.from("recruitment_cv_deletions").select("public_id", { count: "exact" }).limit(1);
    if (cleanup.error) {
      if (["PGRST205", "42P01"].includes(cleanup.error.code)) deletionSetupRequired = true;
      else throw cleanup.error;
    } else cleanupPending = cleanup.count;
  }
  res.status(200).json({ jobs: data, total: count, page, cleanupPending, deletionSetupRequired });
});
