"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ServicesHeroSection() {

  const [activeTab, setActiveTab] = useState("Shed Structures");

  const navItems = [
    { label: "Shed Structures", href: "#shed-structures" },
    { label: "Fabrication Works", href: "#fabrication-works" },
    { label: "Industrial Erection", href: "#industrial-erection" },
    { label: "Conveyor Systems", href: "#conveyor-systems" },
     { label: "Equipment Rentals", href: "#equipment-rentals" },
  ];

  /* IMAGE ZOOM SCROLL EFFECT */
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f5] pt-40 pb-0">

      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-x-32 items-start">

          {/* LEFT */}
          <div>

            <h4 className="mb-8 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
              SERVICES
            </h4>

            <h1 className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-[420] tracking-[-0.07em] leading-[0.9] text-[#4b4b4b]">

              From fabrication
              <br />

              to field execution

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

              When industries partner with MSA, they work with a team focused on practical execution, structural precision, and dependable delivery. From industrial shed structures and heavy fabrication works to conveyor systems and on-site erection, we handle projects with {" "}

              <span className="bg-[#ed1c24] px-2 py-[2px] text-white">
                disciplined coordination
              </span>

              {" "} and hands-on industry experience.

Whether supporting plant expansions, shutdown activities, or new industrial developments, our approach stays rooted in safety, durability, and efficient execution — delivering solutions that perform reliably in real working environments.

            </p>

          </div>

        </div>

        {/* SECOND TEXT */}
        <div className="mt-40 max-w-[1250px]">

          <p className="text-[1.55rem] md:text-[1.8rem] lg:text-[2.2rem] font-light tracking-[-0.05em] leading-[1.06] text-[#4b4b4b]">

            We build industrial systems that demand precision, durability, and real-world execution. We earn{" "}

            <span className="bg-[#ed1c24] px-3 py-[2px] text-white">
               long-term trust
            </span>

            {" "}through accountability on-site and consistency in delivery. And we specialize in structural solutions engineered for demanding industrial environments.

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