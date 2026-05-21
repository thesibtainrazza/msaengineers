"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function AchievementsSection() {

    const stats = (
        <>

            {/* ITEM 1 */}
            <div className="flex items-center shrink-0 px-20 md:px-28">

                <span
                    className="
            text-[8rem]
            md:text-[10rem]
            lg:text-[11rem]
            font-[350]
            leading-none
            tracking-[-0.09em]
            text-[#ed1c24]
          "
                >
                    1500MT+
                </span>

                <span
                    className="
            ml-10
            max-w-[420px]
            text-[1.5rem]
            md:text-[1.7rem]
            font-medium
            leading-[1.35]
            tracking-[-0.02em]
            text-[#ed1c24]
          "
                >
                    Steel Structures Fabricated & Installed
                </span>

            </div>

            {/* DIVIDER */}
            <div className="w-[1.5px] h-[180px] md:h-[260px] bg-[#ed1c24] shrink-0 opacity-80"></div>

            {/* ITEM 2 */}
            <div className="flex items-center shrink-0 px-20 md:px-28">

                <span
                    className="
            text-[8rem]
            md:text-[10rem]
            lg:text-[11rem]
            font-[350]
            leading-none
            tracking-[-0.09em]
            text-[#ed1c24]
          "
                >
                    10KM+
                </span>

                <span
                    className="
            ml-10
            max-w-[420px]
            text-[1.5rem]
            md:text-[1.7rem]
            font-medium
            leading-[1.35]
            tracking-[-0.02em]
            text-[#ed1c24]
          "
                >
                   Industrial Conveyor Execution
                </span>

            </div>

            {/* DIVIDER */}
            <div className="w-[1.5px] h-[180px] md:h-[260px] bg-[#ed1c24] shrink-0 opacity-80"></div>

            {/* ITEM 3 */}
            <div className="flex items-center shrink-0 px-20 md:px-28">

                <span
                    className="
            text-[8rem]
            md:text-[10rem]
            lg:text-[11rem]
            font-[350]
            leading-none
            tracking-[-0.09em]
            text-[#ed1c24]
          "
                >
                    120+
                </span>

                <span
                    className="
    ml-10
    w-[340px]
    min-w-[340px]
    text-[1.3rem]
    md:text-[1.55rem]
    font-medium
    leading-[1.35]
    tracking-[-0.02em]
    text-[#ed1c24]
    whitespace-normal
    break-words
  "
                >
                    Projects Built Across India
                </span>
            </div>

            {/* DIVIDER */}
            <div className="w-[1.5px] h-[180px] md:h-[260px] bg-[#ed1c24] shrink-0 opacity-80"></div>

        </>
    );

    return (
        <section
            className="relative w-full overflow-hidden bg-[#f7f7f5] py-28 md:py-36"
            id="awards"
        >

            {/* TOP */}
            <div className="container-primary">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    <div></div>

                    <div>

                        <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
                            ACHIEVEMENTS
                        </h4>

                        <h2
                            className="
                max-w-[700px]
                text-[2rem]
                md:text-[3.5rem]
                lg:text-[4rem]
                font-[420]
                leading-[0.98]
                tracking-[-0.07em]
                text-[#4b4b4b]
              "
                        >
                            Industrial work earns its reputation in fabrication yards, shutdown deadlines, and structures that continue standing years after completion.
                        </h2>

                    </div>

                </div>

            </div>

            {/* MARQUEE AREA */}
            <div className="relative mt-28 overflow-hidden py-16">

                {/* LEFT IMAGE */}
                <div className="pointer-events-none absolute left-20 top-0 h-full w-[38%] overflow-hidden">

                    <Image width={1000} height={1000}                         src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1400&auto=format&fit=crop"
                        alt="Construction"
                        className="h-full w-full object-cover grayscale"
                    />

                    <div className="absolute inset-0 bg-white/45"></div>

                </div>

                {/* MARQUEE */}
                <div className="w-full overflow-hidden flex items-center">

                    <motion.div
                        className="flex items-center whitespace-nowrap w-max relative z-10"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 35,
                            ease: "linear",
                        }}
                    >

                        <div className="flex items-center shrink-0 w-max">
                            {stats}
                        </div>

                        <div className="flex items-center shrink-0 w-max">
                            {stats}
                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}