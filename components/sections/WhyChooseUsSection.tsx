import React from 'react';
import { WHY_CHOOSE_US } from '@/data';
import ServiceAccordionItem from '@/components/ui/ServiceAccordionItem';

export default function WhyChooseUsSection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        
        {/* Left Column (Accordion) */}
        <div className="flex flex-col w-full order-2 lg:order-1 mt-12 lg:mt-32">
           <div className="w-full border-t border-gray-300">
             {WHY_CHOOSE_US.map((service, index) => (
               <ServiceAccordionItem 
                 key={index} 
                 title={service.title} 
                 isActive={service.isActive} 
               />
             ))}
           </div>
        </div>

        {/* Right Column (Text Content & Image) */}
        <div className="flex flex-col items-start lg:pl-10 relative order-1 lg:order-2">
          <h4 className="text-[#ed1c24] font-bold tracking-[0.2em] text-xs md:text-sm mb-8 uppercase">WHY CHOOSE US</h4>
          
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-light text-[#4a4a4a] leading-[1.1] tracking-tight mb-10">
            Trusted industrial expertise
            backed by<br className="hidden lg:block"/>
            proven<br className="hidden lg:block"/>
            <span className="bg-[#ed1c24] text-white px-3 py-1 inline-block font-normal my-2">execution.</span>
          </h2>

          <a href="#" className="flex items-center justify-center border-[1.5px] border-[#ed1c24] rounded-full px-8 py-3 text-[#4a4a4a] hover:bg-[#ed1c24] hover:text-white transition-colors shrink-0 group">
            <span>Get In Touch</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>

          {/* Bottom Image Component */}
          <div className="w-full mt-16 shadow-2xl">
            <div className="w-full aspect-[3/4] bg-cover bg-center" style={{backgroundImage:"url('/assets/7.jpg?auto=format&fit=crop&w=1200&q=80')" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
