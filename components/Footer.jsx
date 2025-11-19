"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { PiMapPinLight } from "react-icons/pi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0E75B6] text-white pt-20 pb-6">
      <div className="custom-container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LEFT SECTION */}
        <div>
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={180}
            height={80}
            className="mb-6"
          />

          <p className="text-sm leading-relaxed mb-6">
            Anondo Housing Society is a project of Anondo Family Welfare
            Multipurpose Co-operative Society, located in Purbachal new town.
          </p>

          {/* <div className="space-y-4 text-sm">
            <p className="flex items-start gap-3">
              <PiMapPinLight size={22} />
              Printers Building, 11–13th Floor, 5 Rajuk Avenue, Motijheel, 1000
              Dhaka
            </p>

            <p className="flex items-center gap-3">
              <FiPhoneCall size={20} className="text-yellow-400" />
              +8801318252050
            </p>

            <p className="flex items-center gap-3">
              <HiOutlineMail size={20} />
              anondohousings@gmail.com
            </p>
          </div> */}
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-xl font-semibold mb-4 relative inline-block">
            Our Services
            <span className="block w-12 h-[3px] bg-yellow-400 mt-1"></span>
          </h4>

          <ul className="space-y-2 text-sm">
            <li>Anondo Housing Society</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl font-semibold mb-4 relative inline-block">
            Quick-link
            <span className="block w-12 h-[3px] bg-yellow-400 mt-1"></span>
          </h4>

          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Project</li>
            <li className="hover:underline cursor-pointer">
              Terms and Conditions
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-xl font-semibold mb-4 relative inline-block">
            Get in Touch
            <span className="block w-12 h-[3px] bg-yellow-400 mt-1"></span>
          </h4>

          <div className="space-y-4 text-sm">
            <p className="flex items-start gap-3">
              <PiMapPinLight size={22} />
              Printers Building, 11–13th Floor, 5 Rajuk Avenue, Motijheel, 1000
              Dhaka
            </p>

            <p className="flex items-center gap-3">
              <FiPhoneCall size={20} className="text-yellow-400" />
              +8801318252050
            </p>

            <p className="flex items-center gap-3">
              <HiOutlineMail size={20} />
              anondohousings@gmail.com
            </p>
          </div>

          <p className="text-sm leading-relaxed my-4">
            Enter your email and receive the latest news from us.
          </p>

          {/* Email Input */}
          <div className="flex items-center border border-white/40 rounded-md overflow-hidden mb-6">
            <input
              type="email"
              placeholder="email@example.com"
              className="px-4 py-2 w-full bg-transparent outline-none placeholder-white/80 text-sm"
            />
            <button className="px-4 transition-colors">
              <HiOutlineMail />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaLinkedinIn />} />
            <SocialIcon icon={<FaYoutube />} />
            <SocialIcon icon={<FaInstagram />} />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm">
        © 2021 <span className="font-semibold">Anondo Housing</span> || Design &
        Developed by Brandz Cooker
      </div>
    </footer>
  );
}

/* Small Reusable Icon Component */
function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
      {icon}
    </div>
  );
}
