"use client";
import SectionHeader from "./SectionHeader";
import {
  FaUniversity,
  FaUserTie,
  FaBookOpen,
  FaVideo,
  FaSearch,
  FaHandshake,
} from "react-icons/fa";

const advantages = [
  {
    icon: <FaUniversity className="text-primary size-6" />,
    title: "Own Training Academy",
    desc: "A 2-acre facility with 300+ capacity, ensuring in-house quality.",
  },
  {
    icon: <FaUserTie className="text-primary size-6" />,
    title: "Professional Trainers",
    desc: "Retired army officers, law enforcement experts, and certified instructors.",
  },
  {
    icon: <FaBookOpen className="text-primary size-6" />,
    title: "Holistic Training",
    desc: "Legal knowledge, etiquette, hygiene, and personal development.",
  },
  {
    icon: <FaVideo className="text-primary size-6" />,
    title: "Cutting-Edge Practices",
    desc: "CCTV, metal detectors, and real-world event security drills.",
  },
  {
    icon: <FaSearch className="text-primary size-6" />,
    title: "Regular Monitoring",
    desc: "Our own surveillance team checks guard performance during duty.",
  },
  {
    icon: <FaHandshake className="text-primary size-6" />,
    title: "Strong Values",
    desc: "Loyalty, honesty, and integrity guide everything we do.",
  },
];

// Split array into two halves for 2-column layout
export default function CompetitiveAdvantageSection() {
  const midpoint = Math.ceil(advantages.length / 2);
  const leftColumn = advantages.slice(0, midpoint);
  const rightColumn = advantages.slice(midpoint);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <SectionHeader
          subtitle="Competitive Advantage"
          title="Why Choose Anondo Universal"
          details="We go beyond basic security services by combining skilled personnel, advanced technology, and client-focused solutions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 mt-8">
          <div className="space-y-4">
            <p>
              Unlike most companies that focus only on manpower deployment, we
              offer a premium, holistic security solution.
            </p>
            <ul className="space-y-4">
              {leftColumn.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {item.icon}
                  <span>
                    <strong>{item.title}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <ul className="space-y-4">
              {rightColumn.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {item.icon}
                  <span>
                    <strong>{item.title}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
