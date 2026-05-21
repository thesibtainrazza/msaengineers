 
import React from 'react';

import BlogHeroSection from '@/components/sections/blog/BlogHeroSection';
import FeaturedPostSection from '@/components/sections/blog/FeaturedPostSection';
import BlogGridSection from '@/components/sections/blog/BlogGridSection';

export const metadata = {
  title: 'Blog | MSA Engineer & Contractors',
};

export default function BlogPage() {
  return (
    <>
      <BlogHeroSection />
      <FeaturedPostSection />
      <BlogGridSection />
    </>
  );
}
