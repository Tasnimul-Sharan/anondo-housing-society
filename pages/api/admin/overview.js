import { apiHandler, database, requireAdmin } from "../../../lib/recruitment/server.mjs";

export default apiHandler(["GET"], async (req, res) => {
  const db = database();
  await requireAdmin(req, db);
  const results = await Promise.all([
    db.from("recruitment_jobs").select("id", { count: "exact" }).neq("status", "archived").limit(1),
    db.from("recruitment_open_jobs").select("id", { count: "exact" }).limit(1),
    db.from("recruitment_applications").select("id", { count: "exact" }).limit(1),
    db.from("recruitment_applications").select("id", { count: "exact" }).eq("status", "new").limit(1),
    db.from("recruitment_jobs").select("*").neq("status", "archived").order("created_at", { ascending: false }).limit(5),
    db.from("recruitment_applications").select("id,full_name,status,created_at,recruitment_jobs(title)").order("created_at", { ascending: false }).limit(5),
  ]);
  for (const result of results) if (result.error) throw result.error;
  res.status(200).json({
    stats: { jobs: results[0].count, live: results[1].count, applications: results[2].count, new: results[3].count },
    jobs: results[4].data, applications: results[5].data,
  });
});
