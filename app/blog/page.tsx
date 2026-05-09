/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import BlogHeroSection from '@/components/blog/BlogHeroSection';
import FeaturedPostSection from '@/components/blog/FeaturedPostSection';
import BlogGridSection from '@/components/blog/BlogGridSection';

export const metadata = {
  title: 'Blog | JDavis Construction',
};

export default function BlogPage() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <BlogHeroSection />
        <FeaturedPostSection />
        <BlogGridSection />
      </main>
      <Footer />
    </div>
  );
}
