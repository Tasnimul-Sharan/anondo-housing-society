// "use client";
// import Slider from "react-slick";
// import Image from "next/image";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const images = [
//   // "/clients/client-1.jpg",
//   // "/clients/client-2.jpg",
//   // "/clients/client-3.jpg",
//   // "/clients/client-4.jpg",
//   // "/clients/client-5.jpg",
//   // "/clients/client-6.jpg",
//   // "/clients/client-7.jpg",
//   // "/clients/client-8.jpg",
//   "/clients/client-9.jpg",
//   "/clients/client-10.jpg",
//   "/clients/client-11.jpg",
//   "/clients/client-12.jpg",
//   "/clients/client-13.jpg",
//   "/clients/client-14.jpg",
//   "/clients/client-15.jpg",
//   "/clients/client-16.jpg",
//   "/clients/client-17.jpg",
//   "/clients/client-18.jpg",
//   "/clients/client-19.jpg",
//   "/clients/client-20.jpg",
//   "/clients/client-21.jpg",
//   "/clients/client-22.jpg",
//   "/clients/client-23.jpg",
//   "/clients/client-24.jpg",
//   "/clients/client-25.jpg",
//   "/clients/client-26.jpg",
//   "/clients/client-27.jpg",
//   "/clients/client-28.jpg",
//   "/clients/client-29.jpg",
//   "/clients/client-30.jpg",
//   "/clients/client-31.jpg",
//   "/clients/client-32.jpg",
// ];

// function PrevArrow({ onClick }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label="Previous slide"
//       className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-white text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-white md:-left-5 md:h-12 md:w-12"
//     >
//       <FaChevronLeft className="text-sm" />
//     </button>
//   );
// }

// function NextArrow({ onClick }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label="Next slide"
//       className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-white text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-white md:-right-5 md:h-12 md:w-12"
//     >
//       <FaChevronRight className="text-sm" />
//     </button>
//   );
// }

// export default function PresidentSection() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto mt-10">
//       <div className="text-center">
//         <h2 className="text-4xl font-extrabold mb-3">প্রশংসাপত্র</h2>
//         <div className="w-20 h-[3px] bg-primary mt-4 mb-8 mx-auto"></div>

//         <p className="text-gray-700">
//           আনন্দ হাউজিং সোসাইটির বিশ্বাসযোগ্য উন্নয়ন, ব্যবস্থাপনা এবং নিয়মিত
//           পেশাদার অভিজ্ঞ ব্যাক্তিদের নিয়ে গঠিত।
//         </p>
//       </div>

//       {/* SLIDER AREA */}
//       <div className="relative mt-10">
//         <Slider {...settings}>
//           {images.map((src, idx) => (
//             <div key={idx} className="px-4">
//               <div className="w-full relative rounded-2xl overflow-hidden">
//                 <Image
//                   src={src}
//                   alt={`slide-${idx}`}
//                   width={1200}
//                   height={1200}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/clients/client-9.jpg",
  "/clients/client-10.jpg",
  "/clients/client-11.jpg",
  "/clients/client-12.jpg",
  "/clients/client-13.jpg",
  "/clients/client-14.jpg",
  "/clients/client-15.jpg",
  "/clients/client-16.jpg",
  "/clients/client-17.jpg",
  "/clients/client-18.jpg",
  "/clients/client-19.jpg",
  "/clients/client-20.jpg",
  "/clients/client-21.jpg",
  "/clients/client-22.jpg",
  "/clients/client-23.jpg",
  "/clients/client-24.jpg",
  "/clients/client-25.jpg",
  "/clients/client-26.jpg",
  "/clients/client-27.jpg",
  "/clients/client-28.jpg",
  "/clients/client-29.jpg",
  "/clients/client-30.jpg",
  "/clients/client-31.jpg",
  "/clients/client-32.jpg",
];

export default function PresidentSection() {
  const sliderRef = useRef(null);

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

        <div className="w-20 h-[3px] bg-primary mt-4 mb-8 mx-auto" />

        <p className="text-gray-700">
          আনন্দ হাউজিং সোসাইটির বিশ্বাসযোগ্য উন্নয়ন, ব্যবস্থাপনা এবং নিয়মিত
          পেশাদার অভিজ্ঞ ব্যাক্তিদের নিয়ে গঠিত।
        </p>
      </div>

      <div className="relative mt-10">
        <Slider ref={sliderRef} {...settings}>
          {images.map((src, idx) => (
            <div key={idx} className="px-4">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt={`slide-${idx}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>

        <button
          type="button"
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="Previous slide"
          className="
            absolute
            left-0
            top-1/2
            z-30
            flex
            h-12
            w-12
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-primary
            bg-white
            text-primary
            shadow-lg
            transition-all
            duration-300
            hover:bg-primary
            hover:text-white
          "
        >
          <FaChevronLeft className="text-sm" />
        </button>
        <button
          type="button"
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="Next slide"
          className="
            absolute
            right-0
            top-1/2
            z-30
            flex
            h-12
            w-12
            translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-primary
            bg-white
            text-primary
            shadow-lg
            transition-all
            duration-300
            hover:bg-primary
            hover:text-white
          "
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>
    </div>
  );
}
