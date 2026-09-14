import { mediaStore } from "./server.mjs";
import { RequestError } from "./validation.mjs";

export function deletionSetupError(error) {
  if (["PGRST202", "PGRST205", "42P01", "42883"].includes(error?.code)) {
    return new RequestError("Permanent deletion needs a database update. Run supabase/recruitment-permanent-delete.sql in Supabase SQL Editor.", 503);
  }
  return error;
}

export async function cleanupCVs(db) {
  const { data, error } = await db.from("recruitment_cv_deletions").select("public_id").order("created_at").limit(20);
  if (error) throw deletionSetupError(error);
  let cleaned = 0;
  if (data.length) {
    const media = mediaStore();
    for (const item of data) {
      try {
        const result = await media.uploader.destroy(item.public_id, { resource_type: "raw", type: "authenticated", invalidate: true });
        if (!["ok", "not found"].includes(result.result)) continue;
        const deleted = await db.from("recruitment_cv_deletions").delete().eq("public_id", item.public_id);
        if (!deleted.error) cleaned++;
      } catch { /* Keep failed IDs queued for a later admin retry. */ }
    }
  }
  const pending = await db.from("recruitment_cv_deletions").select("public_id", { count: "exact" }).limit(1);
  if (pending.error) throw pending.error;
  return { cleaned, pending: pending.count };
}
