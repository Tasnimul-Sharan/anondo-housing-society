"use client";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/clients/client-1.jpg",
  "/clients/client-2.jpg",
  "/clients/client-3.jpg",
  "/clients/client-4.jpg",
  "/clients/client-5.jpg",
];

export default function PresidentSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold mb-3">প্রশংসাপত্র</h2>

        <p className="text-gray-700">
          আনন্দ হাউজিং সোসাইটির বিশ্বাসযোগ্য উন্নয়ন, ব্যবস্থাপনা এবং নিয়মিত
          পেশাদার অভিজ্ঞ ব্যাক্তিদের নিয়ে গঠিত।
        </p>
      </div>

      {/* SLIDER AREA */}
      <div className="mt-10">
        <Slider {...settings}>
          {images.map((src, idx) => (
            <div key={idx} className="px-4">
              <div className="w-full relative rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt={`slide-${idx}`}
                  width={1200}
                  height={1200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
