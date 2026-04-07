"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function EventPopup() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      onClick={() => setShow(false)}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl shadow-2xl w-full custom-container mx-auto p-3 md:p-5"
      >
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition"
        >
          <FaTimes className="text-gray-700 text-lg" />
        </button>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="relative w-full rounded-xl">
            <Image
              src="/invitation/invitation-card-01.png"
              alt="Event 1"
              width={1600}
              height={1094}
              className="object-cover w-full md:h-[500px] h-[220px] rounded-xl"
              priority
            />
          </div>

          <div className="relative w-full rounded-xl">
            <Image
              src="/invitation/invitation-card-02.png"
              alt="Event 2"
              width={1600}
              height={1096}
              className="object-cover w-full md:h-[500px] h-[220px] rounded-xl"
              priority
            />
          </div>
        </div>
        <div className="text-center mt-5">
          <button
            onClick={() => {
              setShow(false);
              router.push("/event");
            }}
            className="bg-primary hover:bg-secondary text-white text-base md:px-6 md:py-3 px-3 py-2 rounded-xl
             font-semibold shadow-md transition-all transform duration-500"
          >
            View Event Details
          </button>
        </div>
      </div>
      {/* <div className="relative w-full h-full rounded-xl">
          <Image
            src="/invitation-card.png"
            alt="Event Image 1"
            width={3330}
            height={1094}
            className="object-cover w-full md:h-[500px] h-[230px] rounded-xl"
          />
        </div> */}
      {/* ✅ Button */}
    </div>
    // </div>
  );
}
