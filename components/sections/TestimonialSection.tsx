"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TestimonialSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // The circle starts small (scale 0.2) when the section enters the bottom of the screen,
  // reaches normal size (scale 1) in the middle, and expands huge (scale 2.5) as it leaves.
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 2.5]);
  
  return (
    <section ref={containerRef} className="relative w-full py-40 md:py-64 bg-[#f8f8f8] overflow-hidden">
      
      {/* Animated Expanding Circle Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] pointer-events-none flex items-center justify-center z-0">
        <motion.div 
          className="absolute inset-0 rounded-full border-[1.5px] border-[#ed1c24] opacity-20"
          style={{ scale }}
        />
        {/* Tiny white dot exactly in the center */}
        <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full z-10 shadow-sm opacity-80"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-end">
         
         {/* Left Column (Author Info) */}
         <div className="lg:col-span-4 flex flex-col justify-end text-[#4a4a4a] pb-2">
           <p className="text-xl md:text-2xl font-normal leading-snug">Kathy Hipp</p>
           <p className="text-xl md:text-2xl font-normal leading-snug">Anderson School District 3</p>
           <p className="text-xl md:text-2xl text-[#888] font-light mt-1 leading-snug">Superintendent</p>
         </div>

         {/* Right Column (The Quote) */}
         <div className="lg:col-span-8">
           <h2 className="text-4xl md:text-[4rem] lg:text-[4.5rem] font-normal text-[#ed1c24] leading-[1.1] tracking-tight">
             &ldquo;J. Davis was an outstanding partner in all phases of our construction projects. They worked diligently to get the best price for our money without sacrificing quality.&rdquo;
           </h2>
         </div>
         
      </div>
    </section>
  );
}
