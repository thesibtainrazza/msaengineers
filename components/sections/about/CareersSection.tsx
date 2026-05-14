import React from 'react';

export default function CareersSection() {
  return (
    <section className="relative w-full bg-[#f7f7f5] py-24 md:py-32" id="careers">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
                <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
                    Careers
                </h4>
                <h2 className="mb-10 text-[3.5rem] font-[450] leading-[1.1] tracking-[-0.04em] text-[#4b4b4b] md:text-[4.5rem]">
                    We&apos;re always looking for new <span className="relative inline-block"><span className="relative z-10">family</span><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span> members.
                </h2>
                
                <a href="#" className="inline-flex items-center justify-center bg-white border border-[#ed1c24] rounded-full px-8 md:px-10 py-4 text-[#4b4b4b] hover:bg-[#ed1c24] hover:text-white transition-colors group">
                    <span className="font-medium text-lg">Careers + Culture</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
            </div>

            <div className="lg:pt-20">
                <p className="text-[1.6rem] font-light leading-[1.7] text-[#5f5f5f] mb-6">
                    At J Davis, we&apos;re just a bit different from other South Carolina general contractors. We foster a meaningful culture, and protect it fiercely—that means cookouts over burnout. We invest in your career at every opportunity, without asking you to travel for weeks on end. We&apos;re building a rock-solid, sustainable future as a growing company without taking big risks that jeopardize our employees&apos; safety, security or stability.
                </p>
                <p className="text-[1.6rem] font-light leading-[1.7] text-[#5f5f5f]">
                    If that sounds good, let&apos;s talk. We&apos;re always looking to add <span className="relative inline-block"><span className="relative z-10">talented, passionate people</span><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span> to our growing team.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
}
