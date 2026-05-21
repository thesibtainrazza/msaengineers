"use client";
import Image from "next/image";
import React, { useState } from 'react';

import { LEADERS, LEADERSHIP_SECTION } from '@/data/about';

export default function LeadershipSection() {
  const [current, setCurrent] = useState(0);
  return (
    <section className="relative w-full bg-white py-24 md:py-32" id="leadership">
      <div className="container-primary">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          
          {/* Left Column: Title & Intro */}
          <div className="lg:col-span-1 lg:pr-12">
            <h2 className="text-[3.5rem] font-[450] leading-[1.1] tracking-[-0.04em] text-[#4b4b4b] md:text-[4.5rem]">
              Our <span className="relative inline-block">
                  <span className="relative z-10">Leadership</span>
                  <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span>
              </span>
            </h2>
            <p className="mt-8 text-[1.6rem] font-light leading-[1.7] text-[#5f5f5f]">
              {LEADERSHIP_SECTION.description}
            </p>
          </div>

          {/* Right Column: Leader Profiles */}
        <div className="lg:col-span-2">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

    <div className="flex flex-col">

      <div className="aspect-[3/4] w-full overflow-hidden mb-6 bg-gray-100">

        <Image width={1000} height={1000}           src={LEADERS[current].image}
          alt={LEADERS[current].name}
          className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
        />

      </div>

      <h3 className="text-[2.4rem] font-[450] text-[#ed1c24]">
        {LEADERS[current].name}
      </h3>

      <p className="font-serif italic text-[#4b4b4b] text-[1.4rem] mt-1">
        {LEADERS[current].title}
      </p>

    </div>

    <div className="md:pt-4 flex flex-col justify-between h-full">

      <p className="text-[1rem] font-light leading-[1.7] text-[#5f5f5f]">
        {LEADERS[current].bio}
      </p>

      <div className="mt-16 flex items-center gap-8">

        <button
          onClick={() =>
            setCurrent((prev) =>
              prev === 0 ? LEADERS.length - 1 : prev - 1
            )
          }
          className="group"
        >

          <svg
            className="w-14 h-14 text-[#ed1c24] transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>

        </button>

        <div className="h-10 w-[1px] bg-[#d9d9d9]"></div>

        <button
          onClick={() =>
            setCurrent((prev) =>
              prev === LEADERS.length - 1 ? 0 : prev + 1
            )
          }
          className="group"
        >

          <svg
            className="w-14 h-14 text-[#ed1c24] transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>

        </button>

      </div>

    </div>

  </div>

</div>

        </div>
        
         <div className="mt-24 pt-20 border-t border-gray-200">

          <h2 className="text-[1.8rem] md:text-[2.6rem] font-[450] leading-[1.2] tracking-[-0.04em] text-[#4b4b4b] max-w-[82%]">

            {LEADERSHIP_SECTION.conclusionText}

            <span className="bg-[#ed1c24] text-white px-2">
              {LEADERSHIP_SECTION.conclusionHighlight}
            </span>

             {LEADERSHIP_SECTION.conclusionEnd}

          </h2>

        </div>
      </div>
    </section>
  );
}
