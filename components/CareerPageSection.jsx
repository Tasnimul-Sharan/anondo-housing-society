"use client";

import { useMemo, useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Sales Executive",
    department: "Sales",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    experience: "1–3 Years",
    deadline: "Open Until Filled",
    description:
      "We are looking for energetic and motivated individuals to join our sales team. Candidates should have good communication skills and a strong interest in real estate sales and client relationship management.",
    responsibilities: [
      "Generate and follow up with potential clients.",
      "Present project details professionally to customers.",
      "Maintain daily sales reports and client communication records.",
      "Coordinate with the marketing and customer service teams.",
    ],
    requirements: [
      "Good communication and negotiation skills.",
      "Experience in real estate sales will be preferred.",
      "Ability to work with monthly sales targets.",
      "Basic computer and reporting knowledge.",
    ],
  },
  {
    id: 2,
    title: "Civil Engineer",
    department: "Engineering",
    location: "Purbachal, Dhaka",
    type: "Full-time",
    experience: "2+ Years",
    deadline: "Open Until Filled",
    description:
      "Responsible for on-site supervision, quality control, work progress monitoring, and project coordination. Must have practical experience in real estate or construction projects.",
    responsibilities: [
      "Supervise construction and development work on site.",
      "Ensure quality control and safety standards.",
      "Prepare daily progress reports.",
      "Coordinate with contractors, vendors, and management.",
    ],
    requirements: [
      "Diploma/B.Sc. in Civil Engineering.",
      "Minimum 2 years of relevant experience.",
      "Strong site supervision knowledge.",
      "Ability to read drawings and project plans.",
    ],
  },
  {
    id: 3,
    title: "Marketing Officer",
    department: "Marketing",
    location: "Head Office, Dhaka",
    type: "Full-time",
    experience: "1–2 Years",
    deadline: "Open Until Filled",
    description:
      "Creative and target-driven individual needed to plan and execute marketing activities for housing projects. Prior experience in property marketing will be preferred.",
    responsibilities: [
      "Plan and execute marketing activities.",
      "Coordinate with the digital marketing and creative teams.",
      "Support campaign planning, lead generation, and client communication.",
      "Prepare marketing reports and campaign updates.",
    ],
    requirements: [
      "Experience in real estate marketing will be preferred.",
      "Good communication and presentation skills.",
      "Basic knowledge of digital marketing is a plus.",
      "Ability to work with targets and deadlines.",
    ],
  },
];

export default function CareerPageSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [expandedJobId, setExpandedJobId] = useState(null);

  const jobsPerPage = 3;

  const departments = useMemo(() => {
    return ["All", ...new Set(jobs.map((job) => job.department))];
  }, []);

  const jobTypes = useMemo(() => {
    return ["All", ...new Set(jobs.map((job) => job.type))];
  }, []);

  const filteredJobs = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(keyword) ||
        job.department.toLowerCase().includes(keyword) ||
        job.location.toLowerCase().includes(keyword) ||
        job.description.toLowerCase().includes(keyword);

      const matchesDepartment =
        selectedDepartment === "All" || job.department === selectedDepartment;

      const matchesType = selectedType === "All" || job.type === selectedType;

      return matchesSearch && matchesDepartment && matchesType;
    });
  }, [searchTerm, selectedDepartment, selectedType]);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleDepartmentChange = (value) => {
    setSelectedDepartment(value);
    setCurrentPage(1);
  };

  const handleTypeChange = (value) => {
    setSelectedType(value);
    setCurrentPage(1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getApplyLink = (jobTitle) => {
    const subject = encodeURIComponent(`Application for ${jobTitle}`);
    const body = encodeURIComponent(
      `Dear HR Team,\n\nI would like to apply for the position of ${jobTitle}.\n\nName:\nPhone:\nCurrent Location:\nExperience:\nPortfolio/LinkedIn:\n\nThank you.`,
    );

    return `mailto:career@anondohousing.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden bg-[#f7fbff] py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#f68521]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#0072bc]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#0072bc]/15 bg-white px-5 py-2 shadow-sm">
            <span className="mr-3 h-1.5 w-8 rounded-full bg-[#f68521]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0072bc] sm:text-sm">
              Career Opportunities
            </span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#0072bc] sm:text-4xl lg:text-5xl">
            Join Anondo Housing Society
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Build your career with a growing real estate organization focused on
            trust, service, development, and long-term customer relationships.
          </p>
        </div>

        {/* Filter Box */}
        <div className="mx-auto mt-12 max-w-6xl rounded-[1.5rem] border border-white bg-white p-5 shadow-[0_20px_70px_rgba(0,114,188,0.08)]">
          <div className="grid gap-4 md:grid-cols-[1.4fr_1fr_1fr]">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by job title, location, or keyword..."
              className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0072bc] focus:ring-4 focus:ring-[#0072bc]/10"
            />

            <select
              value={selectedDepartment}
              onChange={(e) => handleDepartmentChange(e.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-[#0072bc] focus:ring-4 focus:ring-[#0072bc]/10"
            >
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department === "All" ? "All Departments" : department}
                </option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => handleTypeChange(e.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-[#0072bc] focus:ring-4 focus:ring-[#0072bc]/10"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type === "All" ? "All Job Types" : type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Count */}
        <div className="mx-auto mt-8 flex max-w-6xl items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-600">
            Showing{" "}
            <span className="font-bold text-[#0072bc]">
              {filteredJobs.length}
            </span>{" "}
            open position{filteredJobs.length > 1 ? "s" : ""}
          </p>

          <p className="hidden text-sm text-slate-500 sm:block">
            Apply via email with your updated CV
          </p>
        </div>

        {/* Job List */}
        <div className="mx-auto mt-6 grid max-w-6xl gap-6">
          {currentJobs.length > 0 ? (
            currentJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <article
                  key={job.id}
                  className="overflow-hidden rounded-[1.5rem] border border-white bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(0,114,188,0.12)]"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#0072bc]/10 px-3 py-1 text-xs font-bold text-[#0072bc]">
                          {job.department}
                        </span>
                        <span className="rounded-full bg-[#f68521]/10 px-3 py-1 text-xs font-bold text-[#f68521]">
                          {job.type}
                        </span>
                      </div>

                      <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-slate-900">
                        {job.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                        <span>Location: {job.location}</span>
                        <span>Experience: {job.experience}</span>
                        <span>Deadline: {job.deadline}</span>
                      </div>

                      <p className="mt-5 max-w-4xl text-[15px] leading-8 text-slate-600">
                        {job.description}
                      </p>
                    </div>

                    <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                      <a
                        href={getApplyLink(job.title)}
                        className="inline-flex items-center justify-center rounded-full bg-[#f68521] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(246,133,33,0.25)] transition hover:-translate-y-0.5 hover:bg-[#df741b]"
                      >
                        Apply Now
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          setExpandedJobId(isExpanded ? null : job.id)
                        }
                        className="inline-flex items-center justify-center rounded-full border border-[#0072bc]/15 bg-[#0072bc]/5 px-6 py-3 text-sm font-bold text-[#0072bc] transition hover:bg-[#0072bc] hover:text-white"
                      >
                        {isExpanded ? "Hide Details" : "View Details"}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-7 grid gap-6 border-t border-slate-100 pt-7 md:grid-cols-2">
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900">
                          Key Responsibilities
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                          {job.responsibilities.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f68521]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-base font-extrabold text-slate-900">
                          Requirements
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                          {job.requirements.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0072bc]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </article>
              );
            })
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-10 text-center">
              <h3 className="text-xl font-bold text-slate-900">
                No jobs found
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Try changing the search keyword or filter.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                currentPage === 1
                  ? "cursor-not-allowed bg-slate-100 text-slate-400"
                  : "bg-white text-slate-700 shadow-sm hover:bg-[#0072bc] hover:text-white"
              }`}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-10 w-10 rounded-full text-sm font-bold transition ${
                    currentPage === page
                      ? "bg-[#f68521] text-white shadow-[0_10px_24px_rgba(246,133,33,0.25)]"
                      : "bg-white text-slate-700 shadow-sm hover:bg-[#0072bc] hover:text-white"
                  }`}
                >
                  {String(page).padStart(2, "0")}
                </button>
              );
            })}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                currentPage === totalPages
                  ? "cursor-not-allowed bg-slate-100 text-slate-400"
                  : "bg-white text-slate-700 shadow-sm hover:bg-[#0072bc] hover:text-white"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
