import React from 'react';

export default function AboutHeroSection() {
  return (
    <section className="relative w-full bg-[#f7f7f5] pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-16 px-8 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-16 xl:px-20">
        <div className="flex flex-col items-start">
          <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
            Who We Are
          </h4>
          <h1 className="text-[4.2rem] font-[450] leading-[0.98] tracking-[-0.06em] text-[#4b4b4b] md:text-[5.4rem] lg:text-[5.8rem]">
            About Us
          </h1>
          <p className="mt-10 max-w-[720px] text-[1.6rem] font-light leading-[1.7] tracking-[-0.02em] text-[#5f5f5f]">
            Headquartered in South Carolina, J Davis Construction serves clients in South Carolina, North Carolina, and Georgia. Our mission is to provide superior, passionate service leaving a positive impact on everyone we involve, while bringing honor to God.
          </p>
          <p className="mt-6 max-w-[720px] text-[1.6rem] font-light leading-[1.7] tracking-[-0.02em] text-[#5f5f5f]">
            Since 1997, we have leveraged decades of expertise to deliver world-class results, all while staying true to our roots: Hospitality, authenticity, a down-to-earth attitude, and a team that feels like family.
          </p>
        </div>

        <div className="relative w-full">
          <div className="absolute left-[-12%] top-[16%] z-20 hidden h-[2px] w-[24%] bg-[#ed1c24] lg:block"></div>

          <div className="group relative aspect-[1.28/1] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1541888086225-ee8018e4726b?q=80&w=2000&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20"></div>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 cursor-pointer backdrop-blur-sm">
                <svg
                  className="ml-2 h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white font-semibold tracking-widest text-sm uppercase">Watch Video</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
