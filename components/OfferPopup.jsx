"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes, FaPhoneAlt, FaGlobe, FaCheckCircle } from "react-icons/fa";

export default function OfferPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const benefits = [
    "বাউন্ডারি করা রেডি প্লট",
    "ক্লিয়ার ও যাচাইকৃত ডকুমেন্টেশন",
    "দ্রুত রেজিস্ট্রেশন সুবিধা",
    "আধুনিক অবকাঠামো ও প্রশস্ত সড়ক",
    "ভবিষ্যৎ মূল্য বৃদ্ধির সম্ভাবনাময় লোকেশন",
  ];

  return (
    <div
      onClick={() => setShow(false)}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/75 px-4 py-6 lg:items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <button
          onClick={() => setShow(false)}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-20 rounded-full bg-white p-2.5 text-gray-700 shadow-lg transition hover:scale-110 hover:text-primary"
        >
          <FaTimes className="text-lg" />
        </button>

        <div className="grid max-h-none grid-cols-1 lg:max-h-[90vh] lg:grid-cols-[1fr_0.9fr]">
          <div className="relative flex min-h-[360px] items-center justify-center bg-gray-100 sm:min-h-[520px] lg:min-h-[90vh]">
            <Image
              src="/offers/offer-1.jpeg"
              alt="আনন্দ হাউজিং প্রতিষ্ঠাবার্ষিকী বিশেষ অফার"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="overflow-y-auto p-6 sm:p-8 lg:max-h-[90vh] lg:p-10">
            <div className="mb-4 inline-flex w-fit rounded-full bg-[#F48220]/10 px-4 py-2 text-sm font-bold text-[#F48220]">
              প্রতিষ্ঠাবার্ষিকী বিশেষ অফার
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-secondary sm:text-4xl">
              আনন্দ হাউজিং-এর প্রতিষ্ঠাবার্ষিকী উপলক্ষে ১০ লাখ টাকা ছাড়!
            </h2>

            <p className="mt-4 text-lg font-semibold leading-relaxed text-gray-800">
              স্বপ্নের ঠিকানা গড়ার এটাই হতে পারে আপনার জীবনের সবচেয়ে বড় সুযোগ! আনন্দ হাউজিং সোসাইটির প্রতিষ্ঠাবার্ষিকী উপলক্ষে প্রথম ২০ জন গ্রাহকের জন্য থাকছে সর্বোচ্চ ১০ লাখ টাকা পর্যন্ত বিশেষ ছাড়।
            </p>

            <div className="mt-5 rounded-2xl border border-[#F48220]/20 bg-[#FFF7EF] p-4">
              <p className="text-base font-bold text-secondary">
                পরিকল্পিত আবাসন প্রকল্পে নিরাপদ বিনিয়োগ
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">
                আপনার ও আপনার পরিবারের ভবিষ্যৎ নিরাপদ করতে আজই পছন্দের প্লট বুকিং দিন।
              </p>
            </div>

            <div className="mt-6">
              <h3 className="mb-3 text-lg font-bold text-secondary">যেসব সুবিধা পাচ্ছেন—</h3>
              <div className="space-y-3">
                {benefits.map((item) => (
                  <div key={item} className="flex gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-[#F48220]" />
                    <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 rounded-xl bg-red-50 p-4 text-base font-bold leading-relaxed text-red-700">
              অফারটি শুধুমাত্র ৩১ আগস্ট পর্যন্ত এবং প্রথম ২০ জন গ্রাহকের জন্য প্রযোজ্য।
            </p>

            <p className="mt-5 text-base font-semibold leading-relaxed text-gray-800">
              আজই আপনার এবং আপনার পরিবারের ভবিষ্যৎ নিরাপদ করতে বুকিং দিন। সীমিত সময়ের এই অফার মিস করবেন না!
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="tel:+8801331115500"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-base font-bold text-white shadow-lg transition hover:bg-primary/90"
              >
                <FaPhoneAlt /> যোগাযোগ করুন
              </a>
              <a
                href="https://www.anondobhubon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-base font-bold text-white shadow-lg transition hover:bg-secondary/90"
              >
                <FaGlobe /> ওয়েবসাইট দেখুন
              </a>
            </div>

            <div className="mt-5 text-center text-sm font-semibold leading-relaxed text-secondary">
              +880 1331-115500 <br />
              +880 1331-115511
            </div>

            <p className="mt-3 text-center text-xs font-medium text-gray-500">*শর্ত প্রযোজ্য</p>
          </div>
        </div>
      </div>
    </div>
  );
}

