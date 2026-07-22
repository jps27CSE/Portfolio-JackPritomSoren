'use client';
import { motion } from 'framer-motion';

export default function TextReveal({ children, as: Tag = 'h2', className = '', delay = 0 }) {
  return (
    <Tag className={className}>
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </Tag>
  );
}

export function StaggerText({ text, as: Tag = 'h2', className = '', delay = 0 }) {
  const words = text.split(' ');

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: delay + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
