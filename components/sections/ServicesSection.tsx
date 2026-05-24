import React from 'react';
import { SERVICES_LIST } from '@/content';
import SectorButton from '@/components/ui/SectorButton';
import SectorImage from '@/components/ui/SectorImage';

export default function ServicesSection() {
  return (
    <section className="relative w-full py-16 bg-white overflow-hidden pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h4 className="text-primary font-bold tracking-[0.2em] text-xs md:text-sm mb-12 uppercase">OUR SERVICES</h4>
        
        <div className="flex flex-wrap gap-4 md:gap-6 items-center w-full max-w-[1100px]">
           {SERVICES_LIST.map((service, idx) => (
             service.isImage 
               ? <SectorImage key={idx} url={service.image!} />
               :<SectorButton
  key={idx}
  text={service.label!}
  image={service.image!}
  href={`/services#${service.label!.toLowerCase().replace(/\s+/g, '-')}`}
/>
           ))}
        </div>
      </div>
    </section>
  );
}
