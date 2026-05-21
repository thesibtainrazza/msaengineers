"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SERVICES_HERO } from "@/data/services";

export default function ServicesHeroSection() {

  const [activeTab, setActiveTab] = useState("Shed Structures");

  const navItems = SERVICES_HERO.navItems;

  /* IMAGE ZOOM SCROLL EFFECT */
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f5] pt-40 pb-0">

      <div className="container-primary">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-x-32 items-start">

          {/* LEFT */}
          <div>

            <h4 className="mb-8 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
              {SERVICES_HERO.label}
            </h4>

            <h1 className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-[420] tracking-[-0.07em] leading-[0.9] text-[#4b4b4b]">

              {SERVICES_HERO.headingPart1}
              <br />

              {SERVICES_HERO.headingPart2}

            </h1>

            {/* NAV LINKS */}
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4">

              {navItems.map((item) => (

                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveTab(item.label)}
                  className={`
                    relative
                    inline-block
                    border-b
                    pb-[2px]
                    text-[1.55rem]
                    font-light
                    tracking-[-0.03em]
                    transition-all
                    duration-300
                    ${
                      activeTab === item.label
                        ? "border-[#4b4b4b] text-[#4b4b4b]"
                        : "border-[#4b4b4b] text-[#4b4b4b] hover:text-[#ed1c24]"
                    }
                  `}
                >
                  {item.label}
                </a>

              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="pt-14 lg:pt-10 max-w-[620px]">

            <p className="text-[1.55rem] font-light leading-[1.7] tracking-[-0.03em] text-[#4f4f4f]">

              {SERVICES_HERO.descriptionPart1}

              <span className="bg-[#ed1c24] px-2 py-[2px] text-white">
                {SERVICES_HERO.highlightText}
              </span>

              {SERVICES_HERO.descriptionPart2}

            </p>

          </div>

        </div>

        {/* SECOND TEXT */}
        <div className="mt-40 max-w-[1250px]">

          <p className="text-[1.55rem] md:text-[1.8rem] lg:text-[2.2rem] font-light tracking-[-0.05em] leading-[1.06] text-[#4b4b4b]">

            {SERVICES_HERO.secondaryTextPart1}

            <span className="bg-[#ed1c24] px-3 py-[2px] text-white">
               {SERVICES_HERO.secondaryHighlight}
            </span>

            {SERVICES_HERO.secondaryTextPart2}

          </p>

        </div>

      </div>

      {/* FULL IMAGE WITH ZOOM SCROLL EFFECT */}
      <div
        ref={imageRef}
        className="relative mt-32 w-full overflow-hidden"
      >

        <motion.img
          style={{ scale }}
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2200&auto=format&fit=crop"
          alt="Ribbon Cutting"
          className="
            h-[70vh]
            md:h-[95vh]
            w-full
            object-cover
            origin-center
          "
        />

      </div>

    </section>
  );
}