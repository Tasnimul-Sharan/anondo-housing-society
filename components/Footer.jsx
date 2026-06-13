"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { PiMapPinBold } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-6">
      <div className="custom-container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Image
            src="/Anondo-Housing-Logo.png"
            alt="Logo"
            width={200}
            height={180}
            className="mb-6"
          />
          <p className="text-sm leading-relaxed mb-6">
            Anondo Housing Society is a project of Anondo Family Welfare
            Multipurpose Co-operative Society, located in Purbachal new town.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 relative inline-block">
            Office Address
            <span className="block w-12 h-[3px] bg-primary mt-1"></span>
          </h4>

          <ul className="space-y-2 text-sm mb-6">
            <li>Printers Building</li>
            <li>11–14th Floor, 5 Rajuk Avenue</li>
            <li>Motijheel, Dhaka-1000</li>
            <li>Bangladesh</li>
          </ul>

          <h4 className="text-xl font-semibold mb-4 relative inline-block">
            Project Address
            <span className="block w-12 h-[3px] bg-primary mt-1"></span>
          </h4>

          <ul className="space-y-2 text-sm">
            <li>Anondo Housing Society</li>
            <li>Purbachal New Town</li>
            <li>Rupganj, Narayanganj</li>
            <li>Bangladesh</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 relative inline-block">
            Quick-link
            <span className="block w-12 h-[3px] bg-primary mt-1"></span>
          </h4>

          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About",
              "Contact",
              "Project",
              "Terms and Conditions",
            ].map((item, i) => (
              <li key={i} className="relative group cursor-pointer w-fit">
                <span className="transition-colors duration-300">{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 relative inline-block">
            Get in Touch
            <span className="block w-12 h-[3px] bg-primary mt-1"></span>
          </h4>

          <div className="space-y-4 text-sm">
            <p className="flex items-start gap-3">
              <PiMapPinBold size={30} className="text-primary" />
              Printers Building, 11–14th Floor, 5 Rajuk Avenue, Motijheel, 1000
              Dhaka
            </p>

            <p className="flex items-center gap-3">
              <FiPhoneCall size={20} className="text-primary" />
              +880 1331-115500
            </p>

            <p className="flex items-center gap-3">
              <HiOutlineMail size={20} className="text-primary" />
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
            <SocialIcon
              icon={<FaFacebookF />}
              href="https://www.facebook.com/AnondoHousing"
            />
            <SocialIcon
              icon={<FaXTwitter />}
              href="https://twitter.com/AnondoPolice"
            />
            <SocialIcon
              icon={<FaLinkedinIn />}
              href="https://www.linkedin.com/company/anondo-housing-society"
            />
            <SocialIcon
              icon={<FaYoutube />}
              href="https://www.youtube.com/@AnondoHousingSocietyOfficial"
            />
            <SocialIcon
              icon={<FaInstagram />}
              href="https://www.instagram.com/aphs_bd/"
            />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-primary">
          Anondo Housing Society
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}

/* Small Reusable Icon Component */
function SocialIcon({ icon, href }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-primary hover:border-transparent transition-all duration-500"
    >
      {icon}
    </Link>
  );
}
