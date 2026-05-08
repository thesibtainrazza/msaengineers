"use client";

import React from "react";

export const SectorButton = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => (

  <a
    href="#"
    className={`
      group
      relative
      flex
      items-center
      justify-between
      overflow-hidden
      rounded-full
      border-[1.8px]
      border-[#5a5a5a]
      bg-transparent
      px-10
      md:px-14
      py-5
      md:py-7
      transition-all
      duration-300
      hover:border-[#ed1c24]
      ${className}
    `}
  >

    {/* LEFT TO RIGHT WIPE */}
    <span
      className="
        absolute
        inset-0
        z-0
        origin-left
        scale-x-0
        bg-[#ed1c24]
        transition-transform
        duration-300
        ease-out
        group-hover:scale-x-100
      "
    />

    {/* TEXT */}
    <span
      className="
        relative
        z-10
        mr-8
        text-[2.7rem]
        md:text-[3.4rem]
        leading-none
        tracking-[-0.05em]
        font-[350]
        text-[#4a4a4a]
        transition-colors
        duration-300
        group-hover:text-white
      "
    >
      {text}
    </span>

    {/* ARROW */}
    <svg
      className="
        relative
        z-10
        h-9
        w-9
        md:h-11
        md:w-11
        shrink-0
        text-[#4a4a4a]
        transition-all
        duration-300
        group-hover:translate-x-1
        group-hover:text-white
      "
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 12h16m0 0l-6-6m6 6l-6 6"
      />
    </svg>

  </a>

);

export default SectorButton;