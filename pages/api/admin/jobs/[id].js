import { apiHandler, database, requireAdmin } from "../../../../lib/recruitment/server.mjs";
import { validId, validateJob, RequestError, isJobOpen } from "../../../../lib/recruitment/validation.mjs";
import { cleanupCVs, deletionSetupError } from "../../../../lib/recruitment/cv-cleanup.mjs";

export default apiHandler(["PATCH", "DELETE"], async (req, res) => {
  const db = database();
  await requireAdmin(req, db);
  if (req.method === "DELETE" && req.query.permanent === "true") {
    if (typeof req.body?.confirmation !== "string") throw new RequestError("Type the job title to confirm permanent deletion.");
    const { error } = await db.rpc("recruitment_permanently_delete_job", { target_id: validId(req.query.id), confirmation: req.body.confirmation });
    if (error) {
      if (error.code === "P0002") throw new RequestError("Job not found.", 404);
      if (error.code === "23514") throw new RequestError("Only jobs in Trash can be permanently deleted.", 409);
      if (error.code === "22023") throw new RequestError("Type the exact job title to confirm.");
      throw deletionSetupError(error);
    }
    // Database deletion has committed. A provider outage must not lose queued file IDs.
    let cleanup;
    try { cleanup = await cleanupCVs(db); }
    catch { cleanup = { pending: null }; }
    return res.status(200).json({ deleted: true, cleanup });
  }
  // Trash uses the existing archived status so applicant records and CVs remain intact.
  const update = req.method === "DELETE" ? { status: "archived" } : validateJob(req.body);
  if (update.status === "published" && !isJobOpen(update)) throw new RequestError("Choose a current or future deadline before publishing.");
  const { data, error } = await db.from("recruitment_jobs").update(update).eq("id", validId(req.query.id)).select().maybeSingle();
  if (error?.code === "PGRST204") throw new RequestError("Run supabase/recruitment-job-details.sql in Supabase SQL Editor before saving detailed jobs.", 503);
  if (error) throw error;
  if (!data) throw new RequestError("Job not found.", 404);
  res.status(200).json({ job: data });
});
