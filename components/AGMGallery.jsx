"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { FiEye } from "react-icons/fi";
import SectionBadge from "./SectionBadge";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";

export default function AGMGallery() {
  const gallery = [
    { img: "/agm/agm-01.jpg", date: "11 April 2026" },
    { img: "/agm/agm-02.jpg", date: "11 April 2026" },
    { img: "/agm/agm-03.jpg", date: "11 April 2026" },
    { img: "/agm/agm-04.jpg", date: "11 April 2026" },
    { img: "/agm/agm-05.jpg", date: "11 April 2026" },
    { img: "/agm/agm-06.jpg", date: "11 April 2026" },
    { img: "/agm/agm-07.jpeg", date: "11 April 2026" },
    { img: "/agm/agm-08.jpeg", date: "11 April 2026" },
    { img: "/agm/agm-09.jpeg", date: "11 April 2026" },
    { img: "/agm/agm-10.jpg", date: "11 April 2026" },
    { img: "/agm/agm-11.jpg", date: "11 April 2026" },
    { img: "/agm/agm-12.jpg", date: "11 April 2026" },
    { img: "/agm/agm-13.jpg", date: "11 April 2026" },
    { img: "/agm/agm-14.jpg", date: "11 April 2026" },
    { img: "/agm/agm-15.jpeg", date: "11 April 2026" },
    { img: "/agm/agm-16.jpg", date: "11 April 2026" },
    { img: "/agm/agm-17.jpg", date: "11 April 2026" },
    { img: "/agm/agm-18.jpg", date: "11 April 2026" },
    { img: "/agm/agm-19.jpg", date: "11 April 2026" },
    { img: "/agm/agm-20.jpg", date: "11 April 2026" },
    { img: "/agm/agm-21.jpg", date: "11 April 2026" },
    { img: "/agm/agm-22.jpg", date: "11 April 2026" },
    { img: "/agm/agm-23.jpg", date: "11 April 2026" },
    // { img: "/agm/agm-24.jpg", date: "11 April 2026" },
    { img: "/agm/agm-25.jpg", date: "11 April 2026" },
    { img: "/agm/agm-26.jpg", date: "11 April 2026" },
    { img: "/agm/agm-27.jpg", date: "11 April 2026" },
    { img: "/agm/agm-28.jpg", date: "11 April 2026" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* Title */}
        <div className="mb-3 flex justify-center">
          <SectionBadge label="এজিএম ২০২৬ গ্যালারি" icon={FaCalendar} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center">
          AGM 2026 – সফল আয়োজনের স্মরণীয় মুহূর্তসমূহ
        </h2>
        <div className="w-20 h-[3px] bg-primary mt-4 mb-8 mx-auto"></div>
        {/* Description */}
        <div className="max-w-3xl mx-auto text-center text-gray-600 mb-10 leading-relaxed space-y-4">
          <p>
            গত ১১ এপ্রিল ২০২৬ তারিখে Anondo Housing Society-এর বার্ষিক সাধারণ
            সভা (AGM 2026) সফলভাবে সম্পন্ন হয়েছে। সম্মানিত সদস্যবৃন্দ, গ্রাহক,
            শুভানুধ্যায়ী এবং আমাদের টিমের আন্তরিক অংশগ্রহণে দিনটি হয়ে উঠেছিল
            সত্যিই অর্থবহ ও স্মরণীয়।
          </p>

          {/* <p>
            এই অ্যালবামে তুলে ধরা হয়েছে সেই বিশেষ আয়োজনের কিছু অনন্য মুহূর্ত—
            যেখানে ছিল একসাথে এগিয়ে যাওয়ার দৃঢ় অঙ্গীকার, ভবিষ্যৎ পরিকল্পনার
            রূপরেখা এবং আমাদের সম্মিলিত সাফল্যের গল্প।
          </p>

          <p>
            আপনাদের নিরবচ্ছিন্ন আস্থা, সমর্থন ও সহযোগিতাই আমাদের এগিয়ে চলার
            প্রধান অনুপ্রেরণা। একসাথে আমরা গড়ে তুলছি একটি নিরাপদ, সুশৃঙ্খল ও
            পরিকল্পিত আগামী।
          </p> */}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleOpen(idx)}
              className="relative overflow-hidden rounded-xl shadow-sm group cursor-pointer"
            >
              <Image
                src={item.img}
                alt={`AGM Image ${idx + 1}`}
                width={500}
                height={400}
                className="w-full h-[220px] md:h-[240px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay Button */}
              <div className="absolute inset-0 flex items-end justify-center p-4">
                <button
                  className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
                  transition duration-500 bg-primary text-white px-5 py-2 rounded-md flex items-center gap-2"
                >
                  <FiEye />
                  View Image
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={currentIndex}
            slides={gallery.map((g) => ({
              src: g.img,
              title: `Date: ${g.date}`,
            }))}
            plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
            captions={{ titleTextAlign: "center" }}
            thumbnails={{ position: "bottom", width: 100, height: 70 }}
          />
        )}
      </div>
    </section>
  );
}
