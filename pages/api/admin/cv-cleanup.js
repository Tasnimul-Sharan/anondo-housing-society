import { apiHandler, database, requireAdmin } from "../../../lib/recruitment/server.mjs";
import { cleanupCVs } from "../../../lib/recruitment/cv-cleanup.mjs";

export default apiHandler(["POST"], async (req, res) => {
  const db = database();
  await requireAdmin(req, db);
  res.status(200).json(await cleanupCVs(db));
});
