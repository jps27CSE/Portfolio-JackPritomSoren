'use client';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import { useMediaQuery } from '@/lib/utils';

export default function ClientLayout({ children }) {
  const isMobile = useMediaQuery('(hover: none) and (pointer: coarse)');

  return (
    <>
      {!isMobile && <CustomCursor />}
      <ScrollProgress />
      <AnimatePresence mode="wait">
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
