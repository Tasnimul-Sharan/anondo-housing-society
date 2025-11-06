// "use client";
// import {
//   FaHeadset,
//   FaStar,
//   FaTimesCircle,
//   FaShieldAlt,
//   FaUserTie,
//   FaLock,
// } from "react-icons/fa";
// import SectionHeader from "./SectionHeader";

// // const advantages = [
// //   {
// //     id: 1,
// //     icon: <FaHeadset className="text-white text-xl" />,
// //     title: "24/7 Dedicated Support",
// //     desc: "Round-the-clock assistance and monitoring to keep you safe anytime, anywhere.",
// //     img: "/advantage/support.jpg", // headset/supervisor type image
// //   },
// //   {
// //     id: 2,
// //     icon: <FaStar className="text-white text-xl" />,
// //     title: "Trusted & Reliable",
// //     desc: "A proven track record of excellence with trusted security solutions nationwide.",
// //     img: "/advantage/trusted.jpeg", // award, star, handshake type image
// //   },
// //   {
// //     id: 3,
// //     icon: <FaTimesCircle className="text-white text-xl" />,
// //     title: "Rapid Response Team",
// //     desc: "Quick mobilization of highly trained teams for emergencies and urgent situations.",
// //     img: "/advantage/rapid-response.jpeg", // police, guard, running team
// //   },
// //   {
// //     id: 4,
// //     icon: <FaShieldAlt className="text-white text-xl" />,
// //     title: "Advanced Protection",
// //     desc: "Cutting-edge technology and modern strategies to ensure complete security.",
// //     img: "/advantage/protection.jpg",
// //   },
// //   {
// //     id: 5,
// //     icon: <FaUserTie className="text-white text-xl" />,
// //     title: "Professional Workforce",
// //     desc: "Disciplined, well-trained personnel dedicated to safeguarding people and assets.",
// //     img: "/advantage/workforce.jpeg", // guards, officers in uniform
// //   },
// //   {
// //     id: 6,
// //     icon: <FaLock className="text-white text-xl" />,
// //     title: "Guaranteed Confidentiality",
// //     desc: "We maintain the highest level of privacy and integrity for every client.",
// //     img: "/advantage/confidential.jpg", // lock, privacy, document
// //   },
// // ];

// const advantages = [
//   {
//     id: 1,
//     icon: <FaHeadset className="text-white text-xl" />,
//     title: "Round-the-Clock Support",
//     desc: "Our dedicated team provides 24/7 assistance and monitoring, ensuring immediate response and uninterrupted protection for every client.",
//     img: "/advantage/support.jpg",
//   },
//   {
//     id: 2,
//     icon: <FaStar className="text-white text-xl" />,
//     title: "Trusted & Reliable Service",
//     desc: "With a proven track record across residential, corporate, and industrial sectors, we deliver security solutions that clients can depend on.",
//     img: "/advantage/trusted.jpeg",
//   },
//   {
//     id: 3,
//     icon: <FaTimesCircle className="text-white text-xl" />,
//     title: "Rapid Emergency Response",
//     desc: "Highly trained teams are on standby for swift deployment during emergencies, ensuring safety, risk minimization, and peace of mind.",
//     img: "/advantage/rapid-response.jpeg",
//   },
//   {
//     id: 4,
//     icon: <FaShieldAlt className="text-white text-xl" />,
//     title: "Advanced Security Measures",
//     desc: "We combine modern technology, surveillance systems, and strategic methodologies to provide comprehensive, multi-layered protection.",
//     img: "/advantage/protection.jpg",
//   },
//   {
//     id: 5,
//     icon: <FaUserTie className="text-white text-xl" />,
//     title: "Professional & Trained Workforce",
//     desc: "Our disciplined personnel undergo rigorous training in safety, etiquette, legal compliance, and modern security practices to serve every client effectively.",
//     img: "/advantage/workforce.jpeg",
//   },
//   {
//     id: 6,
//     icon: <FaLock className="text-white text-xl" />,
//     title: "Confidentiality & Integrity",
//     desc: "We maintain the highest standards of privacy, discretion, and ethical conduct, safeguarding client information and maintaining trust.",
//     img: "/advantage/confidential.jpg",
//   },
// ];

// export default function AdvantagesSection() {
//   return (
//     <section className="bg-off_white py-20">
//       <div className="max-w-7xl mx-auto text-center px-6 md:px-0">
//         <SectionHeader
//           subtitle="Dedicated to Excellence in Security"
//           title="Our Advantages"
//           details="We ensure your safety, privacy, and peace of mind with professional services and advanced solutions."
//         />

//         <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {advantages.map((adv) => (
//             <div key={adv.id} className="bg-white rounded overflow-hidden">
//               <div className="relative">
//                 <img
//                   src={adv.img}
//                   alt={adv.title}
//                   className="w-full h-60 object-cover"
//                 />
//                 {/* Icon box overlapping image and content */}
//                 <div className="absolute -bottom-6 left-6 bg-primary w-14 h-14 flex items-center justify-center">
//                   {adv.icon}
//                 </div>
//               </div>

//               {/* Text content */}
//               <div className="p-6 pt-10 text-left">
//                 <h3 className="font-bold text-lg text-gray-900">{adv.title}</h3>
//                 <p className="text-gray-600 mt-2">{adv.desc}</p>
//                 <a
//                   href="#"
//                   className="mt-4 inline-block text-sm font-semibold text-gray-900 hover:text-primary"
//                 >
//                   READ MORE →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import {
  FaUniversity,
  FaChalkboardTeacher,
  FaUserShield,
  FaVideo,
  FaSearch,
  FaHandshake,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const advantages = [
  {
    id: 1,
    icon: <FaUniversity className="text-white text-xl" />,
    title: "Own Training Academy",
    desc: "Unlike most companies, we don’t rely on external trainers. Our two-acre academy with 300+ trainee capacity ensures consistent in-house quality assurance.",
    img: "/advantage/training-academy.jpg", // academy/campus type image
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher className="text-white text-xl" />,
    title: "Professional Trainers",
    desc: "Our faculty includes retired army officers, law enforcement specialists, martial arts instructors, and certified security professionals.",
    img: "/advantage/pro-trainers.jpg", // army officer or trainer image
  },
  {
    id: 3,
    icon: <FaUserShield className="text-white text-xl" />,
    title: "Holistic Training",
    desc: "Beyond physical skills, our program includes legal knowledge, etiquette, hygiene, and personal development, making our guards versatile and adaptable.",
    img: "/advantage/holistic-training.jpg", // training or discipline photo
  },
  {
    id: 4,
    icon: <FaVideo className="text-white text-xl" />,
    title: "Cutting-Edge Practices",
    desc: "Guards are trained in CCTV surveillance, metal detectors, and modern screening equipment with exposure to real-world scenarios like event security and crowd management.",
    img: "/advantage/modern-security.jpg", // CCTV, monitoring
  },
  {
    id: 5,
    icon: <FaSearch className="text-white text-xl" />,
    title: "Regular Monitoring",
    desc: "Deployment is not the end — our dedicated surveillance team ensures guards remain vigilant and effective throughout their duty period.",
    img: "/advantage/monitoring.jpg", // monitoring/surveillance
  },
  {
    id: 6,
    icon: <FaHandshake className="text-white text-xl" />,
    title: "Strong Core Values",
    desc: "Loyalty, honesty, and integrity are not just words — they are the pillars of our service, ensuring trust and long-term client relationships.",
    img: "/advantage/values.jpg", // handshake, trust symbol
  },
];

export default function AdvantagesSection() {
  return (
    <section className="bg-off_white py-20">
      <div className="max-w-7xl mx-auto text-center px-6 md:px-0">
        <SectionHeader
          subtitle="Dedicated to Excellence in Security"
          title="Our Competitive Advantages"
          details="Anondo Universal Security Services Ltd stands apart with a unique blend of training, professionalism, and integrity."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div key={adv.id} className="bg-white rounded overflow-hidden">
              <div className="relative">
                <img
                  src={adv.img}
                  alt={adv.title}
                  className="w-full h-60 object-cover"
                />
                {/* Icon box overlapping */}
                <div className="absolute -bottom-6 left-6 bg-primary w-14 h-14 flex items-center justify-center">
                  {adv.icon}
                </div>
              </div>

              {/* Text */}
              <div className="p-6 pt-10 text-left">
                <h3 className="font-bold text-lg text-gray-900">{adv.title}</h3>
                <p className="text-gray-600 mt-2">{adv.desc}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-gray-900 hover:text-primary"
                >
                  READ MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
