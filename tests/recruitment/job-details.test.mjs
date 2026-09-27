import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";
import { validateJob } from "../../lib/recruitment/validation.mjs";
import { formatJobAge, formatJobDate, JOB_DETAIL_LISTS } from "../../lib/recruitment/job-details.mjs";

const legacy = { title: "Sales Executive", department: "Sales", location: "Dhaka", experience: "2 to 3 years", description: "Context", type: "Full-time", status: "draft", responsibilities: [], requirements: [] };

test("detailed job fields are normalized, bounded and optional for legacy callers", () => {
  const result = validateJob({ ...legacy, vacancy: "10", age_min: "18", age_max: "35", education: [" MBA ", ""], freshers_allowed: true, published_date: "2026-09-05", workplace: " Work at office ", company_information: " About us " });
  assert.equal(result.vacancy, 10);
  assert.equal(result.age_min, 18);
  assert.deepEqual(result.education, ["MBA"]);
  assert.equal(Object.hasOwn(result, "company_information"), false);
  assert.equal(result.workplace, "Work at office");
  assert.equal(Object.hasOwn(validateJob(legacy), "education"), false);
  assert.equal(Object.hasOwn(validateJob(legacy), "vacancy"), false);
  assert.equal(validateJob({ ...legacy, vacancy: "", age_min: null }).vacancy, null);
  for (const vacancy of [0, -1, 2.5, true, "1e3", [], {}, 100001]) assert.throws(() => validateJob({ ...legacy, vacancy }), /Vacancy/);
  assert.throws(() => validateJob({ ...legacy, age_min: 36, age_max: 35 }), /Maximum age/);
  assert.throws(() => validateJob({ ...legacy, age_max: 101 }), /Maximum age/);
  assert.throws(() => validateJob({ ...legacy, published_date: "2026-02-30" }), /published date/);
  assert.throws(() => validateJob({ ...legacy, freshers_allowed: "false" }), /freshers/);
  for (const [key] of JOB_DETAIL_LISTS) {
    assert.throws(() => validateJob({ ...legacy, [key]: "text" }), /30 items/);
    assert.throws(() => validateJob({ ...legacy, [key]: Array(31).fill("item") }), /30 items/);
    assert.throws(() => validateJob({ ...legacy, [key]: ["x".repeat(1001)] }), /1,000/);
  }
});

test("job edits ignore legacy company fields because all positions belong to Anondo", () => {
  const result = validateJob({ ...legacy, company_name: "Another company", company_information: "Legacy company description" });
  assert.equal(Object.hasOwn(result, "company_name"), false);
  assert.equal(Object.hasOwn(result, "company_information"), false);
});

test("public date and age formatting handles date-only values and missing legacy fields", () => {
  assert.equal(formatJobDate("2026-10-05"), "05 Oct 2026");
  assert.equal(formatJobDate("2026-09-04T18:30:00Z"), "05 Sept 2026");
  assert.equal(formatJobDate(null), "Not specified");
  assert.equal(formatJobDate("invalid"), "Not specified");
  assert.equal(formatJobAge({ age_min: 18, age_max: 35 }), "18 to 35 years");
  assert.equal(formatJobAge({ age_min: 18 }), "18 years and above");
  assert.equal(formatJobAge({ age_max: 35 }), "Up to 35 years");
  assert.equal(formatJobAge({}), "Not specified");
});

test("job-details migration upgrades existing records safely, stays private and is repeatable", async () => {
  const db = new PGlite();
  const readSql = name => readFile(new URL(`../../supabase/${name}.sql`, import.meta.url), "utf8");
  try {
    await db.exec("create role anon; create role authenticated; create role service_role bypassrls; create schema auth; create table auth.users(id uuid primary key, email text);");
    await db.exec(await readSql("recruitment"));
    const id = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
    await db.query("insert into recruitment_jobs(id,title,department,location,type,experience,description,status,created_at) values ($1,'Old job','Sales','Dhaka','Full-time','1 year','Original description','published','2026-09-01T00:00:00Z')", [id]);
    await db.query("insert into recruitment_applications(job_id,full_name,email,phone,address,education,experience,availability,consent_at,cv_url,cv_public_id,cv_name,cv_bytes) values ($1,'Test','test@example.test','01700000000','Dhaka','BBA','None','Now',now(),'https://example.test/cv','original-cv','cv.pdf',200)", [id]);
    const migration = await readSql("recruitment-job-details");
    await db.exec(migration);
    await db.exec(migration);
    const old = (await db.query("select * from recruitment_open_jobs where id=$1", [id])).rows[0];
    assert.equal(old.description, "Original description");
    assert.equal(old.published_date.toISOString().slice(0, 10), "2026-09-01");
    assert.deepEqual(old.education, []);
    assert.equal((await db.query("select cv_public_id from recruitment_applications")).rows[0].cv_public_id, "original-cv");
    await assert.rejects(db.query("update recruitment_jobs set age_min=40,age_max=20 where id=$1", [id]), /check constraint/);
    await assert.rejects(db.query("update recruitment_jobs set education='{}' where id=$1", [id]), /check constraint/);
    await db.exec(await readSql("recruitment-sales-marketing-draft"));
    await db.exec(await readSql("recruitment-sales-marketing-draft"));
    const sample = (await db.query("select * from recruitment_jobs where id <> $1", [id])).rows;
    assert.equal(sample.length, 1);
    assert.equal(sample[0].status, "draft");
    assert.equal(sample[0].vacancy, 10);
    assert.equal(sample[0].skills.length, 5);
    assert.equal(sample[0].benefits.length, 6);
    assert.equal((await db.query("select * from recruitment_open_jobs")).rows.length, 1);
    await db.query("update recruitment_jobs set status='published',deadline=null where id=$1", [sample[0].id]);
    const published = (await db.query("select * from recruitment_open_jobs where id=$1", [sample[0].id])).rows[0];
    assert.equal(published.published_date.toISOString().slice(0, 10), "2026-09-05");
    assert.deepEqual(published.education, sample[0].education);
    await db.exec("set role anon");
    await assert.rejects(db.query("select * from recruitment_open_jobs"), /permission denied/);
    await assert.rejects(db.query("select * from recruitment_applications"), /permission denied/);
    await db.exec("reset role; set role authenticated");
    await assert.rejects(db.query("update recruitment_jobs set vacancy=1"), /permission denied/);
    await db.exec("reset role; set role service_role");
    assert.equal((await db.query("select * from recruitment_open_jobs")).rows.length, 2);
  } finally { await db.close(); }
});
