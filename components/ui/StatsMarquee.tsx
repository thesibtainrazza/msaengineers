"use client";
import { motion } from "framer-motion";
import React from 'react';

export default function StatsMarquee() {
  const stats = (
    <>
      <div className="flex items-center mx-12 md:mx-20 shrink-0">
        <span className="text-[10rem] md:text-[18rem] font-medium text-[#ed1c24] leading-none tracking-tighter">99%</span>
        <span className="text-[#ed1c24] text-lg md:text-2xl font-semibold ml-6 md:ml-12 leading-tight">Customer<br/>Satisfaction</span>
      </div>
      <div className="w-[1.5px] h-[120px] md:h-[200px] bg-[#ed1c24] mx-4 md:mx-8 shrink-0 opacity-80"></div>
      
      <div className="flex items-center mx-12 md:mx-20 shrink-0">
        <span className="text-[10rem] md:text-[18rem] font-medium text-[#ed1c24] leading-none tracking-tighter">1500+</span>
        <span className="text-[#ed1c24] text-lg md:text-2xl font-semibold ml-6 md:ml-12 leading-tight">Completed<br/>Projects</span>
      </div>
      <div className="w-[1.5px] h-[120px] md:h-[200px] bg-[#ed1c24] mx-4 md:mx-8 shrink-0 opacity-80"></div>
      
      <div className="flex items-center mx-12 md:mx-20 shrink-0">
        <span className="text-[10rem] md:text-[18rem] font-medium text-[#ed1c24] leading-none tracking-tighter">25+</span>
        <span className="text-[#ed1c24] text-lg md:text-2xl font-semibold ml-6 md:ml-12 leading-tight">Years of<br/>Excellence</span>
      </div>
      <div className="w-[1.5px] h-[120px] md:h-[200px] bg-[#ed1c24] mx-4 md:mx-8 shrink-0 opacity-80"></div>
    </>
  );

  return (
    <div className="w-full overflow-hidden flex items-center h-[200px] md:h-[350px]">
      <motion.div
        className="flex items-center whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
      >
        <div className="flex items-center justify-around shrink-0 w-max">
          {stats}
        </div>
        <div className="flex items-center justify-around shrink-0 w-max">
          {stats}
        </div>
      </motion.div>
    </div>
  );
}
