import React from "react";

export default function PortfolioHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-bg-light pt-40 pb-20 md:pt-52 md:pb-28">

      <div className="mx-auto max-w-[1550px] px-8 md:px-12 lg:px-16 xl:px-20">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 items-end gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <h4 className="mb-8 text-[13px] font-semibold uppercase tracking-[0.28em] text-primary">
              OUR PROJECTS
            </h4>

            <h1 className="text-[4.5rem] md:text-[6.5rem] lg:text-[7.5rem] font-[420] leading-[0.92] tracking-[-0.08em] text-text-dark">
              Portfolio
            </h1>

          </div>

          {/* RIGHT */}
          <div className="max-w-[700px] lg:ml-auto">

            <p
              className="
                text-[1.55rem]
                font-light
                leading-[1.7]
                tracking-[-0.03em]
                text-text-dark
              "
            >
              From industrial fabrication and heavy structural erection to
              conveyor systems and plant execution, our portfolio reflects the
              scale, precision, and execution-focused mindset behind every MSA
              project.

              {" "}

              <span className="bg-primary px-2 py-[2px] text-white">
                Built for industries that cannot afford failure.
              </span>

              {" "}

              Explore selected projects that showcase our practical engineering
              approach, field coordination, and commitment to reliable delivery.
            </p>

          </div>
        </div>

        {/* FILTERS */}
        <div className="mt-24 flex flex-wrap items-center gap-4">

          <span className="mr-4 text-[1.5rem] font-light text-text-dark">
            Filters
          </span>

          <button className="rounded-full bg-primary px-7 py-3 text-[1.1rem] font-medium text-white transition-all duration-300">
            All
          </button>

          <button className="rounded-full border border-text-dark px-7 py-3 text-[1.1rem] font-medium text-text-dark transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white">
            Structural Fabrication
          </button>

          <button className="rounded-full border border-text-dark px-7 py-3 text-[1.1rem] font-medium text-text-dark transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white">
            Industrial Erection
          </button>

          <button className="rounded-full border border-text-dark px-7 py-3 text-[1.1rem] font-medium text-text-dark transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white">
            Conveyor Systems
          </button>

          <button className="rounded-full border border-text-dark px-7 py-3 text-[1.1rem] font-medium text-text-dark transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white">
            Cement Plants
          </button>

          <button className="rounded-full border border-text-dark px-7 py-3 text-[1.1rem] font-medium text-text-dark transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white">
            Material Handling
          </button>

        </div>

      </div>
    </section>
  );
}