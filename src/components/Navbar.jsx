"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "@/lib/utils";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Blog", path: "#medium-blogs" },
  { title: "Courses", path: "#courses" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const scrollDir = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.path.substring(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current || "");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (path) => {
    const el = document.getElementById(path.substring(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setNavbarOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {scrollDir === "up" && (
          <div className="fixed bottom-6 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none">
            <motion.nav
              key="dock"
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="pointer-events-auto"
            >
            <div className="glass-strong rounded-2xl px-3 py-2 flex items-center gap-1 shadow-2xl shadow-violet-500/10 border-violet-500/20">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.title}
                    onClick={() => scrollToSection(link.path)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeSection === link.path.substring(1)
                        ? "text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {activeSection === link.path.substring(1) && (
                      <motion.div
                        layoutId="dockActive"
                        className="absolute inset-0 bg-gradient-to-r from-violet-600/40 to-fuchsia-600/40 rounded-xl border border-violet-500/20"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.title}</span>
                  </button>
                ))}
              </div>
            </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
      >
        <div
          className={`flex items-center justify-between px-4 py-3 transition-all duration-300 ${
            navbarOpen
              ? "glass-strong"
              : "bg-transparent"
          }`}
        >
          <span className="text-xl font-bold gradient-text">JPS</span>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="glass p-2.5 rounded-xl text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {navbarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {navbarOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-strong mx-4 rounded-2xl border border-white/10 overflow-hidden"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(link.path)}
                  className={`block w-full text-left px-6 py-4 text-sm font-medium transition-all duration-200 ${
                    activeSection === link.path.substring(1)
                      ? "text-white bg-violet-600/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  } ${i < navLinks.length - 1 ? "border-b border-white/5" : ""}`}
                >
                  {link.title}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
