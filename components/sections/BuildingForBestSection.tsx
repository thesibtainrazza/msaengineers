import React from 'react';
import StatsMarquee from '@/components/ui/StatsMarquee';

export default function BuildingForBestSection() {
  return (  
    <section className="relative w-full bg-white pt-12 pb-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* Left Column (Text & Image) */}
        <div className="flex flex-col items-start w-full">
          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-medium text-[#4a4a4a] leading-[1.1] mb-6 tracking-tight">
            Built on<br />
            <span className="bg-[#ed1c24] text-white px-3 py-1 inline-block font-normal mt-2 leading-none">experience</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-16 leading-relaxed max-w-lg font-light">
            Our strength lies in disciplined execution, experienced workforce, and a long-standing commitment to industrial quality and reliability.
          </p>
          
          {/* Black and White Image */}
          <div className="w-full md:w-[130%] aspect-[4/3] lg:aspect-[16/10] bg-gray-200 grayscale mt-8 shadow-2xl overflow-hidden relative z-0">
             <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage:"url('/assets/6.jpg?auto=format&fit=crop&w=1200&q=80')" }}></div>
          </div>
        </div>
      </div>

      {/* Huge Scrolling Stats Layer */}
      <div className="absolute bottom-[5%] md:bottom-[10%] left-0 w-full z-20 pointer-events-none">
        <StatsMarquee />
      </div>
    </section>
  );
}
