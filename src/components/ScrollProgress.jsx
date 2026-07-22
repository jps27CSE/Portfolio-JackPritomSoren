'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9997] origin-left"
      style={{
        scaleX: scaleY,
        background: 'linear-gradient(90deg, #7c3aed, #c026d3, #06b6d4)',
      }}
    />
  );
}
