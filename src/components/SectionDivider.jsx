'use client';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1350,60 1440,60 L1440,120 L0,120 Z"
          fill="url(#dividerGrad)"
          initial={{ d: 'M0,60 C360,120 720,0 1080,60 C1260,90 1350,60 1440,60 L1440,120 L0,120 Z' }}
          animate={{
            d: [
              'M0,60 C360,120 720,0 1080,60 C1260,90 1350,60 1440,60 L1440,120 L0,120 Z',
              'M0,40 C360,0 720,100 1080,40 C1260,10 1350,40 1440,40 L1440,120 L0,120 Z',
              'M0,60 C360,120 720,0 1080,60 C1260,90 1350,60 1440,60 L1440,120 L0,120 Z',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="dividerGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#c026d3" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
