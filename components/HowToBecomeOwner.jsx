// "use client";
// import { FiPhoneCall } from "react-icons/fi";
// import { FaRegFileAlt } from "react-icons/fa";
// import { IoPersonOutline } from "react-icons/io5";
// import { FaRegHandshake } from "react-icons/fa";

// export default function HowToBecomeOwner() {
//   const steps = [
//     {
//       icon: <FiPhoneCall size={42} />,
//       title: "আমাদের সাথে যোগাযোগ করুন",
//       desc: "আমাদের বিপণন প্রতিনিধির সাথে যোগাযোগের পর অথবা সরাসরি আমাদের অফিসে আসুন এবং আপনি কেমন প্লট খুঁজছেন তা আমাদেরকে জানান।",
//     },
//     {
//       icon: <FaRegFileAlt size={42} />,
//       title: "ফর্ম পূরণ",
//       desc: "প্রয়োজনীয় কাগজপত্র পূরণ করুন এবং যাচাইয়ের জন্য অপেক্ষা করুন। আমরা প্রক্রিয়াটিকে সহজ করতে সাহায্য করবো।",
//     },
//     {
//       icon: <IoPersonOutline size={42} />,
//       title: "সদস্য",
//       desc: "যাচাইকরন সফল হওয়ার পরে, আপনি একজন সদস্য হিসেবে নিবন্ধিত হবেন। আপনাকে প্রয়োজনীয় প্রজেক্ট বিস্তারিত, আবেদন, রুলস ও কিস্তি মূল্য পরিশোধের জন্য নির্দেশনা দেওয়া হবে।",
//     },
//     {
//       icon: <FaRegHandshake size={42} />,
//       title: "পেমেন্ট সম্পূর্ণ",
//       desc: "অর্থপ্রদান সম্পূর্ণ হওয়ার পরে, আপনি আনন্দ হাউজিং সোসাইটি'র একজন এক্সক্লুসিভ প্লটের মালিক হতে পারবেন এবং আপনার স্বপ্নের বাড়ি নির্মাণে এক ধাপ এগিয়ে যাবেন।",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       {/* Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-gray-900">
//           কিভাবে জমির মালিক হবেন
//         </h2>
//         <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3"></div>
//       </div>

//       {/* Steps */}
//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Connecting line only on desktop */}
//         <div className="hidden md:block absolute top-[48px] left-0 right-0 w-full h-[2px] bg-[#0E9ED0]"></div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-14 text-center relative z-10">
//           {steps.map((step, index) => (
//             <div key={index} className="flex flex-col items-center relative">
//               {/* Circle */}
//               <div className="relative flex items-center justify-center mb-6">
//                 <div className="w-24 h-24 rounded-full bg-[#0E9ED0] flex items-center justify-center text-white shadow-lg z-10">
//                   {step.icon}
//                 </div>
//               </div>

//               {/* Title + description */}
//               <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
//               <p className="text-gray-600 leading-relaxed text-[15px]">
//                 {step.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { FiPhoneCall } from "react-icons/fi";
// import { FaRegFileAlt } from "react-icons/fa";
// import { IoPersonOutline } from "react-icons/io5";
// import { FaRegHandshake } from "react-icons/fa";

// export default function HowToBecomeOwner() {
//   const steps = [
//     {
//       icon: <FiPhoneCall size={42} />,
//       title: "আমাদের সাথে যোগাযোগ করুন",
//       desc: "আমাদের বিপণন প্রতিনিধির সাথে যোগাযোগের পর অথবা সরাসরি আমাদের অফিসে আসুন এবং আপনি কেমন প্লট খুঁজছেন তা আমাদেরকে জানান।",
//     },
//     {
//       icon: <FaRegFileAlt size={42} />,
//       title: "ফর্ম পূরণ",
//       desc: "প্রয়োজনীয় কাগজপত্র পূরণ করুন এবং যাচাইয়ের জন্য অপেক্ষা করুন। আমরা প্রক্রিয়াটিকে সহজ করতে সাহায্য করবো।",
//     },
//     {
//       icon: <IoPersonOutline size={42} />,
//       title: "সদস্য",
//       desc: "যাচাইকরন সফল হওয়ার পরে, আপনি একজন সদস্য হিসেবে নিবন্ধিত হবেন। আপনাকে প্রয়োজনীয় প্রজেক্ট বিস্তারিত, আবেদন, রুলস ও কিস্তি মূল্য পরিশোধের জন্য নির্দেশনা দেওয়া হবে।",
//     },
//     {
//       icon: <FaRegHandshake size={42} />,
//       title: "পেমেন্ট সম্পূর্ণ",
//       desc: "অর্থপ্রদান সম্পূর্ণ হওয়ার পরে, আপনি আনন্দ হাউজিং সোসাইটি'র একজন এক্সক্লুসিভ প্লটের মালিক হতে পারবেন এবং আপনার স্বপ্নের বাড়ি নির্মাণে এক ধাপ এগিয়ে যাবেন।",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       {/* Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-gray-900">
//           কিভাবে জমির মালিক হবেন
//         </h2>
//         <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3"></div>
//       </div>

//       {/* Steps */}
//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Line between icons (desktop only) */}
//         <div className="hidden md:flex absolute top-[48px] left-0 right-0 justify-between px-[95px]">
//           {[1, 2, 3].map((_, i) => (
//             <div key={i} className="flex-1 h-[2px] bg-[#0E9ED0]"></div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-14 text-center relative z-10">
//           {steps.map((step, index) => (
//             <div key={index} className="flex flex-col items-center relative">
//               {/* Circle */}
//               <div className="relative flex items-center justify-center mb-6">
//                 <div className="w-24 h-24 rounded-full bg-[#0E9ED0] flex items-center justify-center text-white shadow-lg z-10">
//                   {step.icon}
//                 </div>
//               </div>

//               {/* Title + description */}
//               <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
//               <p className="text-gray-600 leading-relaxed text-[15px]">
//                 {step.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { FiPhoneCall } from "react-icons/fi";
// import { FaRegFileAlt } from "react-icons/fa";
// import { IoPersonOutline } from "react-icons/io5";
// import { FaRegHandshake } from "react-icons/fa";

// export default function HowToBecomeOwner() {
//   const steps = [
//     {
//       icon: <FiPhoneCall size={42} />,
//       title: "আমাদের সাথে যোগাযোগ করুন",
//       desc: "আমাদের বিপণন প্রতিনিধির সাথে যোগাযোগের পর অথবা সরাসরি আমাদের অফিসে আসুন এবং আপনি কেমন প্লট খুঁজছেন তা আমাদেরকে জানান।",
//     },
//     {
//       icon: <FaRegFileAlt size={42} />,
//       title: "ফর্ম পূরণ",
//       desc: "প্রয়োজনীয় কাগজপত্র পূরণ করুন এবং যাচাইয়ের জন্য অপেক্ষা করুন। আমরা প্রক্রিয়াটিকে সহজ করতে সাহায্য করবো।",
//     },
//     {
//       icon: <IoPersonOutline size={42} />,
//       title: "সদস্য",
//       desc: "যাচাইকরন সফল হওয়ার পরে, আপনি একজন সদস্য হিসেবে নিবন্ধিত হবেন। আপনাকে প্রয়োজনীয় প্রজেক্ট বিস্তারিত, আবেদন, রুলস ও কিস্তি মূল্য পরিশোধের জন্য নির্দেশনা দেওয়া হবে।",
//     },
//     {
//       icon: <FaRegHandshake size={42} />,
//       title: "পেমেন্ট সম্পূর্ণ",
//       desc: "অর্থপ্রদান সম্পূর্ণ হওয়ার পরে, আপনি আনন্দ হাউজিং সোসাইটি'র একজন এক্সক্লুসিভ প্লটের মালিক হতে পারবেন এবং আপনার স্বপ্নের বাড়ি নির্মাণে এক ধাপ এগিয়ে যাবেন।",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       {/* Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-gray-900">
//           কিভাবে জমির মালিক হবেন
//         </h2>
//         <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3"></div>
//       </div>

//       <div className="custom-container mx-auto">
//         {/* steps row */}
//         <div className="relative flex justify-between items-start">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="w-1/4 flex flex-col items-center relative"
//             >
//               {/* Line between icons (except first + last) */}
//               {index !== 0 && (
//                 <div className="hidden md:block absolute -left-1/2 top-12 w-full h-[2px] bg-[#0E9ED0]"></div>
//               )}

//               {/* Circle */}
//               <div className="w-24 h-24 rounded-full bg-[#0E9ED0] flex items-center justify-center text-white shadow-lg mb-6 z-10">
//                 {step.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

//               {/* Description */}
//               <p className="text-gray-600 leading-relaxed text-[15px] text-center">
//                 {step.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { FiPhoneCall } from "react-icons/fi";
// import { FaRegFileAlt } from "react-icons/fa";
// import { IoPersonOutline } from "react-icons/io5";
// import { FaRegHandshake } from "react-icons/fa";

// export default function HowToBecomeOwner() {
//   const steps = [
//     {
//       icon: <FiPhoneCall size={42} />,
//       title: "আমাদের সাথে যোগাযোগ করুন",
//       desc: "আমাদের বিপণন প্রতিনিধির সাথে যোগাযোগের পর অথবা সরাসরি আমাদের অফিসে আসুন এবং আপনি কেমন প্লট খুঁজছেন তা আমাদেরকে জানান।",
//     },
//     {
//       icon: <FaRegFileAlt size={42} />,
//       title: "ফর্ম পূরণ",
//       desc: "প্রয়োজনীয় কাগজপত্র পূরণ করুন এবং যাচাইয়ের জন্য অপেক্ষা করুন। আমরা প্রক্রিয়াটিকে সহজ করতে সাহায্য করবো।",
//     },
//     {
//       icon: <IoPersonOutline size={42} />,
//       title: "সদস্য",
//       desc: "যাচাইকরন সফল হওয়ার পরে, আপনি একজন সদস্য হিসেবে নিবন্ধিত হবেন। আপনাকে প্রয়োজনীয় প্রজেক্ট বিস্তারিত, আবেদন, রুলস ও কিস্তি মূল্য পরিশোধের জন্য নির্দেশনা দেওয়া হবে।",
//     },
//     {
//       icon: <FaRegHandshake size={42} />,
//       title: "পেমেন্ট সম্পূর্ণ",
//       desc: "অর্থপ্রদান সম্পূর্ণ হওয়ার পরে, আপনি আনন্দ হাউজিং সোসাইটি'র একজন এক্সক্লুসিভ প্লটের মালিক হতে পারবেন এবং আপনার স্বপ্নের বাড়ি নির্মাণে এক ধাপ এগিয়ে যাবেন।",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       {/* Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-gray-900">
//           কিভাবে জমির মালিক হবেন
//         </h2>
//         <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6">
//         {/* Steps Row */}
//         <div className="relative flex justify-between items-start gap-6">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="flex-1 flex flex-col items-center relative"
//             >
//               {/* Line between icons */}
//               {index !== 0 && (
//                 <div className="hidden md:block absolute -left-1/2 top-12 w-full h-[2px] bg-[#0E9ED0]"></div>
//               )}

//               {/* Circle */}
//               <div className="w-20 h-20 rounded-full bg-[#0E9ED0] flex items-center justify-center text-white shadow-lg mb-6 z-10">
//                 {step.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-semibold mb-2">{step.title}</h3>

//               {/* Description */}
//               <p className="text-gray-600 leading-relaxed text-[15px] text-center">
//                 {step.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          কিভাবে জমির মালিক হবেন
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
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
              <div className="w-20 h-20 rounded-full bg-[#0E9ED0] flex items-center justify-center text-white shadow-lg mb-6 z-10">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 text-center">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-[15px] text-center">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
