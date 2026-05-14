import React from 'react';

export default function PortfolioHeroSection() {
  return (
    <section className="relative w-full bg-[#f8f8f8] pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col items-start max-w-[800px]">
            <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
                Our Work
            </h4>
            <h1 className="text-[4.2rem] md:text-[5.4rem] lg:text-[6rem] font-[450] leading-[1] tracking-[-0.04em] text-[#4b4b4b] mb-10">
                Portfolio
            </h1>
            <p className="text-[1.5rem] md:text-[1.8rem] leading-[1.6] text-[#4b4b4b]">
                From hospitality to municipality, our portfolio offers a swift yet in-depth look at our team’s expertise, the enduring quality of our work, and our commitment to details that reflect the <span className="relative inline-block"><span className="relative z-10 text-[#ed1c24]">DNA of a community.</span><span className="absolute bottom-2 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span> Explore our construction company portfolio below.
            </p>
        </div>
      </div>
    </section>
  );
}
