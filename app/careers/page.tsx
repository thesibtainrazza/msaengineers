/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CareersHeroSection from '@/components/careers/CareersHeroSection';
import CommunityInvolvementSection from '@/components/careers/CommunityInvolvementSection';
import EducationInternshipsSection from '@/components/careers/EducationInternshipsSection';
import WhyJDavisSection from '@/components/careers/WhyJDavisSection';
import TestimonialSection from '@/components/careers/TestimonialSection';
import EmployeeBenefitsSection from '@/components/careers/EmployeeBenefitsSection';

export const metadata = {
  title: 'Careers | JDavis Construction',
};

export default function CareersPage() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <CareersHeroSection />
        <CommunityInvolvementSection />
        <EducationInternshipsSection />
        <WhyJDavisSection />
        <TestimonialSection />
        <EmployeeBenefitsSection />
      </main>
      <Footer />
    </div>
  );
}
