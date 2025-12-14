"use client";
import Link from "next/link";
import { FaRegFilePdf } from "react-icons/fa";

export default function NoticeSection() {
  const noticeData = [
    {
      id: 1,
      title: "শুভেচ্ছা বাণী", 
      date: "29 May, 2022",
      author: "Admin",
      image: "/notice/notice-1.jpg",
      description: "শুভেচ্ছা বাণী...",
      slug: "shubheccha-bani",
    },
    {
      id: 2,
      title: "হাসপাতাল কমিটি গঠন",
      date: "08 October, 2024",
      author: "Admin",
      image: "/notice/notice-2.jpg",
      description: "হাসপাতাল ...",
      slug: "hospital-committee-gothon",
    },
    {
      id: 3,
      title: "স্কুল কমিটি গঠন",
      date: "08 October, 2024",
      author: "Admin",
      image: "/notice/notice-3.jpg",
      description: "স্কুল কমিটি ...",
      slug: "school-committee-gothon",
    },
    {
      id: 4,
      title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য ০৩",
      date: "15 October, 2024",
      author: "Admin",
      image: "/notice/notice-4.jpg",
      description: "আনন্দ হাউজিং সোসা...",
      slug: "anondo-housing-society-registration-03",
    },
    {
      id: 5,
      title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য ১ম",
      date: "15 October, 2024",
      author: "Admin",
      image: "/notice/notice-5.jpg",
      description: "আনন্দ হাউজিং সোসা...",
      slug: "anondo-housing-society-registration-1st",
    },
    {
      id: 6,
      title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য ১",
      date: "15 October, 2024",
      author: "Admin",
      image: "/notice/notice-6.jpg",
      description: "আনন্দ হাউজিং সোসা...",
      slug: "anondo-housing-society-registration-1",
    },
    {
      id: 7,
      title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য ২য়",
      date: "15 October, 2024",
      author: "Admin",
      image: "/notice/notice-7.jpg",
      description: "আনন্দ হাউজিং সোসা...",
      slug: "anondo-housing-society-registration-2nd",
    },
    {
      id: 8,
      title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য ২য় (ডুপ্লিকেট)",
      date: "15 October, 2024",
      author: "Admin",
      image: "/notice/notice-8.jpg",
      description: "আনন্দ হাউজিং সোসা...",
      slug: "anondo-housing-society-registration-2nd-copy",
    },
    // {
    //   id: 9,
    //   title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য ৩য়",
    //   date: "15 October, 2024",
    //   author: "Admin",
    //   image: "/notice/notice-9.jpg",
    //   description: "আনন্দ হাউজিং সোসা...",
    //   slug: "anondo-housing-society-registration-3rd",
    // },
    {
      id: 9,
      title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য ৩য় (ডুপ্লিকেট)",
      date: "15 October, 2024",
      author: "Admin",
      image: "/notice/notice-10.jpg",
      description: "আনন্দ হাউজিং সোসা...",
      slug: "anondo-housing-society-registration-3rd-copy",
    },
    {
      id: 10,
      title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য ৩য় (ডুপ্লিকেট ২)",
      date: "15 October, 2024",
      author: "Admin",
      image: "/notice/notice-11.jpg",
      description: "আনন্দ হাউজিং সোসা...",
      slug: "anondo-housing-society-registration-3rd-copy-2",
    },
    {
      id: 11,
      title: "আনন্দ পুলিশ পরিবার কল্যাণ বহুমুখী সমবায় সমিতি",
      date: "16 October, 2024",
      author: "Admin",
      image: "/notice/notice-12.jpg",
      description: "আনন্দ পুলিশ পর...",
      slug: "anondo-police-family-cooperative",
    },
    {
      id: 12,
      title: "ইউটিলিটি ব্যয়ের অর্থ পরিশোধ সংক্রান্ত নোটিশ",
      date: "16 October, 2024",
      author: "Admin",
      image: "/notice/notice-13.jpg",
      description: "ইউটিলিটি ব্যয়ের ...",
      slug: "utility-payment-notice",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-2">সরকারি নোটিশ</h2>
      <p className="text-center text-gray-600 mb-12">
        সর্বশেষ নোটিশ ও আপডেট দেখুন
      </p>

      <div className="custom-container mx-auto">
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-800">
                <th className="py-4 px-3 border text-center">ক্রমিক</th>
                <th className="py-4 px-3 border">শিরোনাম</th>
                <th className="py-4 px-3 border">প্রকাশের তারিখ</th>
                <th className="py-4 px-3 border text-center">বিস্তারিত</th>
              </tr>
            </thead>

            <tbody>
              {noticeData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition border-b"
                >
                  <td className="py-3 px-3 border text-center">{item.id}</td>

                  <td className="py-3 px-3 border text-gray-900 font-medium">
                    {item.title}
                  </td>

                  <td className="py-3 px-3 border text-gray-700">
                    {item.date}
                  </td>

                  <td className="py-3 px-3 border text-center">
                    <Link
                      href={`/notice/${item.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
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
