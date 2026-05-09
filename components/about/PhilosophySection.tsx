import React from 'react';

export default function PhilosophySection() {
  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden" id="about">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="mb-20 max-w-[800px]">
          <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
            Our Philosophy
          </h4>
          <h2 className="text-[3.5rem] font-[450] leading-[1.1] tracking-[-0.04em] text-[#4b4b4b] md:text-[4.5rem]">
            Our work is guided by an unshakable commitment to three truths.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="flex flex-col">
            <h3 className="mb-2 text-[2.8rem] font-[450] tracking-[-0.02em] text-[#4b4b4b]">
              People
            </h3>
            <div className="mb-6 h-[2px] w-12 bg-[#ed1c24]"></div>
            <p className="text-[1.5rem] font-light leading-[1.7] text-[#5f5f5f]">
              We are in the People Business, period. The satisfaction of our customers and business partners is our North Star, and we recognized long ago that the most important assets we protect are the lives of our employees and their families.
            </p>
            <p className="mt-4 text-[1.5rem] font-light leading-[1.7] text-[#5f5f5f]">
              We help careers grow without requiring extensive traveling that impacts time with loved ones and leads to burnout. We host birthday parties and prioritize downtime and paid leave. We commit to helping each client&apos;s vision thrive – and we respect and value all who join us. We hire you to retire you!
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-2 text-[2.8rem] font-[450] tracking-[-0.02em] text-[#4b4b4b]">
              Principles
            </h3>
            <div className="mb-6 h-[2px] w-12 bg-[#ed1c24]"></div>
            <p className="text-[1.5rem] font-light leading-[1.7] text-[#5f5f5f]">
              Integrity, transparency, and the drive to make a positive impact everywhere we go are all reflections of the caliber of character we partner with, hire and celebrate—as well as our dedication to honoring God in our work and our actions.
            </p>
            <p className="mt-4 text-[1.5rem] font-light leading-[1.7] text-[#5f5f5f]">
              At J Davis you never have to ask permission to do the right thing. It&apos;s built into every decision we make regardless of the financial outcome.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-2 text-[2.8rem] font-[450] tracking-[-0.02em] text-[#4b4b4b]">
              Progress
            </h3>
            <div className="mb-6 h-[2px] w-12 bg-[#ed1c24]"></div>
            <p className="text-[1.5rem] font-light leading-[1.7] text-[#5f5f5f]">
              At J Davis we believe so strongly in our mission that we want the entire industry to take notice. Why? Because we believe in a better construction industry, not the status quo.
            </p>
            <p className="mt-4 text-[1.5rem] font-light leading-[1.7] text-[#5f5f5f]">
              That&apos;s why we invest in both the growth of our communities, and forward momentum in our projects and our outreach. Constantly evolving and embracing change keeps us on the cutting edge for our clients and our industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
