import React from 'react';

export default function BlogHeroSection() {
  return (
    <section className="relative w-full bg-[#f8f8f8] pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
                The latest
            </h4>
            <h1 className="text-[4.2rem] md:text-[5.4rem] lg:text-[6rem] font-[450] leading-[1] tracking-[-0.04em] text-[#4b4b4b]">
                News & Insights
            </h1>
          </div>
          <div className="lg:pt-20">
            <p className="text-[1.5rem] md:text-[1.8rem] leading-[1.6] text-[#4b4b4b]">
                There’s a good reason that J Davis is one of the region’s fastest-growing general contractors. Here, we’re proud to share the <span className="relative inline-block"><span className="relative z-10 text-[#ed1c24]">innovative thinking,</span><span className="absolute bottom-2 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span> industry insights, construction news and more that has propelled our team and our clients to success time and time again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
