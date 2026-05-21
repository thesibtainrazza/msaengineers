// FeaturedPostSection.tsx

import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function FeaturedPostSection() {

  return (

    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-bg-light
        pt-0
        pb-28
      "
    >

      <div className="container-primary">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.9fr_1.1fr]
            items-stretch
          "
        >

          {/* LEFT CONTENT */}
          <div
            className="
              flex
              flex-col
              justify-center
              bg-bg-light
              py-20
              pr-16
              lg:pr-24
            "
          >

            {/* ARTICLE */}
            <div
              className="
                mb-8
                flex
                items-center
                gap-3
                text-text-dark
              "
            >

              <svg
                width="15"
                height="14"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M1.3 12C0.9425 12 0.636458 11.8694 0.381875 11.6083C0.127292 11.3472 0 11.0333 0 10.6667V0L1.08875 1.11667L2.16125 0L3.25 1.11667L4.33875 0L5.41125 1.11667L6.5 0L7.58875 1.11667L8.66125 0L9.75 1.11667L10.8387 0L11.9112 1.11667L13 0V10.6667C13 11.0333 12.8727 11.3472 12.6181 11.6083C12.3635 11.8694 12.0575 12 11.7 12H1.3ZM1.3 10.6667H5.85V6.66667H1.3V10.6667ZM7.15 10.6667H11.7V9.33333H7.15V10.6667ZM7.15 8H11.7V6.66667H7.15V8ZM1.3 5.33333H11.7V3.33333H1.3V5.33333Z"
                  fill="currentColor"
                />
              </svg>

              <span
                className="
                  text-[1.15rem]
                  font-light
                  tracking-[-0.03em]
                "
              >
                Industrial Article
              </span>

            </div>

            {/* TITLE */}
            <h2
              className="
                max-w-[580px]
                text-[3.2rem]
                md:text-[4.3rem]
                font-[420]
                leading-[0.95]
                tracking-[-0.06em]
                text-text-dark
              "
            >
              Why Proper Conveyor Alignment Directly Impacts Industrial Productivity
            </h2>

            {/* DESC */}
            <p
              className="
                mt-10
                max-w-[560px]
                text-[1.45rem]
                font-light
                leading-[1.65]
                tracking-[-0.02em]
                text-[#6c6c6c]
              "
            >
              Small alignment errors in conveyor systems can lead to major
              operational slowdowns, increased maintenance costs, and long-term
              structural stress across industrial facilities.
            </p>

            {/* LINK */}
            <Link
              href="#"
              className="
                mt-12
                inline-flex
                items-center
                gap-2
                text-[1.45rem]
                font-light
                text-text-dark
                underline
                underline-offset-4
                transition-all
                duration-300
                hover:text-primary
              "
            >
              Read More →

            </Link>

          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative
              min-h-[500px]
              lg:min-h-[760px]
              overflow-hidden
              bg-[#ececec]
            "
          >

            <Image width={1000} height={1000}               src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
              alt="Industrial Conveyor System"
              className="
                h-full
                w-full
                object-cover
              "
            />

          </div>

        </div>

      </div>

    </section>

  );

}