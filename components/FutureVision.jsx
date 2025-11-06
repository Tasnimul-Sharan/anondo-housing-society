"use client";
import {
  FaUniversity,
  FaRobot,
  FaGlobeAsia,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";

export default function FutureVision() {
  const items = [
    {
      icon: <FaUniversity className="text-primary size-10" />,
      title: "Nationwide Training Centers",
      desc: "Expanding academies across Bangladesh to train more skilled guards and strengthen national safety capacity.",
    },
    {
      icon: <FaRobot className="text-primary size-10" />,
      title: "Technology Integration",
      desc: "AI-driven CCTV monitoring, biometric access control, and drone surveillance for next-generation security.",
    },
    {
      icon: <FaGlobeAsia className="text-primary size-10" />,
      title: "International Expansion",
      desc: "Preparing security professionals for global assignments, targeting the Middle East and Southeast Asia.",
    },
    {
      icon: <FaBriefcase className="text-primary size-10" />,
      title: "Corporate Security Consultancy",
      desc: "Offering risk assessment, disaster preparedness, and crisis management solutions beyond manpower deployment.",
    },
    {
      icon: <FaUsers className="text-primary size-10" />,
      title: "Community Security Programs",
      desc: "Training local youth in rural and urban areas to reduce unemployment while enhancing community security.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          subtitle="Future Vision"
          title="Our Vision for the Future"
          details="Anticipating tomorrow’s challenges with nationwide training, advanced technology, global expansion, and community-focused initiatives."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all transform duration-500"
            >
              <div className="flex justify-center items-center mb-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-lg text-gray-700 font-medium">
            Through these initiatives,{" "}
            <span className="text-primary font-bold">
              Anondo Universal Security Services Ltd
            </span>{" "}
            aims to become the benchmark for private security in Bangladesh —
            trusted both locally and internationally.
          </p>
        </div>
      </div>

      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
