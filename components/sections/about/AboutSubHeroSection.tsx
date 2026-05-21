"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutImageSection() {

  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // IMAGE ZOOM EFFECT
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-bg-light pb-24 overflow-hidden"
    >

      {/* FULL WIDTH IMAGE */}
      <div className="relative w-full">

        <div className="relative h-[82vh] min-h-[720px] w-full overflow-hidden">

          {/* ZOOM IMAGE */}
          <motion.img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2200&auto=format&fit=crop"
            alt="Construction Team"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ scale }}
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* WATCH VIDEO */}
          <div className="absolute bottom-14 right-16 z-20 flex items-center gap-4 cursor-pointer group">

            <span className="text-white text-[2rem] font-light tracking-[-0.03em] border-b border-white/70 leading-none pb-1">
              Watch Video
            </span>

            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white transition-all duration-300 group-hover:bg-white">

              <svg
                className="ml-[2px] h-4 w-4 text-white group-hover:text-black transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}