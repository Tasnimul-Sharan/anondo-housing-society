import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { validateApplication, validateJob, isJobOpen, MAX_CV_BYTES } from "../../lib/recruitment/validation.mjs";
import { validateCv } from "../../lib/recruitment/upload.mjs";
import { apiHandler, requireAdmin } from "../../lib/recruitment/server.mjs";

const input = {
  job_id: "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa", full_name: " Test Applicant ", email: "TEST@example.com",
  phone: "+880 1700 000000", address: "Dhaka", education: "BBA", experience: "Fresh graduate",
  availability: "Immediately", consent: "true",
};

test("application normalization and validation reject missing consent and unsafe URLs", () => {
  const result = validateApplication(input);
  assert.equal(result.email, "test@example.com");
  assert.equal(result.full_name, "Test Applicant");
  assert.throws(() => validateApplication({ ...input, consent: "false" }), /privacy policy/);
  assert.throws(() => validateApplication({ ...input, portfolio_url: "javascript:alert(1)" }), /portfolio URL/);
  assert.throws(() => validateApplication({ ...input, email: "not-an-email" }), /valid email/);
  assert.throws(() => validateApplication({ ...input, website: "spam" }), /Unable/);
  assert.throws(() => validateApplication({ ...input, education: "x".repeat(1501) }), /1500/);
  assert.throws(() => validateApplication({ ...input, job_id: "1" }), /record ID/);
});

test("deadline accepts applications through the last day in Dhaka, not UTC", () => {
  const job = { status: "published", deadline: "2026-09-14" };
  assert.equal(isJobOpen(job, new Date("2026-09-14T17:59:59Z")), true);
  assert.equal(isJobOpen(job, new Date("2026-09-14T18:00:00Z")), false);
  assert.equal(isJobOpen({ ...job, status: "draft" }), false);
  assert.equal(isJobOpen({ status: "published", deadline: null }), true);
});

test("job validation rejects invalid dates, statuses and oversized lists", () => {
  const job = { title: "Sales Executive", department: "Sales", location: "Dhaka", experience: "1 year", description: "Description", type: "Full-time", status: "draft", responsibilities: [], requirements: [] };
  assert.equal(validateJob(job).deadline, null);
  assert.throws(() => validateJob({ ...job, deadline: "2026-02-30" }), /deadline/);
  assert.throws(() => validateJob({ ...job, status: "anything" }), /status/);
  assert.throws(() => validateJob({ ...job, responsibilities: Array(31).fill("item") }), /30/);
});

test("CV validation checks bytes and rejects renamed executables and oversized files", async () => {
  const dir = await mkdtemp(join(tmpdir(), "recruitment-cv-"));
  try {
    const file = join(dir, "upload");
    await writeFile(file, "%PDF-1.7\n" + "test content".repeat(20));
    const data = { filepath: file, originalFilename: "cv.pdf", size: 249 };
    assert.equal(await validateCv(data), "pdf");
    await assert.rejects(validateCv({ ...data, size: MAX_CV_BYTES + 1 }), /3 MB/);
    await assert.rejects(validateCv({ ...data, originalFilename: "cv.exe" }), /valid PDF/);
    await writeFile(file, "MZ" + "executable".repeat(30));
    await assert.rejects(validateCv(data), /valid PDF/);
    await writeFile(file, Buffer.alloc(MAX_CV_BYTES + 1));
    await assert.rejects(validateCv({ ...data, size: 200 }), /3 MB/, "Actual file size must be checked too");
    await writeFile(file, Buffer.alloc(0));
    await assert.rejects(validateCv(data), /3 MB/);
  } finally { await rm(dir, { recursive: true, force: true }); }
});

test("admin authorization rejects missing/invalid sessions and non-admin users", async () => {
  const user = { id: "test-user" };
  const db = { auth: { getUser: async token => token === "valid" ? { data: { user } } : { error: true } },
    from: () => ({ select: () => ({ eq: () => ({ maybeSingle: async () => ({ data: null }) }) }) }) };
  await assert.rejects(requireAdmin({ headers: {} }, db), error => error.status === 401);
  await assert.rejects(requireAdmin({ headers: { authorization: "Bearer invalid" } }, db), error => error.status === 401);
  await assert.rejects(requireAdmin({ headers: { authorization: "Bearer valid" } }, db), error => error.status === 403);
  db.from = () => ({ select: () => ({ eq: () => ({ maybeSingle: async () => ({ data: { user_id: user.id } }) }) }) });
  assert.deepEqual(await requireAdmin({ headers: { authorization: "Bearer valid" } }, db), user);
});

test("invalid server keys and provider outages are not reported as expired sessions", async () => {
  const request = { headers: { authorization: "Bearer valid-user-session" } };
  for (const message of ["Unregistered API key", "Invalid API key"]) {
    const db = { auth: { getUser: async () => ({ error: { status: 401, message } }) } };
    await assert.rejects(requireAdmin(request, db), error => error.status === 503 && error.message.includes("SUPABASE_SERVICE_ROLE_KEY"));
  }
  for (const status of [0, 500, 503]) {
    const db = { auth: { getUser: async () => ({ error: { status, message: "Provider unavailable" } }) } };
    await assert.rejects(requireAdmin(request, db), error => error.status === 503 && !error.message.includes("expired"));
  }
  const db = { auth: { getUser: async () => ({ error: { status: 401, message: "JWT expired" } }) } };
  await assert.rejects(requireAdmin(request, db), error => error.status === 401 && error.message.includes("expired"));
});

test("database API key errors return an actionable configuration error without leaking provider details", async () => {
  const res = { setHeader() {}, status(code) { this.code = code; return this; }, json(data) { this.body = data; } };
  await apiHandler(["GET"], () => { throw { message: "Unregistered API key", details: "private-provider-details" }; })({ method: "GET" }, res);
  assert.equal(res.code, 503);
  assert.match(res.body.error, /SUPABASE_SERVICE_ROLE_KEY/);
  assert.equal(JSON.stringify(res.body).includes("private-provider-details"), false);
});

test("API rejects unsupported methods and disables caching", async () => {
  const headers = {};
  const res = { setHeader: (key, value) => { headers[key] = value; }, status(code) { this.code = code; return this; }, json(data) { this.body = data; } };
  await apiHandler(["GET"], () => assert.fail("Must not run"))({ method: "POST" }, res);
  assert.equal(res.code, 405);
  assert.equal(headers.Allow, "GET");
  assert.equal(headers["Cache-Control"], "no-store");
});
