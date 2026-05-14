import React from 'react';

// Modular Components
import AboutHeroSection from '@/components/sections/about/AboutHeroSection';
import AboutNav from '@/components/sections/about/AboutNav';
import PhilosophySection from '@/components/sections/about/PhilosophySection';
import HistorySection from '@/components/sections/about/HistorySection';
import LeadershipSection from '@/components/sections/about/LeadershipSection';
import AchievementsSection from '@/components/sections/about/AchievementsSection';
import CommunitySection from '@/components/sections/about/CommunitySection';
import CareersSection from '@/components/sections/about/CareersSection';
import AboutSubHeroSection from '@/components/sections/about/AboutSubHeroSection';

export const metadata = {
  title: 'MSA Engineer & Contractors',
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutSubHeroSection />
      <AboutNav />
      <PhilosophySection />
      <HistorySection />
      <LeadershipSection />
      <AchievementsSection />
      <CommunitySection />
      <CareersSection />
    </>
  );
}
