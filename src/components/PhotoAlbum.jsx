"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/images/photo_album/1.jpg", alt: "Honored to receive my Project Completion Certificate from the Manager of SQUARE Health Ltd." },
  { src: "/images/photo_album/2.jpg", alt: "Celebrating the Pohela Boishakh Festival with the Engineering and Business Teams of SQUARE Health Ltd." },
  { src: "/images/photo_album/3.jpg", alt: "A Moment of Joy — Project Completion Celebration at SQUARE Health Ltd." },
  { src: "/images/photo_album/4.jpg", alt: "The team behind the Jotno App at SQUARE Health Ltd." },
  { src: "/images/photo_album/5.jpg", alt: "The Software Engineering Team, along with Honorable Seniors and Colleagues." },
  { src: "/images/photo_album/6.jpg", alt: "Team lunch celebration at SQUARE Health Ltd." },
];

const PhotoAlbum = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [loadState, setLoadState] = useState({});
  const intervalRef = useRef(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
  }, []);

  const goTo = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [startInterval]);

  const currentImage = images[currentIndex];
  const status = loadState[currentIndex] || "loading";

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="py-20 px-4" id="memories">
      <h2 className="section-heading">Office Memories</h2>

      <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl glass-strong p-2">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full h-[50vh] md:h-[65vh] rounded-xl overflow-hidden bg-[#12121a]"
            >
              {status === "loading" && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-8 h-8 border-2 border-violet-400 border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              {status === "error" ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Could not load image</p>
                  </div>
                </div>
              ) : (
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className={`object-cover transition-opacity duration-500 ${status === "loaded" ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setLoadState((prev) => ({ ...prev, [currentIndex]: "loaded" }))}
                  onError={() => setLoadState((prev) => ({ ...prev, [currentIndex]: "error" }))}
                />
              )}

              {status !== "error" && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070d]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.p
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="text-gray-200 text-sm md:text-base max-w-2xl"
                    >
                      {currentImage.alt}
                    </motion.p>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-4 right-4 flex gap-2 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? "w-8 h-2 bg-violet-400"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoAlbum;
