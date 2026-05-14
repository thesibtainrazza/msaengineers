/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import CareersHeroSection from '@/components/sections/careers/CareersHeroSection';
import CommunityInvolvementSection from '@/components/sections/careers/CommunityInvolvementSection';
import EducationInternshipsSection from '@/components/sections/careers/EducationInternshipsSection';
import WhyJDavisSection from '@/components/sections/careers/WhyMSASection';
import TestimonialSection from '@/components/sections/careers/TestimonialSection';
import EmployeeBenefitsSection from '@/components/sections/careers/EmployeeBenefitsSection';

export const metadata = {
  title: 'Careers | MSA Engineer & Contractors',
};

export default function CareersPage() {
  return (
    <>
      <CareersHeroSection />
      <CommunityInvolvementSection />
      <EducationInternshipsSection />
      <WhyJDavisSection />
      <TestimonialSection />
      <EmployeeBenefitsSection />
    </>
  );
}
