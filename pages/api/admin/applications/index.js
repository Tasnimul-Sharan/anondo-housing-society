import { apiHandler, database, requireAdmin, pagination } from "../../../../lib/recruitment/server.mjs";
import { APPLICATION_STATUSES, validId, RequestError } from "../../../../lib/recruitment/validation.mjs";

export default apiHandler(["GET"], async (req, res) => {
  const db = database();
  await requireAdmin(req, db);
  const { page, from, to } = pagination(req.query);
  let query = db.from("recruitment_applications").select("id,full_name,email,phone,status,created_at,job_id,recruitment_jobs(title)", { count: "exact" });
  if (req.query.job_id) query = query.eq("job_id", validId(req.query.job_id));
  if (req.query.status) {
    if (!APPLICATION_STATUSES.includes(req.query.status)) throw new RequestError("Invalid status.");
    query = query.eq("status", req.query.status);
  }
  const { data, error, count } = await query.order("created_at", { ascending: false }).range(from, to);
  if (error) throw error;
  res.status(200).json({ applications: data, total: count, page });
});
