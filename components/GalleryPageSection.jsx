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
    {
      img: "/gallery/gallery1.jpeg",
      title: "Gallery Image 1",
      desc: "Description of image 1",
    },
    {
      img: "/gallery/gallery2.jpeg",
      title: "Gallery Image 2",
      desc: "Description of image 2",
    },
    {
      img: "/gallery/gallery3.jpeg",
      title: "Gallery Image 3",
      desc: "Description of image 3",
    },
    {
      img: "/gallery/gallery4.jpeg",
      title: "Gallery Image 4",
      desc: "Description of image 4",
    },
    {
      img: "/gallery/gallery5.jpeg",
      title: "Gallery Image 5",
      desc: "Description of image 5",
    },
    {
      img: "/gallery/gallery6.jpeg",
      title: "Gallery Image 6",
      desc: "Description of image 6",
    },
  ];

  const subtitle = "Our Works";
  const title = "Explore Our Gallery";

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  return (
    <div className="custom-container mx-auto py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
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
              className="w-full h-full object-cover transition-all transform duration-1000 ease-in group-hover:scale-125"
              onClick={() => handleOpen(idx)}
            />

            <div className="absolute inset-0 flex items-end justify-center p-4">
              <button
                className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 ease-out bg-primary text-white px-6 py-4 rounded-md
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
            title: g.title,
            description: g.desc,
          }))}
          plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
          thumbnails={{ position: "bottom", width: 100, height: 70 }}
          captions={{ descriptionTextAlign: "center" }}
          zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
          slideshow={{ autoplay: false, delay: 4000 }}
        />
      )}
    </div>
  );
}
