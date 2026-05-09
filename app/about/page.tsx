import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Modular Components
import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutNav from '@/components/about/AboutNav';
import PhilosophySection from '@/components/about/PhilosophySection';
import HistorySection from '@/components/about/HistorySection';
import LeadershipSection from '@/components/about/LeadershipSection';
import AchievementsSection from '@/components/about/AchievementsSection';
import CommunitySection from '@/components/about/CommunitySection';
import CareersSection from '@/components/about/CareersSection';

export const metadata = {
  title: 'About Us | JDavis Construction',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <AboutHeroSection />
        <AboutNav />
        <PhilosophySection />
        <HistorySection />
        <LeadershipSection />
        <AchievementsSection />
        <CommunitySection />
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
}
