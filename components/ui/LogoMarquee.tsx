"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

export default function LogoMarquee() {

  const [paused, setPaused] = useState(false);

  const logos = [

    <div
      key="1"
      className="
        flex
        shrink-0
        cursor-pointer
        flex-col
        items-center
        justify-center
        mx-12
        md:mx-24
        opacity-70
        transition-all
        duration-300
        hover:opacity-100
        hover:scale-105
        grayscale
        hover:grayscale-0
      "
    >

      <span className="text-[11px] tracking-[0.24em] font-serif text-black uppercase">
        The Country Club of
      </span>

      <span className="text-[1.9rem] font-serif text-black uppercase tracking-wider mt-1">
        Sapphire Valley
      </span>

      <span className="text-[8px] tracking-[0.35em] text-black mt-1">
        ESTABLISHED 1956
      </span>

    </div>,


    <div
      key="2"
      className="
        flex
        shrink-0
        cursor-pointer
        items-center
        mx-12
        md:mx-24
        opacity-70
        transition-all
        duration-300
        hover:opacity-100
        hover:scale-105
        grayscale
        hover:grayscale-0
      "
    >

      <svg
        className="w-12 h-12 mr-3 text-black"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M14 2L2 22h20L14 2z M10 10l-4 8h8l-4-8z"/>
      </svg>

      <div className="flex flex-col">

        <span className="text-[2.2rem] font-bold tracking-tighter leading-none text-black">
          SUMMIT
        </span>

        <span className="text-[11px] tracking-[0.25em] leading-none mt-1 text-black">
          CHARTER SCHOOL
        </span>

      </div>

    </div>,


    <div
      key="3"
      className="
        flex
        shrink-0
        cursor-pointer
        items-center
        mx-12
        md:mx-24
        opacity-70
        transition-all
        duration-300
        hover:opacity-100
        hover:scale-105
        grayscale
        hover:grayscale-0
      "
    >

      <span
        className="text-[4.5rem] font-light text-gray-500 tracking-tight"
        style={{ fontFamily: "'Brush Script MT', cursive" }}
      >
        Trillium
      </span>

    </div>,


    <div
      key="4"
      className="
        flex
        shrink-0
        cursor-pointer
        items-center
        justify-center
        mx-12
        md:mx-24
        opacity-70
        transition-all
        duration-300
        hover:opacity-100
        hover:scale-105
        grayscale
        hover:grayscale-0
      "
    >

      <div
        className="
          w-[110px]
          h-[110px]
          rounded-full
          border-[4px]
          border-black
          bg-black
          text-white
          flex
          items-center
          justify-center
          text-center
          p-2
        "
      >

        <span className="text-[10px] font-bold leading-tight tracking-[0.22em]">
          WILDCAT
          <br />
          CLIFFS
          <br />
          <span className="text-[8px] font-normal tracking-[0.15em]">
            COUNTRY CLUB
          </span>
        </span>

      </div>

    </div>,


    <div
      key="5"
      className="
        flex
        shrink-0
        cursor-pointer
        items-center
        justify-center
        mx-12
        md:mx-24
        opacity-70
        transition-all
        duration-300
        hover:opacity-100
        hover:scale-105
        grayscale
        hover:grayscale-0
      "
    >

      <div
        className="
          w-[150px]
          h-[90px]
          rounded-[999px]
          border-[2px]
          border-black
          bg-black
          text-white
          flex
          items-center
          justify-center
          text-center
          p-3
        "
      >

        <span className="text-[10px] font-semibold leading-tight tracking-[0.18em]">
          ANDERSON COUNTY
          <br />
          <span className="text-[8px] font-light tracking-[0.15em]">
            SOUTH CAROLINA
          </span>
        </span>

      </div>

    </div>,

  ];

  return (

    <div
      className="
        relative
        flex
        h-[180px]
        w-full
        items-center
        overflow-hidden
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      <motion.div
        className="
          flex
          w-max
          items-center
          whitespace-nowrap
        "
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        style={{
          animationPlayState: paused ? "paused" : "running",
        }}
      >

        {/* FIRST SET */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-20
            md:gap-28
            pr-20
          "
        >
          {logos}
        </div>

        {/* SECOND SET */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-20
            md:gap-28
            pr-20
          "
        >
          {logos}
        </div>

      </motion.div>

    </div>

  );

}