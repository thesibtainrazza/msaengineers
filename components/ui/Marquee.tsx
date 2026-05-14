"use client";

import { motion } from "framer-motion";

export default function Marquee() {

  const text =
    "· Industrial Structures · Fabrication · Erection · Engineering · Reliability · Precision · Execution ·";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <div className="absolute bottom-[-8%] left-0 flex w-full items-center overflow-hidden">

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 42,
            ease: "linear",
          }}
        >

          <span className="pr-16 text-[8rem] md:text-[12rem] lg:text-[13rem] font-[550] tracking-[-0.07em] text-black/[0.045]">

            {text}

          </span>

          <span className="pr-16 text-[8rem] md:text-[12rem] lg:text-[15rem] font-[550] tracking-[-0.07em] text-black/[0.045]">

            {text}

          </span>

        </motion.div>
      </div>
    </div>
  );
}