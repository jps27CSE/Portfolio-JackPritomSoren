"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInViewOnce } from "@/lib/utils";

const ResearchPaperSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sectionRef, inView] = useInViewOnce();

  return (
    <section id="research" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Research Paper
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div
            className="relative cursor-pointer perspective-[1200px]"
            whileHover={{ scale: 1.03 }}
            onClick={() => setIsOpen(true)}
          >
            <motion.div
              className="glass-strong rounded-2xl overflow-hidden shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ rotateY: -5, rotateX: 3 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="relative h-[300px]">
                <Image src="/images/research/1.jpg" alt="Story Book Research Paper" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070d]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass px-3 py-1.5 rounded-full text-xs text-white/80 inline-block">Click to enlarge</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Story Book – A Social Media-based Web Application</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              This research paper presents a MERN-based social media platform, enabling users to share text and images, connect via friend requests, engage with posts through likes and comments, and manage content efficiently.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Full-stack MERN implementation (MongoDB, Express, React, Node.js)",
                "Feature-rich social platform with posts, reactions, and comments",
                "User-friendly interface with registration/login and profile management",
                "Admin panel for content moderation and issue resolution",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="https://doi.org/10.51584/IJRIAS.2023.81205" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 text-sm">
              Read Full Paper
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="relative w-full max-w-4xl aspect-[4/3]"
            >
              <Image src="/images/research/1.jpg" alt="Research Paper" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ResearchPaperSection;
