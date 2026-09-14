import { apiHandler, database } from "../../../lib/recruitment/server.mjs";

export default apiHandler(["GET"], async (req, res) => {
  const { data, error } = await database().from("recruitment_open_jobs").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  res.status(200).json({ jobs: data });
});
