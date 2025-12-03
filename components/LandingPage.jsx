"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaLeaf } from "react-icons/fa";
// import Button from "./Button";
import Link from "next/link";
import Button from "./Button";

const sliderData = [
  {
    subtitle: "আনন্দ হাউজিং সোসাইটি",
    title: "অনেকেই বাড়ির কাজে হাত দিয়েছেন, আপনি রেডি তো?",
    description: `
পূর্বাচল ৩০০ ফুট হাইওয়ে থেকে মাত্র ২ মিনিটের হাঁটার পথ।
বাউন্ডারি করা রেডি প্লট, ইতোমধ্যে নির্মিত অভ্যন্তরীন সড়ক,
বিদ্যুৎ সংযোগ সুবিধাসহ এখনই বাড়ি করে বসবাস করার উপযোগী।
`,
    image: "/slider/slider1.png",
    primaryButton: { text: "আমাদের প্রকল্প", link: "/about" },
  },
  {
    subtitle: "আনন্দ হাউজিং সোসাইটি",
    title: "পূর্বাচল হাইওয়ের সবচেয়ে কাছের প্রকল্প, দ্রুত উন্নয়নে অতুলনীয়।",
    description: `
এককালীন ও সুদমুক্ত সহজ কিস্তিতে প্লট বরাদ্দের জন্য আবেদন
গ্রহণ করা হচ্ছে।
`,
    image: "/slider/slider2.png",
    primaryButton: { text: "আমাদের প্রকল্প", link: "/about" },
  },
  {
    subtitle: "আনন্দ হাউজিং সোসাইটি",
    title: "বিদ্যুৎ সংযোগ সুবিধাসহ এখনই বাড়ি করে বসবাস উপযোগী।",
    description: `
এখন আর স্বপ্ন নয়, বাস্তব পুরোটাই!
বিস্তারিত জানতে ও প্রকল্প পরিদর্শন করতে যোগাযোগ করুন!
`,
    image: "/slider/slider3.jpg",
    primaryButton: { text: "যোগাযোগ করুন", link: "/contact" },
  },
];

const LandingPage = () => {
  // const hasMounted = useHasMounted();
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const textRefs = useRef([]);

  // useEffect(() => {
  //   if (!hasMounted) return;
  //   const currentText = textRefs.current[activeIndex];
  //   if (currentText) {
  //     gsap.fromTo(
  //       currentText,
  //       { opacity: 0, y: 10 },
  //       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  //     );
  //   }
  // }, [activeIndex, hasMounted]);

  // if (!hasMounted) return <div className="w-full h-[80vh] bg-black" />;

  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full overflow-hidden group">
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className="relative w-full md:py-96 py-60 overflow-hidden"
          >
            {/* Background Image */}
            <motion.div
              key={`bg-${index}-${activeIndex}`}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></motion.div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-emerald-950/60"></div>

            {/* Text Section */}
            <motion.div
              ref={(el) => (textRefs.current[index] = el)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white z-10 px-4"
              initial="hidden"
              animate={activeIndex === index ? "visible" : "hidden"}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
              <motion.p
                className="uppercase tracking-[0.3em] text-sm text-green-200 relative inline-flex items-center gap-3 border border-primary rounded-full px-4 py-1 bg-emerald-950/20 backdrop-blur-sm"
                variants={textVariants}
              >
                <FaLeaf className="text-primary text-sm" />
                {slide.subtitle}
              </motion.p>

              <motion.h1
                className="text-3xl md:text-6xl font-serif font-semibold leading-tight text-balance break-words text-center"
                style={{ maxWidth: "900px", lineHeight: 1.2 }}
                variants={textVariants}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                className="mt-3 text-base md:text-lg max-w-2xl text-gray-200 leading-relaxed"
                variants={textVariants}
              >
                {slide.description}
              </motion.p>

              {slide?.primaryButton?.link && (
                <motion.div
                  className="mt-6 flex gap-4 flex-wrap"
                  variants={textVariants}
                >
                  <Link href={slide.primaryButton.link}>
                    <Button variant="primary">
                      {slide.primaryButton.text}
                    </Button>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// ✅ Custom Arrow Buttons
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute z-20 top-1/2 left-6 -translate-y-1/2 bg-primary text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-700"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute z-20 top-1/2 right-6 -translate-y-1/2 bg-primary text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-700"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

export default LandingPage;
