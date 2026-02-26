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

export default function GalleryPageSection() {
  const gallery = [
    { img: "/gallery/gallery1.jpg", date: "12 January 2025" },
    { img: "/gallery/gallery2.jpg", date: "18 January 2025" },

    { img: "/clients/client-1.jpg", date: "02 February 2025" },
    { img: "/clients/client-2.jpg", date: "05 February 2025" },
    { img: "/clients/client-3.jpg", date: "10 February 2025" },
    { img: "/clients/client-4.jpg", date: "15 February 2025" },
    { img: "/clients/client-5.jpg", date: "18 February 2025" },
    { img: "/clients/client-6.jpg", date: "20 February 2025" },
    { img: "/clients/client-7.jpg", date: "22 February 2025" },
    { img: "/clients/client-8.jpg", date: "25 February 2025" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  return (
    <div className="custom-container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleOpen(idx)}
            className="relative overflow-hidden rounded-md group cursor-pointer"
          >
            <Image
              src={item.img}
              alt={`gallery-${idx}`}
              width={1200}
              height={1200}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-end justify-center p-4">
              <button
                className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 bg-primary text-white px-6 py-3 rounded-md
                flex items-center gap-2"
              >
                <FiEye className="text-lg" />
                View Image
              </button>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentIndex}
          slides={gallery.map((g) => ({
            src: g.img,
            title: `Date: ${g.date}`, // 👈 This shows on top
          }))}
          plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
          captions={{ titleTextAlign: "center" }}
          thumbnails={{ position: "bottom", width: 100, height: 70 }}
        />
      )}
    </div>
  );
}
