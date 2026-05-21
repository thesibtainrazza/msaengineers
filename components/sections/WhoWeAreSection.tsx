"use client";

import React, { useEffect, useState } from "react";
import Marquee from "@/components/ui/Marquee";
import { WHO_WE_ARE_SECTION } from "@/data/home";

export default function WhoWeAreSection() {
  const [highlightWidth, setHighlightWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("who-highlight");

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight * 0.8), 0),
        1
      );

      setHighlightWidth(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white py-28 md:py-36">

      {/* Background Watermark */}
      <Marquee />

      <div className="relative z-10 container-primary grid grid-cols-1 items-center gap-20 lg:grid-cols-2 lg:gap-28">

        {/* Left Content */}
        <div className="flex flex-col items-start">

          {/* Small Label */}
          <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
            {WHO_WE_ARE_SECTION.label}
          </h4>

          {/* Main Heading */}
          <h2 className="text-[4.2rem] font-[450] leading-[0.98] tracking-[-0.06em] text-[#4b4b4b] md:text-[5.4rem] lg:text-[5.8rem]">

            <span className="block">
              {WHO_WE_ARE_SECTION.headingPart1}
            </span>

            <span className="mt-1 block">
              {WHO_WE_ARE_SECTION.headingPart2}

              {/* Animated Highlight */}
              <span
                id="who-highlight"
                className="relative inline-block overflow-hidden px-4 py-[2px] text-white"
              >

                {/* Animated Red Fill */}
                <span
                  className="absolute left-0 top-0 z-0 h-full bg-[#ed1c24] transition-all duration-200 ease-out"
                  style={{
                    width: `${highlightWidth}%`,
                  }}
                />

                {/* Text */}
                <span className="relative z-10 font-medium">
                  {WHO_WE_ARE_SECTION.headingHighlight}
                </span>

              </span>

            </span>

          </h2>

          {/* Paragraph */}
          <p className="mt-10 max-w-[720px] text-[1.7rem] font-light leading-[1.7] tracking-[-0.02em] text-[#5f5f5f]">
            {WHO_WE_ARE_SECTION.description}
          </p>

          {/* Button */}
          <button className="group mt-14 flex items-center rounded-full border-2 border-[#ed1c24] bg-transparent px-10 py-5 text-[1.2rem] font-medium text-[#4b4b4b] transition-all duration-300 hover:bg-[#ed1c24] hover:text-white">

            <span>{WHO_WE_ARE_SECTION.ctaText}</span>

            <svg
              className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>

          </button>
        </div>

        {/* Right Media */}
        <div className="relative">

          {/* Red Accent Line */}
          <div className="absolute left-[-12%] top-[16%] z-20 hidden h-[2px] w-[24%] bg-[#ed1c24] lg:block"></div>

          {/* Image Container */}
          <div className="group relative aspect-[1.28/1] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            {/* Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1573215030128-5c0991e9e81d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2065&auto=format&fit=crop')",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/15"></div>

            {/* Play Button */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">

              <div className="flex h-28 w-28 items-center justify-center rounded-full border-[3px] border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">

                <svg
                  className="ml-2 h-10 w-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}