import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Sections
import HeroSection from '@/components/sections/HeroSection';
import WhoWeAreSection from '@/components/sections/WhoWeAreSection';
import MissionSection from '@/components/sections/MissionSection';
import SectorsSection from '@/components/sections/SectorsSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BuildingForBestSection from '@/components/sections/BuildingForBestSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <HeroSection />
      <WhoWeAreSection />
      <MissionSection />
      <SectorsSection />
      <TrustedBySection />
      <FeaturedProjectsSection />
      <ServicesSection />
      <BuildingForBestSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
}