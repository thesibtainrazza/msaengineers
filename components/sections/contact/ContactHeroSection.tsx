import React from 'react';

export default function ContactHeroSection() {
  return (
    <section className="relative w-full bg-[#f8f8f8] pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
            Contact MSA Engineers & Contractors
        </h4>
        
        <h1 className="text-[4.2rem] md:text-[5.4rem] lg:text-[6.5rem] font-[450] leading-[1] tracking-[-0.04em] text-[#4b4b4b] mb-12 max-w-[800px]">
            We’d <span className="inline-block border-[3px] border-[#ed1c24] px-4 py-1 leading-[0.9] text-[#ed1c24] transform -rotate-2 ml-2 mr-2">love</span> to hear from you
        </h1>
        
        <div className="max-w-[800px] mt-16 md:mt-24">
            <h2 className="text-[2.2rem] md:text-[3rem] font-[450] leading-[1.2] text-[#4b4b4b] mb-8">
                Let’s talk about <span className="relative inline-block"><span className="relative z-10 text-[#ed1c24]">your legacy</span><span className="absolute bottom-2 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span>.
            </h2>
            <p className="text-[1.3rem] md:text-[1.5rem] leading-[1.6] text-[#4b4b4b]">
                We are your full-service construction partner from blueprints to ribbon cutting, acting as a building advisor for the entire journey—and that journey begins right now. Connect with our team today for construction bidding or pricing, and watch your vision come to life.
            </p>
        </div>
      </div>
    </section>
  );
}
