"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      
      <nav
        className={`mx-auto flex max-w-[1450px] items-center px-8 md:px-12 lg:px-16 xl:px-20 transition-all duration-500 ${
          scrolled ? "py-4 md:py-5" : "py-6 md:py-8"
        } ${!isHome || scrolled ? "text-[#4b4b4b]" : "text-white"}`}
      >

        {/* Logo */}
        <a href="/" 
        className="mr-16 xl:mr-20 shrink-0 cursor-pointer">

          <div className="flex items-start leading-none">

            {/* J */}
            <span className="text-[86px] font-medium tracking-[-0.12em] leading-[0.78]">
              
            </span>

            {/* DAVIS */}
            <div className="ml-[2px] flex flex-col">

              <div className="flex items-start">

                <span className="text-[58px] font-medium tracking-[-0.08em] leading-[0.82]">
                  MSA
                </span>

                <sup className="ml-[2px] mt-[6px] text-[10px] font-normal">
                  CO.
                </sup>

              </div>

              {/* CONSTRUCTION */}
              <span className="mt-[2px] text-[8px] font-medium tracking-[0.22em] leading-none">
                ENGINEERS & CONTRACTORS
              </span>

            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-x-8 xl:gap-x-10">


          {/* Links */}
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-[20px] font-semibold transition-colors duration-300 hover:text-[#ed1c24]"
            >
              {link.label}

              {/* Underline */}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#ed1c24] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

        </div>

        {/* CTA Button */}
        <Link
        href="/contact"
          className="ml-auto hidden lg:flex items-center rounded-full bg-[#ed1c24] px-10 py-5 text-[18px] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#c9161d]">

          <span>Build with Us</span>

          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>

        </Link>

        {/* Mobile Menu */}
        <button className="ml-auto lg:hidden">

          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

        </button>

      </nav>
    </header>
  );
}