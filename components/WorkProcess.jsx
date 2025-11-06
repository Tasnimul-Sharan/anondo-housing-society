"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Holistic Assessment",
    desc: "We begin by understanding each resident’s physical, mental, and emotional needs through a complete wellness evaluation.",
    icon: "/work_progress/strategy.png",
  },
  {
    id: 2,
    title: "Personalized Care Plan",
    desc: "Our experts design a tailored program with healthcare, nutrition, and lifestyle support to ensure dignity and independence.",
    icon: "/work_progress/process.png",
  },
  {
    id: 3,
    title: "Wellness & Engagement",
    desc: "From yoga and therapy sessions to cultural evenings and social clubs, residents enjoy a vibrant and fulfilling lifestyle.",
    icon: "/work_progress/operation.png",
  },
  {
    id: 4,
    title: "Continuous Support",
    desc: "We provide 24/7 medical, emotional, and community care, ensuring every senior lives with peace, joy, and security.",
    icon: "/work_progress/continuous.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WorkProcess() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/work_progress/work-bg.jpg"
          alt="Background Pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto text-center px-6">
        <motion.p
          className="text-primary uppercase tracking-widest text-sm font-medium"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.p>

        <motion.h2
          className="md:text-4xl text-3xl font-bold mt-2 mb-14 text-secondary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          The Anondo Baari Way to <br /> Care & Wellness
        </motion.h2>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={item}
              className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-12 relative text-center lg:text-left"
            >
              {/* Icon */}
              <div className="relative flex-shrink-0">
                <div className="border-2 border-primary border-opacity-30 rounded-md w-40 h-40 flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={64}
                    height={64}
                  />
                </div>
                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2
                  lg:bottom-auto lg:left-auto lg:-right-6 lg:top-1/2
                  lg:-translate-y-1/2 lg:translate-x-0
                  bg-primary font-outline-work-process text-white
                  w-12 h-12 md:w-14 md:h-14
                  rounded-full flex items-center justify-center
                  font-semibold text-lg md:text-xl"
                >
                  {String(step.id).padStart(2, "0")}
                </div>
              </div>

              {/* Text */}
              <div className="max-w-sm">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}