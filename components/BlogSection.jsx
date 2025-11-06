"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

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
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          subtitle="Our Blog"
          title="Latest Security Insights"
          details="Stay informed with expert advice, industry trends, and updates from Anondo Housing Society."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.slug}`}>
              <div className="group rounded overflow-hidden cursor-pointer">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover rounded transform transition-transform duration-1000 ease-in-out group-hover:scale-125"
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
                <div className="relative mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group">
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
