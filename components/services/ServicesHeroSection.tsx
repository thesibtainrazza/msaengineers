"use client";

import React, { useState } from 'react';

export default function ServicesHeroSection() {
  const [activeTab, setActiveTab] = useState('Preconstruction');

  const navItems = [
    { label: 'Preconstruction', href: '#preconstruction' },
    { label: 'Design-Build', href: '#design-build' },
    { label: 'CMAR', href: '#cmar' },
    { label: 'Traditional Contracting', href: '#traditional-contracting' },
  ];

  return (
    <section className="relative w-full bg-[#f7f7f5] pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
                <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
                    Services
                </h4>
                <h1 className="text-[4.2rem] font-[450] leading-[0.98] tracking-[-0.06em] text-[#4b4b4b] md:text-[5.4rem] lg:text-[5.8rem]">
                    From blueprint to ribbon-cutting
                </h1>

                {/* Sub Navigation */}
                <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveTab(item.label)}
                            className={`text-[1.3rem] font-semibold uppercase tracking-widest transition-colors duration-300 relative inline-block pb-2 ${
                            activeTab === item.label
                                ? 'text-[#ed1c24]'
                                : 'text-[#4b4b4b] hover:text-[#ed1c24]'
                            }`}
                        >
                            {item.label}
                            {activeTab === item.label && (
                                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ed1c24]" />
                            )}
                        </a>
                    ))}
                </div>
            </div>

            <div className="lg:pt-20 lg:pl-16">
                <p className="text-[1.8rem] md:text-[2.2rem] font-[450] leading-[1.4] text-[#4b4b4b]">
                    When you bring our team to the table, we bring your vision to life with creativity, clarity, and accountability. J Davis prides itself on our ability to be a one-stop-shop, <span className="relative inline-block"><span className="relative z-10">guiding you</span><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span> from sketch to spreadsheets to stunning final result. If you already have blueprints in hand, we roll up our sleeves and execute on your dream with construction services that deliver efficient precision.
                </p>
            </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-200 mb-16 max-w-[1450px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20"></div>

      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20 mb-20">
          <p className="text-[2.2rem] md:text-[2.8rem] font-[450] leading-[1.3] text-[#4b4b4b] max-w-[80%]">
              We solve problems others can&apos;t or won&apos;t with creativity. We build <span className="relative inline-block"><span className="relative z-10">lasting relationships</span><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span> with candor. And we specialize in details that reflect the DNA of a community.
          </p>
      </div>

      <div className="relative w-full aspect-[21/9] md:aspect-[3/1]">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1541888086225-ee8018e4726b?q=80&w=2000&auto=format&fit=crop')"}}></div>
      </div>
    </section>
  );
}
