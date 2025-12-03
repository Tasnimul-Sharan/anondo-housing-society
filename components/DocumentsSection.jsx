"use client";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

export default function NewsSection() {
  const newsData = [
    {
      id: 1,
      title: "শুভেচ্ছা বাণী",
      author: "Admin",
      date: "29/May/2022",
      image: "/news/news-1.jpg",
      description: "শুভেচ্ছা ...",
    },
    {
      id: 2,
      title: "হাসপাতাল কমিটি গঠন",
      author: "Committee",
      date: "08/Oct/2024",
      image: "/news/news-2.jpg",
      description: "হাসপাতাল ...",
    },
    {
      id: 3,
      title: "স্কুল কমিটি গঠন",
      author: "Committee",
      date: "08/Oct/2024",
      image: "/news/news-3.jpg",
      description: "স্কুল কমিটি ...",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-2">নিউজ</h2>
      <p className="text-center text-gray-600 mb-12">
        আমাদের সকল ব্লগ পড়ুন এখানে
      </p>

      <div className="container mx-auto grid md:grid-cols-3 gap-10 px-4">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
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
                  <FaUser className="text-gray-400" />
                  <span>{item.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-gray-400" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-2 mb-5">{item.description}</p>

              {/* Button */}
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
