"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { noticeData } from "@/data/noticeData";

export default function NoticePageSection() {
  const sortedNoticeData = [...noticeData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="bg-orange-50 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
        {sortedNoticeData.map((item) => (
          <Link
            key={item.slug}
            href={`/notice/${item.slug}`}
            className="group overflow-hidden rounded-xl border border-primary/20 bg-white transition-all duration-300 hover:shadow-2xl"
          >
            <div className="relative h-80 overflow-hidden bg-gray-50 p-3">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={800}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <div className="mb-3 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FaUser className="text-primary" />
                  <span>{item.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-secondary" />
                  <span>{item.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 transition group-hover:text-primary">
                {item.title}
              </h3>

              <p className="mb-5 mt-2 text-gray-600">{item.description}</p>

              <span className="inline-block rounded-lg bg-secondary px-5 py-2 text-sm font-medium text-white transition hover:bg-primary">
                বিস্তারিত দেখুন
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
