// "use client";
// import {
//   FaShieldAlt,
//   FaUserSecret,
//   FaBroadcastTower,
//   FaEye,
//   FaLock,
//   FaExclamationTriangle,
//   FaHome,
//   FaBuilding,
//   FaIndustry,
//   FaMoneyBillWave,
//   FaCalendarCheck,
//   FaUserShield,
//   FaUserTie,
//   FaChalkboardTeacher,
//   FaArrowRight,
//   FaUsers,
// } from "react-icons/fa";
// import SectionHeader from "./SectionHeader";
// import Image from "next/image";

// const services = [
//   {
//     title: "Household Security",
//     icon: <FaHome className="w-5 h-5" />,
//     description:
//       "Deployment of professional guards for residential houses, apartments, and housing societies. Trained to maintain safety with polite etiquette.",
//   },
//   {
//     title: "Office Security",
//     icon: <FaBuilding className="w-5 h-5" />,
//     description:
//       "Round-the-clock vigilance for corporate offices. Guards handle access control, visitor screening, and CCTV monitoring with professionalism.",
//   },
//   {
//     title: "Factory & Industrial Security",
//     icon: <FaIndustry className="w-5 h-5" />,
//     description:
//       "Specialized factory guards trained in access control, theft prevention, shift-change management, and goods verification.",
//   },
//   {
//     title: "Crowd Control",
//     icon: <FaUsers className="w-5 h-5" />,
//     description:
//       "Techniques to manage large gatherings safely. Preventing stampedes, violence, or disorder during events or emergencies.",
//   },
//   {
//     title: "Money Transfer Security",
//     icon: <FaMoneyBillWave className="w-5 h-5" />,
//     description:
//       "Armed escorts for safe transfer of cash and valuables. Guards trained in convoy protection and high-risk vigilance.",
//   },
//   {
//     title: "Event Management & Security",
//     icon: <FaCalendarCheck className="w-5 h-5" />,
//     description:
//       "Security for concerts, rallies, and corporate events. Guards trained in crowd control, VIP protection, and evacuation protocols.",
//   },
//   {
//     title: "Armed & Unarmed Guards",
//     icon: <FaUserShield className="w-5 h-5" />,
//     description:
//       "Deployment of licensed armed guards and unarmed guards skilled in martial arts and self-defence, based on client needs.",
//   },
//   {
//     title: "Bodyguard Services",
//     icon: <FaUserTie className="w-5 h-5" />,
//     description:
//       "Close protection for VIPs, executives, and public figures. Bodyguards trained in tactical positioning and emergency response.",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="relative py-20 bg-white">
//       <div className="custom-container mx-auto">
//         <SectionHeader
//           subtitle="Our Services"
//           title="Professional Security Solutions"
//           details="We deliver tailored security and protection services with highly trained personnel and modern technology to safeguard people, assets, and businesses."
//         />

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
//           <div className="flex flex-col gap-10">
//             {services.slice(0, 4).map((service, i) => (
//               <div key={i} className="flex items-start gap-4 text-left group">
//                 <div className="p-3 border-2 border-primary rounded-md text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
//                   {service.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-gray-900">{service.title}</h3>
//                   <p className="text-gray-500 text-sm mt-2">
//                     {service.description}
//                   </p>
//                   <div className="relative mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group cursor-pointer">
//                     See Details <FaArrowRight className="w-3 h-3" />
//                     <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center">
//             <Image
//               src="/services/security-guard.jpeg"
//               alt="Security Guard"
//               width={1200}
//               height={1600}
//               priority
//               className="w-full h-full object-cover rounded-md"
//             />
//           </div>

//           <div className="flex flex-col gap-10">
//             {services.slice(4).map((service, i) => (
//               <div key={i} className="flex items-start gap-4 text-left group">
//                 <div className="p-3 border-2 border-primary rounded-md text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
//                   {service.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-gray-900">{service.title}</h3>
//                   <p className="text-gray-500 text-sm mt-2">
//                     {service.description}
//                   </p>
//                   <div className="relative mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group cursor-pointer">
//                     See Details <FaArrowRight className="w-3 h-3" />
//                     <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import {
  FaShieldAlt,
  FaUserSecret,
  FaBroadcastTower,
  FaEye,
  FaLock,
  FaExclamationTriangle,
  FaHome,
  FaBuilding,
  FaIndustry,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaUserShield,
  FaUserTie,
  FaChalkboardTeacher,
  FaArrowRight,
  FaUsers,
  FaVideo,
  FaWarehouse,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const services = [
  {
    title: "Household Security",
    icon: <FaHome className="w-5 h-5" />,
    description:
      "Deployment of professional guards for residential houses, apartments, and housing societies. Trained to maintain safety with polite etiquette.",
  },
  {
    title: "Office Security",
    icon: <FaBuilding className="w-5 h-5" />,
    description:
      "Round-the-clock vigilance for corporate offices. Guards handle access control, visitor screening, and CCTV monitoring with professionalism.",
  },
  {
    title: "Factory & Industrial Security",
    icon: <FaIndustry className="w-5 h-5" />,
    description:
      "Specialized factory guards trained in access control, theft prevention, shift-change management, and goods verification.",
  },
  {
    title: "Factory Access Security",
    icon: <FaWarehouse className="w-5 h-5" />,
    description:
      "Specialized training to handle opening and closing hours of factories. Managing entry of workers, vehicles, and goods during peak times.",
  },
  {
    title: "Crowd Control",
    icon: <FaUsers className="w-5 h-5" />,
    description:
      "Techniques to manage large gatherings safely. Preventing stampedes, violence, or disorder during events or emergencies.",
  },
  {
    title: "CCTV Surveillance",
    icon: <FaVideo className="w-5 h-5" />,
    description:
      "Hands-on training in monitoring live CCTV feeds. Identifying abnormal activity, recording, and reporting procedures.",
  },
  {
    title: "Money Transfer Security",
    icon: <FaMoneyBillWave className="w-5 h-5" />,
    description:
      "Armed escorts for safe transfer of cash and valuables. Guards trained in convoy protection and high-risk vigilance.",
  },
  {
    title: "Event Management & Security",
    icon: <FaCalendarCheck className="w-5 h-5" />,
    description:
      "Security for concerts, rallies, and corporate events. Guards trained in crowd control, VIP protection, and evacuation protocols.",
  },
  {
    title: "Armed & Unarmed Guards",
    icon: <FaUserShield className="w-5 h-5" />,
    description:
      "Deployment of licensed armed guards and unarmed guards skilled in martial arts and self-defence, based on client needs.",
  },
  {
    title: "Bodyguard Services",
    icon: <FaUserTie className="w-5 h-5" />,
    description:
      "Close protection for VIPs, executives, and public figures. Bodyguards trained in tactical positioning and emergency response.",
  },
];

export default function Services() {
  return (
    <section className="relative py-20 bg-white">
      <div className="custom-container mx-auto">
        <SectionHeader
          subtitle="Our Services"
          title="Professional Security Solutions"
          details="We deliver tailored security and protection services with highly trained personnel and modern technology to safeguard people, assets, and businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left column (first 5 services) */}
          <div className="flex flex-col gap-10">
            {services.slice(0, 5).map((service, i) => (
              <div key={i} className="flex items-start gap-4 text-left group">
                <div className="p-3 border-2 border-primary rounded-md text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {service.description}
                  </p>
                  <div className="relative mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group cursor-pointer">
                    See Details <FaArrowRight className="w-3 h-3" />
                    <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Image */}
          <div className="flex justify-center">
            <Image
              src="/services/security-guard.jpeg"
              alt="Security Guard"
              width={1200}
              height={1280}
              priority
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Right column (last 5 services) */}
          <div className="flex flex-col gap-10">
            {services.slice(5).map((service, i) => (
              <div key={i} className="flex items-start gap-4 text-left group">
                <div className="p-3 border-2 border-primary rounded-md text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {service.description}
                  </p>
                  <div className="relative mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all transform duration-500 group cursor-pointer">
                    See Details <FaArrowRight className="w-3 h-3" />
                    <span className="hover-line absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
