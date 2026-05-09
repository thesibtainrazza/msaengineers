import React from 'react';
import { FEATURED_PROJECTS } from '@/data';
import ProjectCard from '@/components/ui/ProjectCard';

export default function FeaturedProjectsSection() {
  return (<section className="relative w-full bg-[#f5f5f3] px-8 md:px-12 lg:px-16 pt-24 pb-48">

    <div className="max-w-[1450px] mx-auto">

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-14 mb-24">

        {/* LEFT CONTENT */}
        <div className="max-w-[900px]">

          <h2
            className="
            text-[4.2rem]
            md:text-[5.3rem]
            leading-[0.92]
            tracking-[-0.06em]
            font-[350]
            text-[#ed1c24]
            mb-10
          "
          >
            Featured Projects
          </h2>

          <p
            className="
            text-[1.45rem]
            md:text-[1.68rem]
            leading-[1.65]
            tracking-[-0.03em]
            font-[320]
            text-[#4d4d4d]
            max-w-[980px]
          "
          >
            Every distinct building in our diverse portfolio
            represents one uncommon commitment:
            Our determination to make your vision,
            experience and satisfaction the top priority.
            When you put people first, results follow—and
            these projects speak for themselves.
          </p>

        </div>

        {/* BUTTON */}
        <a
          href="#"
          className="
          group
          flex
          shrink-0
          items-center
          justify-center
          rounded-full
          border-[1.5px]
          border-[#ed1c24]
          px-10
          py-5
          text-[1.2rem]
          font-[420]
          tracking-[-0.02em]
          text-[#4b4b4b]
          transition-all
          duration-300
          hover:bg-[#ed1c24]
          hover:text-white
          lg:mb-30
        "
        >

          <span>View Portfolio</span>

          <svg
            className="
            ml-3
            h-5
            w-5
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.7}
              d="M5 12h14M12 5l7 7-7 7"
            />

          </svg>

        </a>

      </div>

      {/* Top Divider */}
      <div className="w-full h-px bg-[#4a4a4a] mb-8"></div>

      {/* Sticky Project Cards Container */}
      <div className="relative w-full">
        {FEATURED_PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            location={project.location}
            category={project.category}
            image={project.image}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
  );
}
