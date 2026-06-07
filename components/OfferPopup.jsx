"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes, FaPhoneAlt, FaGlobe, FaCheckCircle } from "react-icons/fa";

export default function OfferPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const benefits = [
    "ক্লিয়ার ও সুরক্ষিত ডকুমেন্টেশন",
    "দ্রুত উন্নয়নশীল লোকেশন – পূর্বাচল ৩০০ ফিট সংলগ্ন",
    "রেডি রোড, ড্রেনেজ ও পরিকল্পিত প্লটিং",
    "ভবিষ্যৎ বিনিয়োগের জন্য হাই গ্রোথ এরিয়া",
    "সহজ কিস্তি সুবিধা",
  ];

  return (
    <div
      onClick={() => setShow(false)}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/75 px-4 py-6 lg:items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <button
          onClick={() => setShow(false)}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-20 rounded-full bg-white p-2.5 text-gray-700 shadow-lg transition hover:scale-110 hover:text-primary"
        >
          <FaTimes className="text-lg" />
        </button>

        <div className="grid max-h-none grid-cols-1 lg:max-h-[90vh] lg:grid-cols-[1fr_0.9fr]">
          {/* Image Area */}
          <div className="relative flex min-h-[360px] items-center justify-center bg-gray-100 sm:min-h-[520px] lg:min-h-[90vh]">
            <Image
              src="/offers/lakh-takar-offer.jpg"
              alt="Anondo Housing Society Offer"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Content Area */}
          <div className="overflow-y-auto p-6 sm:p-8 lg:max-h-[90vh] lg:p-10">
            <div className="mb-4 inline-flex w-fit rounded-full bg-[#F48220]/10 px-4 py-2 text-sm font-bold text-[#F48220]">
              সুখবর! অফারের সময়সীমা বৃদ্ধি
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-secondary sm:text-4xl">
              স্বপ্নপূরণ লক্ষ টাকার অফার এখন ১৫ জুন ২০২৬ পর্যন্ত!
            </h2>

            <p className="mt-4 text-lg font-semibold leading-relaxed text-gray-800">
              সম্মানিত গ্রাহকদের ব্যাপক আগ্রহ ও অনুরোধের কথা বিবেচনা করে আনন্দ
              হাউজিং সোসাইটি’র “স্বপ্নপূরণ লক্ষ টাকার অফার” এর মেয়াদ আগামী ১৫
              জুন ২০২৬ পর্যন্ত বৃদ্ধি করা হয়েছে।
            </p>

            <div className="mt-5 rounded-2xl border border-[#F48220]/20 bg-[#FFF7EF] p-4">
              <p className="text-base font-bold text-secondary">
                স্বপ্নের জমি কেনার সেরা সুযোগ এখন আরও কিছুদিন আপনার জন্য
                উন্মুক্ত
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">
                পূর্বাচল ৩০০ ফিট সংলগ্ন রূপগঞ্জে পরিকল্পিত আবাসিক কমিউনিটিতে
                এখনই বুকিং করুন আপনার কাঙ্ক্ষিত প্লট এবং উপভোগ করুন বিশেষ
                মূল্যছাড়ের সুবিধা।
              </p>
            </div>

            <div className="mt-6">
              <h3 className="mb-3 text-lg font-bold text-secondary">
                কেন এখনই বুক করবেন?
              </h3>

              <div className="space-y-3">
                {benefits.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-[#F48220]" />
                    <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-base font-semibold leading-relaxed text-gray-800">
              আজকের সিদ্ধান্তই হতে পারে আপনার আগামী দিনের নিরাপদ বিনিয়োগ।
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="tel:+8801331115500"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-base font-bold text-white shadow-lg transition hover:bg-primary/90"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href="https://www.anondohousing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-base font-bold text-white shadow-lg transition hover:bg-secondary/90"
              >
                <FaGlobe />
                Visit Website
              </a>
            </div>

            <div className="mt-5 text-center text-sm font-semibold leading-relaxed text-secondary">
              +880 1331-115500, +880 1331-115511 <br />
              +880 1313-775333, +880 1313-775334, +880 1313-775335
            </div>

            <p className="mt-3 text-center text-xs font-medium text-gray-500">
              *শর্ত প্রযোজ্য
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
