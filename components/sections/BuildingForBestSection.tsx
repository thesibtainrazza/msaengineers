import React from 'react';
import StatsMarquee from '@/components/ui/StatsMarquee';

export default function BuildingForBestSection() {
  return (
    <section className="relative w-full bg-white pt-24 pb-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* Left Column (Text & Image) */}
        <div className="flex flex-col items-start w-full">
          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-medium text-[#4a4a4a] leading-[1.1] mb-6 tracking-tight">
            Building for the<br />
            <span className="bg-[#ed1c24] text-white px-3 py-1 inline-block font-normal mt-2 leading-none">best</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-16 leading-relaxed max-w-lg font-light">
            Our passion is building businesses, improving communities, and growing relationships.
          </p>
          
          {/* Black and White Image */}
          <div className="w-full md:w-[130%] aspect-[4/3] lg:aspect-[16/10] bg-gray-200 grayscale mt-8 shadow-2xl overflow-hidden relative z-0">
             <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888081-35b8e104e761?q=80&w=2070&auto=format&fit=crop')" }}></div>
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
