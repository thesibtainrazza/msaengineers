"use client";

import Image from "next/image";
import React from "react";

export default function CareersCTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-bg-light py-32">

      {/* BLUEPRINT BACKGROUND */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-[320px]
          w-[320px]
          opacity-[0.06]
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/graphy.png')",
        }}
      />

      <div className="container-primary">

        {/* TOP BORDER */}
        <div className="mb-28 h-[1px] w-full bg-text-dark" />

        <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <h4 className="mb-8 text-[13px] font-semibold uppercase tracking-[0.28em] text-primary">
              CAREERS
            </h4>

            <h2 className="max-w-[760px] text-[4rem] md:text-[5rem] lg:text-[5.8rem] font-[420] tracking-[-0.07em] leading-[0.92] text-text-dark">

              We’re building
              <br />

              a team driven by{" "}

              <span className="bg-primary px-3 py-[2px] text-white">
                ownership
              </span>

              {" "}

              <span className="relative inline-block">

                <span className="relative z-10">
                  not
                </span>

                {/* STRIKE LINE */}
                <span className="absolute left-0 top-[52%] h-[10px] w-full bg-text-dark"></span>

              </span>

              <br />

              excuses.

            </h2>

            {/* BUTTON */}
            <div className="mt-14">

              <a
                href="#"
                className="
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  border
                  border-primary
                  px-10
                  py-5
                  text-[1.45rem]
                  font-medium
                  tracking-[-0.03em]
                  text-text-dark
                  transition-all
                  duration-300
                  hover:bg-primary
                  hover:text-white
                "
              >

                Join Our Team

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>

              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="max-w-[700px] lg:ml-auto">

            <p
              className="
                text-[1.55rem]
                font-light
                leading-[1.75]
                tracking-[-0.03em]
                text-[#4f4f4f]
              "
            >
              At MSA Engineers & Contractors, work is built around
              responsibility, coordination, and execution. Every project
              demands people who can think practically, solve problems on-site,
              and deliver quality work even under demanding industrial
              conditions.
            </p>

            <p
              className="
                mt-10
                text-[1.55rem]
                font-light
                leading-[1.75]
                tracking-[-0.03em]
                text-[#4f4f4f]
              "
            >
              Whether it’s fabrication, erection, conveyor systems, project
              coordination, or field execution, we value people who are willing
              to learn, take ownership, and grow with the company long-term.

              {" "}

              <span className="bg-primary px-2 py-[2px] text-white">
                Skilled people build strong industries.
              </span>

            </p>

          </div>
        </div>

        {/* IMAGE */}
        <div className="mt-32">

          <div className="relative overflow-hidden bg-[#ececec]">

            <Image width={1000} height={1000}               src="/assets/6.jpg"
              alt="MSA Team"
              className="h-[420px] md:h-[520px] w-full object-cover grayscale"
            />

          </div>

        </div>

      </div>

    </section>
  );
}