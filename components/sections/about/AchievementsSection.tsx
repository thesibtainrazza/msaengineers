import React from 'react';

export default function AchievementsSection() {
  return (
    <section className="relative w-full bg-[#f7f7f5] py-24 md:py-32 overflow-hidden" id="awards">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div></div>
            <div>
                <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
                    Achievements
                </h4>
                <h2 className="text-[3.5rem] font-[450] leading-[1.1] tracking-[-0.04em] text-[#4b4b4b] md:text-[4.5rem]">
                    Awards are nice, but real achievements are better.
                </h2>
            </div>
        </div>
      </div>

      <div className="relative w-full border-y border-[#ed1c24] bg-white overflow-hidden py-16 flex items-center">
        {/* Decorative background image overlay */}
        <div className="absolute left-0 top-0 h-full w-[40%] bg-gray-200 opacity-30 mix-blend-multiply pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086225-ee8018e4726b?q=80&w=1000')] bg-cover bg-center grayscale"></div>
        </div>

        <div className="relative z-10 flex w-[200%] animate-marquee">
            {/* Duplicated for seamless scrolling */}
            {[1, 2].map((group) => (
                <div key={group} className="flex min-w-full justify-around">
                    <div className="flex items-center px-12 border-r border-[#ed1c24]/30 last:border-0">
                        <span className="text-[6rem] md:text-[8rem] font-light text-[#ed1c24] mr-8">3000+</span>
                        <span className="text-[1.6rem] font-semibold text-[#ed1c24] uppercase tracking-wide max-w-[200px]">Hours of Community Services</span>
                    </div>
                    <div className="flex items-center px-12 border-r border-[#ed1c24]/30 last:border-0">
                        <span className="text-[6rem] md:text-[8rem] font-light text-[#ed1c24] mr-8">10%</span>
                        <span className="text-[1.6rem] font-semibold text-[#ed1c24] uppercase tracking-wide max-w-[200px]">Of our profit benefits non-profit causes</span>
                    </div>
                    <div className="flex items-center px-12 border-r border-[#ed1c24]/30 last:border-0">
                        <span className="text-[6rem] md:text-[8rem] font-light text-[#ed1c24] mr-8">100%</span>
                        <span className="text-[1.6rem] font-semibold text-[#ed1c24] uppercase tracking-wide max-w-[200px]">Of our workforce sleep in their own beds at night</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
