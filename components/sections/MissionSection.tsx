"use client";

import React, { useEffect, useState } from "react";
import { MISSION_SECTION } from "@/data/home";

export default function MissionSection() {
  const [highlightWidth, setHighlightWidth] = useState(0);
  const [arrowProgress, setArrowProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("mission-section");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight * 0.9), 0),
        1
      );

      setHighlightWidth(progress * 100);
      setArrowProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="mission-section"
      className="relative w-full overflow-hidden bg-white py-28"
    >

      <div className="container-primary grid grid-cols-1 gap-24 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative min-h-[900px]">

          {/* TOP RED LINE */}
          <div className="absolute left-[22%] top-[-70px] hidden h-[170px] w-[2px] bg-[#ed1c24] lg:block"></div>

          {/* MAIN IMAGE */}
          <div className="relative z-10 aspect-[0.8/1] w-[72%] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.14)]">

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1718287322962-7dff57bcda26?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1974&auto=format&fit=crop')",
              }}
            />

          </div>

          {/* FLOATING SECOND IMAGE */}
          <div className="absolute bottom-0 right-0 z-20 aspect-[1.32/0.78] w-[78%] overflow-hidden border-[10px] border-[#f7f7f5] shadow-[0_25px_60px_rgba(0,0,0,0.16)]">

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1730127557915-704ac78b1736?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2070&auto=format&fit=crop')",
              }}
            />

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex flex-col items-start pt-8 lg:pt-10">

          {/* SMALL LABEL */}
          <h4 className="mb-10 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
            {MISSION_SECTION.label}
          </h4>

          {/* MAIN HEADING */}
          <h2 className="text-[3.7rem] font-[350] leading-[1.08] tracking-[-0.055em] text-[#4b4b4b] md:text-[4.8rem] lg:text-[5.4rem]">

            {MISSION_SECTION.headingPart1}
            <br />

            {MISSION_SECTION.headingPart2}
            <br />

            {MISSION_SECTION.headingPart3}
            <br />

            {/* HIGHLIGHT */}
            <span className="relative inline-block overflow-hidden px-3 py-[2px] text-white">

              {/* RED FILL */}
              <span
                className="absolute left-0 top-0 z-0 h-full bg-[#ed1c24]"
                style={{
                  width: `${highlightWidth}%`,
                  transition: "width 0.08s linear",
                }}
              />

              {/* TEXT */}
              <span className="relative z-10">
                {MISSION_SECTION.highlightText}
              </span>

            </span>
            {MISSION_SECTION.headingPart4}
            <br />

            {MISSION_SECTION.headingPart5}

          </h2>

          {/* BIG OUTLINE ARROW */}
          <div className="pointer-events-none absolute bottom-[-250px] right-[-120px] hidden lg:block">

            <svg
              width="281"
              height="337"
              viewBox="0 0 281 337"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[340px]"
            >

              {/* WHITE INNER THICKNESS */}
              <path
                d="M178.9 279.361L305.124 153.137L325.64 173.652L163.638 335.655L1.63461 173.652L22.1506 153.137L148.375 279.361L149.228 280.214L149.228 279.007L149.363 0.912293L177.913 0.912296L178.047 279.007L178.047 280.214L178.9 279.361Z"
                stroke="white"
                strokeWidth="24"
                fill="none"
              />

              {/* RED OUTLINE */}
              <path
                d="M178.9 279.361L305.124 153.137L325.64 173.652L163.638 335.655L1.63461 173.652L22.1506 153.137L148.375 279.361L149.228 280.214L149.228 279.007L149.363 0.912293L177.913 0.912296L178.047 279.007L178.047 280.214L178.9 279.361Z"
                stroke="#F00914"
                strokeWidth="2"
                fill="none"
                style={{
                  strokeDasharray: 1400,
                  strokeDashoffset: 1400 - (1400 * arrowProgress),
                  transition: "stroke-dashoffset 0.08s linear",
                }}
              />

            </svg>

          </div>

        </div>

      </div>

      {/* BOTTOM DIVIDER */}
      <div className="container-primary mt-44">

        <div className="h-[1px] w-full bg-[#d7d7d7]"></div>

      </div>

    </section>
  );
}