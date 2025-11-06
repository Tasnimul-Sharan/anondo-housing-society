"use client";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const products = [
  {
    id: 1,
    name: "GUARD VEST",
    img: "/products/Untitled-2.png",
  },
  {
    id: 2,
    name: "METAL DETECTOR",
    img: "/products/metal-detector.jpg",
  },
  {
    id: 3,
    name: "VEHiCHLE CHECK MIRROR",
    img: "/products/vehicle-check-mirror.jpg",
  },
  {
    id: 4,
    name: "BODY SCANNER DOORS",
    img: "/products/body-scanner-doors.jpg",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="custom-container mx-auto">
        <SectionHeader
          subtitle="Our Equipment"
          title="Security Products Training"
          details="We train security personnel on how to properly use guard vests, metal detectors, vehicle inspection mirrors, and body scanner doors."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 hover:shadow-lg transition-all transform duration-500 rounded p-6 flex flex-col items-center text-center"
            >
              <div className="relative w-full mb-6 flex items-center justify-center">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full rounded"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 uppercase relative inline-block">
                {product.name}
                <span className="block w-10 h-[2px] bg-primary mx-auto mt-2"></span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
