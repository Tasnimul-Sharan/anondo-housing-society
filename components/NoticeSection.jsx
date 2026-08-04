"use client";

import Link from "next/link";
import { noticeData } from "@/data/noticeData";

export default function NoticeSection() {
  const sortedNoticeData = [...noticeData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="bg-white py-16">
      <h2 className="mb-2 text-center text-4xl font-bold text-gray-900">
        গুরুত্বপূর্ণ নোটিশ
      </h2>
      <div className="mx-auto mb-4 mt-4 h-[3px] w-20 bg-primary" />
      <p className="mb-12 text-center text-gray-600">
        সর্বশেষ নোটিশ ও আপডেট দেখুন
      </p>

      <div className="custom-container mx-auto">
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-800">
                <th className="border px-3 py-4 text-center">ক্রমিক</th>
                <th className="border px-3 py-4">শিরোনাম</th>
                <th className="border px-3 py-4">প্রকাশের তারিখ</th>
                <th className="border px-3 py-4 text-center">বিস্তারিত</th>
              </tr>
            </thead>

            <tbody>
              {sortedNoticeData.map((item, index) => (
                <tr
                  key={item.slug}
                  className="border-b transition hover:bg-gray-50"
                >
                  <td className="border px-3 py-3 text-center">
                    {index + 1}
                  </td>

                  <td className="border px-3 py-3 font-medium text-gray-900">
                    {item.title}
                  </td>

                  <td className="border px-3 py-3 text-gray-700">
                    {item.date}
                  </td>

                  <td className="border px-3 py-3 text-center">
                    <Link
                      href={`/notice/${item.slug}`}
                      className="font-semibold text-secondary transition-all duration-500 hover:text-primary"
                    >
                      বিস্তারিত →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
