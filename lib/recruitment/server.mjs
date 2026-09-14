import { createClient } from "@supabase/supabase-js";
import { v2 as cloudinary } from "cloudinary";
import { createHmac } from "node:crypto";
import { RequestError } from "./validation.mjs";

export function database() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new RequestError("Recruitment is not configured yet. Please try again later.", 503);
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

export function mediaStore() {
  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    throw new RequestError("CV uploads are not configured yet. Please try again later.", 503);
  }
  cloudinary.config({ cloud_name: CLOUDINARY_CLOUD_NAME, api_key: CLOUDINARY_API_KEY, api_secret: CLOUDINARY_API_SECRET, secure: true });
  return cloudinary;
}

export async function requireAdmin(req, db = database()) {
  const token = req.headers.authorization?.match(/^Bearer (.+)$/)?.[1];
  if (!token) throw new RequestError("Please sign in to continue.", 401);
  const { data, error } = await db.auth.getUser(token);
  if (error || !data.user) throw new RequestError("Your session has expired. Please sign in again.", 401);
  const { data: admin, error: lookupError } = await db.from("recruitment_admins").select("user_id").eq("user_id", data.user.id).maybeSingle();
  if (lookupError) throw lookupError;
  if (!admin) throw new RequestError("This account does not have administrator access.", 403);
  return data.user;
}

export function apiHandler(methods, handler) {
  return async (req, res) => {
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("X-Content-Type-Options", "nosniff");
    if (!methods.includes(req.method)) {
      res.setHeader("Allow", methods.join(", "));
      return res.status(405).json({ error: "Method not allowed." });
    }
    try { await handler(req, res); }
    catch (error) {
      if (error instanceof RequestError) return res.status(error.status).json({ error: error.message });
      // Do not log applicant payloads, credentials, or provider response bodies.
      console.error("Recruitment request failed:", error.code || error.name || "unknown");
      return res.status(500).json({ error: "We could not complete this request. Please try again." });
    }
  };
}

export async function limitApplications(req, db) {
  const salt = process.env.CLOUDINARY_API_SECRET;
  if (!salt) throw new RequestError("CV uploads are not configured yet. Please try again later.", 503);
  // Vercel overwrites this header; other deployments use the connection IP, not user-supplied forwarded headers.
  const ip = process.env.VERCEL ? String(req.headers["x-vercel-forwarded-for"] || req.socket.remoteAddress).split(",")[0].trim() : req.socket.remoteAddress;
  const key = createHmac("sha256", salt).update(ip || "unknown").digest("hex");
  const { data, error } = await db.rpc("recruitment_take_rate_limit", { bucket_key: key });
  if (error) throw error;
  if (!data) throw new RequestError("Too many attempts. Please try again in an hour.", 429);
}

export function pagination(query) {
  const page = Math.max(1, Math.min(100000, Number.parseInt(query.page, 10) || 1));
  return { page, from: (page - 1) * 20, to: page * 20 - 1 };
}
