"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";

function Counter({
  from = 0,
  to,
  suffix = "",
}: {
  from?: number;
  to: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.round(value));
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyJDavisSection() {

  const { scrollYProgress } = useScroll();

  // RIGHT SIDE STATS FADE/SLIDE
  const statsY = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section className="relative w-full overflow-hidden bg-bg-light py-28 md:py-36">

      {/* BLUEPRINT BACKGROUND */}
      <div className="pointer-events-none absolute right-0 bottom-0 opacity-[0.08]">
        <Image width={1000} height={1000}           src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
          alt="Blueprint"
          className="w-[420px] object-cover mix-blend-multiply"
        />
      </div>

      <div className="container-primary">

        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-24">

          {/* LEFT */}
          <div>

            <h2 className="text-[4.5rem] md:text-[5.5rem] font-[420] tracking-[-0.06em] leading-[0.95] text-text-dark">
              Why MSA?
            </h2>

            <div className="mt-10 flex items-center gap-4 text-text-dark">

              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M1 7.5H13M13 7.5L7 1.5M13 7.5L7 13.5"
                    stroke="#ed1c24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="text-[1.8rem] font-light tracking-[-0.04em]">
                About Us
              </p>

            </div>

            {/* AWARDS */}
            <div className="mt-24">
              <h4 className="text-[2rem] font-light text-text-dark mb-14">
                Industry Recognition & Certifications
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                
                <Image width={1000} height={1000}                   src="/logos/make-in-india.png"
                  alt="Make In India"
                  className="h-[80px] w-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />

                <Image width={1000} height={1000}                   src="/logos/bis.svg"
                  alt="BIS"
                  className="h-[80px] w-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />

                <Image width={1000} height={1000}                   src="/logos/iso-9001.svg"
                  alt="ISO 9001"
                  className="h-[80px] w-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />

                <div className="flex h-[80px] w-full flex-col items-center justify-center rounded-md border-2 border-gray-200 bg-white grayscale transition-all duration-500 hover:grayscale-0 hover:border-primary cursor-default">
                  <span className="text-[1.1rem] font-bold leading-tight text-text-dark">ISO</span>
                  <span className="text-[1.2rem] font-black leading-tight text-primary">45001</span>
                  <span className="text-[0.6rem] font-bold tracking-widest text-text-dark">SAFETY</span>
                </div>

                <Image width={1000} height={1000}                   src="/logos/asme.svg"
                  alt="ASME"
                  className="h-[80px] w-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />

                <Image width={1000} height={1000}                   src="/logos/ibr.png"
                  alt="IBR"
                  className="h-[80px] w-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />

              </div>
            </div>
            {/* CONTENT GRID */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">

              {/* COLUMN 1 */}
              <div>

                <h3 className="text-[2rem] font-light text-text-dark mb-8">
                  Industrial-Focused Work
                </h3>

                <ul className="space-y-5">

                  {[
                    "Focused on fabrication, erection and industrial infrastructure projects",
                    "Work with structured execution and site coordination teams",
                    "Balanced professional and personal life",
                    "Exposure to real industrial environments and execution workflows",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-[1.22rem] leading-[1.6] text-text-dark"
                    >
                      <span className="mt-[11px] h-[6px] w-[6px] rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}

                </ul>

              </div>

              {/* COLUMN 2 */}
              <div>

                <h3 className="text-[2rem] font-light text-text-dark mb-8">
                  Career Growth
                </h3>

                <ul className="space-y-5">

                  {[
                    "Hands-on industrial project exposure",
                    "Real fabrication and erection experience",
                    "Skill development alongside experienced engineers",
                    "Long-term growth through execution and project responsibility",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-[1.22rem] leading-[1.6] text-text-dark"
                    >
                      <span className="mt-[11px] h-[6px] w-[6px] rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}

                </ul>

              </div>
            </div>

          </div>

          {/* RIGHT STATS */}
          <motion.div
            style={{
              y: statsY,
              opacity: statsOpacity,
            }}
            className="relative"
          >

            <div className="space-y-16 sticky top-32">

              {/* ITEM */}
              <div>

                <div className="text-[7rem] leading-[0.9] tracking-[-0.08em] text-primary font-light">
                  <Counter to={99} suffix="%" />
                </div>

                <h3 className="mt-3 text-[2.2rem] font-light tracking-[-0.04em] text-text-dark">
                  Long-Term Workforce Retention
                </h3>

                <p className="mt-5 text-[0.95rem] uppercase tracking-[0.16em] leading-[1.5] text-[#666] font-semibold">
                  Built through trust, consistency and long-term industrial collaboration
                </p>

                <div className="mt-10 h-px w-full bg-[#9d9d9d]" />

              </div>

              {/* ITEM */}
              <div>

                <div className="text-[7rem] leading-[0.9] tracking-[-0.08em] text-primary font-light">
                  <Counter to={100} />+
                </div>

                <h3 className="mt-3 text-[2.2rem] font-light tracking-[-0.04em] text-text-dark">
                  Skilled Workforce & Site Personnel
                </h3>
                <p className="mt-5 text-[0.95rem] uppercase tracking-[0.16em] leading-[1.5] text-[#666] font-semibold">
                  Experienced teams delivering reliable fabrication and execution work

                </p>

                <div className="mt-10 h-px w-full bg-[#9d9d9d]" />

              </div>

              {/* ITEM */}
              <div>

                <div className="text-[7rem] leading-[0.9] tracking-[-0.08em] text-primary font-light">
                  <Counter to={26} />+
                </div>

                <h3 className="mt-3 text-[2.2rem] font-light tracking-[-0.04em] text-text-dark">
                  Years Experience
                </h3>
                <p className="mt-5 text-[0.95rem] uppercase tracking-[0.16em] leading-[1.5] text-[#666] font-semibold">
                  Decades of industrial construction and project execution expertise                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}