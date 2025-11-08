"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { FiClock, FiPhoneCall, FiMail } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

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
      {
        name: "Project Lottery Policy",
        path: "/project-lottery-policy",
      },
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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {!isScrolled && (
        <div className="bg-primary text-white py-2">
          <div className="custom-container mx-auto flex items-center justify-between px-4 text-sm">
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
      )}

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-white border-b"
        >
          <div className="custom-container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="Logo" width={100} height={100} />
              <div></div>
            </Link>

            {/* ✅ Desktop Menu with Dropdown */}
            <ul className="hidden lg:flex gap-8 font-semibold relative">
              {menuItems.map((item, i) => (
                <li key={i} className="relative group">
                  <Link
                    href={item.path}
                    className="hover:text-primary transition"
                  >
                    {item.name}
                  </Link>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>

                  {/* ✅ Dropdown Menu */}
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

            <div className="hidden lg:block">
              <Link href="/contact">
                <button className="bg-primary text-white px-6 py-2 font-bold hover:bg-secondary transition">
                  Contact Us
                </button>
              </Link>
            </div>

            <button
              className="lg:hidden text-3xl text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ✅ Mobile Menu */}
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

              {/* ✅ Mobile Submenu */}
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
    </header>
  );
}
