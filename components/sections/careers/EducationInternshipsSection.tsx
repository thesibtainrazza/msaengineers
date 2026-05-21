"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function EducationInternshipsSection() {

  return (

    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f7f7f5]
        py-28
        md:py-36
      "
    >

      <div className="container-primary">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.9fr_1.1fr]
            gap-x-28
            gap-y-24
            items-start
          "
        >

          {/* LEFT CONTENT */}
          <div className="pt-6 lg:pt-10">

            <h4
              className="
                mb-8
                text-[13px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#ed1c24]
              "
            >
             TRAINING & INTERNSHIPS
            </h4>

            <h2
              className="
                text-[4rem]
                md:text-[5rem]
                lg:text-[5.7rem]
                font-[420]
                tracking-[-0.06em]
                leading-[0.92]
                text-[#4b4b4b]
                mb-14
              "
            >
              The Next
              <br />
              Generation
            </h2>

            {/* FIRST TEXT */}
            <div className="max-w-[700px]">

              <p
                className="
                  text-[1.5rem]
                  md:text-[1.6rem]
                  font-light
                  leading-[1.72]
                  tracking-[-0.03em]
                  text-[#4f4f4f]
                "
              >

                At MSA Engineers, we believe the next generation
                of industrial professionals should learn through{" "}

                <span className="bg-[#ed1c24] px-2 py-[2px] text-white">
                  real-world project exposure
                </span>

                {" "}and hands-on execution. From fabrication yards
                and erection sites to conveyor installations and
                structural projects, we provide opportunities for
                aspiring engineers and technicians to experience
                how industrial construction truly operates.

              </p>

            </div>

            {/* SECOND TEXT */}
            <div className="mt-10 max-w-[700px]">

              <p
                className="
                  text-[1.5rem]
                  md:text-[1.6rem]
                  font-light
                  leading-[1.72]
                  tracking-[-0.03em]
                  text-[#4f4f4f]
                "
              >

                Currently, MSA Engineers is seeking motivated
                interns and trainees interested in mechanical
                construction, fabrication works, erection projects
                and industrial operations. We actively support
                young professionals through mentorship,
                site experience and practical learning in live
                industrial environments.

              </p>

            </div>

            {/* EMAIL */}
            <div className="mt-14">

              <p
                className="
                  text-[1.8rem]
                  md:text-[2rem]
                  font-light
                  tracking-[-0.04em]
                  text-[#4b4b4b]
                "
              >

                Interested in interning?{" "}

                <a
                  href="mailto:msaengineers@gmail.com"
                  className="
                    text-[#ed1c24]
                    underline
                    underline-offset-4
                    transition-colors
                    duration-300
                    hover:text-[#4b4b4b]
                  "
                >
                  Email us
                </a>

              </p>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="
                relative
                overflow-hidden
              "
            >

              {/* RED LINE */}
              <div
                className="
                  absolute
                  top-[70px]
                  left-[-180px]
                  h-[1.5px]
                  w-[240px]
                  bg-[#ed1c24]
                  z-20
                  hidden
                  lg:block
                "
              />

              <Image width={1000} height={1000}                 src="https://images.unsplash.com/photo-1622612063021-116cc3407145?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Internship"
                className="
                  h-[980px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />

            </motion.div>

          </div>

        </div>

      </div>

    </section>

  );

}