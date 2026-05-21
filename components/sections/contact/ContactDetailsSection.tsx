"use client";

import React from "react";

export default function ContactDetailsSection() {

  return (

    <section className="relative w-full overflow-hidden bg-[#f3f3f1] py-24 md:py-32">

      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-24">

          {/* LEFT SIDE */}
          <div>

            {/* TITLE */}
            <div className="mb-14">

              <h3
                className="
                  text-[2.1rem]
                  md:text-[2.4rem]
                  font-[420]
                  tracking-[-0.05em]
                  leading-[1]
                  text-[#ed1c24]
                "
              >
                Start a project with us
              </h3>

            </div>

            {/* FORM */}
            <form className="space-y-8">

              {/* ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>

                  <label className="mb-4 block text-[1rem] text-[#3f3f3f]">
                    First name
                  </label>

                  <input
                    type="text"
                    className="
                      h-[58px]
                      w-full
                      border
                      border-[#9f9f9f]
                      bg-transparent
                      px-5
                      text-[1rem]
                      text-[#4b4b4b]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#ed1c24]
                    "
                  />

                </div>

                <div>

                  <label className="mb-4 block text-[1rem] text-[#3f3f3f]">
                    Last name
                  </label>

                  <input
                    type="text"
                    className="
                      h-[58px]
                      w-full
                      border
                      border-[#9f9f9f]
                      bg-transparent
                      px-5
                      text-[1rem]
                      text-[#4b4b4b]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#ed1c24]
                    "
                  />

                </div>

              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>

                  <label className="mb-4 block text-[1rem] text-[#3f3f3f]">
                    Phone number
                  </label>

                  <input
                    type="text"
                    className="
                      h-[58px]
                      w-full
                      border
                      border-[#9f9f9f]
                      bg-transparent
                      px-5
                      text-[1rem]
                      text-[#4b4b4b]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#ed1c24]
                    "
                  />

                </div>

                <div>

                  <label className="mb-4 block text-[1rem] text-[#3f3f3f]">
                    Email
                  </label>

                  <input
                    type="email"
                    className="
                      h-[58px]
                      w-full
                      border
                      border-[#9f9f9f]
                      bg-transparent
                      px-5
                      text-[1rem]
                      text-[#4b4b4b]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#ed1c24]
                    "
                  />

                </div>

              </div>

              {/* MESSAGE */}
              <div>

                <label className="mb-4 block text-[1rem] text-[#3f3f3f]">
                  Message (optional)
                </label>

                <textarea
                  rows={7}
                  className="
                    w-full
                    resize-none
                    border
                    border-[#9f9f9f]
                    bg-transparent
                    px-5
                    py-5
                    text-[1rem]
                    text-[#4b4b4b]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#ed1c24]
                  "
                />

              </div>

              {/* TOGGLE */}
              <div className="flex items-center gap-4 pt-1">

                <div
                  className="
                    relative
                    h-[24px]
                    w-[42px]
                    rounded-full
                    bg-[#dddddd]
                  "
                >

                  <div
                    className="
                      absolute
                      left-[2px]
                      top-[2px]
                      h-[20px]
                      w-[20px]
                      rounded-full
                      bg-white
                    "
                  />

                </div>

                <p className="text-[1rem] text-[#6f6f6f]">
                  Sign up for the latest news from MSA
                </p>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  group
                  mt-4
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#ed1c24]
                  px-9
                  py-[18px]
                  text-[1.05rem]
                  font-medium
                  tracking-[-0.02em]
                  text-[#4b4b4b]
                  transition-all
                  duration-300
                  hover:bg-[#ed1c24]
                  hover:text-white
                "
              >

                Send

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M0 8.25H12.127L6.43075 13.9463L7.5 15L15 7.5L7.5 0L6.43075 1.05375L12.127 6.75H0V8.25Z"
                    fill="currentColor"
                  />
                </svg>

              </button>

            </form>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* DIVIDER */}
            <div className="absolute left-0 top-0 hidden h-full w-px bg-[#d6d6d6] lg:block" />

            <div className="space-y-20 lg:pl-20">

              {/* TOP BUTTONS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">

                {/* CONTACT */}
                <div>

                  <h3
                    className="
                      mb-7
                      text-[3rem]
                      font-[420]
                      tracking-[-0.06em]
                      leading-none
                      text-[#4b4b4b]
                    "
                  >
                    Contact
                  </h3>

                  <a
                    href="mailto:[msaengineer.contractors@gmail.com]"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-[#ed1c24]
                      px-9
                      py-[18px]
                      text-[1.05rem]
                      font-medium
                      tracking-[-0.02em]
                      text-[#4b4b4b]
                      transition-all
                      duration-300
                      hover:bg-[#ed1c24]
                      hover:text-white
                    "
                  >

                    Email Us

                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M0 8.25H12.127L6.43075 13.9463L7.5 15L15 7.5L7.5 0L6.43075 1.05375L12.127 6.75H0V8.25Z"
                        fill="currentColor"
                      />
                    </svg>

                  </a>

                </div>

                {/* CAREERS */}
                <div>

                  <h3
                    className="
                      mb-7
                      text-[3rem]
                      font-[420]
                      tracking-[-0.06em]
                      leading-none
                      text-[#4b4b4b]
                    "
                  >
                    Careers
                  </h3>

                  <a
                    href="/careers"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-[#ed1c24]
                      px-9
                      py-[18px]
                      text-[1.05rem]
                      font-medium
                      tracking-[-0.02em]
                      text-[#4b4b4b]
                      transition-all
                      duration-300
                      hover:bg-[#ed1c24]
                      hover:text-white
                    "
                  >

                    Learn More

                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M0 8.25H12.127L6.43075 13.9463L7.5 15L15 7.5L7.5 0L6.43075 1.05375L12.127 6.75H0V8.25Z"
                        fill="currentColor"
                      />
                    </svg>

                  </a>

                </div>

              </div>

              {/* SUBCONTRACTORS */}
              <div>

                <h3
                  className="
                    mb-7
                    text-[3rem]
                    font-[420]
                    tracking-[-0.06em]
                    leading-none
                    text-[#4b4b4b]
                  "
                >
                  Services
                </h3>

                <a
                  href="/services"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#ed1c24]
                    px-9
                    py-[18px]
                    text-[1.05rem]
                    font-medium
                    tracking-[-0.02em]
                    text-[#4b4b4b]
                    transition-all
                    duration-300
                    hover:bg-[#ed1c24]
                    hover:text-white
                  "
                >

                  View Here

                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M0 8.25H12.127L6.43075 13.9463L7.5 15L15 7.5L7.5 0L6.43075 1.05375L12.127 6.75H0V8.25Z"
                      fill="currentColor"
                    />
                  </svg>

                </a>

              </div>

              {/* CALL US */}
              <div>

                <h3
                  className="
                    mb-8
                    text-[3rem]
                    font-[420]
                    tracking-[-0.06em]
                    leading-none
                    text-[#4b4b4b]
                  "
                >
                  Call Us
                </h3>

                <div className="space-y-10">

                  <div>

                    <h4 className="mb-2 text-[1.7rem] text-[#ed1c24]">
                      Odisha Region
                    </h4>

                    <a
                      href="tel:+919876543210"
                      className="
                        text-[1.9rem]
                        font-light
                        tracking-[-0.04em]
                        text-[#4b4b4b]
                        transition-colors
                        duration-300
                        hover:text-[#ed1c24]
                      "
                    >
                      +91 70082 75002
                    </a>

                  </div>

                  <div>

                    <h4 className="mb-2 text-[1.7rem] text-[#ed1c24]">
                      Project Office
                    </h4>

                    <a
                      href="tel:+919123456789"
                      className="
                        text-[1.9rem]
                        font-light
                        tracking-[-0.04em]
                        text-[#4b4b4b]
                        transition-colors
                        duration-300
                        hover:text-[#ed1c24]
                      "
                    >
                      +91 94394 29092
                    </a>

                  </div>

                </div>

              </div>

              {/* FIND US */}
              <div>

                <h3
                  className="
                    mb-8
                    text-[3rem]
                    font-[420]
                    tracking-[-0.06em]
                    leading-none
                    text-[#4b4b4b]
                  "
                >
                  Find Us
                </h3>

                <div className="space-y-12">

                  <div>

                    <h4 className="mb-2 text-[1.7rem] text-[#ed1c24]">
                      Rajgangpur, Odisha
                    </h4>

                    <p
                      className="
                        text-[1.45rem]
                        leading-[1.6]
                        tracking-[-0.03em]
                        text-[#4b4b4b]
                      "
                    >
                      Main Industrial Office
                      <br />
                      Rajgangpur, Odisha
                    </p>

                  </div>

                  <div>

                    <h4 className="mb-2 text-[1.7rem] text-[#ed1c24]">
                      Project Sites
                    </h4>

                    <p
                      className="
                        text-[1.45rem]
                        leading-[1.6]
                        tracking-[-0.03em]
                        text-[#4b4b4b]
                      "
                    >
                      Cement Plants & Industrial
                      <br />
                      Execution Locations Across India
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}