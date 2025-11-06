// "use client";
// import { FaHourglassHalf, FaLightbulb, FaAnchor, FaUniversity, FaChalkboardTeacher, FaUserGraduate, FaVideo, FaEye, FaHandshake, FaUsers } from "react-icons/fa";
// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function WhyUsSection() {
//   // const features = [
//   //   {
//   //     icon: <FaHourglassHalf size={20} />,
//   //     title: "25+ YEARS OF EXPERIENCE",
//   //     desc: "Decades of proven expertise in providing professional security solutions across industries.",
//   //   },
//   //   {
//   //     icon: <FaLightbulb size={20} />,
//   //     title: "HIGHLY TRAINED GUARDS",
//   //     desc: "Our team is self-motivated, disciplined, and trained to handle any critical situation effectively.",
//   //   },
//   //   {
//   //     icon: <FaAnchor size={20} />,
//   //     title: "MODERN SECURITY METHODS",
//   //     desc: "We use the latest tools and strategies to ensure maximum safety and reliability.",
//   //   },
//   // ];

//   const features = [
//     {
//       icon: <FaUniversity size={20} />,
//       title: "Own Training Academy",
//       desc: "We operate a two-acre academy with 300+ trainee capacity, ensuring rigorous in-house training.",
//     },
//     {
//       icon: <FaChalkboardTeacher size={20} />,
//       title: "Expert Faculty",
//       desc: "Our trainers include retired army officers, law enforcement experts, and certified security professionals.",
//     },
//     {
//       icon: <FaUserGraduate size={20} />,
//       title: "Holistic Training",
//       desc: "Training covers law, etiquette, hygiene, personal development, and modern security practices.",
//     },
//     {
//       icon: <FaVideo size={20} />,
//       title: "Cutting-Edge Practices",
//       desc: "Exposure to CCTV monitoring, metal detectors, and real-world scenarios like crowd management.",
//     },
//     {
//       icon: <FaEye size={20} />,
//       title: "Regular Monitoring",
//       desc: "Surveillance teams conduct inspections to ensure guards remain disciplined and vigilant.",
//     },
//     {
//       icon: <FaHandshake size={20} />,
//       title: "Strong Values",
//       desc: "Loyalty, honesty, and integrity are the pillars of our service philosophy.",
//     },
//     {
//       icon: <FaUsers size={20} />,
//       title: "Client Diversity",
//       desc: "We serve residential, corporate, industrial, event, and VIP clients with customized solutions.",
//     },
//   ];

//   const stats = [
//     { number: 3500, label: "Dedicated Guards" },
//     { number: 2340, label: "Satisfied Clients" },
//     { number: 38, label: "Industry Awards" },
//     { number: 35, label: "Regional Branches" },
//   ];

//   const statRefs = useRef([]);

//   useEffect(() => {
//     statRefs.current.forEach((el, i) => {
//       if (!el) return;

//       gsap.fromTo(
//         el,
//         { innerText: 0 },
//         {
//           innerText: stats[i].number,
//           duration: 2,
//           ease: "power3.out",
//           snap: { innerText: 1 },
//           scrollTrigger: {
//             trigger: el,
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//           },
//           onUpdate: function () {
//             el.innerText = Math.floor(el.innerText);
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 items-center">
//         <div>
//           <span className="bg-primary/20 text-primary rounded-full text-xs font-semibold px-4 py-2 uppercase tracking-wide inline-block mb-4">
//             Why Us
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
//             Why Choose Our Security Services
//           </h2>
//           <p className="text-gray-600 mb-12 max-w-lg">
//             We are committed to delivering reliable, professional, and
//             affordable security services that ensure safety, trust, and peace of
//             mind for our clients.
//           </p>

//           <div className="space-y-10">
//             {features.map((f, i) => (
//               <div key={i} className="flex items-start space-x-5 group">
//                 <div
//                   className="w-12 h-12 border-2 border-primary text-primary
//                   group-hover:bg-primary group-hover:text-white
//                   group-hover:border-transparent
//                   flex items-center justify-center shrink-0 transition-colors duration-500"
//                 >
//                   {f.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">{f.title}</h3>
//                   <p className="text-gray-600 leading-relaxed">{f.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="relative">
//           <Image
//             src="/security-1.jpeg"
//             alt="Security Guard"
//             width={700}
//             height={500}
//             className="w-full h-full object-cover"
//           />

//           {/* Stats overlay (optional) */}
//           {/*
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="grid grid-cols-2 grid-rows-2 bg-[#1d3557]/95 text-white text-center divide-x divide-y divide-white/20">
//               {stats.map((stat, i) => (
//                 <div
//                   key={i}
//                   className="px-12 py-10 flex flex-col items-center justify-center"
//                 >
//                   <h3
//                     ref={(el) => (statRefs.current[i] = el)}
//                     className="text-3xl md:text-4xl font-bold"
//                   >
//                     0
//                   </h3>
//                   <p className="text-sm md:text-base mt-1">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           */}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import {
  FaUniversity,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaVideo,
  FaEye,
  FaHandshake,
} from "react-icons/fa";
import Image from "next/image";

export default function WhyUsSection() {
  const features = [
    {
      icon: <FaUniversity size={20} />,
      title: "Own Training Academy",
      desc: "We operate a two-acre academy with 300+ trainee capacity, ensuring rigorous in-house training.",
    },
    {
      icon: <FaChalkboardTeacher size={20} />,
      title: "Expert Faculty",
      desc: "Our trainers include retired army officers, law enforcement experts, and certified security professionals.",
    },
    {
      icon: <FaUserGraduate size={20} />,
      title: "Holistic Training",
      desc: "Training covers law, etiquette, hygiene, personal development, and modern security practices.",
    },
    {
      icon: <FaVideo size={20} />,
      title: "Cutting-Edge Practices",
      desc: "Exposure to CCTV monitoring, metal detectors, and real-world scenarios like crowd management.",
    },
    {
      icon: <FaEye size={20} />,
      title: "Regular Monitoring",
      desc: "Surveillance teams conduct inspections to ensure guards remain disciplined and vigilant.",
    },
    {
      icon: <FaHandshake size={20} />,
      title: "Strong Values",
      desc: "Loyalty, honesty, and integrity are the pillars of our service philosophy.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="custom-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-primary/20 text-primary rounded-full text-xs font-semibold px-4 py-2 uppercase tracking-wide inline-block mb-4">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Why Choose Our Security Services
          </h2>
          <p className="text-gray-600 mb-12 max-w-lg">
            We are committed to delivering reliable, professional, and
            affordable security services that ensure safety, trust, and peace of
            mind for our clients.
          </p>

          <div className="space-y-10">
            {features.map((f, i) => (
              <div key={i} className="flex items-start space-x-5 group">
                <div
                  className="w-12 h-12 border-2 border-primary text-primary 
                  group-hover:bg-primary group-hover:text-white 
                  group-hover:border-transparent 
                  flex items-center justify-center shrink-0 transition-colors duration-500"
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <Image
            src="/security-1.jpeg"
            alt="Security Guard"
            width={1200}
            height={1200}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
