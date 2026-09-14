import { randomUUID } from "node:crypto";
import { apiHandler, database, mediaStore, limitApplications } from "../../../lib/recruitment/server.mjs";
import { validateApplication, isJobOpen, RequestError, MAX_CV_BYTES } from "../../../lib/recruitment/validation.mjs";
import { parseApplication, validateCv, cleanTemporaryFiles } from "../../../lib/recruitment/upload.mjs";

export const config = { api: { bodyParser: false } };

export default apiHandler(["POST"], async (req, res) => {
  if (!req.headers["content-type"]?.startsWith("multipart/form-data")) throw new RequestError("Submit the application form with your CV.");
  if (Number(req.headers["content-length"]) > MAX_CV_BYTES + 64 * 1024) throw new RequestError("Your CV must be 3 MB or smaller.", 413);
  const db = database();
  const media = mediaStore();
  await limitApplications(req, db);
  const temporaryFiles = [];
  let uploadedId;
  let saved = false;
  try {
    const { input, cv } = await parseApplication(req, temporaryFiles);
    const application = validateApplication(input);
    const extension = await validateCv(cv);
    const { data: job, error: jobError } = await db.from("recruitment_jobs").select("id,status,deadline").eq("id", application.job_id).maybeSingle();
    if (jobError) throw jobError;
    if (!isJobOpen(job)) throw new RequestError("This position is no longer accepting applications.", 409);
    const { data: existing, error: duplicateError } = await db.from("recruitment_applications").select("id").eq("job_id", application.job_id).eq("email", application.email).maybeSingle();
    if (duplicateError) throw duplicateError;
    if (existing) throw new RequestError("An application for this position has already been received with this email.", 409);
    const id = randomUUID();
    uploadedId = `recruitment/cvs/${id}.${extension}`;
    const upload = await media.uploader.upload(cv.filepath, {
      public_id: uploadedId, resource_type: "raw", type: "authenticated", overwrite: false,
    });
    const { error } = await db.from("recruitment_applications").insert({
      ...application, id, cv_url: upload.secure_url, cv_public_id: upload.public_id,
      cv_name: (cv.originalFilename || `cv.${extension}`).replace(/[\x00-\x1f]/g, "").slice(0, 200), cv_bytes: cv.size,
    });
    if (error?.code === "23505") throw new RequestError("An application for this position has already been received with this email.", 409);
    if (error?.code === "P0001") throw new RequestError("This position is no longer accepting applications.", 409);
    if (error) throw error;
    saved = true;
    res.status(201).json({ id, message: "Your application has been received successfully." });
  } finally {
    await cleanTemporaryFiles(temporaryFiles);
    if (uploadedId && !saved) {
      // An insert response may be lost after commit. Verify ownership before removing a CV.
      const { data: retained, error } = await db.from("recruitment_applications").select("id").eq("cv_public_id", uploadedId).maybeSingle();
      if (!error && !retained) await media.uploader.destroy(uploadedId, { resource_type: "raw", type: "authenticated" }).catch(() => {
        console.error("Recruitment CV cleanup failed; check orphaned authenticated assets.");
      });
    }
  }
});
