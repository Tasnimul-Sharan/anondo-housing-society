"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaShieldAlt,
  FaHandshake,
  FaChartLine,
  FaFileSignature,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";

const testimonials = [
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Anondo Housing Society",
    image: "/testimonials/owner-01.jpg",
    tag: "বিশ্বাস",
    quote:
      "কিছু কিছু সোশ্যাল মিডিয়া না জেনে প্লটের বিপক্ষে অনেক কিছু বলে। আমরাও প্রথমে চিন্তিত ছিলাম, কিন্তু পরে খুঁজে দেখলাম এগুলো সত্য নয়। আনন্দ হাউজিং সম্পর্কে আমাদের আস্থা আরও বেড়েছে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Residential Plot Owner",
    image: "/testimonials/owner-02.jpg",
    tag: "নিজস্ব ঠিকানা",
    quote:
      "আমি এখানে থাকার মতো একটি ব্যবস্থা করেছি। ফলজ গাছ, ছোট পুকুরসহ সুন্দর পরিবেশ তৈরি করেছি। এখন ইনশাআল্লাহ দ্রুত বাড়ি করার পরিকল্পনা আছে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Long-term Investor",
    image: "/testimonials/owner-03.jpg",
    tag: "ভ্যালু গ্রোথ",
    quote:
      "২০১২ সালের দিকে প্লট কিনেছিলাম। তখন এক বিঘার জন্য প্রায় এক কোটি টাকা ব্যয় হয়েছিল। বর্তমানে শুনছি প্রতি কাঠার মূল্য অনেক বেড়েছে—এটা আমাদের জন্য বড় অর্জন।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Commercial & Residential Owner",
    image: "/testimonials/owner-04.jpg",
    tag: "বিনিয়োগ",
    quote:
      "করোনার সময়ে আমি আনন্দ হাউজিং থেকে কমার্শিয়াল ও রেসিডেনশিয়াল প্লট কিনেছি। ভবিষ্যতে এখান থেকেই আমার প্রতিষ্ঠানের ব্যবসা গ্রো করার পরিকল্পনা আছে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Recent Plot Owner",
    image: "/testimonials/owner-05.jpg",
    tag: "কমিটমেন্ট",
    quote:
      "আমরা রিসেন্টলি আনন্দ পরিবারের সাথে যুক্ত হয়েছি। দুই মাসের মধ্যে প্লট রেজিস্ট্রি করে দেওয়ার যে কমিটমেন্ট ছিল, আনন্দ হাউজিং সেটি ঠিক রেখেছে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Satisfied Client",
    image: "/testimonials/owner-06.jpg",
    tag: "সার্ভিস",
    quote:
      "আনন্দ হাউজিং সার্ভিসে আমি খুবই আনন্দিত। তারা খুব ফ্রেন্ডলি এবং সব সময় সহযোগিতা করে। যেকোনো তথ্য জানতে চাইলে তারা দ্রুত সহযোগিতা করে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Plot Handover Completed",
    image: "/testimonials/owner-07.jpg",
    tag: "হস্তান্তর",
    quote:
      "আমার সাথে যে কমিটমেন্ট করা হয়েছিল, তারা তা সম্পূর্ণ পূরণ করেছে। আমার প্লট আমাকে বুঝিয়ে দিয়েছে এবং আমি বাউন্ডারি করে বুঝে নিয়েছি।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Document Verified Owner",
    image: "/testimonials/owner-08.jpg",
    tag: "ডকুমেন্ট",
    quote:
      "আনন্দ হাউজিং থেকে আমি সমস্ত কাগজপত্রসহ আমার প্লট বুঝে নিয়েছি। তাদের সার্ভিস ও সহযোগিতা আমার কাছে ভালো লেগেছে।",
  },
];

const highlights = [
  {
    icon: FaShieldAlt,
    title: "স্বচ্ছতা",
    text: "তথ্য, ডকুমেন্ট ও বাস্তব অভিজ্ঞতার ভিত্তিতে আস্থা তৈরি।",
  },
  {
    icon: FaHandshake,
    title: "কমিটমেন্ট",
    text: "প্রতিশ্রুতি অনুযায়ী প্লট বুঝিয়ে দেওয়ার অভিজ্ঞতা।",
  },
  {
    icon: FaFileSignature,
    title: "ডকুমেন্টেশন",
    text: "কাগজপত্রসহ জমি বুঝিয়ে দেওয়ার প্রক্রিয়া।",
  },
  {
    icon: FaChartLine,
    title: "ভ্যালু গ্রোথ",
    text: "দীর্ঘমেয়াদী বিনিয়োগে জমির মূল্য বৃদ্ধির সম্ভাবনা।",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function TestimonialSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#f7fbff] py-20 sm:py-24 lg:py-28"
      style={{ fontFamily: '"Nirmala UI", Arial, sans-serif' }}
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-secondary/10 bg-white px-5 py-2 shadow-[0_12px_40px_rgba(0,114,188,0.08)]">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-secondary sm:text-sm">
              Plot Owner Testimonials
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-secondary sm:text-4xl lg:text-5xl">
            প্লট মালিকদের বাস্তব অভিজ্ঞতা,
            <br className="hidden sm:block" />
            বিশ্বাস ও সন্তুষ্টির গল্প
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            আনন্দ হাউজিং সোসাইটির সম্মানিত প্লট মালিকদের মতামত আমাদের
            প্রতিশ্রুতি, স্বচ্ছতা এবং দীর্ঘমেয়াদী আস্থার বাস্তব প্রতিফলন।
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="group relative overflow-hidden rounded-3xl border border-white bg-white p-6 shadow-[0_20px_70px_rgba(0,114,188,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(0,114,188,0.16)]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20" />

                <div className="relative mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-secondary text-white shadow-[0_16px_35px_rgba(0,114,188,0.25)] transition duration-300 group-hover:bg-primary">
                  <Icon className="text-lg" />
                </div>

                <h3 className="relative text-lg font-bold text-secondary">
                  {item.title}
                </h3>

                <p className="relative mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Testimonial */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-secondary shadow-[0_35px_110px_rgba(0,114,188,0.25)]"
        >
          <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[360px] lg:min-h-[520px]">
              <Image
                src="/testimonials/featured-owner.jpg"
                alt="Anondo Housing Society plot owner testimonial"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent lg:bg-gradient-to-r lg:from-secondary/80 lg:via-transparent lg:to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                  Featured Story
                </p>

                <h3 className="mt-2 text-2xl font-bold leading-snug">
                  আনন্দ হাউজিংয়ের সাথে আস্থার যাত্রা
                </h3>
              </div>
            </div>

            <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="absolute right-8 top-8 hidden text-[120px] font-black leading-none text-white/5 lg:block">
                ”
              </div>

              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_18px_45px_rgba(246,133,33,0.35)]">
                <FaQuoteLeft className="text-2xl" />
              </div>

              <p className="relative text-xl font-medium leading-10 text-white sm:text-2xl sm:leading-[3.1rem]">
                “আনন্দ হাউজিং সোসাইটির সার্ভিস আমার কাছে অনেক ভালো লেগেছে।
                তারা যে কমিটমেন্ট দিয়েছিল, সেটি সম্পূর্ণ পূরণ করেছে। আমার
                প্লট আমাকে বুঝিয়ে দিয়েছে এবং আমি বাউন্ডারি করে বুঝে নিয়েছি।”
              </p>

              <div className="mt-9 flex items-center gap-4 border-t border-white/15 pt-6">
                <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-white/40 bg-white/10">
                  <Image
                    src="/testimonials/featured-owner.jpg"
                    alt="Plot owner"
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">
                    সম্মানিত প্লট মালিক
                  </h4>
                  <p className="mt-1 text-sm text-white/70">
                    Anondo Housing Society
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className="group relative overflow-hidden rounded-[1.8rem] border border-white bg-white p-4 shadow-[0_22px_80px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(0,114,188,0.18)]"
            >
              <div className="relative h-60 overflow-hidden rounded-[1.45rem] bg-slate-100">
                <Image
                  src={item.image}
                  alt={`${item.role} testimonial`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white shadow-[0_12px_30px_rgba(246,133,33,0.35)]">
                  {item.tag}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <p className="mt-1 text-sm font-medium text-white/75">
                    {item.role}
                  </p>
                </div>
              </div>

              <div className="px-2 pb-3 pt-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <FaQuoteLeft className="text-lg" />
                </div>

                <p className="text-[15px] leading-8 text-slate-700">
                  “{item.quote}”
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] border border-secondary/10 bg-white p-8 text-center shadow-[0_25px_90px_rgba(0,114,188,0.12)] sm:p-10 lg:p-12"
        >
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-secondary/10 blur-2xl" />

          <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-white shadow-[0_18px_45px_rgba(0,114,188,0.25)]">
            <FaHome className="text-2xl" />
          </div>

          <h3 className="relative text-2xl font-extrabold leading-tight text-secondary sm:text-3xl lg:text-4xl">
            আপনার স্বপ্নের প্লট, এখন আরও বেশি আস্থার সাথে
          </h3>

          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            স্বচ্ছ ডকুমেন্ট, প্রতিশ্রুত সেবা এবং বাস্তব অভিজ্ঞতার ভিত্তিতে
            আনন্দ হাউজিং সোসাইটি আপনার নিরাপদ ভবিষ্যৎ ঠিকানার অংশীদার।
          </p>

          <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-[0_16px_35px_rgba(246,133,33,0.30)] transition hover:-translate-y-0.5 hover:bg-[#dd7319]"
            >
              যোগাযোগ করুন
              <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
            </a>

            <a
              href="/projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-8 py-4 text-sm font-bold text-white shadow-[0_16px_35px_rgba(0,114,188,0.25)] transition hover:-translate-y-0.5 hover:bg-[#005f9d]"
            >
              প্রজেক্ট দেখুন
              <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}