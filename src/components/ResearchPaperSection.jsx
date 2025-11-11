"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ResearchPaperOverview = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <section
      id="research"
      className="py-16 px-4 bg-[#111111] text-white flex justify-center items-center"
    >
      <motion.div
        className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Side: Paper Image */}
        <motion.div
          className="flex-shrink-0 cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsOpen(true)}
        >
          <div className="relative w-[320px] h-[226px] md:w-[400px] md:h-[284px] rounded-lg shadow-xl overflow-hidden border-2 border-gray-700">
            <Image
              src="/images/research/1.jpg"
              alt="Story Book Research Paper Certificate"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side: Overview */}
        <motion.div className="flex-1 space-y-6" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold">
            Story Book – A Social Media-based Web Application
          </h2>
          <p className="text-gray-300">
            This research paper presents a MERN-based social media platform,
            enabling users to share text and images, connect via friend
            requests, engage with posts through likes and comments, and manage
            content efficiently. The platform supports dark/light modes and
            includes an admin panel for moderation. The study highlights
            architecture, user engagement, and implementation insights, acting
            as a guide for future social media developments.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>
              Full-stack MERN implementation (MongoDB, Express, React, Node.js)
            </li>
            <li>
              Feature-rich social platform with posts, reactions, and comments
            </li>
            <li>
              User-friendly interface with registration/login and profile
              management
            </li>
            <li>Admin panel for content moderation and issue resolution</li>
          </ul>
          <a
            href="https://doi.org/10.51584/IJRIAS.2023.81205"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Read Full Paper
          </a>
        </motion.div>
      </motion.div>

      {/* Modal for large preview */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
            onClick={() => setIsOpen(false)}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative w-[80vw] h-[80vh] md:w-[60vw] md:h-[70vh]">
              <Image
                src="/images/research/1.jpg"
                alt="Story Book Research Paper Certificate"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ResearchPaperOverview;
