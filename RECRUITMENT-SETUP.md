# Recruitment Setup

The code is ready for your own Supabase and Cloudinary projects. Live login,
publishing and uploads require the credentials and SQL setup below.

## 1. Add environment variables

Use `.env.example` as the reference. Add these six settings to the existing
`.env.local`; preserve its other settings.

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_PUBLISHABLE_OR_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SECRET_OR_SERVICE_ROLE_KEY
CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_API_KEY
CLOUDINARY_API_SECRET=YOUR_API_SECRET
```

- Supabase project URL: Project Settings > Data API (or project Connect dialog).
- Supabase keys: Project Settings > API Keys. The browser key can be a modern
  `sb_publishable_...` key or the legacy `anon` key. The server key can be a modern
  `sb_secret_...` key or the legacy `service_role` key. Variable names above are
  kept the same for either key generation.
- Cloudinary: select your product environment. Copy Cloud name and obtain an API
  key and secret from Settings > API Keys.
- Only the first two values may have the `NEXT_PUBLIC_` prefix. Never expose the
  server key or Cloudinary secret in client code or commit `.env.local`.
- No unsigned upload preset is needed. The server uploads authenticated raw
  assets to `recruitment/cvs`.
- For a hosted site, add the same values in the hosting project's environment
  settings and redeploy. Restart the local dev server after changing values.

## 2. Create the database

Open Supabase > SQL Editor and run `supabase/recruitment.sql`.

It creates jobs, applications, admin membership and rate-limit tables with Row
Level Security. Browser users cannot read applications or write jobs directly.
The server verifies the Supabase login and admin membership on every admin API
request. CV bytes are stored only in Cloudinary; Supabase stores the private URL,
public ID, filename and size together with application fields.

No sample position is published automatically. Create your real jobs from admin.

## 3. Create the first admin

1. Supabase > Authentication > Users > Add user > Create new user.
2. Enter the admin email and a strong password. Enable Auto Confirm if available.
3. Copy the new user's UUID, then run this SQL with that actual UUID:

```sql
insert into public.recruitment_admins (user_id)
values ('PASTE_AUTH_USER_UUID_HERE')
on conflict (user_id) do nothing;
```

Alternatively, replace the email and run:

```sql
insert into public.recruitment_admins (user_id)
select id from auth.users where lower(email) = lower('YOUR_ADMIN_EMAIL')
on conflict (user_id) do nothing;
```

Verify that the user ID appears in `recruitment_admins`. Creating an Auth user
alone does not grant admin access. There is no public registration page. Disable
public user signups in Supabase Auth settings for this admin-only auth project.
Repeat these steps for additional authorized staff. To revoke access, remove
the user's row from `recruitment_admins`; subsequent admin API calls are denied.

## 4. Login and password reset

Set Supabase Authentication > URL Configuration:

- Site URL: your live website origin.
- Redirect URLs: `http://localhost:3000/admin/login` and
  `https://YOUR_DOMAIN/admin/login`. Add the actual localhost port if different.

The login page has a Forgot password flow and a new-password form. Configure a
production SMTP provider in Supabase Auth before relying on reset emails for
staff; Supabase's default email service has delivery restrictions and limits.

## 5. Run and use

Use Node.js 22 or newer (this setup was tested on Node 24). Set the same Node
version in your hosting project; the Supabase and file-type packages require it.

```sh
npm install --legacy-peer-deps
npm run dev
```

The legacy peer flag is needed by the project's existing older lightbox package
with React 19, not by the recruitment feature.

- `/admin/login`: sign in using your Supabase admin account.
- `/admin`: create and edit positions; select Draft, Published, Closed or Archived.
- `/career-opportunities`: displays published jobs whose deadline has not passed.
  Deadlines end at midnight in Bangladesh time. Blank deadlines stay open.
- Apply Now opens a large responsive form with personal details, education,
  experience, availability, optional salary/portfolio/cover letter, CV and consent.
- Accepted CVs: PDF, DOC, DOCX; maximum 3 MB. Content signatures are checked on the
  server; this is file-type validation, not a malware scan.
- One application per email per job. A rejected duplicate does not create a second CV.
- Admin > Positions > Applications filters candidates for a job. The Applications
  tab also lists all candidates with status filtering and pagination.
- Review application shows all fields, private CV metadata, internal notes and
  New/Reviewing/Shortlisted/Interview/Hired/Rejected status controls.
- Get CV download creates a five-minute signed link. Click the generated download
  link to retrieve the document. Copy CV link copies that temporary signed URL.
  The stored Cloudinary URL is private and cannot be used as a public CV link.
- Closing or archiving a position preserves applications. Editing a published
  position with an expired deadline does not reopen it until the deadline changes.

## 6. Deployment and verification

The upload API uses the Node runtime and temporary disk, then removes temporary
files. The 3 MB limit leaves headroom for multipart form data under Vercel's
request limit. Do not switch these API routes to the Edge runtime.

There is a database-backed limit of 10 submission attempts per IP per hour.
On Vercel the trusted `x-vercel-forwarded-for` header is used. On other hosts the
connection IP is used; behind a proxy this may group applicants together. Adapt
the trusted-IP extraction to your hosting proxy before using another host at
scale. No user-provided `x-forwarded-for` header is trusted.

After configuration, verify this with a test job and a non-sensitive test CV:

1. Login, create a draft job, and confirm it is absent from careers.
2. Publish it, reload careers, open the form and submit the test CV.
3. Check the application in admin and open its signed CV download.
4. Check Cloudinary: the asset must be `raw` with `authenticated` delivery.
5. Verify the unsigned stored URL is inaccessible. If PDF delivery is blocked by
   the Cloudinary account, review its PDF/ZIP delivery security setting. Keep CV
   delivery authenticated; never make the recruitment folder public.
6. Save a review status and note, then close the job and verify it disappears.
7. Confirm a second application with the same email is rejected and that an
   account absent from `recruitment_admins` receives no access.
8. Test password recovery, mobile form scrolling and an oversized/invalid CV.

An upload whose database insert fails is removed from Cloudinary when the server
can verify that no committed application owns it. If the database is unreachable,
the file is retained to avoid deleting a successfully committed applicant's CV.
Occasionally reconcile orphaned assets after provider outages or interrupted
server executions. Define your organization's CV retention period and remove
expired applications and corresponding Cloudinary assets together.

Automated checks: `npm run test:recruitment` and `npm run build`.
Live-provider testing requires your credentials; local mocked tests do not prove
your account permissions, email delivery or Cloudinary delivery configuration.

## Official references

- https://supabase.com/docs/guides/api/api-keys
- https://supabase.com/docs/reference/javascript/auth-getuser
- https://supabase.com/docs/guides/auth/passwords
- https://cloudinary.com/documentation/upload_images
- https://cloudinary.com/documentation/control_access_to_media
