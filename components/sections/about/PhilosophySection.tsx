import React from 'react';

export default function PhilosophySection() {
  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden" id="about">
      <div className="container-primary">
        <div className="mb-20 max-w-[800px]">
          <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-primary">
            Our Foundation
          </h4>
          <h2 className="text-[3.5rem] font-[450] leading-[1.1] tracking-[-0.04em] text-text-dark md:text-[4.5rem]">
            Our work is driven by precision, reliability, and a commitment to strong industrial execution.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="flex flex-col">
            <h3 className="mb-2 text-[2.8rem] font-[450] tracking-[-0.02em] text-text-dark">
             Experience
            </h3>
            <div className="mb-6 h-[2px] w-12 bg-primary"></div>
            <p className="text-[1.5rem] font-light leading-[1.7] text-text-muted">
              MSA Engineers & Contractors brings decades of hands-on industrial experience across fabrication, shed structures, erection works, and cement plant projects.
            </p>
            <p className="mt-4 text-[1.5rem] font-light leading-[1.7] text-text-muted">
             Every project is executed with attention to quality, safety, and dependable workmanship.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-2 text-[2.8rem] font-[450] tracking-[-0.02em] text-text-dark">
              Commitment
            </h3>
            <div className="mb-6 h-[2px] w-12 bg-primary"></div>
            <p className="text-[1.5rem] font-light leading-[1.7] text-text-muted">
              Integrity, accountability, and execution excellence are at the core of our work.
            </p>
            <p className="mt-4 text-[1.5rem] font-light leading-[1.7] text-text-muted">
             We believe strong industrial projects are built through discipline, transparency, and long-term trust with our clients and partners.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-2 text-[2.8rem] font-[450] tracking-[-0.02em] text-text-dark">
              Progress
            </h3>
            <div className="mb-6 h-[2px] w-12 bg-primary"></div>
            <p className="text-[1.5rem] font-light leading-[1.7] text-text-muted">
              MSA continues to grow through evolving industrial demands, modern engineering practices, and consistent project delivery across India.
            </p>
            <p className="mt-4 text-[1.5rem] font-light leading-[1.7] text-text-muted">
We focus on building solutions that are strong, efficient, and built to last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
