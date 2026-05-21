"use client";

import React, { useState } from "react";
import { FEATURED_PROJECTS } from "@/data";

export default function FeaturedProjectsSlider() {

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) =>
            prev === FEATURED_PROJECTS.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? FEATURED_PROJECTS.length - 1 : prev - 1
        );
    };

    const activeProject = FEATURED_PROJECTS[current];

    return (
        <>
            <section className="relative w-full overflow-hidden bg-[#f7f7f5] pb-28">
                <div className="mx-auto max-w-[1550px] px-0 md:px-0">

                    <div className="relative overflow-hidden">

                        {/* IMAGE */}
                        <div className="relative h-[620px] w-full overflow-hidden">

                            <img
                                src={activeProject.image}
                                alt={activeProject.title}
                                className="
                h-full
                w-full
                object-cover
                transition-all
                duration-700
              "
                            />

                        </div>

                        {/* BOTTOM RED INFO BAR */}
                        <div
                            className="
              absolute
              bottom-0
              left-1/2
              flex
              w-[78%]
              -translate-x-1/2
              items-center
              justify-between
              bg-[#ed1c24]
              px-10
              py-8
            "
                        >

                            {/* LEFT */}
                            <div>

                                <h3
                                    className="
                  text-[3rem]
                  font-[420]
                  leading-none
                  tracking-[-0.05em]
                  text-white
                "
                                >
                                    {activeProject.title}
                                </h3>

                            </div>

                            {/* RIGHT */}
                            <div className="flex items-center gap-10">

                                <p className="text-[1.7rem] font-light text-white">
                                    {activeProject.location}
                                </p>

                                <button
                                    onClick={nextSlide}
                                    className="
                  flex
                  h-[72px]
                  w-[72px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-[#ed1c24]
                "
                                >

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="34"
                                        height="34"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>

                                </button>

                            </div>

                        </div>

                        {/* LEFT NAVIGATION */}
                        <div
                            className="
              absolute
              bottom-10
              left-14
              flex
              items-center
              gap-5
            "
                        >

                            <button
                                onClick={prevSlide}
                                className="
                flex
                h-[68px]
                w-[68px]
                items-center
                justify-center
                border
                border-white/80
                bg-white/10
                backdrop-blur-md
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#ed1c24]
              "
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="34"
                                    height="34"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M19 12H5" />
                                    <path d="m12 19-7-7 7-7" />
                                </svg>

                            </button>

                            <button
                                onClick={nextSlide}
                                className="
                flex
                h-[68px]
                w-[68px]
                items-center
                justify-center
                border
                border-white/80
                bg-white/10
                backdrop-blur-md
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#ed1c24]
              "
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="34"
                                    height="34"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>

                            </button>

                        </div>

                    </div>

                </div>
            </section>
            <section className="relative w-full overflow-hidden bg-[#f7f7f5] py-28">

                {/* RIGHT BLUEPRINT EFFECT */}
                <div
                    className="
      pointer-events-none
      absolute
      right-[-120px]
      top-[120px]
      h-[900px]
      w-[420px]
      opacity-[0.04]
    "
                    style={{
                        backgroundImage:
                            "url('https://www.transparenttextures.com/patterns/graphy.png')",
                    }}
                />

                <div className="mx-auto max-w-[1550px] px-8 md:px-12 lg:px-16 xl:px-20">

                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

                        {/* LEFT IMAGE + CONTENT */}
                        <div className="lg:col-span-8">

                            {/* IMAGE */}
                            <div className="group relative overflow-hidden bg-[#ececec]">

                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
                                    alt="Industrial Project"
                                    className="
              h-[680px]
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.03]
            "
                                />

                                {/* RED ARROW BOX */}
                                <button
                                    className="
              absolute
              bottom-0
              right-0
              flex
              h-[100px]
              w-[100px]
              items-center
              justify-center
              bg-[#ed1c24]
              text-white
              transition-all
              duration-300
              hover:w-[120px]
            "
                                >

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="50"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>

                                </button>

                            </div>

                            {/* PROJECT CONTENT */}
                            <div className="pt-8">

                                <h2
                                    className="
              inline-block
              border-b
              border-[#ed1c24]
              pb-2
              text-[3.4rem]
              md:text-[4rem]
              font-[420]
              leading-[1]
              tracking-[-0.06em]
              text-[#ed1c24]
            "
                                >
                                    Anderson County Fleet Services
                                </h2>

                                <p className="mt-4 text-[1.8rem] font-light text-[#4f4f4f]">
                                    Anderson, SC
                                </p>

                                <div className="mt-6">

                                    <span
                                        className="
                rounded-md
                border
                border-[#d9d9d9]
                bg-white
                px-4
                py-2
                text-[1rem]
                font-medium
                text-[#555]
              "
                                    >
                                        Municipality + Community
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT SIDE NOTE */}
                        <div className="relative pt-40 lg:col-span-4">

                            {/* HORIZONTAL RED LINE */}
                            <div className="mb-10 h-[2px] w-[180px] bg-[#ed1c24]" />

                            {/* HANDWRITTEN STYLE TEXT */}
                            <p
                                className="
            max-w-[430px]
            text-[1.35rem]
            uppercase
            leading-[1.9]
            tracking-[0.05em]
            text-[#3d3d3d]
          "
                                style={{
                                    fontFamily: 'cursive',
                                }}
                            >
                                Anderson Co. required a facility capable of supporting daily fleet
                                operations efficiently while maintaining durability, accessibility,
                                and long-term operational reliability for emergency and municipal
                                service vehicles.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
            {/* SPLIT PROJECT SHOWCASE */}
            <section className="relative w-full overflow-hidden bg-[#f7f7f5] py-32">

                {/* BLUEPRINT BG */}
                <div
                    className="
      pointer-events-none
      absolute
      bottom-0
      left-[-60px]
      h-[700px]
      w-[420px]
      opacity-[0.05]
    "
                    style={{
                        backgroundImage:
                            "url('https://www.transparenttextures.com/patterns/graphy.png')",
                    }}
                />

                <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">

                    <div className="grid grid-cols-12 gap-14">

                        {/* LEFT SMALL IMAGE */}
                        <div className="col-span-12 lg:col-span-4">

                            <div className="relative">

                                <div className="overflow-hidden bg-[#ececec]">

                                    <img
                                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
                                        alt="Interior Project"
                                        className="
                h-[680px]
                w-full
                object-cover
              "
                                    />

                                </div>

                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-span-12 lg:col-span-8">

                            {/* TOP CAPTION */}
                            <div className="mb-10 flex items-start gap-8">

                                <div className="h-[170px] w-[1px] bg-[#ed1c24]" />

                                <p
                                    className="
              max-w-[380px]
              font-serif
              text-[1rem]
              font-bold
              uppercase
              leading-[1.4]
              tracking-[0.08em]
              text-[#1f1f1f]
            "
                                    style={{
                                        fontFamily: "cursive",
                                    }}
                                >
                                    DESIGNED TO BLEND MODERN HOSPITALITY WITH FUNCTIONAL SPATIAL
                                    EXECUTION, THE PROJECT CREATES A REFINED EXPERIENCE WITHOUT
                                    LOSING ITS COMMUNITY CHARACTER.
                                </p>

                            </div>

                            {/* MAIN IMAGE */}
                            <div className="relative">

                                <div className="overflow-hidden bg-[#ececec]">

                                    <img
                                        src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1800&auto=format&fit=crop"
                                        alt="Country Club Project"
                                        className="
                h-[760px]
                w-full
                object-cover
              "
                                    />

                                </div>

                                {/* RED BUTTON */}
                                <button
                                    className="
              absolute
              bottom-0
              right-0
              flex
              h-[100px]
              w-[100px]
              items-center
              justify-center
              bg-[#ed1c24]
              text-white
              transition-all
              duration-300
              hover:w-[120px]
            "
                                >

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="50"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>

                                </button>

                            </div>

                            {/* TITLE */}
                            <div className="pt-8">

                                <h2
                                    className="
              text-[3.6rem]
              md:text-[4.3rem]
              font-[420]
              leading-[1]
              tracking-[-0.06em]
              text-[#4b4b4b]
            "
                                >
                                    Crowfield Country Club
                                </h2>

                                <p className="mt-4 text-[1.8rem] font-light text-[#4f4f4f]">
                                    Goose Creek, SC
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* FULL WIDTH PROJECT SECTION */}
            <section className="relative w-full overflow-hidden bg-[#f7f7f5] py-24">

                <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">

                    <div className="relative">

                        {/* IMAGE */}
                        <div className="group relative overflow-hidden bg-[#ececec]">

                            <img
                                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2200&auto=format&fit=crop"
                                alt="Educational Facility"
                                className="
            h-[760px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.02]
          "
                            />

                            {/* RED BUTTON */}
                            <button
                                className="
            absolute
            bottom-0
            right-0
            flex
            h-[100px]
            w-[100px]
            items-center
            justify-center
            bg-[#ed1c24]
            text-white
            transition-all
            duration-300
            hover:w-[120px]
          "
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>

                            </button>

                        </div>

                        {/* CONTENT */}
                        <div className="pt-8">

                            <h2
                                className="
            inline-block
            border-b
            border-[#ed1c24]
            pb-2
            text-[3.8rem]
            md:text-[4.4rem]
            font-[420]
            leading-[1]
            tracking-[-0.06em]
            text-[#ed1c24]
          "
                            >
                                Newberry Nursing Building
                            </h2>

                            <p className="mt-4 text-[1.8rem] font-light text-[#4f4f4f]">
                                Newberry, SC
                            </p>

                            {/* TAG */}
                            <div className="mt-6">

                                <span
                                    className="
              rounded-md
              border
              border-[#d9d9d9]
              bg-white
              px-4
              py-2
              text-[1rem]
              font-medium
              text-[#555]
            "
                                >
                                    Education
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* RED FEATURED PROJECT BANNER */}
            <section className="relative w-full overflow-hidden bg-[#f7f7f5] pb-28">

                <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">

                    <div className="relative">

                        {/* IMAGE */}
                        <div className="overflow-hidden">

                            <img
                                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2200&auto=format&fit=crop"
                                alt="Fire Station Project"
                                className="
            h-[760px]
            w-full
            object-cover
          "
                            />

                        </div>

                        {/* RED BOTTOM BAR */}
                        <div
                            className="
          absolute
          bottom-0
          left-[260px]
          right-0
          flex
          min-h-[135px]
          items-center
          justify-between
          bg-[#ed1c24]
          px-12
          md:px-16
        "
                        >

                            {/* TITLE */}
                            <div>

                                <h2
                                    className="
              inline-block
              border-b
              border-white
              pb-2
              text-[3rem]
              md:text-[3.8rem]
              font-[420]
              leading-[1]
              tracking-[-0.06em]
              text-white
            "
                                >
                                    City of Easley Fire Station No. 1
                                </h2>

                            </div>

                            {/* RIGHT SIDE */}
                            <div className="flex items-center gap-10">

                                <p
                                    className="
              text-[1.8rem]
              font-light
              text-white
            "
                                >
                                    Easley, SC
                                </p>

                                {/* BUTTON */}
                                <button
                                    className="
              flex
              h-[74px]
              w-[74px]
              items-center
              justify-center
              rounded-full
              border
              border-white
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-[#ed1c24]
            "
                                >

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* MIXED USE FEATURE SECTION */}
            <section className="relative w-full overflow-hidden bg-[#f7f7f5] py-24">

                {/* LEFT BLUEPRINT BG */}
                <div
                    className="
      pointer-events-none
      absolute
      left-[-80px]
      top-[120px]
      h-[900px]
      w-[420px]
      opacity-[0.05]
    "
                    style={{
                        backgroundImage:
                            "url('https://www.transparenttextures.com/patterns/graphy.png')",
                    }}
                />

                <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">

                    <div className="grid grid-cols-12 gap-14 items-start">

                        {/* LEFT NOTE */}
                        <div className="col-span-12 lg:col-span-4 pt-52">

                            <div className="flex items-start gap-8">

                                {/* RED LINE */}
                                <div className="mt-4 h-[1px] w-[180px] bg-[#ed1c24]" />

                                {/* TEXT */}
                                <p
                                    className="
              max-w-[300px]
              font-serif
              text-[1rem]
              font-bold
              uppercase
              leading-[1.45]
              tracking-[0.08em]
              text-[#1f1f1f]
            "
                                    style={{
                                        fontFamily: "cursive",
                                    }}
                                >
                                    A COMPLEX MIXED-USE DEVELOPMENT COMBINING MODERN RETAIL
                                    SPACES WITH HIGH-DENSITY URBAN FUNCTIONALITY, BUILT TO
                                    SUPPORT FAST-MOVING COMMERCIAL OPERATIONS.
                                </p>

                            </div>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="col-span-12 lg:col-span-8">

                            <div className="relative">

                                {/* IMAGE */}
                                <div className="group overflow-hidden bg-[#ececec]">

                                    <img
                                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop"
                                        alt="Mixed Use Project"
                                        className="
                h-[820px]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.03]
              "
                                    />

                                </div>

                                {/* RED BUTTON */}
                                <button
                                    className="
              absolute
              bottom-0
              right-0
              flex
              h-[100px]
              w-[100px]
              items-center
              justify-center
              bg-[#ed1c24]
              text-white
              transition-all
              duration-300
              hover:w-[120px]
            "
                                >

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="50"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>

                                </button>

                            </div>

                            {/* CONTENT */}
                            <div className="pt-8">

                                <h2
                                    className="
              text-[3.7rem]
              md:text-[4.4rem]
              font-[420]
              leading-[1]
              tracking-[-0.06em]
              text-[#4b4b4b]
            "
                                >
                                    Metro Target
                                </h2>

                                <p className="mt-4 text-[1.8rem] font-light text-[#4f4f4f]">
                                    Athens, GA
                                </p>

                                {/* CATEGORY */}
                                <div className="mt-6">

                                    <span
                                        className="
                rounded-md
                border
                border-[#d9d9d9]
                bg-white
                px-4
                py-2
                text-[1rem]
                font-medium
                text-[#555]
              "
                                    >
                                        Mixed-Use + Retail
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* COUNTRY CLUB FEATURE */}
            <section className="relative w-full overflow-hidden bg-[#f7f7f5] py-28">

                {/* RIGHT BLUEPRINT */}
                <div
                    className="
      pointer-events-none
      absolute
      right-[-60px]
      top-[140px]
      h-[900px]
      w-[340px]
      opacity-[0.05]
    "
                    style={{
                        backgroundImage:
                            "url('https://www.transparenttextures.com/patterns/graphy.png')",
                    }}
                />

                <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">

                    <div className="grid grid-cols-12 gap-16">

                        {/* LEFT SIDE */}
                        <div className="col-span-12 lg:col-span-8">

                            {/* TOP NOTE */}
                            <div className="mb-10 flex items-start gap-8 pl-12">

                                <div className="mt-1 h-[150px] w-[1px] bg-[#ed1c24]" />

                                <p
                                    className="
              max-w-[420px]
              font-serif
              text-[1rem]
              font-bold
              uppercase
              leading-[1.5]
              tracking-[0.08em]
              text-[#1f1f1f]
            "
                                    style={{
                                        fontFamily: "cursive",
                                    }}
                                >
                                    THE PROJECT THAT ESTABLISHED OUR REPUTATION IN
                                    HIGH-END HOSPITALITY AND LEISURE SPACES —
                                    DELIVERING DETAIL-DRIVEN EXECUTION WITH
                                    NATURAL MATERIALS AND ELEVATED FINISHES.
                                </p>

                            </div>

                            {/* MAIN IMAGE */}
                            <div className="relative overflow-hidden group">

                                <img
                                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop"
                                    alt="Country Club"
                                    className="
              h-[760px]
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.03]
            "
                                />

                                {/* RED BUTTON */}
                                <button
                                    className="
              absolute
              bottom-0
              right-0
              flex
              h-[95px]
              w-[95px]
              items-center
              justify-center
              bg-[#ed1c24]
              text-white
              transition-all
              duration-300
              hover:w-[115px]
            "
                                >

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="46"
                                        height="46"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>

                                </button>

                            </div>

                            {/* CONTENT */}
                            <div className="pt-8">

                                <h2
                                    className="
              text-[3.6rem]
              md:text-[4.2rem]
              font-[420]
              leading-[1]
              tracking-[-0.06em]
              text-[#4b4b4b]
            "
                                >
                                    Lake View Country Club
                                </h2>

                                <p className="mt-4 text-[1.8rem] font-light text-[#4f4f4f]">
                                    Asheville, NC
                                </p>

                            </div>

                        </div>

                        {/* RIGHT FLOATING IMAGE */}
                        <div className="col-span-12 flex justify-end lg:col-span-4">

                            <div className="relative mt-10 w-full max-w-[340px]">

                                <div className="overflow-hidden">

                                    <img
                                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
                                        alt="Country Club Interior"
                                        className="
                h-[520px]
                w-full
                object-cover
              "
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}