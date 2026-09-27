import { apiHandler, database } from "../../../../lib/recruitment/server.mjs";
import { RequestError, validId } from "../../../../lib/recruitment/validation.mjs";

export default apiHandler(["GET"], async (req, res) => {
  const { data, error } = await database().from("recruitment_open_jobs").select("*").eq("id", validId(req.query.id)).maybeSingle();
  if (error) throw error;
  if (!data) throw new RequestError("This position is no longer available.", 404);
  res.status(200).json({ job: data });
});
