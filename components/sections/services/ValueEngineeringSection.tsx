"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ValueEngineeringSection() {

  const testimonialRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: testimonialRef,
    offset: ["start end", "end start"],
  });

  // EXPANDING CIRCLE
  const scale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.08, 0.55, 1.8]
  );

  return (
    <>
      {/* ========================================= */}
      {/* VALUE ENGINEERING SECTION */}
      {/* ========================================= */}

      <section className="relative w-full overflow-hidden bg-bg-light py-36">

        <div className="container-primary">

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-x-28 gap-y-24">

            {/* LEFT CONTENT */}
            <div>

              <h4
                className="
                  mb-8
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-primary
                "
              >
                EXECUTION PHILOSOPHY
              </h4>

              <h2
                className="
                  text-[4.5rem]
                  md:text-[5.5rem]
                  lg:text-[6rem]
                  font-[420]
                  tracking-[-0.07em]
                  leading-[0.9]
                  text-text-dark
                "
              >
                Industrial
                <br />
                Execution{" "}

                <span className="text-primary">≠</span>

                <br />

                Compromise

              </h2>

              <div className="mt-14 max-w-[760px]">

                <p
                  className="
                    text-[1.55rem]
                    font-light
                    leading-[1.7]
                    tracking-[-0.03em]
                    text-[#4f4f4f]
                  "
                >
                  At MSA, execution is not treated as a routine process — it is treated as responsibility. Industrial projects operate under tight shutdown schedules, heavy operational pressure, and demanding site conditions where delays and weak coordination can impact entire plant operations.

That is why our approach focuses on disciplined planning, fabrication accuracy, manpower coordination, and practical problem-solving on-site. Instead of cutting corners to reduce costs, we focus on building systems and structures that perform reliably in real industrial environments for the long term.
                </p>

              </div>

              {/* LARGE STATEMENT */}
              <div className="mt-20 max-w-[900px]">

                <p
                  className="
                    text-[1rem]
                    md:text-[3rem]
                    lg:text-[2.7rem]
                    font-light
                    tracking-[-0.06em]
                    leading-[1.04]
                    text-text-dark
                  "
                >
                  We work alongside industrial teams, understand operational challenges on-site, and execute solutions that prioritize safety, structural reliability, and{" "}

                  <span className="bg-primary px-3 py-[2px] text-white">
                    long-term performance
                  </span>
                  {" "} in demanding environments.
                </p>

              </div>

            </div>

            {/* RIGHT IMAGES */}
            <div className="relative min-h-[900px]">

              {/* TOP IMAGE */}
              <div
                className="
                  absolute
                  right-0
                  top-0
                  w-[78%]
                  overflow-hidden
                "
              >

                <Image width={1000} height={1000}                   src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1200&auto=format&fit=crop"
                  alt="Workers"
                  className="
                    h-[640px]
                    w-full
                    object-cover
                  "
                />

              </div>

              {/* BOTTOM IMAGE */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  z-20
                  w-[82%]
                  overflow-hidden
                  border-[18px]
                  border-bg-light
                "
              >

                <Image width={1000} height={1000}                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                  alt="Team"
                  className="
                    h-[420px]
                    w-full
                    object-cover
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================= */}
      {/* TESTIMONIAL SECTION */}
      {/* ========================================= */}

      <section
        ref={testimonialRef}
        className="
          relative
          w-full
          overflow-hidden
          bg-bg-light
          py-44
          md:py-56
        "
      >

        {/* CIRCLE SYSTEM */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-0
            flex
            h-[320px]
            w-[320px]
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            md:h-[920px]
            md:w-[920px]
          "
        >

          {/* OUTLINE */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              border
              border-primary/10
            "
          />

          {/* EXPANDING WHITE CIRCLE */}
          <motion.div
            className="absolute rounded-full bg-white"
            style={{
              scale,
              width: "100%",
              height: "100%",
            }}
          />

        </div>

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-[1450px]
            grid-cols-1
            gap-20
            px-8
            md:px-12
            lg:grid-cols-[0.7fr_1.3fr]
            lg:px-16
            xl:px-20
            items-end
          "
        >

          {/* LEFT */}
          <div className="pb-4">

            <p
              className="
                text-[1.7rem]
                font-light
                leading-[1.5]
                tracking-[-0.03em]
                text-text-dark
              "
            >
             Operations & Project Team
            </p>

            <p
              className="
                mt-2
                text-[1.7rem]
                font-light
                leading-[1.5]
                tracking-[-0.03em]
                text-text-dark
              "
            >
              Industrial Infrastructure Division
            </p>

          </div>

          {/* RIGHT */}
          <div>

            <h2
              className="
                text-primary
                text-[3rem]
                md:text-[4rem]
                lg:text-[4.3rem]
                font-[350]
                tracking-[-0.07em]
                leading-[0.98]
              "
            >
             “What clients can expect from MSA is practical execution, transparent coordination, and a team that understands industrial site realities from the ground level — delivering work with accountability, precision, and long-term reliability.”
            </h2>

          </div>

        </div>

      </section>
    </>
  );
}