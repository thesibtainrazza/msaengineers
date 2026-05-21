// BlogGridSection.tsx

import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function BlogGridSection() {

const posts = [
  {
    id: 1,

    title:
      "Why Conveyor System Alignment Matters More Than Most Industrial Teams Realize",

    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
  },

  {
    id: 2,

    title:
      "How Proper Shutdown Planning Prevents Delays During Industrial Execution",

    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
  },

  {
    id: 3,

    title:
      "The Role Of Structural Fabrication In Long-Term Industrial Reliability",

    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },

  {
    id: 4,

    title:
      "What Makes Industrial Site Coordination Critical For Large-Scale Projects",

    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  },
];

  return (

    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f7f7f5]
        pb-32
      "
    >

      {/* blueprint bg */}
      <div
        className="
          absolute
          right-0
          top-0
          hidden
          h-full
          w-[320px]
          opacity-[0.06]
          lg:block
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/graphy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container-primary">

        <div
          className="
            grid
            grid-cols-1
            gap-y-24
            gap-x-16
            md:grid-cols-2
          "
        >

          {posts.map((post) => (

            <Link
              key={post.id}
              href="#"
              className="group block"
            >

              {/* IMAGE */}
              <div
                className="
                  relative
                  overflow-hidden
                  bg-[#ececec]
                "
              >

                <Image width={1000} height={1000}                   src={post.image}
                  alt={post.title}
                  className="
                    h-[420px]
                    md:h-[520px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />

              </div>

              {/* META */}
              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  text-[#4b4b4b]
                "
              >

                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#ed1c24]"
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
              <h3
                className="
                  mt-5
                  max-w-[92%]
                  text-[2.8rem]
                  md:text-[3.4rem]
                  font-[420]
                  leading-[1]
                  tracking-[-0.06em]
                  text-[#4b4b4b]
                  transition-colors
                  duration-300
                  group-hover:text-[#ed1c24]
                "
              >
                {post.title}
              </h3>

            </Link>

          ))}

        </div>

      </div>

    </section>

  );

}