"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";

const suites = [
  {
    title: "Standard Suites",
    image: "/suites/standard.jpg",
    description:
      "Experience comfort and tranquility in our thoughtfully designed Standard Suite. Enjoy a cozy king-size bed, modern décor, and serene views—an ideal blend of luxury and relaxation.",
  },
  {
    title: "Executive Suites",
    image: "/suites/executive.jpg",
    description:
      "Immerse yourself in elevated comfort with elegant interiors, premium furnishings, and world‑class amenities. A tranquil retreat crafted for serenity and sophistication.",
  },
  {
    title: "Garden‑view Suites",
    image: "/suites/garden.jpg",
    description:
      "Overlooking lush landscaped gardens, this suite offers a peaceful ambiance with natural light, fresh air, and modern amenities—perfect for relaxation and rejuvenation.",
  },
  {
    title: "Assisted Living Units",
    image: "/suites/assisted.jpg",
    badge: "Extra medical support",
    description:
      "Spacious, refined living designed for guests who need additional medical support. Enjoy top‑tier amenities, calming interiors, and seamless accessibility for daily comfort.",
  },
];

export default function SuitesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="custom-container mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase font-medium text-primary tracking-[0.15em] text-sm">
            Our Suites
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2">
            Comfort, Dignity, and Personal Space
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mt-2">
            Each of our 2,500 private suites is designed with elegance and
            functionality in mind. Spacious, fully furnished, and centrally
            air‑conditioned, the suites ensure optimal comfort and privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {suites.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 transition-all transform duration-700 hover:shadow-lg  focus-within:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-all transform duration-1000 group-hover:scale-125"
                  priority={idx < 2}
                />
                {item.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 shadow-sm backdrop-blur">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm/6 text-gray-600">
                  {item.description}
                </p>

                {/* <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-secondary transition-all transform duration-500 hover:bg-primary hover:text-white"
                  >
                    Learn more
                  </button>
                </div> */}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Modern furnishing and lighting",
            "Emergency call system in every room",
            "Attached bathrooms with anti‑slip flooring",
            "Wheelchair‑accessible doors and spaces",
            "Housekeeping and laundry services",
            "Room service and dietary meals",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 hover:shadow-sm transition-all transform duration-500 hover:border-gray-200"
            >
              <FaRegCheckCircle className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
