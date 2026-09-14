import { apiHandler, database, requireAdmin } from "../../../../../lib/recruitment/server.mjs";
import { validId, APPLICATION_STATUSES, RequestError } from "../../../../../lib/recruitment/validation.mjs";

export default apiHandler(["GET", "PATCH"], async (req, res) => {
  const db = database();
  await requireAdmin(req, db);
  const id = validId(req.query.id);
  let query = db.from("recruitment_applications");
  if (req.method === "PATCH") {
    if (!APPLICATION_STATUSES.includes(req.body?.status)) throw new RequestError("Invalid application status.");
    if (typeof req.body.notes !== "string" || req.body.notes.length > 10000) throw new RequestError("Notes must be under 10,000 characters.");
    query = query.update({ status: req.body.status, notes: req.body.notes.trim() });
  }
  const { data, error } = await query.select("*,recruitment_jobs(title)").eq("id", id).maybeSingle();
  if (error) throw error;
  if (!data) throw new RequestError("Application not found.", 404);
  res.status(200).json({ application: data });
});
