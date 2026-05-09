import React from 'react';

export const ProjectCard = ({
  title,
  location,
  category,
  image,
  index
}: {
  title: string,
  location: string,
  category: string,
  image: string,
  index: number
}) => {

  return (

    <div
      className="
        sticky
        w-full
        bg-[#f5f5f3]
        transition-all
        duration-300
        group
        cursor-pointer
        pt-10
        pb-14
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
          bg-[#f5f5f3]
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
            text-[#4b4b4b]
            transition-colors
            duration-300
            group-hover:text-[#ed1c24]
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
              border-[#d5d5d5]
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
              group-hover:border-[#ed1c24]
              group-hover:text-[#ed1c24]
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

    </div>

  );

};

export default ProjectCard;