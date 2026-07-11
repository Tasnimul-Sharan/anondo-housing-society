"use client";

import {
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaPlay,
  FaRegCalendarAlt,
  FaYoutube,
} from "react-icons/fa";
import SectionBadge from "@/components/SectionBadge";

export default function PlotRegistrationFestival() {
  const videoId = "inzHvkTzRdg";

  const videoUrl =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1` +
    `&mute=1` +
    `&loop=1` +
    `&playlist=${videoId}` +
    `&controls=1` +
    `&rel=0` +
    `&modestbranding=1` +
    `&playsinline=1`;

  return (
    <section
      id="plot-registration-festival"
      className="relative overflow-hidden bg-[#F9F9F9] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Heading Content */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="flex justify-center">
            <SectionBadge
              label="প্লট রেজিস্ট্রেশন উৎসব ২০২৬"
              icon={FaRegCalendarAlt}
            />
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-extrabold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
            প্লট রেজিস্ট্রেশন ও হস্তান্তর{" "}
            <span className="text-primary">উৎসব ২০২৬</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-primary" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            আনন্দ হাউজিং সোসাইটির প্লট রেজিস্ট্রেশন ও হস্তান্তর উৎসবের স্মরণীয়
            আয়োজন, যেখানে আস্থা, অর্জন এবং নতুন মালিকানার আনন্দ একসাথে উদযাপিত
            হয়েছে।
          </p>
        </div>

        {/* Centered Video */}
        <div className="mt-12 w-full sm:mt-14">
          <div className="relative rounded-xl border border-white/80 bg-white p-2 shadow-[0_28px_80px_rgba(15,23,42,0.16)] sm:p-3">
            <div className="absolute left-1/2 top-0 z-20 h-1.5 w-28 -translate-x-1/2 rounded-b-full bg-primary sm:w-40" />

            <div className="relative aspect-video touch-pan-y overflow-hidden rounded-lg bg-gray-950">
              <iframe
                className="pointer-events-none absolute inset-0 h-full w-full"
                src={videoUrl}
                title="Plot Registration Festival 2026 | Anondo Housing Society"
                loading="lazy"
                tabIndex={-1}
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

              <a
                href="https://youtu.be/inzHvkTzRdg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch Plot Registration Festival 2026 on YouTube"
                className="absolute bottom-3 right-3 z-30 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-secondary sm:bottom-5 sm:right-5 sm:px-6 sm:py-3 sm:text-sm"
              >
                <FaYoutube className="text-base sm:text-lg" />

                <span className="hidden sm:inline">Watch on YouTube</span>
                <span className="sm:hidden">YouTube</span>

                <FaExternalLinkAlt className="text-[10px] sm:text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
