"use client";
import { FiPhoneCall } from "react-icons/fi";
import { FaClipboardList, FaUserCheck, FaMoneyCheckAlt } from "react-icons/fa";

export default function HowToBecomeOwner() {
  const steps = [
    {
      icon: <FiPhoneCall size={38} />,
      title: "আমাদের সাথে যোগাযোগ করুন",
      desc: "আমাদের বিপণন প্রতিনিধির সাথে যোগাযোগের পর অথবা সরাসরি আমাদের অফিসে আসুন এবং আপনি কেমন প্লট খুঁজছেন তা আমাদেরকে জানান।",
    },
    {
      icon: <FaClipboardList size={38} />,
      title: "ফর্ম পূরণ",
      desc: "প্রয়োজনীয় কাগজপত্র পূরণ করুন এবং যাচাইয়ের জন্য অপেক্ষা করুন। আমরা প্রক্রিয়াটিকে সহজ করতে সাহায্য করবো।",
    },
    {
      icon: <FaUserCheck size={38} />,
      title: "সদস্য",
      desc: "যাচাইকরন সফল হওয়ার পরে, আপনি একজন সদস্য হিসেবে নিবন্ধিত হবেন এবং প্রয়োজনীয় প্রজেক্ট বিস্তারিত ও নির্দেশনা পাবেন।",
    },
    {
      icon: <FaMoneyCheckAlt size={38} />,
      title: "পেমেন্ট সম্পূর্ণ",
      desc: "অর্থপ্রদান সম্পূর্ণ হওয়ার পরে, আপনি আনন্দ হাউজিং সোসাইটি'র এক্সক্লুসিভ প্লটের মালিক হবেন।",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="md:text-4xl text-3xl font-bold text-gray-900">
          কিভাবে জমির মালিক হবেন
        </h2>
        <div className="w-20 h-[3px] bg-primary mx-auto mt-3"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Steps Row */}
        <div className="relative flex justify-between items-start gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative"
            >
              {/* Line between icons */}
              {index !== 0 && (
                <div className="hidden md:block absolute -left-1/2 top-10 w-full h-[2px] bg-[#0E9ED0]"></div>
              )}

              {/* Circle */}
              <div className="w-24 h-24 rounded-full bg-[#0E9ED0] flex items-center justify-center text-white shadow-lg mb-6 z-10">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-center">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base text-center">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
