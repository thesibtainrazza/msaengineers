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
        OCL
      </span>

      <span className="text-[1.9rem] font-serif text-black uppercase tracking-wider mt-1">
        India Limited
      </span>

      <span className="text-[8px] tracking-[0.35em] text-black mt-1">
        EST. 1949
      </span>

    </div>,

    <div
      key="2"
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
      <svg
        viewBox="0 0 200 200"
        className="w-[100px] h-[100px] rounded-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="200" height="200" fill="#EE2A24" />
        <g fill="#ffffff" fontFamily="Impact, 'Arial Black', sans-serif" fontStyle="italic" fontWeight="900" textAnchor="middle">
          <text x="100" y="85" fontSize="70" textLength="160" lengthAdjust="spacingAndGlyphs">STAR</text>
          <text x="100" y="140" fontSize="45" textLength="160" lengthAdjust="spacingAndGlyphs">CEMENT</text>
          <text x="100" y="175" fontSize="20" fontFamily="Arial, sans-serif" fontWeight="bold">Solid Setting</text>
        </g>
      </svg>
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

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://www.shreecement.com/public/front_assets/images/logo.jpg"
        alt="Shree Cement"
        className="w-14 h-14 object-contain mr-4"
      />

      <div className="flex flex-col">

        <span className="text-[2.2rem] font-bold tracking-tighter leading-none text-black">
          SHREE
        </span>

        <span className="text-[11px] tracking-[0.25em] leading-none mt-1 text-black">
          CEMENT LTD.
        </span>

      </div>

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
      w-[140px]
      h-[110px]
      rounded-full
      border-[4px]
      border-red-500
      bg-red-500  
      flex
      items-center
      justify-center
      p-4
    "
      >

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.wondercement.com/images/header/new_logo.png"
          alt="Wonder Cement"
          className="w-[90px] h-auto object-contain brightness-0 invert"
        />

      </div>

    </div>, 

    <div
  key="5"
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

  {/* eslint-disable-next-line @next/next/no-img-element */}
  <img
    src="https://www.dalmiabharat.com/wp-content/uploads/2026/04/dbg-new-logo.png"
    alt="Dalmia Bharat Group"
    className="w-[190px] h-[190px] object-contain -mr-32 mt-10"
  />

  <div className="flex flex-col leading-none">

    <span className="text-[2.2rem] font-bold tracking-tighter text-black">
      DALMIA
    </span>

    <span className="text-[11px] tracking-[0.22em] mt-1 text-black">
      BHARAT GROUP
    </span>

  </div>

   </div>,

    <div
      key="6"
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
      <svg
        viewBox="0 0 200 200"
        className="w-[120px] h-[120px] rounded-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="200" height="200" fill="#FFF200" />
        <g fill="#000000" fontFamily="Impact, 'Arial Black', sans-serif" fontStyle="italic" fontWeight="900" textAnchor="middle">
          <text x="100" y="85" fontSize="42" textLength="170" lengthAdjust="spacingAndGlyphs">UltraTech</text>
        </g>
        <polygon points="10,95 190,95 185,125 15,125" fill="#000000" />
        <text x="100" y="118" fill="#FFF200" fontFamily="'Arial Black', sans-serif" fontSize="18" fontStyle="italic" fontWeight="900" textAnchor="middle" textLength="140" lengthAdjust="spacingAndGlyphs">C E M E N T</text>
        <text x="100" y="160" fill="#000000" fontFamily="Arial, sans-serif" fontSize="16" fontStyle="italic" textAnchor="middle">The Engineer&apos;s Choice</text>
      </svg>
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