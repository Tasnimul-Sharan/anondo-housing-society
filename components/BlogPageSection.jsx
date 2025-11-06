"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    img: "/blogs/blog-1.jpeg",
    date: "September 25, 2025",
    author: "Admin",
    title: "Inside Our State-of-the-Art Training Academy",
    excerpt:
      "Take an inside look at Anondo Universal’s Training Academy — a two-acre facility equipped with dormitories, simulation areas, CCTV labs, and fitness grounds designed to prepare disciplined security professionals.",
    slug: "training-academy-overview",
  },
  {
    id: 2,
    img: "/blogs/blog-2.jpeg",
    date: "September 20, 2025",
    author: "Admin",
    title: "Why Training Defines Reliable Security",
    excerpt:
      "Unlike traditional providers, Anondo Universal ensures every guard completes a rigorous 45-day program blending physical drills, legal awareness, and personal development for complete readiness.",
    slug: "importance-of-security-training",
  },
  {
    id: 3,
    img: "/blogs/blog-3.jpeg",
    date: "September 15, 2025",
    author: "Admin",
    title: "Comprehensive Services for Every Sector",
    excerpt:
      "From households and offices to factories, events, and financial institutions — explore how our tailored services deliver discipline, trust, and professionalism in every assignment.",
    slug: "comprehensive-security-services",
  },
  {
    id: 4,
    img: "/blogs/blog-1.jpeg",
    date: "September 10, 2025",
    author: "Admin",
    title: "Our Mission & Vision: Redefining Security in Bangladesh",
    excerpt:
      "Learn how Anondo Universal is setting new benchmarks in private security through uncompromising training quality, ethical values, and future-focused practices.",
    slug: "mission-vision-anondo-universal",
  },
  {
    id: 5,
    img: "/blogs/blog-2.jpeg",
    date: "September 7, 2025",
    author: "Admin",
    title: "The 30-Day Training Curriculum Explained",
    excerpt:
      "Discover the four pillars of our training program — Field Training, Professional Skills, Theoretical Knowledge, and Personal Development — that shape disciplined and trustworthy guards.",
    slug: "30-day-training-program",
  },
  {
    id: 6,
    img: "/blogs/blog-3.jpeg",
    date: "September 3, 2025",
    author: "Admin",
    title: "Future Vision: Building Tomorrow’s Security Standards",
    excerpt:
      "Our roadmap includes nationwide academies, AI-based surveillance, drone monitoring, and international guard deployment to meet global security demands.",
    slug: "future-vision-security",
  },
  {
    id: 7,
    img: "/blogs/blog-1.jpeg",
    date: "August 30, 2025",
    author: "Admin",
    title: "Quality Assurance in Every Guard Deployment",
    excerpt:
      "Strict evaluation, surprise inspections, refresher courses, and client feedback loops ensure every guard remains disciplined, alert, and professional.",
    slug: "quality-assurance-in-security",
  },
  {
    id: 8,
    img: "/blogs/blog-2.jpeg",
    date: "August 25, 2025",
    author: "Admin",
    title: "Competitive Advantage: Why Clients Trust Us",
    excerpt:
      "With our own academy, professional trainers, cutting-edge practices, and a strong value system, Anondo Universal stands apart in Bangladesh’s security industry.",
    slug: "competitive-advantage-anondo-universal",
  },
];

export default function BlogPageSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="custom-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <Link href={`/blogs/${blog.slug}`}>
              <div key={blog.id} className="group rounded overflow-hidden">
                <div className="relative w-full h-96 overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover rounded transform transition-all duration-1000 group-hover:scale-125"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-2">
                    <span className="flex items-center gap-2">
                      <FaRegCalendarAlt className="text-primary" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaRegUser className="text-primary" /> By: {blog.author}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-secondary mb-2 hover:text-primary transition-colors duration-500">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm">{blog.excerpt}</p>
                </div>
                <div
                  href={`/blogs/${blog.slug}`}
                  className="relative mt-2 inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group"
                >
                  Read More <FaArrowRight />
                  <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
