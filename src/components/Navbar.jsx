"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.path.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (path) => {
    const element = document.querySelector(path);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setNavbarOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed mx-auto top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-white font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            JPS
          </Link>
        </motion.div>

        <div className="mobile-menu block md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="glass p-3 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                navbarOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                navbarOpen ? "opacity-0" : "opacity-100"
              }`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                navbarOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}></span>
            </div>
          </motion.button>
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(link.path)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === link.path.substring(1)
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "text-white hover:text-purple-400 hover:bg-white/5"
                  }`}
                >
                  {link.title}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass backdrop-blur-xl border-t border-white/10"
        >
          <ul className="flex flex-col py-4 space-y-4 px-4">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(link.path)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === link.path.substring(1)
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.title}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
