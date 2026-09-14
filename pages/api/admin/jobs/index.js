import { apiHandler, database, requireAdmin, pagination } from "../../../../lib/recruitment/server.mjs";
import { validateJob } from "../../../../lib/recruitment/validation.mjs";

export default apiHandler(["GET", "POST"], async (req, res) => {
  const db = database();
  const user = await requireAdmin(req, db);
  if (req.method === "POST") {
    const { data, error } = await db.from("recruitment_jobs").insert({ ...validateJob(req.body), created_by: user.id }).select().single();
    if (error) throw error;
    return res.status(201).json({ job: data });
  }
  const { page, from, to } = pagination(req.query);
  const { data, error, count } = await db.from("recruitment_jobs").select("*", { count: "exact" }).order("created_at", { ascending: false }).range(from, to);
  if (error) throw error;
  res.status(200).json({ jobs: data, total: count, page });
});
