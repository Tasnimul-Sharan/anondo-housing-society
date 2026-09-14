import { apiHandler, database, requireAdmin } from "../../../../lib/recruitment/server.mjs";
import { validId, validateJob, RequestError } from "../../../../lib/recruitment/validation.mjs";

export default apiHandler(["PATCH"], async (req, res) => {
  const db = database();
  await requireAdmin(req, db);
  const { data, error } = await db.from("recruitment_jobs").update(validateJob(req.body)).eq("id", validId(req.query.id)).select().maybeSingle();
  if (error) throw error;
  if (!data) throw new RequestError("Job not found.", 404);
  res.status(200).json({ job: data });
});
