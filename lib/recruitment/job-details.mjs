export const JOB_COMPANY_NAME = "Anondo Housing Society";

export const JOB_DETAIL_LISTS = [
  ["education", "Education"],
  ["preferred_institutions", "Preferred institutions"],
  ["experience_industries", "Experience in business areas"],
  ["skills", "Skills & expertise"],
  ["benefits", "Compensation & other benefits"],
];

export function formatJobDate(value) {
  if (!value) return "Not specified";
  const date = new Date(value.length === 10 ? `${value}T00:00:00+06:00` : value);
  if (!Number.isFinite(date.getTime())) return "Not specified";
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "Asia/Dhaka" }).format(date);
}

export function formatJobAge(job) {
  if (job.age_min != null && job.age_max != null) return `${job.age_min} to ${job.age_max} years`;
  if (job.age_min != null) return `${job.age_min} years and above`;
  if (job.age_max != null) return `Up to ${job.age_max} years`;
  return "Not specified";
}
