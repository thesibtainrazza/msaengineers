"use client";

import React from "react";

export default function ContactHeroSection() {

  return (

    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f7f7f5]
        pt-40
        pb-24
      "
    >

      <div className="container-primary">

        {/* TOP */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.15fr_0.85fr]
            gap-x-28
            gap-y-20
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
              CONTACT MSA
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
              We’d{" "}

              <span className="bg-[#ed1c24] px-4 py-1 text-white">
                love
              </span>

              {" "}to hear
              <br />
              from you

            </h1>

          </div>

          {/* RIGHT */}
          <div className="pt-10 lg:pt-16 max-w-[650px]">

            <p
              className="
                text-[1.55rem]
                font-light
                leading-[1.7]
                tracking-[-0.03em]
                text-[#4f4f4f]
              "
            >

              Let’s talk about{" "}

              <span className="bg-[#ed1c24] px-2 py-[2px] text-white">
                your legacy.
              </span>

              {" "}MSA Engineers & Contractors is your trusted
              industrial execution partner from fabrication to
              complete structural erection. Connect with our
              team today for project discussions, industrial
              bidding, or execution support.

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}