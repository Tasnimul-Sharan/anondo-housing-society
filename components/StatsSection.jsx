"use client";

import { FaRegListAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      icon: <FaRegListAlt size={45} />,
      value: "২০০৭",
      label: "প্রতিষ্ঠিত",
    },
    {
      icon: <FaUserFriends size={45} />,
      value: "১৩৫০+",
      label: "সদস্য",
    },
    {
      icon: <FaHardHat size={45} />,
      value: "৩৫০+",
      label: "রেজিস্ট্রেটেড প্লট হস্তান্তর",
    },
    {
      icon: <FaChartLine size={45} />,
      value: "১৮০+",
      label: "কর্মীর সংখ্যা",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center justify-items-center">
          {stats.map((item, index) => (
            <div key={index}>
              {/* Yellow Circle */}
              <div className="w-24 h-24 bg-[#F5AF17] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-white">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="text-3xl font-bold text-[#0064A7]">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-lg text-black font-semibold mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
