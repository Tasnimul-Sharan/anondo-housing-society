-- OPTIONAL: run AFTER recruitment-job-details.sql to add the supplied advert as a DRAFT.
-- Review it under Admin > Jobs, then publish. Re-running does not duplicate or overwrite it.
insert into public.recruitment_jobs (
  id, title, department, location, type, experience, salary, deadline,
  description, responsibilities, requirements, status, vacancy, age_min, age_max,
  education, preferred_institutions, experience_industries, freshers_allowed,
  skills, benefits, workplace, published_date, company_name
) values (
  '664b2a10-e97b-4cc6-903b-79c9b7186f3a',
  'Senior Executive / Executive (Sales & Marketing)',
  'Sales & Marketing', 'Dhaka', 'Full-time', '2 to 3 years',
  'Tk. 20000 - 30000 (Monthly)', '2026-10-05',
  'Anondo Housing Society, an integrated land development project situated near to Purbachal New Town, is inviting dynamic, result-oriented, and experienced professionals to join our Sales Department. The project is already developed with plot demarcation, boundary walls, and home constructions underway by several clients. Both ready and non-ready plots are available for sale.',
  '["Achieve monthly sales targets and maintain sales pipelines.", "Communicate effectively with clients and handle inquiries.", "Conduct client visits, project briefings, and close deals.", "Maintain customer database and prepare daily/weekly reports."]'::jsonb,
  '[]'::jsonb, 'draft', 10, 18, 35,
  '["Master of Business Administration (MBA)", "Bachelor of Business Administration (BBA)"]'::jsonb,
  '["University of Dhaka", "BRAC University", "North South University", "East West University", "United International University"]'::jsonb,
  '["Developer", "Development Agency", "Real Estate"]'::jsonb, true,
  '["Client Relationship", "CRM", "Customer Service", "Properties Marketing", "Sales & Marketing"]'::jsonb,
  '["T/A", "Mobile bill", "Lunch Facilities: Full Subsidize", "Festival Bonus: 2", "Salary Review: Yearly", "Lucrative Incentive"]'::jsonb,
  'Work at office', '2026-09-05', 'Anondo Housing Society'
) on conflict (id) do nothing;
