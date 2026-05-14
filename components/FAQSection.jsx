"use client";
import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "আপনাদের প্রকল্পের অফিস লোকেশন কোথায়?",
      a: "রাজউক পূর্বাচল ৩নং ভিআইপি সেক্টর লাগোয়া।",
    },
    {
      q: "৩০০ ফিট থেকে প্রকল্পের দূরত্ব কতটুকু?",
      a: "৩০০ মিটার যা ২ মিনিট হাঁটার দূরুত্ব।",
    },
    {
      q: "প্রকল্পের মালিকানায় কারা আছেন?",
      a: "আনন্দ পুলিশ পরিবার কল্যাণ বহুমূখী সমবায় সমিতি।",
    },
    {
      q: "পুলিশ সদস্য ছাড়া আর কারা আবেদন করতে পারবেন?",
      a: "২৫% বিশেষ কোটায় সমাজের গণ্যমান্য ব্যক্তিবর্গের জন্য প্রযোজ্য।",
    },
    {
      q: "প্রকল্পের ডেভেলপমেন্ট এর কি অবস্থা?",
      a: "প্রকল্পটি ইতোমধ্যেই ডেভেলপড।",
    },
    { q: "এভিনিয় রোড সাইজ?", a: "৬০ ফিট এছাড়া ও ২৫, ৩০ এবং ৪০ ফিট।" },
    { q: "প্লট এর সাইজ?", a: "৩, ৫, ৬, ১০, ২০ কাঠা।" },
    {
      q: "প্লট হস্তান্তর কবে হবে?",
      a: "সমুদয় পাওনা পরিশোধ সাপেক্ষে ২০২৭ অথবা ২০২৮ সালে।",
    },
    { q: "কিস্তি কতগুলো?", a: "৩৬-৪৮ টি মাসিক কিস্তি।" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          প্রায়শই জিজ্ঞাসিত প্রশ্ন (FAQ)
        </h2>
        <div className="w-20 h-[3px] bg-primary mt-4 mb-4 mx-auto"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            // <div
            //   key={index}
            //   className="bg-[#F8F8F8] border border-primary/50 rounded-md px-0 py-0 transition-all"
            // >
            <div
              key={index}
              className={`bg-[#F8F8F8] rounded-md px-0 py-0 transition-all
    ${
      isOpen
        ? "border border-transparent"
        : "border border-dashed border-primary/50"
    }`}
            >
              <div
                className={`flex justify-between items-center px-6 py-4 cursor-pointer transition-all ${
                  openIndex === index
                    ? "bg-[#0E9ED0] text-white"
                    : "bg-[#F8F8F8] text-gray-900"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-medium">{faq.q}</h3>

                {openIndex === index ? (
                  <IoRemove
                    size={24}
                    className={
                      openIndex === index ? "text-white" : "text-gray-700"
                    }
                  />
                ) : (
                  <IoAdd size={24} className="text-gray-700" />
                )}
              </div>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 py-3" : "max-h-0 py-0"
                }`}
              >
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
