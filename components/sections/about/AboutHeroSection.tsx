"use client";

import React from "react";

export default function AboutHeroSection() {

  const arrowProgress = 1;

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f5] pt-40 pb-32">

      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 items-start">

          {/* LEFT */}
          <div>

            <h4 className="mb-8 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
              WHO WE ARE
            </h4>

            <h1 className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-[420] tracking-[-0.07em] leading-[0.9] text-[#4b4b4b]">
              About Us
            </h1>

          </div>

          {/* RIGHT */}
          <div className="pt-16 lg:pt-12 max-w-[620px]">

            <p className="text-[1.55rem] font-light leading-[1.7] tracking-[-0.03em] text-[#4f4f4f]">

             Headquartered in Rajgangpur, Odisha, MSA Engineers & Contractors delivers industrial structures, fabrication, and{" "}

              <span className="bg-[#ed1c24] px-2 py-[2px] text-white">
                engineering execution solutions
              </span>

              {" "} for cement plants and industrial projects across India. Our work is built on precision, reliability, and trusted execution.

            </p>

          </div>

        </div>

        {/* SECOND ROW */}
        <div className="mt-40 max-w-[1150px]">

          <p className="text-[1.7rem] md:text-[1.9rem] lg:text-[2.5rem] font-light tracking-[-0.05em] leading-[1.06] text-[#4b4b4b]">

          Since 2000, we have delivered industrial engineering and execution solutions backed by decades of hands-on experience, trusted workmanship, and a{" "}

            <span className="bg-[#ed1c24] px-3 py-[2px] text-white">
              commitment to quality.
            </span>

            {" "}From shed structures to large-scale fabrication and erection works, MSA continues to build with precision, strength, and dependable execution across India.

          </p>

        </div>

      </div>

      {/* BIG OUTLINE ARROW */}
      <div className="pointer-events-none absolute -bottom-[10px] right-[10px] hidden lg:block">

        <svg
          width="281"
          height="300"
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

    </section>
  );
}