import React from 'react';
import Link from 'next/link';

export const ProjectCard = ({
  slug,
  title,
  location,
  category,
  image,
  index
}: {
  slug: string,
  title: string,
  location: string,
  category: string,
  image: string,
  index: number
}) => {

  return (

    <Link
      href={`/projects/${slug}`}
      className="
        sticky
        w-full
        bg-white
        transition-all
        duration-300
        group
        cursor-pointer
        pt-10
        pb-14
        block
      "
      style={{
        top: '20px',
        zIndex: index
      }}
    >

      {/* TOP ROW */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          pb-10
          bg-white
          relative
          z-10
        "
      >

        {/* TITLE */}
        <h3
          className="
            text-[3rem]
            md:text-[4rem]
            leading-[0.95]
            tracking-[-0.06em]
            font-[350]
            text-text-dark
            transition-colors
            duration-300
            group-hover:text-primary
          "
        >
          {title}
        </h3>

        {/* RIGHT SIDE */}
        <div
          className="
            flex
            items-center
            gap-7
            md:gap-9
            mt-8
            lg:mt-0
            text-[#4a4a4a]
            lg:mr-2
          "
        >

          {/* LOCATION */}
          <span
            className="
              text-[1.2rem]
              md:text-[1.5rem]
              font-[350]
              tracking-[-0.03em]
              text-[#4d4d4d]
            "
          >
            {location}
          </span>

          {/* CATEGORY */}
          <span
            className="
              rounded-full
              border
              border-white
              px-5
              py-[0.45rem]
              text-[0.92rem]
              font-[420]
              text-[#8c8c8c]
            "
          >
            {category}
          </span>

          {/* ARROW BUTTON */}
          <div
            className="
              flex
              h-[56px]
              w-[56px]
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#7a7a7a]
              text-[#4d4d4d]
              transition-all
              duration-300
              group-hover:border-primary
              group-hover:text-primary
            "
          >

            <svg
              className="h-5 w-5"
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

          </div>

        </div>

      </div>

      {/* IMAGE */}
      <div
        className="
          w-full
          aspect-[21/9]
          md:aspect-[24/7]
          overflow-hidden
          bg-gray-100
        "
      >

        <div
          className="
            w-full
            h-full
            bg-cover
            bg-center
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.03]
          "
          style={{
            backgroundImage: `url('${image}')`
          }}
        />

      </div>

    </Link>

  );

};

export default ProjectCard;