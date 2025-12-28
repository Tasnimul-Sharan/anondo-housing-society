"use client";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

export default function NoticePageSection() {
  const noticeData = [
    {
      id: 1,
      title: "শুভেচ্ছা বাণী",
      date: "29 May, 2022",
      author: "Admin",
      image: "/notice/notice-1.jpeg",
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
      image: "/notice/notice-4.png",
      description: "আনন্দ হাউজিং সোসা...",
      slug: "anondo-housing-society-registration-03",
    },
    {
      id: 5,
      title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য ১ম",
      date: "15 October, 2024",
      author: "Admin",
      image: "/notice/notice-5.png",
      description: "আনন্দ হাউজিং সোসা...",
      slug: "anondo-housing-society-registration-1st",
    },
    {
      id: 6,
      title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য",
      date: "15 October, 2024",
      author: "Admin",
      image: "/notice/notice-6.png",
      description: "আনন্দ হাউজিং সোসা...",
      slug: "anondo-housing-society-registration-1",
    },
    {
      id: 7,
      title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য ২য়",
      date: "15 October, 2024",
      author: "Admin",
      image: "/notice/notice-7.png",
      description: "আনন্দ হাউজিং সোসা...",
      slug: "anondo-housing-society-registration-2nd",
    },
    {
      id: 8,
      title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য ২য়",
      date: "15 October, 2024",
      author: "Admin",
      image: "/notice/notice-8.png",
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
      title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য ৩য়",
      date: "15 October, 2024",
      author: "Admin",
      image: "/notice/notice-9.png",
      description: "আনন্দ হাউজিং সোসা...",
      slug: "anondo-housing-society-registration-3rd-copy",
    },
    {
      id: 10,
      title: "আনন্দ হাউজিং সোসাইটি রেজিস্ট্রিযোগ্য ৩য়",
      date: "15 October, 2024",
      author: "Admin",
      image: "/notice/notice-10.png",
      description: "আনন্দ হাউজিং সোসা...",
      slug: "anondo-housing-society-registration-3rd-copy-2",
    },
    {
      id: 11,
      title: "আনন্দ পুলিশ পরিবার কল্যাণ বহুমুখী সমবায় সমিতি",
      date: "16 October, 2024",
      author: "Admin",
      image: "/notice/notice-11.jpeg",
      description: "আনন্দ পুলিশ পর...",
      slug: "anondo-police-family-cooperative",
    },
    {
      id: 12,
      title: "ইউটিলিটি ব্যয়ের অর্থ পরিশোধ সংক্রান্ত নোটিশ",
      date: "16 October, 2024",
      author: "Admin",
      image: "/notice/notice-12.png",
      description: "ইউটিলিটি ব্যয়ের ...",
      slug: "utility-payment-notice",
    },
  ];

  return (
    <div className="py-16 bg-orange-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {noticeData.map((item) => (
          <Link
            key={item.id}
            href={`/notice/${item.slug}`}
            className="group bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-primary/20"
          >
            {/* Image */}
            <div className="overflow-hidden relative">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Meta */}
              <div className="flex items-center gap-6 text-gray-500 text-sm mb-3">
                <div className="flex items-center gap-2">
                  <FaUser className="text-primary" />
                  <span>{item.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-secondary" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-2 mb-5">{item.description}</p>

              {/* Button */}
              <span className="inline-block px-5 py-2 bg-secondary text-white rounded-lg text-sm font-medium hover:bg-primary transition">
                READ MORE
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
