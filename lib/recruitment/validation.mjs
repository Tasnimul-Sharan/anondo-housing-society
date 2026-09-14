export const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship"];
export const JOB_STATUSES = ["draft", "published", "closed", "archived"];
export const APPLICATION_STATUSES = ["new", "reviewing", "shortlisted", "interview", "hired", "rejected"];
export const MAX_CV_BYTES = 3 * 1024 * 1024;
export const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export class RequestError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.status = status;
  }
}

function textField(input, key, label, max, required = true) {
  const value = input?.[key];
  if (value != null && typeof value !== "string") throw new RequestError(`${label} is invalid.`);
  const text = (value || "").trim();
  if (required && !text) throw new RequestError(`${label} is required.`);
  if (text.length > max) throw new RequestError(`${label} must be ${max} characters or less.`);
  return text;
}

export function validId(id) {
  if (typeof id !== "string" || !UUID_PATTERN.test(id)) throw new RequestError("Invalid record ID.");
  return id;
}

export function validateJob(input) {
  const job = {};
  for (const [key, label, max, required] of [
    ["title", "Job title", 160, true], ["department", "Department", 100, true],
    ["location", "Location", 160, true], ["experience", "Experience", 160, true],
    ["salary", "Salary", 160, false], ["description", "Description", 12000, true],
  ]) job[key] = textField(input, key, label, max, required);
  if (!JOB_TYPES.includes(input.type)) throw new RequestError("Select a valid job type.");
  if (!JOB_STATUSES.includes(input.status)) throw new RequestError("Select a valid job status.");
  job.type = input.type;
  job.status = input.status;
  job.deadline = textField(input, "deadline", "Deadline", 10, false) || null;
  if (job.deadline && (!/^\d{4}-\d{2}-\d{2}$/.test(job.deadline) ||
    !Number.isFinite(Date.parse(job.deadline)) || new Date(job.deadline).toISOString().slice(0, 10) !== job.deadline)) {
    throw new RequestError("Select a valid deadline.");
  }
  for (const key of ["responsibilities", "requirements"]) {
    if (!Array.isArray(input[key]) || input[key].length > 30 ||
      input[key].some(item => typeof item !== "string" || item.length > 1000)) {
      throw new RequestError(`Provide up to 30 ${key}, each under 1,000 characters.`);
    }
    job[key] = input[key].map(item => item.trim()).filter(Boolean);
  }
  return job;
}

export function validateApplication(input) {
  if (input.website) throw new RequestError("Unable to submit this application.");
  const application = { job_id: validId(input.job_id) };
  for (const [key, label, max, required] of [
    ["full_name", "Full name", 160, true], ["email", "Email", 254, true],
    ["phone", "Phone number", 30, true], ["address", "Address", 500, true],
    ["education", "Education", 1500, true], ["experience", "Work experience", 5000, true],
    ["current_company", "Current company", 160, false], ["expected_salary", "Expected salary", 100, false],
    ["availability", "Availability", 160, true], ["portfolio_url", "Portfolio URL", 500, false],
    ["cover_letter", "Cover letter", 8000, false],
  ]) application[key] = textField(input, key, label, max, required);
  application.email = application.email.toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(application.email)) throw new RequestError("Enter a valid email address.");
  if (!/^[+\d\s().-]{7,30}$/.test(application.phone)) throw new RequestError("Enter a valid phone number.");
  if (application.portfolio_url) {
    try {
      const url = new URL(application.portfolio_url);
      if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) throw new Error();
    } catch { throw new RequestError("Enter an https:// or http:// portfolio URL."); }
  }
  if (input.consent !== "true") throw new RequestError("Please agree to the privacy policy before applying.");
  application.consent_at = new Date().toISOString();
  return application;
}

export function isJobOpen(job, now = new Date()) {
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
  return job?.status === "published" && (!job.deadline || job.deadline >= today);
}
