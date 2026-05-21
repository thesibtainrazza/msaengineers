import Image from "next/image";
import React from "react";

export default function BlogHeroSection() {

  return (

    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-bg-light
        pt-40
        pb-0
      "
    >

      <div className="container-primary">

        {/* TOP CONTENT */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.15fr_0.85fr]
            gap-x-28
            gap-y-16
            items-start
          "
        >

          {/* LEFT */}
          <div>

            <h4
              className="
                mb-8
                text-[13px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-primary
              "
            >
              INDUSTRY UPDATES
            </h4>

            <h1
              className="
                text-[5rem]
                md:text-[6rem]
                lg:text-[7rem]
                font-[420]
                tracking-[-0.07em]
                leading-[0.9]
                text-text-dark
              "
            >
              Insights &
              <br />
              Execution Stories
            </h1>

          </div>

          {/* RIGHT */}
          <div className="pt-10 lg:pt-16 max-w-[640px]">

            <p
              className="
                text-[1.55rem]
                font-light
                leading-[1.7]
                tracking-[-0.03em]
                text-[#4f4f4f]
              "
            >
              Industrial execution is built on experience gained
              directly from fabrication yards, active project
              sites, shutdown operations, and real field
              coordination. Here, we share the{" "}

              <span className="bg-primary px-2 py-[2px] text-white">
                engineering insights,
              </span>

              {" "}site experiences, operational challenges, and
              practical lessons that shape the way MSA executes
              industrial projects across demanding environments.

            </p>

          </div>

        </div>

      </div>

      {/* FEATURED IMAGE */}
      <div className="relative mt-28 w-full overflow-hidden">

        <div
          className="
            relative
            h-[420px]
            md:h-[620px]
            lg:h-[760px]
            w-full
          "
        >

          <Image width={1000} height={1000}             src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
            alt="Industrial Insights"
            className="
              h-full
              w-full
              object-cover
            "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/20" />

          {/* ARTICLE LABEL */}
          <div
            className="
              absolute
              bottom-10
              left-8
              md:left-14
              flex
              items-center
              gap-3
              text-white
            "
          >

            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-sm
                bg-primary
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-8.25a2.25 2.25 0 00-2.25-2.25h-10.5A2.25 2.25 0 004.5 6v12a2.25 2.25 0 002.25 2.25h10.5A2.25 2.25 0 0019.5 18v-3.75m-9-7.5h6m-6 3h6m-6 3h3"
                />
              </svg>

            </div>

            <span
              className="
                text-[1.25rem]
                font-light
                tracking-[-0.03em]
              "
            >
              Industrial Article
            </span>

          </div>

        </div>

      </div>

    </section>

  );

}