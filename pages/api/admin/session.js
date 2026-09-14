import { apiHandler, requireAdmin } from "../../../lib/recruitment/server.mjs";

export default apiHandler(["GET"], async (req, res) => {
  const user = await requireAdmin(req);
  res.status(200).json({ user: { id: user.id, email: user.email } });
});
