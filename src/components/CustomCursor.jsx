'use client';
import { useEffect, useRef } from 'react';
import { useMousePosition } from '@/lib/utils';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let rafId;
    let fx = 0, fy = 0;

    const animate = () => {
      fx += (x - fx) * 0.15;
      fy += (y - fy) * 0.15;
      cursor.style.transform = `translate(${x}px, ${y}px)`;
      follower.style.transform = `translate(${fx}px, ${fy}px)`;
      rafId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(rafId);
  }, [x, y]);

  useEffect(() => {
    const handleHover = (e) => {
      const target = e.target.closest('a, button, input, textarea, select, [role="button"]');
      if (!followerRef.current) return;
      followerRef.current.style.width = target ? '48px' : '32px';
      followerRef.current.style.height = target ? '48px' : '32px';
      followerRef.current.style.borderColor = target ? 'rgba(168, 85, 247, 0.6)' : 'rgba(255,255,255,0.15)';
      followerRef.current.style.background = target ? 'rgba(168, 85, 247, 0.08)' : 'transparent';
    };
    document.addEventListener('mouseover', handleHover);
    return () => document.removeEventListener('mouseover', handleHover);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-violet-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(0, 0)' }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border transition-all duration-300 ease-out"
        style={{
          borderColor: 'rgba(255,255,255,0.15)',
          background: 'transparent',
          transform: 'translate(0, 0)',
        }}
      />
    </>
  );
}
