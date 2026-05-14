/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import PortfolioHeroSection from '@/components/sections/portfolio/PortfolioHeroSection';
import PortfolioGridSection from '@/components/sections/portfolio/PortfolioGridSection';

export const metadata = {
  title: 'Portfolio | MSA Engineer & Contractors',
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHeroSection />
      <PortfolioGridSection />
    </>
  );
}
