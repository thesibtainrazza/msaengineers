"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TestimonialSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Track section scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // White circle scaling animation
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0.05, 0.45, 1.6]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-40 md:py-64 bg-[#f8f8f8] overflow-hidden"
    >
      {/* Circle System */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[850px] md:h-[850px] pointer-events-none flex items-center justify-center z-0">

        {/* Static Red Outline Circle */}
        <div className="absolute inset-0 rounded-full border border-primary/10" />

        {/* Expanding White Filled Circle */}
        <motion.div
          className="absolute rounded-full bg-white"
          style={{
            scale,
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-end">

        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col justify-end text-[#4a4a4a] pb-2">
          <p className="text-xl md:text-2xl font-normal leading-snug">
            Arjun Kumar
          </p>

          <p className="text-xl md:text-2xl font-normal leading-snug">
            UltraTech Cement Limited
          </p>

          <p className="text-xl md:text-2xl text-[#888] font-light mt-1 leading-snug">
            Project Head
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8">
          <h2 className="text-4xl md:text-[4rem] lg:text-[4.5rem] font-normal text-primary leading-[1.08] tracking-tight">
            &ldquo;MSA Engineers & Contractors demonstrated strong execution, professionalism, and reliability throughout the project. Their commitment to quality and timely delivery made them a trusted industrial partner..&rdquo;
          </h2>
        </div>

      </div>
    </section>
  );
}