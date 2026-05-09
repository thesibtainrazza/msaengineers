/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import PortfolioHeroSection from '@/components/portfolio/PortfolioHeroSection';
import PortfolioGridSection from '@/components/portfolio/PortfolioGridSection';

export const metadata = {
  title: 'Portfolio | JDavis Construction',
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PortfolioHeroSection />
        <PortfolioGridSection />
      </main>
      <Footer />
    </div>
  );
}
