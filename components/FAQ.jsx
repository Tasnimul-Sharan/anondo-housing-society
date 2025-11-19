"use client";

import { useRef, useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import SectionHeader from "./SectionHeader";

export default function FAQ({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      collapse(index);
      setActiveIndex(null);
    } else {
      if (activeIndex !== null) {
        collapse(activeIndex, () => {
          expand(index);
          setActiveIndex(index);
        });
      } else {
        expand(index);
        setActiveIndex(index);
      }
    }
  };

  const expand = (index) => {
    const el = answerRefs.current[index];
    if (el) {
      gsap.killTweensOf(el);
      el.style.display = "block";
      const height = el.scrollHeight;

      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            el.style.height = "auto";
          },
        }
      );
    }
  };

  const collapse = (index, onComplete) => {
    const el = answerRefs.current[index];
    if (el) {
      gsap.killTweensOf(el);
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          el.style.display = "none";
          if (onComplete) onComplete();
        },
      });
    }
  };

  return (
    <motion.section
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Title */}
      <motion.div
        // className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* {faqData.title} */}
         <SectionHeader
        subtitle="FAQs"
        title={faqData.title}
        details="Find answers to the most common questions about our services, operations, and commitment to safety."
      />
      </motion.div>

      <div className="space-y-4">
        {faqData.faqs.map((faq, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleFAQ(index)}
              className={`rounded-md cursor-pointer overflow-hidden transition-colors duration-300 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-secondary"
              }`}
            >
              {/* Question Row */}
              <div className="flex items-center justify-between px-4 py-4">
                <span
                  className={`font-semibold w-10 ${
                    isActive ? "text-white" : "text-primary"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-medium">{faq.question}</span>
                <span
                  className={`text-2xl transition-transform duration-500 ${
                    isActive ? "rotate-180" : "rotate-0 text-primary"
                  }`}
                >
                  {isActive ? (
                    <AiOutlineMinusCircle />
                  ) : (
                    <AiOutlinePlusCircle />
                  )}
                </span>
              </div>

              {/* Answer with expand/collapse animation */}
              {/* <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-14 pb-4 text-sm overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence> */}
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="px-14 pb-4 text-sm overflow-hidden whitespace-pre-line"
                style={{ height: 0, opacity: 0, display: "none" }}
              >
                {faq.answer}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

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
