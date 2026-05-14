"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CTASection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background (Garage) zoom effect: scales from 1 to 1.25 as you scroll through the section
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  
  // Foreground (Helmets) moves up slightly faster to create a 3D parallax depth effect
  const fgY = useTransform(scrollYProgress, [0, 1], ["15%", "-10%"]);

  return (
    <section ref={containerRef} className="relative w-full py-40 md:py-64 flex items-center bg-[#111] overflow-hidden h-[80vh] min-h-[700px]">
      
      {/* 1. Background Layer (Garage) */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ scale: bgScale }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          // Replace with your garage background image
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')" }} 
        ></div>
      </motion.div>

      {/* 2. Foreground Layer (Helmets Scene) */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-[60%] z-10 pointer-events-none"
        style={{ y: fgY }}
      >
         {/* 
            PLACEHOLDER NOTE: 
            Replace this URL with the path to your actual transparent PNG of the helmets on shovels.
            Since the placeholder is a standard photo, it will look like a rectangle until you swap it with a transparent PNG.
         */}
         <div 
          className="absolute bottom-0 w-full h-full bg-contain bg-bottom bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888081-35b8e104e761?q=80&w=2070&auto=format&fit=crop')" }} 
         ></div>
      </motion.div>

      {/* Gradient to blend the bottom edge smoothly into whatever comes next (like a footer) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111] to-transparent z-10 pointer-events-none"></div>

      {/* 3. Text Content */}
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-20 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium text-white leading-[1.1] tracking-tight mb-6 drop-shadow-2xl">
            Let’s Build Something Strong.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light drop-shadow-xl">
            Connect with MSA Engineers & Contractors for reliable industrial engineering and execution solutions across India.
          </p>
          <a href="#" className="inline-flex items-center justify-center bg-white rounded-full px-8 md:px-10 py-4 text-[#ed1c24] hover:bg-gray-100 transition-colors shadow-[0_10px_30px_rgba(237,28,36,0.3)] group cursor-pointer">
            <span className="font-medium text-lg">Contact Us</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
