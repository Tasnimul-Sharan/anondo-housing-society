// "use client";
// import { useState } from "react";
// import { IoAdd, IoRemove } from "react-icons/io5";

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     {
//       q: "আপনাদের অফিস লোকেশন কোথায়?",
//       a: "আমাদের অফিস ঢাকার মিরপুর এলাকায় অবস্থিত।",
//     },
//     {
//       q: "৩০০ ফিট থেকে প্রকল্পের দূরত্ব কতটুকু?",
//       a: "৩০০ ফিট থেকে প্রকল্পের দূরত্ব অল্প সময়ের পথ।",
//     },
//     {
//       q: "প্রকল্পের মালিকানায় কারা আছেন?",
//       a: "বিশ্বস্ত ডেভেলপার ও ব্যবস্থাপনা কমিটি প্রকল্প পরিচালনা করেন।",
//     },
//     {
//       q: "পুলিশ সদস্য ছাড়া আর কারা আবেদন করতে পারবেন?",
//       a: "যেকোনো সম্মানিত নাগরিক আবেদন করতে পারবেন।",
//     },
//     {
//       q: "প্রকল্পের ডেভেলপমেন্ট এর কি অবস্থা?",
//       a: "ডেভেলপমেন্ট কাজ চলমান রয়েছে।",
//     },
//     { q: "রোডের সাইজ?", a: "রোডের সাইজ স্ট্যান্ডার্ড অনুযায়ী রাখা হয়েছে।" },
//     {
//       q: "প্লট হস্তান্তর কবে হবে?",
//       a: "নির্ধারিত সময়ের মধ্যেই প্লট হস্তান্তর করা হবে।",
//     },
//     { q: "কিস্তি কতগুলো?", a: "কিস্তির সংখ্যা প্রকল্প অনুযায়ী নির্ধারিত হয়।" },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       {/* Title */}
//       <div className="text-center mb-14">
//         <h2 className="text-4xl font-bold text-gray-900">
//           প্রায়শই জিজ্ঞাসিত প্রশ্ন (FAQ)
//         </h2>
//         <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3"></div>
//       </div>

//       {/* FAQ List */}
//       <div className="max-w-5xl mx-auto px-4 space-y-4">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="bg-[#F8F8F8] border border-yellow-500/50 rounded-md px-6 py-4 cursor-pointer transition-all"
//             onClick={() => setOpenIndex(openIndex === index ? null : index)}
//           >
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-medium text-gray-900">{faq.q}</h3>

//               {openIndex === index ? (
//                 <IoRemove size={24} className="text-gray-700" />
//               ) : (
//                 <IoAdd size={24} className="text-gray-700" />
//               )}
//             </div>

//             {/* Answer Section */}
//             <div
//               className={`overflow-hidden transition-all duration-300 ${
//                 openIndex === index ? "max-h-40 mt-3" : "max-h-0"
//               }`}
//             >
//               <p className="text-gray-600 text-[15px] leading-relaxed">
//                 {faq.a}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "আপনাদের অফিস লোকেশন কোথায়?",
      a: "আমাদের অফিস ঢাকার মিরপুর এলাকায় অবস্থিত।",
    },
    {
      q: "৩০০ ফিট থেকে প্রকল্পের দূরত্ব কতটুকু?",
      a: "৩০০ ফিট থেকে প্রকল্পের দূরত্ব অল্প সময়ের পথ।",
    },
    {
      q: "প্রকল্পের মালিকানায় কারা আছেন?",
      a: "বিশ্বস্ত ডেভেলপার ও ব্যবস্থাপনা কমিটি প্রকল্প পরিচালনা করেন।",
    },
    {
      q: "পুলিশ সদস্য ছাড়া আর কারা আবেদন করতে পারবেন?",
      a: "যেকোনো সম্মানিত নাগরিক আবেদন করতে পারবেন।",
    },
    {
      q: "প্রকল্পের ডেভেলপমেন্ট এর কি অবস্থা?",
      a: "ডেভেলপমেন্ট কাজ চলমান রয়েছে।",
    },
    { q: "রোডের সাইজ?", a: "রোডের সাইজ স্ট্যান্ডার্ড অনুযায়ী রাখা হয়েছে।" },
    {
      q: "প্লট হস্তান্তর কবে হবে?",
      a: "নির্ধারিত সময়ের মধ্যেই প্লট হস্তান্তর করা হবে।",
    },
    { q: "কিস্তি কতগুলো?", a: "কিস্তির সংখ্যা প্রকল্প অনুযায়ী নির্ধারিত হয়।" },
  ];

  return (
    <section className="py-20 bg-white">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          প্রায়শই জিজ্ঞাসিত প্রশ্ন (FAQ)
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3"></div>
      </div>

      {/* FAQ List */}
      <div className="max-w-5xl mx-auto px-4 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-[#F8F8F8] border border-yellow-500/50 rounded-md px-0 py-0 transition-all"
            >
              {/* Clickable Header Row */}
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

              {/* Answer Section */}
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
