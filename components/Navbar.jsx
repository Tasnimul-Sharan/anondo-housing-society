"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { FiClock, FiPhoneCall, FiMail } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  {
    name: "Corporate",
    path: "#",
    submenu: [
      { name: "Career Opportunities", path: "/career-opportunities" },
      { name: "Payment Procedures", path: "/payment-procedures" },
      { name: "Terms And Condition", path: "/terms-and-conditions" },
      { name: "Project Lottery Policy", path: "/project-lottery-policy" },
    ],
  },
  { name: "Form", path: "/form" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Scroll detector
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu GSAP
  useEffect(() => {
    const menu = menuRef.current;
    const items = menu?.querySelectorAll("li");

    if (isMenuOpen) {
      gsap.to(menu, {
        width: "100vw",
        height: "100vh",
        opacity: 1,
        duration: 0.7,
        ease: "power4.out",
      });

      gsap.fromTo(
        items,
        { x: "-30px", opacity: 0 },
        { x: "0px", opacity: 1, duration: 0.5, stagger: 0.1 }
      );
    } else {
      gsap.to(menu, {
        width: 0,
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power4.inOut",
      });
    }
  }, [isMenuOpen]);

  // Add at top of Navbar.js
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,bn",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-inner" : "shadow-none"
      }`}
    >
      {/* ========== TOP INFO BAR (NO SHAKING) ========== */}
      {/* <div
        className={`bg-primary text-white overflow-hidden transition-all duration-500 ${
          isScrolled ? "h-0 py-0 opacity-0" : "h-auto py-2 opacity-100"
        }`}
      > */}
      {/* <div className="relative h-[40px] overflow-hidden bg-primary text-white">
        <div
          className={`absolute top-0 left-0 w-full transition-transform duration-500 ${
            isScrolled ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="custom-container mx-auto flex items-center justify-between text-sm py-2">
            <div className="flex items-center gap-2">
              <FiPhoneCall className="text-primary" />
              <span>+8801318252050</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-primary" />
              <span>anondohousings@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-primary" />
              <span>Sat–Thu 10–7</span>
            </div>
            <div className="flex items-center gap-2">
              <select className="text-black px-2 py-1 rounded">
                <option>ভাষা বেছে নিন</option>
                <option>English</option>
                <option>Bangla</option>
              </select>
              <span className="text-[10px] opacity-80">
                Powered by Google Translate
              </span>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div
        className={`
    bg-secondary text-white overflow-hidden transition-all duration-500
    ${isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-[60px] opacity-100 py-4"}
  `}
      >
        <div className="custom-container mx-auto flex items-center justify-between text-sm whitespace-nowrap gap-5"> */}
      {/* <div
        className={`
    bg-secondary text-white overflow-hidden transition-all duration-500
    ${isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-[80px] opacity-100 py-5"}
  `}
      >
        <div className="custom-container mx-auto flex items-center justify-between text-[15px] whitespace-nowrap gap-6">
          <div className="flex items-center gap-2">
            <FiPhoneCall className="text-white" />
            <span>+8801318252050</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-white" />
            <span>anondohousings@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="text-white" />
            <span>Sat–Thu 10–7</span>
          </div>
          <div className="flex items-center gap-2">
            <select className="text-black px-2 py-1 rounded">
              <option>ভাষা বেছে নিন</option>
              <option>English</option>
              <option>Bangla</option>
            </select>
          </div>
        </div>
      </div> */}
      <div
        className={`
    bg-secondary text-white overflow-hidden transition-all duration-500
    ${isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-[80px] opacity-100 py-4"}
  `}
      >
        <div className="custom-container mx-auto flex items-center justify-between text-base whitespace-nowrap gap-6">
          {/* LEFT SIDE: PHONE | EMAIL | TIME */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FiPhoneCall className="text-white" />
              <span>+8801318252050</span>
            </div>

            <span className="opacity-50">|</span>

            <div className="flex items-center gap-2">
              <FiMail className="text-white" />
              <span>anondohousings@gmail.com</span>
            </div>

            <span className="opacity-50">|</span>

            <div className="flex items-center gap-2">
              <FiClock className="text-white" />
              <span>Sat–Thu 10–7</span>
            </div>
          </div>

          {/* RIGHT SIDE: SOCIAL LINKS */}
          <div className="flex items-center gap-4 text-xl">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            </Link>

            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
            </Link>

            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            </Link>

            <Link href="https://youtube.com" target="_blank">
              <FaYoutube className="hover:text-gray-300 cursor-pointer" />
            </Link>

            {/* <select className="text-black text-base px-2 py-1 rounded ml-3">
              <option>ভাষা বেছে নিন</option>
              <option>English</option>
              <option>Bangla</option>
            </select> */}
            <select
              className="text-black text-base px-2 py-1 rounded ml-3"
              onChange={(e) => {
                const selectedLang = e.target.value;

                // Force URL rewrite (Works even when iframe fails)
                const googleTranslateCombo =
                  document.querySelector(".goog-te-combo");

                if (googleTranslateCombo) {
                  googleTranslateCombo.value = selectedLang;
                  googleTranslateCombo.dispatchEvent(new Event("change"));
                  return;
                }

                // Retry system — wait until translator loads
                const waitForTranslate = setInterval(() => {
                  const combo = document.querySelector(".goog-te-combo");
                  if (combo) {
                    combo.value = selectedLang;
                    combo.dispatchEvent(new Event("change"));
                    clearInterval(waitForTranslate);
                  }
                }, 300);
              }}
            >
              <option value="">ভাষা বেছে নিন</option>
              <option value="en">English</option>
              <option value="bn">Bangla</option>
            </select>
          </div>
        </div>
      </div>

      {/* ========== MAIN NAVBAR (NO MOTION, NO SHAKE) ========== */}
      <div className="bg-white border-b">
        <div className="custom-container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Anondo-Housing-Logo.png"
              alt="Logo"
              width={150}
              height={150}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 font-semibold relative">
            {menuItems.map((item, i) => (
              <li key={i} className="relative group">
                <Link
                  href={item.path}
                  className="hover:text-primary transition"
                >
                  {item.name}
                </Link>

                {/* Line underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>

                {/* Dropdown */}
                {item.submenu && (
                  <ul className="absolute left-0 top-full mt-6 w-60 bg-white shadow-lg border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {item.submenu.map((sub, j) => (
                      <li key={j}>
                        <Link
                          href={sub.path}
                          className="block px-5 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="bg-primary text-white px-6 py-2 font-bold hover:bg-secondary transition">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Icon */}
          <button
            className="lg:hidden text-3xl text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* ========== MOBILE MENU ========== */}
      <div
        ref={menuRef}
        className="lg:hidden fixed top-0 left-0 bg-white z-40 flex flex-col px-8 py-12 overflow-y-auto shadow-xl"
        style={{ width: 0, height: 0, opacity: 0 }}
      >
        <ul className="flex flex-col gap-8 text-xl font-semibold">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                className="hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>

              {/* Mobile dropdown */}
              {item.submenu && (
                <ul className="ml-4 mt-2 text-base text-gray-600">
                  {item.submenu.map((sub, j) => (
                    <li key={j}>
                      <Link
                        href={sub.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-1 hover:text-primary"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link href="/contact">
            <button className="w-full bg-primary text-white py-3 font-bold rounded-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </header>
  );
}
