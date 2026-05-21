"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CommunityInvolvementSection() {

  return (

    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f7f7f5]
        py-28
        md:py-36
      "
    >

      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.95fr_1.05fr]
            gap-x-28
            gap-y-24
            items-start
          "
        >

          {/* LEFT IMAGE COMPOSITION */}
          <div className="relative min-h-[950px] lg:min-h-[1100px]">

            {/* TOP LARGE IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                relative
                w-[92%]
                overflow-hidden
              "
            >

              {/* RED LINE */}
              <div
                className="
                  absolute
                  top-[66px]
                  right-[-140px]
                  h-[1.5px]
                  w-[220px]
                  bg-[#ed1c24]
                  z-20
                  hidden
                  lg:block
                "
              />

              <div className="overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1759922378275-32d7ca8bbcca?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Community Team"
                  className="
                    h-[760px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />

              </div>

            </motion.div>

            {/* FLOATING SECOND IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="
                absolute
                bottom-0
                left-[70px]
                z-20
                w-[72%]
                overflow-hidden
                border-[10px]
                border-[#f7f7f5]
                shadow-[0_25px_70px_rgba(0,0,0,0.12)]
              "
            >

              <img
                src="https://images.unsplash.com/photo-1759922378222-47ad736a174d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Community Fountain"
                className="
                  h-[380px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />

            </motion.div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="pt-8 lg:pt-16">

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
              INDUSTRY & COMMUNITY
            </h4>

            <h2
              className="
                text-[4rem]
                md:text-[5rem]
                lg:text-[5.7rem]
                font-[420]
                tracking-[-0.06em]
                leading-[0.92]
                text-[#4b4b4b]
                mb-12
              "
            >
              Built Around
              Our People
            </h2>

            {/* FIRST PARAGRAPH */}
            <p
              className="
    text-[1.5rem]
    md:text-[1.6rem]
    font-light
    leading-[1.72]
    tracking-[-0.03em]
    text-[#4f4f4f]
    max-w-[760px]
  "
            >

              At MSA Engineers,{" "}

              <span className="bg-[#ed1c24] px-2 py-[2px] text-white">
                creating value beyond construction
              </span>

              {" "}means supporting the people and communities connected to our work. From local hiring and workforce support to contributing through industrial development and long-term employment opportunities, we believe real growth should positively impact both project sites and the people around them.

            </p>

            {/* BIG STATEMENT */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-24"
            >
              <h3
                className="
    text-[3rem]
    md:text-[4rem]
    lg:text-[2.8rem]
    font-[420]
    tracking-[-0.065em]
    leading-[0.97]
    text-[#4b4b4b]
  "
              >

                Just as we focus on building reliable{" "}

                <span className="bg-[#ed1c24] px-3 text-white">
                  industrial infrastructure
                </span>

                {" "}we also believe in strengthening the people and communities connected to our work through local hiring, workforce support, responsible execution, and long-term relationships that create impact beyond the project site.

              </h3>

            </motion.div>

          </div>

        </div>

      </div>

    </section>

  );

}