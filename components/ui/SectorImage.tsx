"use client";

import React from "react";

export const SectorImage = ({
  url,
  className = "",
}: {
  url: string;
  className?: string;
}) => (

  <div
    className={`
      group
      relative
      h-[95px]
      md:h-[115px]
      lg:h-[125px]
      w-[220px]
      md:w-[270px]
      lg:w-[320px]
      shrink-0
      overflow-hidden
      rounded-full
      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      transition-all
      duration-500
      hover:-translate-y-1
      ${className}
    `}
  >

    {/* IMAGE */}
    <div
      className="
        absolute
        inset-0
        bg-cover
        bg-center
        transition-transform
        duration-700
        ease-out
        group-hover:scale-110
      "
      style={{
        backgroundImage: `url('${url}')`,
      }}
    />

    {/* SUBTLE OVERLAY */}
    <div
      className="
        absolute
        inset-0
        bg-black/5
        transition-colors
        duration-500
        group-hover:bg-black/10
      "
    />

  </div>

);

export default SectorImage;