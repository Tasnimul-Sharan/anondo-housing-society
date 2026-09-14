import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";

test("PostgreSQL schema enforces privacy, duplicate prevention, deadlines and rate limits", async () => {
  const db = new PGlite();
  try {
    await db.exec(`create role anon; create role authenticated; create role service_role bypassrls;
      create schema auth; create table auth.users(id uuid primary key, email text);`);
    const sql = await readFile(new URL("../../supabase/recruitment.sql", import.meta.url), "utf8");
    await db.exec(sql);
    await db.exec(sql); // Re-running setup is safe.
    await db.exec("set role anon");
    await assert.rejects(db.query("select * from public.recruitment_applications"), /permission denied/);
    await assert.rejects(db.query("select * from public.recruitment_open_jobs"), /permission denied/);
    await db.exec("reset role; set role authenticated");
    await assert.rejects(db.query("insert into public.recruitment_admins(user_id) values (gen_random_uuid())"), /permission denied/);
    await assert.rejects(db.query("select * from public.recruitment_applications"), /permission denied/);
    await assert.rejects(db.query("select public.recruitment_take_rate_limit('attacker')"), /permission denied/);
    await db.exec("reset role; set role service_role");
    const job = (await db.query(`insert into public.recruitment_jobs(title,department,location,type,experience,description,status)
      values ('Test job','Sales','Dhaka','Full-time','1 year','Test','published') returning id`)).rows[0];
    assert.equal((await db.query("select * from public.recruitment_open_jobs")).rows.length, 1);
    const insert = `insert into public.recruitment_applications(job_id,full_name,email,phone,address,education,experience,availability,consent_at,cv_url,cv_public_id,cv_name,cv_bytes)
      values ($1,'Test Applicant',$2,'01700000000','Dhaka','BBA','Fresh graduate','Now',now(),'https://example.test/private',$3,'cv.pdf',200)`;
    await db.query(insert, [job.id, "applicant@example.test", "first"]);
    await assert.rejects(db.query(insert, [job.id, "applicant@example.test", "duplicate"]), /unique constraint/);
    await db.query("update public.recruitment_jobs set deadline = (now() at time zone 'Asia/Dhaka')::date - 1 where id = $1", [job.id]);
    assert.equal((await db.query("select * from public.recruitment_open_jobs")).rows.length, 0);
    await assert.rejects(db.query(insert, [job.id, "new@example.test", "expired"]), /not accepting/);
    await db.query("update public.recruitment_jobs set deadline = null, status = 'closed' where id = $1", [job.id]);
    await assert.rejects(db.query(insert, [job.id, "new@example.test", "closed"]), /not accepting/);
    assert.equal((await db.query("select * from public.recruitment_applications")).rows.length, 1);
    for (let attempt = 1; attempt <= 11; attempt++) {
      const result = await db.query("select public.recruitment_take_rate_limit('test-ip') as allowed");
      assert.equal(result.rows[0].allowed, attempt <= 10);
    }
    await db.exec("update public.recruitment_rate_limits set expires_at = now() - interval '1 second'");
    assert.equal((await db.query("select public.recruitment_take_rate_limit('test-ip') as allowed")).rows[0].allowed, true);
  } finally { await db.close(); }
});
