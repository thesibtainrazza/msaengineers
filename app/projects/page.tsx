 
import React from 'react';

import ProjectsHeroSection from '@/components/sections/projects/ProjectsHeroSection';
import ProjectsGridSection from '@/components/sections/projects/ProjectsGridSection';

export const metadata = {
  title: 'Projects | MSA Engineer & Contractors',
};

export default function ProjectsPage() {
  return (
    <>  
      <ProjectsHeroSection />
      <ProjectsGridSection />
    </>
  );
}
