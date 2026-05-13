"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaUserTie,
} from "react-icons/fa";
import SectionBadge from "./SectionBadge";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

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
      "আমি করোনার টাইমে কিনছিলাম। তখনকার মার্কেট অনুপাতে যেটা কিনছি আমার মনে হইছে মানানসই। আমি চিটাগাং থেকে এসেছি আমার ভবিষ্যতে প্রতিষ্ঠানের ব্যবসা এখান থেকে গ্রো করার প্ল্যান আছে। তাই আমি আনন্দ হউজিং থেকে কমার্শিয়াল ও রেসিডেনশিয়াল প্লট কিনেছি। ",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Commercial & Residential Owner",
    image: "/testimonials/owner-04.jpg",
    tag: "বিনিয়োগ",
    quote:
      "আমরা রিসেন্টলি আনন্দ পরিবারের সাথে যুক্ত হইছি। আমাদের প্লটটা বুঝে পাইছি দুই মাস আগে। যে কমিটমেন্ট ছিল যে,আমাদের দুই মাসের মধ্যে প্লটটা রেজিস্ট্রি করে দেওয়ার এবং আনন্দ হউজিং সোসাইটি কমিটমেন্টটা টা ঠিক রাখছে । আনন্দ হউজিং এর এই কমিটমেন্টটা আমার খুব ভালো লাগছে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Recent Plot Owner",
    image: "/testimonials/owner-05.jpg",
    tag: "কমিটমেন্ট",
    quote:
      "আমি ইনশাআল্লাহ শিগগিরই চেষ্টা করব বাড়ি বানানোর জন্য। আনন্দ হাউজিংয়ের পরিবেশ ও সার্ভিস আমার কাছে ভালো লেগেছে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Future Home Builder",
    image: "/testimonials/owner-06.jpg",
    tag: "বাড়ি নির্মাণ",
    quote:
      "২০২৪ সালে আমার জায়গার মূল্য ছিল ২ কোটি ৪ লাখ টাকা। বর্তমানে ২০২৬ সালে আমাদের জায়গার মূল্য হয়েছে ২ কোটি ৫৪ লাখ টাকা।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Land Value Growth",
    image: "/testimonials/owner-07.jpg",
    tag: "মূল্য বৃদ্ধি",
    quote:
      "আনন্দ হাউজিং সার্ভিসে আমি খুবই আনন্দিত। তারা ভেরি ফ্রেন্ডলি। সব সময় কো অপারেট করে যা তথ্য জানতে চায় তথ্য দিয়ে সহযোগিতা করে। ",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Satisfied Client",
    image: "/testimonials/owner-08.jpg",
    tag: "সার্ভিস",
    quote:
      "আমার কাছে আনন্দ হাউজিং সোসাইটির এই সার্ভিসটা অনেক ভালো লাগছে কারণ আমার যে কমিটমেন্ট আমার সাথে উনারা দিয়েছিল সম্পূর্ণ পূরণ করছে  এবং আমার প্লট আমাকে বুঝিয়ে দিছে এবং আমি বাউন্ডারি করে বুঝে নিছি। ",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Plot Handover Completed",
    image: "/testimonials/owner-09.jpg",
    tag: "হস্তান্তর",
    quote:
      "আনন্দ হাউজিং থেকে আমি সমস্ত কাগজপত্রসহ আমার প্লট বুঝে নিয়েছি। তাদের সহযোগিতা ও সার্ভিস আমার কাছে ভালো লেগেছে।",
  },
  {
    name: "সম্মানিত প্লট মালিক",
    role: "Document Verified Owner",
    image: "/testimonials/owner-10.jpg",
    tag: "ডকুমেন্ট",
    quote:
      "আমি 2012 দিকে প্লটটা কিনছি তখন এটা আপনার হল এক বিঘা জমির জন্য আমাকে ব্যয় করতে হইছে এক কোটি টাকার মত তো সেই হিসাবে পার কাটা ৮ লাখ ৭৫ করে পরে তো এখন শুনতেছেন বর্তমান এটার ভ্যালু নাকি 45 লাখ টাকা পার কাটা আছে। ",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function PrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous testimonial"
      className="absolute -left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-secondary/10 bg-white text-primary/90 shadow-[0_18px_45px_rgba(0,114,188,0.20)] transition-all duration-300 hover:bg-secondary hover:text-white xl:flex"
    >
      <FaChevronLeft className="text-sm" />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next testimonial"
      className="absolute -right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-secondary/10 bg-white text-primary/90 shadow-[0_18px_45px_rgba(0,114,188,0.20)] transition-all duration-300 hover:bg-secondary hover:text-white xl:flex"
    >
      <FaChevronRight className="text-sm" />
    </button>
  );
}

function TestimonialImage({ src, alt }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-primary">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
          <FaUserTie className="text-3xl" />
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      className="object-cover transition duration-700 group-hover:scale-105"
      onError={() => setHasError(true)}
    />
  );
}

export default function TestimonialSection() {
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3600,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],

    appendDots: (dots) => <ul className="custom-dots">{dots}</ul>,

    customPaging: () => (
      <button type="button" className="custom-dot-container">
        <span className="custom-dot" />
      </button>
    ),
  };
  return (
    <section
      className="relative overflow-hidden bg-off_white py-20 sm:py-24 lg:py-28"
      style={{ fontFamily: '"Nirmala UI", Arial, sans-serif' }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <SectionBadge label="প্লট মালিকদের মতামত" icon={FaQuoteLeft} />

            {/* Title */}
            <h2 className="max-w-3xl text-center text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              <span className="block leading-[1.25]">প্লট মালিকদের আস্থা,</span>
              <span className="mt-1 block leading-tight sm:mt-2">
                প্রতিশ্রুতির প্রমাণ
              </span>
            </h2>

            <div className="mx-auto mt-6 flex w-full max-w-24 items-center justify-center gap-3">
              <span className="h-[2px] flex-1 bg-primary/80" />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              সম্মানিত প্লট মালিকদের বাস্তব অভিজ্ঞতা আমাদের স্বচ্ছতা, কমিটমেন্ট
              এবং দায়িত্বশীল সেবার পরিচয় বহন করে।
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="home-testimonial-slider relative mt-14"
        >
          <Slider {...sliderSettings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-3 pb-4 pt-2">
                <article className="group flex h-full min-h-[560px] flex-col overflow-hidden rounded-[1.8rem] border border-white bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
                  <div className="relative h-64 overflow-hidden rounded-[1.45rem] bg-slate-100">
                    <TestimonialImage
                      src={item.image}
                      alt={`${item.role} testimonial`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white shadow-md">
                      {item.tag}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-white/75">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-2 pb-4 pt-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                      <FaQuoteLeft className="text-lg" />
                    </div>

                    <p className="text-[15px] leading-8 text-slate-700">
                      “{item.quote}”
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
