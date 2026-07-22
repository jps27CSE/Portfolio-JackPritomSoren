"use client";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 text-white py-8 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold gradient-text"
          >
            JPS
          </motion.span>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} Jack Pritom Soren. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="glass p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-violet-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 pt-6 border-t border-white/5"
        >
          <p className="text-gray-600 text-xs">Crafted with care using Next.js & Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
