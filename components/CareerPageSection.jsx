"use client";
import { useState } from "react";

export default function CareerPageSection() {
  const jobs = [
    {
      id: 1,
      title: "Sales Executive",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description:
        "We are looking for energetic and motivated individuals to join our sales team. Candidates should have good communication skills and a passion for real estate marketing.",
    },
    {
      id: 2,
      title: "Civil Engineer",
      location: "Purbachal, Dhaka",
      type: "Full-time",
      description:
        "Responsible for on-site supervision, quality control, and project management. Must have at least 2 years of experience in real estate or construction projects.",
    },
    {
      id: 3,
      title: "Marketing Officer",
      location: "Head Office, Dhaka",
      type: "Full-time",
      description:
        "Creative and target-driven individual needed to plan and execute marketing strategies for housing projects. Prior experience in property marketing preferred.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 1;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center px-6">
        <p className="text-sm text-gray-500">
          Career Opportunities @ Anondo Housing
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
          We are Hiring
        </h1>
        <div className="w-20 h-[2px] bg-amber-500 mx-auto mb-12" />
      </div>

      {/* Job List */}
      <div className="max-w-3xl mx-auto px-6">
        {currentJobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-200 shadow-sm rounded-xl p-6 mb-8 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-1 text-gray-900">
              {job.title}
            </h3>
            <p className="text-gray-500 mb-2">
              📍 {job.location} | 💼 {job.type}
            </p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <a
              href={`mailto:career@anondohousing.com?subject=Application for ${job.title}`}
              className="inline-block bg-amber-500 text-white px-5 py-2 rounded-md font-medium hover:bg-amber-600 transition"
            >
              Apply Now
            </a>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10 text-sm font-medium">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 px-2 ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:text-amber-500"
            }`}
          >
            « Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-md border ${
                currentPage === i + 1
                  ? "bg-amber-500 text-white border-amber-500"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-1 px-2 ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:text-amber-500"
            }`}
          >
            Next »
          </button>
        </div>
      </div>
    </section>
  );
}
