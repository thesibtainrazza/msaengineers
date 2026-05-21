import React from 'react';

export default function TestimonialSection() {
  return (
    <section className="bg-[#f8f8f8] py-20 md:py-32">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid md:grid-cols-3 gap-16 md:gap-24 items-center">
          <div className="order-2 md:order-1 md:text-right border-t md:border-t-0 md:border-r border-[#e5e5e5] pt-8 md:pt-0 md:pr-12">
            <p className="text-[1.3rem] font-semibold text-[#4b4b4b] leading-[1.4]">
              Rakesh Kumar<br />
              <span className="font-normal text-[#888888]">Site Supervisor’s Family</span>
            </p>
          </div>
          <div className="md:col-span-2 order-1 md:order-2">
            <p className="text-[2rem] md:text-[2.8rem] font-[450] leading-[1.3] text-[#ed1c24]">
              “What makes MSA different for our family is the sense of stability and respect that comes with the work culture here. Industrial projects demand commitment and long hours on-site, but the team always values people behind the workforce as much as the work itself.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
