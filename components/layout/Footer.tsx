import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e5e5e5] bg-[#f7f7f5] px-6 md:px-10 lg:px-12 pt-16 pb-8">

      <div className="mx-auto max-w-[1400px]">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-10">

          {/* Left Column */}
          <div className="lg:col-span-4">

            {/* Image */}
            <div
              className="mb-6 h-[180px] w-full max-w-[300px] bg-contain bg-left bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')",
              }}
            />

            {/* Contact */}
            <div className="space-y-1 text-[1.1rem] leading-[1.55] tracking-[-0.02em] text-[#4a4a4a]">

              <p>
                Upstate Region: (864) 972-4720
              </p>

              <p>
                Coastal Region: (854) 800-3222
              </p>

              <p className="pt-1 font-medium text-[#ed1c24]">
                info@jdavisgc.com
              </p>

            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col space-y-4 pt-2 text-[1.15rem] font-normal tracking-[-0.02em] text-[#4a4a4a] lg:col-span-3 lg:pt-10">

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Portfolio
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Amenities
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Industrial
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Education
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Mixed-Use/Multi Family
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Municipality + Community
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col space-y-4 pt-2 text-[1.15rem] font-normal tracking-[-0.02em] text-[#4a4a4a] lg:col-span-2 lg:pt-10">

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Services
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Blog
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Careers
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Contact
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

          </div>

          {/* Socials */}
          <div className="flex flex-col space-y-4 pt-2 text-[1.15rem] font-normal tracking-[-0.02em] text-[#4a4a4a] lg:col-span-3 lg:pt-10">

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Facebook
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              LinkedIn
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Instagram
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

          </div>
        </div>

        {/* Locations */}
        <div className="mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">

          {/* Anderson */}
          <div>

            <h4 className="mb-2 text-[1.05rem] font-medium tracking-[-0.02em] text-[#ed1c24]">
              Anderson, SC
            </h4>

            <p className="text-[0.95rem] leading-[1.7] text-[#6d6d6d]">

              109 Nunnally Rd.
              <br />
              Anderson, SC 29625

            </p>

          </div>

          {/* Charleston */}
          <div>

            <h4 className="mb-2 text-[1.05rem] font-medium tracking-[-0.02em] text-[#ed1c24]">
              Charleston, SC
            </h4>

            <p className="text-[0.95rem] leading-[1.7] text-[#6d6d6d]">

              4465 Tile Dr.
              <br />
              Suite 105
              <br />
              North Charleston, SC 29405

            </p>

          </div>

          {/* Spartanburg */}
          <div>

            <h4 className="mb-2 text-[1.05rem] font-medium tracking-[-0.02em] text-[#ed1c24]">
              Spartanburg, SC
            </h4>

            <p className="text-[0.95rem] leading-[1.7] text-[#6d6d6d]">

              104 N. Daniel Morgan Ave.
              <br />
              #220
              <br />
              Spartanburg, SC 29306

            </p>

          </div>

          {/* Westminster */}
          <div>

            <h4 className="mb-2 text-[1.05rem] font-medium tracking-[-0.02em] text-[#ed1c24]">
              Westminster, SC
            </h4>

            <p className="text-[0.95rem] leading-[1.7] text-[#6d6d6d]">

              12245 SC-11,
              <br />
              Westminster, SC 29693

            </p>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col items-start justify-between gap-y-4 border-t border-[#e5e5e5] pt-6 text-[0.9rem] tracking-[-0.01em] text-[#7a7a7a] md:flex-row md:items-center">

          {/* Left */}
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-8">

            <p>
              Copyright © 2026 JDavis, Inc. All rights reserved.
            </p>

            <a
              href="#"
              className="group relative w-fit transition-colors duration-200 hover:text-[#4a4a4a]"
            >
              Privacy Policy

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>

            </a>

          </div>

          {/* Right */}
          <div className="flex items-center">

            <span>
              Powered by FUEL
            </span>

            <svg
              className="ml-2 h-4 w-4 fill-current opacity-80"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C12 2 7 7 7 11.5C7 14 9 16 12 16S17 14 17 11.5C17 7 12 2 12 2Z" />
            </svg>

          </div>
        </div>
      </div>
    </footer>
  );
}