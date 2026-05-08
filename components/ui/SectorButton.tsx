"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SectorButton = ({
  text,
  image,
  className = "",
}: {
  text: string;
  image: string;
  className?: string;
}) => {

  const [isHovered, setIsHovered] = useState(false);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {

    setPosition({
      x: e.clientX,
      y: e.clientY,
    });

  };

  return (

    <a
      href="#"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`
        group
        relative
        flex
        items-center
        justify-between
        overflow-hidden
        rounded-full
        border-[1.7px]
        border-[#4a4a4a]
        px-12
        py-6
        transition-all
        duration-300
        hover:border-[#ed1c24]
        ${className}
      `}
    >

      {/* HOVER BACKGROUND */}
      <span
        className="
          absolute
          inset-0
          origin-left
          scale-x-0
          bg-[#ed1c24]
          transition-transform
          duration-300
          ease-out
          group-hover:scale-x-100
        "
      />

      {/* FLOATING IMAGE */}
      <AnimatePresence>

        {isHovered && (

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              x: position.x + 30,
              y: position.y - 120,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotate: 8,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
              mass: 0.6,
            }}
            className="
              pointer-events-none
              fixed
              left-0
              top-0
              z-[9999]
              hidden
              lg:block
            "
          >

            <div
              className="
                h-[220px]
                w-[320px]
                overflow-hidden
                rounded-[16px]
                shadow-[0_30px_80px_rgba(0,0,0,0.25)]
              "
            >

              <div
                className="
                  h-full
                  w-full
                  bg-cover
                  bg-center
                "
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* TEXT */}
      <span
        className="
          relative
          z-10
          mr-10
          text-[2.8rem]
          font-[350]
          tracking-[-0.05em]
          text-[#4b4b4b]
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
          h-11
          w-11
          text-[#4b4b4b]
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

};

export default SectorButton;