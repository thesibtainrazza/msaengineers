"use client";

import Image from "next/image";
import React, { useState } from "react";
import { PROJECTS } from "@/content/projects";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function FeaturedProjectsSlider() {

    const [current, setCurrent] = useState(0);

    const sliderProjects = PROJECTS.filter(p => p.featured);
    const gridProjects = PROJECTS.filter(p => p.featured);

    const nextSlide = () => {
        setCurrent((prev) =>
            prev === sliderProjects.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? sliderProjects.length - 1 : prev - 1
        );
    };

    const activeProject = sliderProjects[current];
    
    // Assign variables for grid projects
    const p1 = gridProjects[0];
    const p2 = gridProjects[1];
    const p3 = gridProjects[2];
    const p4 = gridProjects[3];
    const p5 = gridProjects[4];
    const p6 = gridProjects[5];

    return (
        <>
            <section className="relative w-full overflow-hidden bg-bg-light pb-28">
                <div className="mx-auto max-w-[1550px] px-0 md:px-0">

                    <div className="relative overflow-hidden">

                        {/* IMAGE */}
                        <FadeIn fullWidth>
                          <div className="relative h-[620px] w-full overflow-hidden">

                              <Image width={1000} height={1000}                                 src={activeProject.image}
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
                        </FadeIn>

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
              bg-primary
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
                  hover:text-primary
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
                hover:text-primary
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
                hover:text-primary
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
            <section className="relative w-full overflow-hidden bg-bg-light py-28">

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

                                <Image width={1000} height={1000}                                     src={p1.image}
                                    alt={p1.title}
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
                                <Link
                                    href={`/projects/${p1.slug}`}
                                    className="
              absolute
              bottom-0
              right-0
              flex
              h-[100px]
              w-[100px]
              items-center
              justify-center
              bg-primary
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

                                </Link>

                            </div>

                            {/* PROJECT CONTENT */}
                            <div className="pt-8">

                                <h2
                                    className="
              inline-block
              border-b
              border-primary
              pb-2
              text-[3.4rem]
              md:text-[4rem]
              font-[420]
              leading-[1]
              tracking-[-0.06em]
              text-primary
            "
                                >
                                    {p1.title}
                                </h2>

                                <p className="mt-4 text-[1.8rem] font-light text-[#4f4f4f]">
                                    {p1.location}
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
                                        {p1.category}
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT SIDE NOTE */}
                        <div className="relative pt-40 lg:col-span-4">

                            {/* HORIZONTAL RED LINE */}
                            <div className="mb-10 h-[2px] w-[180px] bg-primary" />

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
                                {p1.shortDescription}
                            </p>

                        </div>

                    </div>

                </div>

            </section>
            {/* SPLIT PROJECT SHOWCASE */}
            <section className="relative w-full overflow-hidden bg-bg-light py-32">

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

                <div className="container-primary">

                    <div className="grid grid-cols-12 gap-14">

                        {/* LEFT SMALL IMAGE */}
                        <div className="col-span-12 lg:col-span-4">

                            <div className="relative">

                                <div className="overflow-hidden bg-[#ececec]">

                                    <Image width={1000} height={1000}                                         src={p2.gallery?.[0] || p2.image}
                                        alt={`${p2.title} Interior`}
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

                                <div className="h-[170px] w-[1px] bg-primary" />

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
                                    {p2.shortDescription}
                                </p>

                            </div>

                            {/* MAIN IMAGE */}
                            <div className="relative">

                                <div className="overflow-hidden bg-[#ececec]">

                                    <Image width={1000} height={1000}                                         src={p2.image}
                                        alt={p2.title}
                                        className="
                h-[760px]
                w-full
                object-cover
              "
                                    />

                                </div>

                                {/* RED ARROW BOX */}
                                <Link
                                    href={`/projects/${p2.slug}`}
                                    className="
              absolute
              bottom-0
              right-0
              flex
              h-[100px]
              w-[100px]
              items-center
              justify-center
              bg-primary
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

                                </Link>

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
              text-text-dark
            "
                                >
                                    {p2.title}
                                </h2>

                                <p className="mt-4 text-[1.8rem] font-light text-[#4f4f4f]">
                                    {p2.location}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* FULL WIDTH PROJECT SECTION */}
            <section className="relative w-full overflow-hidden bg-bg-light py-24">

                <div className="container-primary">

                    <div className="relative">

                        {/* IMAGE */}
                        <div className="group relative overflow-hidden bg-[#ececec]">

                            <Image width={1000} height={1000}                                 src={p3.image}
                                alt={p3.title}
                                className="
            h-[760px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.02]
          "
                            />

                            {/* RED ARROW BOX */}
                            <Link
                                href={`/projects/${p3.slug}`}
                                className="
            absolute
            bottom-0
            right-0
            flex
            h-[100px]
            w-[100px]
            items-center
            justify-center
            bg-primary
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

                            </Link>

                        </div>

                        {/* CONTENT */}
                        <div className="pt-8">

                            <h2
                                className="
            inline-block
            border-b
            border-primary
            pb-2
            text-[3.8rem]
            md:text-[4.4rem]
            font-[420]
            leading-[1]
            tracking-[-0.06em]
            text-primary
          "
                            >
                                {p3.title}
                            </h2>

                            <p className="mt-4 text-[1.8rem] font-light text-[#4f4f4f]">
                                {p3.location}
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
                                    {p3.category}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* RED FEATURED PROJECT BANNER */}
            <section className="relative w-full overflow-hidden bg-bg-light pb-28">

                <div className="container-primary">

                    <div className="relative">

                        {/* IMAGE */}
                        <div className="overflow-hidden">

                            <Image width={1000} height={1000}                                 src={p4.image}
                                alt={p4.title}
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
          bg-primary
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
                                    {p4.title}
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
                                    {p4.location}
                                </p>

                                {/* BUTTON */}
                                <Link
                                    href={`/projects/${p4.slug}`}
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
              hover:text-primary
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

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* MIXED USE FEATURE SECTION */}
            <section className="relative w-full overflow-hidden bg-bg-light py-24">

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

                <div className="container-primary">

                    <div className="grid grid-cols-12 gap-14 items-start">

                        {/* LEFT NOTE */}
                        <div className="col-span-12 lg:col-span-4 pt-52">

                            <div className="flex items-start gap-8">

                                {/* RED LINE */}
                                <div className="mt-4 h-[1px] w-[180px] bg-primary" />

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
                                    {p5.shortDescription}
                                </p>

                            </div>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="col-span-12 lg:col-span-8">

                            <div className="relative">

                                {/* IMAGE */}
                                <div className="group overflow-hidden bg-[#ececec]">

                                    <Image width={1000} height={1000}                                         src={p5.image}
                                        alt={p5.title}
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

                                {/* RED ARROW BOX */}
                                <Link
                                    href={`/projects/${p5.slug}`}
                                    className="
              absolute
              bottom-0
              right-0
              flex
              h-[100px]
              w-[100px]
              items-center
              justify-center
              bg-primary
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

                                </Link>

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
              text-text-dark
            "
                                >
                                    {p5.title}
                                </h2>

                                <p className="mt-4 text-[1.8rem] font-light text-[#4f4f4f]">
                                    {p5.location}
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
                                        {p5.category}
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* COUNTRY CLUB FEATURE */}
            {p6 && (
                <section className="relative w-full overflow-hidden bg-bg-light py-28">

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

                    <div className="container-primary">

                        <div className="grid grid-cols-12 gap-16">

                            {/* LEFT SIDE */}
                            <div className="col-span-12 lg:col-span-8">

                                {/* TOP NOTE */}
                                <div className="mb-10 flex items-start gap-8 pl-12">

                                    <div className="mt-1 h-[150px] w-[1px] bg-primary" />

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
                                        {p6.shortDescription}
                                    </p>

                                </div>

                                {/* MAIN IMAGE */}
                                <div className="relative overflow-hidden group">

                                    <Image width={1000} height={1000}                                     src={p6.image}
                                        alt={p6.title}
                                        className="
                  h-[760px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.03]
                "
                                    />

                                    {/* RED ARROW BOX */}
                                    <Link
                                        href={`/projects/${p6.slug}`}
                                        className="
                  absolute
                  bottom-0
                  right-0
                  flex
                  h-[95px]
                  w-[95px]
                  items-center
                  justify-center
                  bg-primary
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

                                    </Link>

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
                  text-text-dark
                "
                                    >
                                        {p6.title}
                                    </h2>

                                    <p className="mt-4 text-[1.8rem] font-light text-[#4f4f4f]">
                                        {p6.location}
                                    </p>

                                </div>

                            </div>

                            {/* RIGHT FLOATING IMAGE */}
                            <div className="col-span-12 flex justify-end lg:col-span-4">

                                <div className="relative mt-10 w-full max-w-[340px]">

                                    <div className="overflow-hidden">

                                        <Image width={1000} height={1000}                                         src={p6.gallery?.[0] || p6.image}
                                            alt={`${p6.title} Secondary`}
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
            )}
        </>
    );
}