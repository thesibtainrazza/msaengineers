import React from 'react';

// Sections
import HeroSection from '@/components/sections/HeroSection';
import WhoWeAreSection from '@/components/sections/WhoWeAreSection';
import MissionSection from '@/components/sections/MissionSection';
import SectorsSection from '@/components/sections/ServicesSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import WHYCHOOSEUS from '@/components/sections/WhyChooseUsSection';
import BuildingForBestSection from '@/components/sections/BuildingForBestSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <MissionSection />
      <SectorsSection />
      <TrustedBySection />
      <FeaturedProjectsSection />
      <WHYCHOOSEUS />
      <BuildingForBestSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}