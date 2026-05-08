"use client";
import { motion } from "framer-motion";
import React from 'react';

export default function LogoMarquee() {
  const logos = [
    <div key="1" className="flex flex-col items-center justify-center mx-8 md:mx-16 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer shrink-0">
      <span className="text-[10px] tracking-[0.2em] font-serif text-black uppercase">The Country Club of</span>
      <span className="text-xl font-serif text-black uppercase tracking-wider mt-1">Sapphire Valley</span>
      <span className="text-[8px] tracking-widest text-black mt-1">ESTABLISHED 1956</span>
    </div>,
    <div key="2" className="flex items-center mx-8 md:mx-16 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer shrink-0">
      <svg className="w-10 h-10 mr-2 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2L2 22h20L14 2z M10 10l-4 8h8l-4-8z"/>
      </svg>
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-tighter leading-none text-black">SUMMIT</span>
        <span className="text-[10px] tracking-widest leading-none mt-1 text-black">CHARTER SCHOOL</span>
      </div>
    </div>,
    <div key="3" className="flex items-center mx-8 md:mx-16 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer shrink-0">
      <span className="text-4xl font-light text-gray-400 tracking-tight" style={{ fontFamily: "'Brush Script MT', cursive" }}>Trillium</span>
    </div>,
    <div key="4" className="flex items-center justify-center mx-8 md:mx-16 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer shrink-0">
       <div className="w-24 h-24 rounded-full border-4 border-black bg-black text-white flex items-center justify-center text-center p-2">
         <span className="text-[10px] font-bold leading-tight tracking-widest">WILDCAT<br/>CLIFFS<br/><span className="text-[8px] font-normal">COUNTRY CLUB</span></span>
       </div>
    </div>,
    <div key="5" className="flex items-center justify-center mx-8 md:mx-16 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer shrink-0">
       <div className="w-32 h-20 rounded-[50%] border-2 border-black bg-black text-white flex items-center justify-center text-center p-2">
         <span className="text-[9px] font-semibold leading-tight tracking-widest">ANDERSON COUNTY<br/><span className="text-[7px] font-light">SOUTH CAROLINA</span></span>
       </div>
    </div>
  ];

  return (
    <div className="w-full overflow-hidden flex items-center h-40 relative">
      <motion.div
        className="flex items-center whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        <div className="flex items-center justify-around shrink-0 w-max pr-8">
          {logos}
        </div>
        <div className="flex items-center justify-around shrink-0 w-max pr-8">
          {logos}
        </div>
      </motion.div>
    </div>
  );
}
