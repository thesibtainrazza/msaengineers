 
import React from 'react';

// Modular Components
import ServicesHeroSection from '@/components/sections/services/ServicesHeroSection';
import ServiceDetailSection from '@/components/sections/services/ServiceDetailSection';
import ValueEngineeringSection from '@/components/sections/services/ValueEngineeringSection';

export const metadata = {
  title: 'Services | MSA Engineer & Contractors',
};
import { SERVICES_PAGE_DATA } from '@/data/services';

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      {SERVICES_PAGE_DATA.map((service, index) => (
          <ServiceDetailSection key={service.id} service={service} index={index} />
      ))}
      <ValueEngineeringSection />
    </>
  );
}
