import { apiHandler, database, requireAdmin, mediaStore } from "../../../../../lib/recruitment/server.mjs";
import { validId, RequestError } from "../../../../../lib/recruitment/validation.mjs";

export default apiHandler(["GET"], async (req, res) => {
  const db = database();
  await requireAdmin(req, db);
  const { data, error } = await db.from("recruitment_applications").select("cv_public_id,cv_name").eq("id", validId(req.query.id)).maybeSingle();
  if (error) throw error;
  if (!data) throw new RequestError("Application not found.", 404);
  const url = mediaStore().utils.private_download_url(data.cv_public_id, "", {
    resource_type: "raw", type: "authenticated", attachment: true,
    expires_at: Math.floor(Date.now() / 1000) + 300,
  });
  res.status(200).json({ url, name: data.cv_name, expires_in: 300 });
});
