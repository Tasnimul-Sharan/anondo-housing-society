"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Mahbub Rahman",
    role: "Managing Director",
    company: "Rahman Textiles Ltd.",
    img: "/clients/client1.jpg",
    text: "Anondo Universal Services has been a reliable partner in safeguarding our factory premises. Their guards are professional, disciplined, and always alert.",
    stars: 5,
  },
  {
    name: "Farzana Ahmed",
    role: "HR Manager",
    company: "Orion Group",
    img: "/clients/client2.jpg",
    text: "Their corporate security team ensures smooth operations at our head office. The reception and access control management have truly elevated our workplace security.",
    stars: 5,
  },
  {
    name: "Shakil Hossain",
    role: "Event Organizer",
    company: "Dhaka Event Solutions",
    img: "/clients/client3.jpg",
    text: "We hired Anondo Universal Services for a large corporate event in Dhaka. Their team managed the crowd and VIP security flawlessly. We felt completely at ease.",
    stars: 4,
  },
  {
    name: "Dr. Nusrat Jahan",
    role: "Principal",
    company: "Greenfield International School",
    img: "/clients/client4.jpg",
    text: "The safety of our students is our top priority. Anondo’s trained guards and quick response team have given us peace of mind every single day.",
    stars: 5,
  },
];

// Client Logos Data
const clientLogos = [
  "/logo/logo-1.jpg",
  "/logo/logo-2.jpg",
  "/logo/logo-3.jpg",
  "/logo/logo-4.jpg",
  "/logo/logo-5.png",
  // "/clients/logo6.png",
];

export default function TestimonialsAndClients() {
  const testimonialSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  const logoSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-gray-50 text-center">
      <SectionHeader
        subtitle="Clients & Partners"
        title="Trusted by Leading Companies Across Bangladesh"
        details="Hear what our clients say about us and see the leading brands who trust Anondo Universal Services for their safety and security."
      />

      <div className="max-w-7xl mx-auto overflow-hidden mb-12">
        <Slider {...logoSettings}>
          {clientLogos.map((logo, idx) => (
            <div key={idx} className="flex justify-center px-2 sm:px-4">
              <div className="bg-white p-4 sm:p-6 rounded-lg flex items-center justify-center w-full">
                <Image
                  src={logo}
                  alt={`Client Logo ${idx + 1}`}
                  width={160}
                  height={96}
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="max-w-7xl mx-auto overflow-hidden">
        <Slider {...testimonialSettings}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="px-2 md:px-4"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-lg relative text-left">
                <FaQuoteLeft className="text-primary text-2xl mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t.text}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <p className="text-gray-500">
                        {t.role},{" "}
                        <span className="text-primary font-semibold">
                          {t.company}
                        </span>
                      </p>{" "}
                    </div>

                    <div className="flex mt-1">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <span key={i} className="text-yellow-500">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
