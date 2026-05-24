"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HERO_SECTION } from "@/content/home";
import FadeIn from "@/components/ui/FadeIn";

export default function HeroSection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // controls how fast line moves
      const value = Math.min(scrollY / 500, 1);

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-black font-sans text-white">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 scale-[1.02] h-full w-full object-cover opacity-55"
        >
          <source src="/msa.MP4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/40" />

      </div>

      {/* Spacer For Header */}
      <div className="h-28 w-full shrink-0 md:h-36"></div>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-1 items-center">

        <div className="container-primary w-full">

          <div className="max-w-[980px]">
            <FadeIn delay={0.2}>
              {/* Heading */}
              <h1 className="text-[4.6rem] whitespace-nowrap font-[520] leading-[0.9] tracking-[-0.07em] text-white md:text-[3.6rem] lg:text-[5rem]">

                <span className="block">
                  {HERO_SECTION.headingPart1}
                </span>

                <span
                  className="italic font-normal"
                  style={{
                    fontFamily: '"Times New Roman", serif',
                  }}
                >
                  {HERO_SECTION.headingPart2}
                </span>

              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              {/* Subtext */}
              <p className="mt-6 text-[1.8rem] font-light tracking-[-0.03em] text-white/95 md:text-[2.4rem]">
                {HERO_SECTION.subtext}
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              {/* CTA */}
              <div className="mt-14">

                <Link href={HERO_SECTION.ctaLink} className="group inline-flex w-fit items-center rounded-full border-2 border-transparent bg-white px-10 py-5 text-[1.2rem] font-semibold text-primary transition-all duration-300 hover:border-white hover:bg-primary hover:text-white">

                  <span>{HERO_SECTION.ctaText}</span>

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

                </Link>

              </div>
            </FadeIn>
          </div>
        </div>
      </main>

      {/* Bottom Timeline */}
      <div className="relative z-10 w-full pb-8 md:pb-10">

        <div className="container-primary flex items-center text-white">

          {/* PEOPLE */}
          <span
            className="shrink-0 text-[0.8rem] leading-none md:text-[1.2rem]"
            style={{
              fontFamily: "'Marker Felt', 'Comic Sans MS', fantasy",
            }}
          >
            {HERO_SECTION.timelineLabels[0]}
          </span>

          {/* Animated Line 1 */}
          <div className="relative mx-4 h-[2px] flex-1 overflow-hidden bg-white/20">

            <div
              className="absolute left-0 top-0 h-full bg-white transition-all duration-300 ease-out"
              style={{
                width: `${Math.min(progress * 200, 100)}%`,
              }}
            />

          </div>

          {/* PRINCIPLES */}
          <span
            className="shrink-0 text-[0.8rem] leading-none md:text-[1.2rem]"
            style={{
              fontFamily: "'Marker Felt', 'Comic Sans MS', fantasy",
            }}
          >
            {HERO_SECTION.timelineLabels[1]}
          </span>

          {/* Animated Line 2 */}
          <div className="relative mx-4 h-[2px] flex-1 overflow-hidden bg-white/20">

            <div
              className="absolute left-0 top-0 h-full bg-white transition-all duration-300 ease-out"
              style={{
                width:
                  progress > 0.5
                    ? `${Math.min((progress - 0.5) * 200, 100)}%`
                    : "0%",
              }}
            />

          </div>

          {/* PROGRESS */}
          <span
            className="shrink-0 text-[0.8rem] leading-none md:text-[1.2rem]"
            style={{
              fontFamily: "'Marker Felt', 'Comic Sans MS', fantasy",
            }}
          >
            {HERO_SECTION.timelineLabels[2]}
          </span>

        </div>
      </div>
    </section>
  );
}