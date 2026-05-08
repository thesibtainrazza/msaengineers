import React from 'react';
import LogoMarquee from '@/components/ui/LogoMarquee';

export default function TrustedBySection() {
  return (
    <section className="relative w-full py-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8">
        <h4 className="text-[#ed1c24] font-normal text-lg md:text-xl">Trusted by:</h4>
      </div>
      
      <LogoMarquee />

      {/* Bottom Horizontal Line */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16 md:mt-24 mb-8">
         <div className="w-full h-[1px] bg-gray-300"></div>
      </div>
    </section>
  );
}
