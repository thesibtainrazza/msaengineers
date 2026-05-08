"use client";

import React, { useEffect, useState } from "react";

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

        {/* Background Image */}
        <div
          className="absolute inset-0 scale-[1.02] bg-cover bg-center bg-no-repeat opacity-55"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/40" />

      </div>

      {/* Spacer For Header */}
      <div className="h-28 w-full shrink-0 md:h-36"></div>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-1 items-center">

        <div className="mx-auto w-full max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">

          <div className="max-w-[980px]">

            {/* Heading */}
            <h1 className="text-[4.6rem] font-[520] leading-[0.9] tracking-[-0.07em] text-white md:text-[7rem] lg:text-[6.5rem]">

              <span className="block">
                We build around{" "}
              </span>

              <span
                className="italic font-normal"
                style={{
                  fontFamily: '"Times New Roman", serif',
                }}
              >
                you
              </span>

            </h1>

            {/* Subtext */}
            <p className="mt-6 text-[1.8rem] font-light tracking-[-0.03em] text-white/95 md:text-[2.4rem]">
              Client Focused. Community First.
            </p>

            {/* CTA */}
            <div className="mt-14">

              <button className="group flex items-center rounded-full border-2 border-transparent bg-white px-10 py-5 text-[1.2rem] font-semibold text-[#ed1c24] transition-all duration-300 hover:border-white hover:bg-[#ed1c24] hover:text-white">

                <span>See Our Work</span>

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
          </div>
        </div>
      </main>

      {/* Bottom Timeline */}
      <div className="relative z-10 w-full pb-8 md:pb-10">

        <div className="mx-auto flex max-w-[1450px] items-center px-8 md:px-12 lg:px-16 xl:px-20 text-white">

          {/* PEOPLE */}
          <span
            className="shrink-0 text-[0.8rem] leading-none md:text-[1.2rem]"
            style={{
              fontFamily: "'Marker Felt', 'Comic Sans MS', fantasy",
            }}
          >
            PEOPLE
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
            PRINCIPLES
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
            PROGRESS
          </span>

        </div>
      </div>
    </section>
  );
}