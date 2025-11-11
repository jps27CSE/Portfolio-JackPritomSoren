"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/images/photo_album/1.jpg",
    alt: "Honored to receive my Project Completion Certificate from the Manager of SQUARE Health Ltd.",
  },
  {
    src: "/images/photo_album/2.jpg",
    alt: "Celebrating the Pohela Boishakh Festival with the Engineering and Business Teams of SQUARE Health Ltd., alongside Seniors and Colleagues.",
  },
  {
    src: "/images/photo_album/3.jpg",
    alt: "A Moment of Joy — Project Completion Celebration at SQUARE Health Ltd.",
  },
  {
    src: "/images/photo_album/4.jpg",
    alt: "The team behind the Jotno App at SQUARE Health Ltd., including Seniors, Colleagues, and members of the Software Engineering, Business, and UI/UX Teams.",
  },
  {
    src: "/images/photo_album/5.jpg",
    alt: "The Software Engineering Team, along with Honorable Seniors and Colleagues.",
  },
];

const OfficeMemories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Function to go to next slide
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  // Function to start slideshow
  const startAutoSlide = () => {
    if (intervalRef.current) return; // prevent duplicates
    intervalRef.current = setInterval(nextSlide, 7000);
  };

  // Function to stop slideshow
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();

    // Pause when tab is hidden, resume when visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoSlide();
      } else {
        startAutoSlide();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopAutoSlide();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="py-16 bg-[#111111] text-white text-center relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Cherished Moments from My Office Journey
      </h2>

      {/* Full-width carousel container */}
      <div className="relative w-[95%] mx-auto overflow-hidden rounded-2xl border border-gray-700 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-full h-[70vh] md:h-[80vh]"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover rounded-2xl"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent py-3 px-4">
              <p className="text-gray-200 text-sm md:text-base font-medium">
                {images[currentIndex].alt}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-5 gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default OfficeMemories;
