"use client";
import { SlideshowLightbox } from "lightbox.js-react";
import SectionHeader from "./SectionHeader";
// import "lightbox.js-react/style.css";

export default function Gallery() {
  const gallery = [
    {
      img: "/gallery/gallery1.jpeg",
      title: "Gallery Image 1",
    },
    {
      img: "/gallery/gallery2.jpeg",
      title: "Gallery Image 2",
    },
    {
      img: "/gallery/gallery3.jpeg",
      title: "Gallery Image 3",
    },
    {
      img: "/gallery/gallery4.jpeg",
      title: "Gallery Image 4",
    },
    {
      img: "/gallery/gallery5.jpeg",
      title: "Gallery Image 5",
    },
    {
      img: "/gallery/gallery6.jpeg",
      title: "Gallery Image 6",
    },
  ];

  return (
    <div className="custom-container mx-auto py-16">
     <SectionHeader
  subtitle="Our Works"
  title="Explore Our Gallery"
  details="Take a look at our security operations, events, and on-field activities that highlight our commitment to safety and protection."
/>


      <SlideshowLightbox modalClose="clickOutside"  showThumbnails={true} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
          <img
            key={idx}
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover rounded-md hover:scale-105 transition-all duration-500"
          />
        ))}
        </SlideshowLightbox> 
    </div>
  );
}

