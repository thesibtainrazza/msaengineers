"use client";

import Image from "next/image";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { CAREERS_HERO } from "@/data/careers";

export default function CareersHeroSection() {

  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // ARROW DRAW EFFECT
  const arrowProgress = useTransform(
    scrollYProgress,
    [0, 0.55],
    [1400, 0]
  );

  // IMAGE ZOOM EFFECT
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.18, 1]
  );

  return (

    <section
      ref={containerRef}
      className="
          relative
          w-full
          overflow-hidden
          bg-[#f7f7f5]
          pt-40
          pb-0
        "
    >

      <div className="container-primary">

        {/* TOP GRID */}
        <div
          className="
              grid
              grid-cols-1
              lg:grid-cols-[1.1fr_0.9fr]
              gap-x-32
              gap-y-16
              items-start
            "
        >

          {/* LEFT */}
          <div>

            <h4
              className="
                  mb-8
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#ed1c24]
                "
            >
              {CAREERS_HERO.label}
            </h4>

            <h1
              className="
                  text-[5rem]
                  md:text-[6rem]
                  lg:text-[7rem]
                  font-[420]
                  tracking-[-0.07em]
                  leading-[0.9]
                  text-[#4b4b4b]
                "
            >
              {CAREERS_HERO.heading}
            </h1>

          </div>

          {/* RIGHT */}
          <div className="pt-10 lg:pt-16 max-w-[640px]">

            <p
              className="
                  text-[1.55rem]
                  font-light
                  leading-[1.7]
                  tracking-[-0.03em]
                  text-[#4f4f4f]
                "
            >

              {CAREERS_HERO.description}

              <span className="bg-[#ed1c24] px-2 py-[2px] text-white">
                {CAREERS_HERO.highlightText}
              </span>
            </p>

          </div>

        </div>

        {/* SECOND SECTION */}
        <div className="mt-40 relative">

          <div className="max-w-[1220px]">

            <p
              className="
                  text-[1.5rem]
                  md:text-[2rem]
                  lg:text-[3.15rem]
                  font-light
                  tracking-[-0.05em]
                  leading-[1.06]
                  text-[#4b4b4b]
                  mb-16
                "
            >
              {CAREERS_HERO.secondaryTextPart1}

              <span className="bg-[#ed1c24] px-3 py-[2px] text-white">
                {CAREERS_HERO.secondaryHighlight}
              </span>

              {CAREERS_HERO.secondaryTextPart2}
              </p>

              {/* BUTTON */}
              <a
                href={CAREERS_HERO.ctaLink}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#ed1c24]
                  px-10
                  py-5
                  text-[1.35rem]
                  font-light
                  tracking-[-0.03em]
                  text-[#4b4b4b]
                  transition-all
                  duration-300
                  hover:bg-[#ed1c24]
                  hover:text-white
                "
              >

                {CAREERS_HERO.ctaText}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>

              </a>

          </div>

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
              <motion.path
                d="M178.9 279.361L305.124 153.137L325.64 173.652L163.638 335.655L1.63461 173.652L22.1506 153.137L148.375 279.361L149.228 280.214L149.228 279.007L149.363 0.912293L177.913 0.912296L178.047 279.007L178.047 280.214L178.9 279.361Z"
                stroke="#F00914"
                strokeWidth="2"
                fill="none"
                style={{
                  strokeDasharray: 1400,
                  strokeDashoffset: arrowProgress,
                }}
              />

            </svg>

          </div>

        </div>

      </div>

      {/* HERO IMAGE */}
      <div className="relative mt-32 overflow-hidden">

        <motion.div
          style={{
            scale: imageScale,
          }}
          className="
              relative
              h-[420px]
              md:h-[620px]
              lg:h-[850px]
              w-full
            "
        >

          <Image width={1000} height={1000}             src={CAREERS_HERO.heroImage}
            alt="MSA Team"
            className="
                h-full
                w-full
                object-cover
              "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/10" />

        </motion.div>

      </div>

    </section>

  );

}