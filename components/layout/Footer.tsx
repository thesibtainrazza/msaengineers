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
              className="mb-6 h-[180px] w-full max-w-[300px] rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps?q=Rajgangpur,Odisha&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact */}
            <div className="space-y-1 text-[1.1rem] leading-[1.55] tracking-[-0.02em] text-[#4a4a4a]">

              <p>
                Phone: (+91) 94394 29092
              </p>

              <p>
                Support:(+91) 70082 75002
              </p>

              <p className="pt-1 font-medium text-[#ed1c24]">
                msaengineer.contractor@gmail.com
              </p>

            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col space-y-4 pt-2 text-[1.15rem] font-normal tracking-[-0.02em] text-[#4a4a4a] lg:col-span-3 lg:pt-10">

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Projects
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Shed Structures
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Fabrication Works
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Industrial Erection
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Conveyor Systems
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a href="#" className="group relative w-fit transition-colors duration-200 hover:text-[#ed1c24]">
              Equipment Rental
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
              Head Office
            </h4>

            <p className="text-[0.95rem] leading-[1.7] text-[#6d6d6d]">

              Near Daily Market
              <br />
              Rajgangpur - 770017
              <br />
              Dist. Sundargarh, Odisha

            </p>

          </div>

          {/* Charleston */}
          <div>

            <h4 className="mb-2 text-[1.05rem] font-medium tracking-[-0.02em] text-[#ed1c24]">
              Registered Office
            </h4>

            <p className="text-[0.95rem] leading-[1.7] text-[#6d6d6d]">

              Ward No. 19
              <br />
              Rajgangpur - 770017
              <br />
              Odisha, India

            </p>

          </div>

          {/* Spartanburg */}
          <div>

            <h4 className="mb-2 text-[1.05rem] font-medium tracking-[-0.02em] text-[#ed1c24]">
              Operations
            </h4>

            <p className="text-[0.95rem] leading-[1.7] text-[#6d6d6d]">

              Industrial Projects
              <br />
              Across India
              <br />
              Cement & Industrial Plants

            </p>

          </div>

          {/* Westminster */}
          <div>

            <h4 className="mb-2 text-[1.05rem] font-medium tracking-[-0.02em] text-[#ed1c24]">
              Contact Office
            </h4>

            <p className="text-[0.95rem] leading-[1.7] text-[#6d6d6d]">

              MSA Engineers & Contractors.Co
              <br />
              support@msaengineers.in

            </p>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col items-start justify-between gap-y-4 border-t border-[#e5e5e5] pt-6 text-[0.9rem] tracking-[-0.01em] text-[#7a7a7a] md:flex-row md:items-center">

          {/* Left */}
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-8">

            <p>
              Copyright © 2026 MSA Engineer & Contractors. All rights reserved.
            </p>

            <a
              href="#"
              className="group relative w-fit transition-colors duration-200 hover:text-[#4a4a4a]"
            >
              Privacy Policy

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ed1c24] transition-all duration-200 group-hover:w-full"></span>

            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}