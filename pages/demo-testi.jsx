import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import TestimonialPageSection from "@/components/TestimonialPageSection";

export default function TestimonialPage() {
  return (
    <div className="relative w-full">
      <HeroSection
        hero={{
          title: "Testimonials",
          subtitle: "Real stories from our valued plot owners",
          backgroundImage: "/testimonials/testimonials-bg.jpg",
        }}
      />

      <Testimonial />
    </div>
  );
}

import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaQuoteLeft,
  FaShieldAlt,
  FaHandshake,
  FaChartLine,
  FaFileSignature,
  FaHome,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Anondo Housing Society",
    image: "/testimonials/owner-01.jpg",
    tag: "বিশ্বাস",
    quote:
      "কিছু কিছু সোশ্যাল মিডিয়া না জেনে প্লটের বিপক্ষে অনেক কিছু বলে। আমরা দেশের বাইরে থাকাকালীন কিছুটা চিন্তিত ছিলাম। কিন্তু পরে খুঁজে দেখলাম, এগুলো সত্য নয়; হয়তো কারো প্ররোচনায় বা নিজেদের স্বার্থে এসব করা হচ্ছে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Residential Plot Owner",
    image: "/testimonials/owner-02.jpg",
    tag: "নিজস্ব ঠিকানা",
    quote:
      "আমি এখানে থাকার মতো একটি ব্যবস্থা করেছি। এখানে বিভিন্ন ফলজ গাছ আছে—আম, কাঁঠাল, লিচুসহ অনেক ফলের গাছ। ছোট একটি পুকুরেরও ব্যবস্থা করেছি। এখন বাড়ি বানানোর পরিকল্পনা করছি।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Long-term Investor",
    image: "/testimonials/owner-03.jpg",
    tag: "ভ্যালু গ্রোথ",
    quote:
      "আমি ২০১২ সালের দিকে প্লটটি কিনেছি। তখন এক বিঘা জমির জন্য প্রায় এক কোটি টাকা ব্যয় হয়েছিল। বর্তমানে শুনছি প্রতি কাঠার মূল্য প্রায় ৪৫ লাখ টাকা।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Commercial & Residential Owner",
    image: "/testimonials/owner-04.jpg",
    tag: "বিনিয়োগ",
    quote:
      "আমি করোনার সময়ে প্লটটি কিনেছিলাম। তখনকার মার্কেট অনুযায়ী আমার কাছে এটি মানানসই মনে হয়েছে। ভবিষ্যতে এখান থেকে আমার প্রতিষ্ঠানের ব্যবসা গ্রো করার পরিকল্পনা আছে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Recent Plot Owner",
    image: "/testimonials/owner-05.jpg",
    tag: "কমিটমেন্ট",
    quote:
      "আমরা রিসেন্টলি আনন্দ পরিবারের সাথে যুক্ত হয়েছি। দুই মাসের মধ্যে প্লট রেজিস্ট্রি করে দেওয়ার যে কমিটমেন্ট ছিল, আনন্দ হাউজিং সোসাইটি সেটি ঠিক রেখেছে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Future Home Builder",
    image: "/testimonials/owner-06.jpg",
    tag: "বাড়ি নির্মাণ",
    quote:
      "আমি ইনশাআল্লাহ শিগগিরই চেষ্টা করব বাড়ি বানানোর জন্য। আনন্দ হাউজিংয়ের পরিবেশ ও সার্ভিস আমার কাছে ভালো লেগেছে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Land Value Growth",
    image: "/testimonials/owner-07.jpg",
    tag: "মূল্য বৃদ্ধি",
    quote:
      "২০২৪ সালে আমার জায়গার মূল্য ছিল ২ কোটি ৪ লাখ টাকা। বর্তমানে ২০২৬ সালে আমাদের জায়গার মূল্য হয়েছে ২ কোটি ৫৪ লাখ টাকা।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Satisfied Client",
    image: "/testimonials/owner-08.jpg",
    tag: "সার্ভিস",
    quote:
      "আনন্দ হাউজিং সার্ভিসে আমি খুবই আনন্দিত। তারা খুবই ফ্রেন্ডলি। সব সময় কো-অপারেট করে এবং যা তথ্য জানতে চাই, তা দিয়ে সহযোগিতা করে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Plot Handover Completed",
    image: "/testimonials/owner-09.jpg",
    tag: "হস্তান্তর",
    quote:
      "আমার কাছে আনন্দ হাউজিং সোসাইটির সার্ভিসটা অনেক ভালো লেগেছে। কারণ আমার সাথে তারা যে কমিটমেন্ট দিয়েছিল, সেটি সম্পূর্ণ পূরণ করেছে। আমার প্লট আমাকে বুঝিয়ে দিয়েছে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Document Verified Owner",
    image: "/testimonials/owner-10.jpg",
    tag: "ডকুমেন্ট",
    quote:
      "আনন্দ হাউজিং থেকে আমি সমস্ত কাগজপত্রসহ আমার প্লট বুঝে নিয়েছি। তাদের সহযোগিতা ও সার্ভিস আমার কাছে ভালো লেগেছে।",
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

function FeaturedPrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous testimonial"
      className="absolute left-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition hover:bg-primary lg:flex"
    >
      <FaChevronLeft className="text-sm" />
    </button>
  );
}

function FeaturedNextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next testimonial"
      className="absolute right-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition hover:bg-primary lg:flex"
    >
      <FaChevronRight className="text-sm" />
    </button>
  );
}

function Testimonial() {
  const featuredSliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    prevArrow: <FeaturedPrevArrow />,
    nextArrow: <FeaturedNextArrow />,
    appendDots: (dots) => <ul className="custom-dots">{dots}</ul>,
    customPaging: () => (
      <button type="button" className="custom-dot-container">
        <span className="custom-dot" />
      </button>
    ),
  };

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ fontFamily: '"Nirmala UI", Arial, sans-serif' }}
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Featured Testimonial Slider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          //   className="featured-testimonial-slider mt-16 overflow-hidden rounded-[2rem] bg-secondary shadow-[0_35px_110px_rgba(0,114,188,0.25)]"
          className="featured-testimonial-slider relative mt-16 rounded-[2rem] overflow-visible"
        >
          <Slider {...featuredSliderSettings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-1">
                <div className="overflow-hidden rounded-[2rem] bg-secondary">
                  <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
                    {/* Left Image */}
                    {/* <div className="relative min-h-[360px] lg:min-h-[520px]">
                      <Image
                        src={item.image}
                        alt={`${item.role} testimonial`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent lg:bg-gradient-to-r lg:from-secondary/85 lg:via-secondary/20 lg:to-transparent" />

                      <div className="absolute left-6 top-6 rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_14px_35px_rgba(246,133,33,0.35)]">
                        {item.tag}
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                          Featured Story
                        </p>

                        <h3 className="mt-2 text-2xl font-bold leading-snug">
                          {item.role}
                        </h3>
                      </div>
                    </div> */}

                    <div className="relative min-h-[360px] lg:min-h-[520px]">
                      <Image
                        src={item.image}
                        alt={`${item.role} testimonial`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover brightness-[1.03] contrast-[1.04] saturate-[1.05]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent lg:bg-gradient-to-r lg:from-secondary/35 lg:via-secondary/10 lg:to-transparent" />

                      <div className="absolute left-6 top-6 rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_14px_35px_rgba(246,133,33,0.35)]">
                        {item.tag}
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/20 bg-black/20 p-5 text-white backdrop-blur-md">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                          Featured Story
                        </p>

                        <h3 className="mt-2 text-2xl font-bold leading-snug">
                          {item.role}
                        </h3>
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                      <div className="absolute right-8 top-8 hidden text-[120px] font-black leading-none text-white/5 lg:block">
                        ”
                      </div>

                      <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[0_18px_45px_rgba(246,133,33,0.35)]">
                        <FaQuoteLeft className="text-2xl" />
                      </div>

                      <p className="relative text-xl font-medium leading-10 text-white sm:text-2xl sm:leading-[3.1rem]">
                        “{item.quote}”
                      </p>

                      <div className="mt-9 flex items-center gap-4 border-t border-white/15 pt-6">
                        {/* <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-white/40 bg-white/10">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="h-full w-full object-cover"
                          />
                        </div> */}

                        <div>
                          <h4 className="text-lg font-bold text-white">
                            {item.name}
                          </h4>
                          <p className="mt-1 text-sm text-white/70">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

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
            স্বচ্ছ ডকুমেন্ট, প্রতিশ্রুত সেবা এবং বাস্তব অভিজ্ঞতার ভিত্তিতে আনন্দ
            হাউজিং সোসাইটি আপনার নিরাপদ ভবিষ্যৎ ঠিকানার অংশীদার।
          </p>

          <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-[0_16px_35px_rgba(246,133,33,0.30)] transition-all transform duration-500 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              যোগাযোগ করুন
              <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
            </a>

            <a
              href="/projects"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-secondary px-8 py-4 text-sm font-bold text-white shadow-[0_16px_35px_rgba(0,114,188,0.25)] transition-all transform duration-500 hover:-translate-y-0.5 hover:bg-secondary/90"
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
