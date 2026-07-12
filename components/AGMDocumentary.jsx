"use client";

import { FaCalendarAlt, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import SectionBadge from "./SectionBadge";

export default function AGMDocumentary() {
  return (
    <section className="relative overflow-hidden bg-[#F9F9F9] py-24 md:py-28">
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-160px] left-[-120px] h-[420px] w-[420px] rounded-full bg-secondary/15 blur-[110px]" />
        <div className="absolute right-[-140px] top-1/3 h-[420px] w-[420px] rounded-full bg-tertiary/10 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionBadge label="এজিএম ২০২৬ ডকুমেন্টারি" icon={FaCalendarAlt} />

          <h2 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-gray-950 md:text-5xl lg:text-6xl">
            বার্ষিক সাধারণ সভার{" "}
            <span className="bg-primary bg-clip-text text-transparent">
              বিশেষ মুহূর্ত
            </span>
          </h2>

          <div className="mx-auto mt-6 flex w-full max-w-xs items-center justify-center gap-3">
            <span className="h-[3px] flex-1 bg-primary" />
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            আনন্দ হাউজিং সোসাইটির এজিএম ২০২৬ ডকুমেন্টারির মাধ্যমে দেখুন স্মরণীয়
            মুহূর্ত, অনুপ্রেরণামূলক বক্তব্য, ভবিষ্যৎ পরিকল্পনা, অর্জন এবং
            সাফল্যের গল্প।
          </p>
        </div>
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="absolute -top-6 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/70 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-700 shadow-lg">
            Official Documentary
          </div>
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-primary/25 via-secondary/20 to-tertiary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/85 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur-2xl">
            <div className="relative overflow-hidden rounded-[1.65rem] bg-black shadow-2xl">
              <iframe
                className="aspect-video w-full pointer-events-none"
                src="https://www.youtube.com/embed/XtCLHvVdrto?autoplay=1&mute=1&loop=1&playlist=XtCLHvVdrto&controls=0&rel=0&modestbranding=1&playsinline=1"
                title="AGM 2026 Documentary | Annual General Meeting Highlights | Future Plans & Success Story"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/30" /> */}
              <div className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                Now Playing
              </div>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="max-w-2xl">
                  <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                    <FaPlay className="text-[10px] text-primary" />
                    AGM 2026
                  </p>

                  {/* <h3 className="text-2xl font-bold leading-tight text-white md:text-4xl">
                    Anondo Housing Society AGM 2026 Documentary
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 md:text-base">
                    Annual General Meeting Highlights, Future Plans & Success
                    Story
                  </p> */}
                </div>
              </div>
              <a
                href="https://youtu.be/XtCLHvVdrto?si=gE4dGadsEgC7ydv5"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 z-20 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-[0_15px_35px_rgba(246,133,33,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-secondary hover:shadow-[0_18px_40px_rgba(0,114,188,0.35)]"
              >
                Watch Video
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
