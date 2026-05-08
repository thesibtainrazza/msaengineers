import React from 'react';
import { FEATURED_PROJECTS } from '@/data';
import ProjectCard from '@/components/ui/ProjectCard';

export default function FeaturedProjectsSection() {
  return (
    <section className="relative w-full bg-white px-6 md:px-12 py-16 pb-48">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-normal text-[#ed1c24] mb-6">Featured Projects</h2>
            <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed font-light">
              Every distinct building in our diverse portfolio represents one uncommon commitment:
              Our determination to make your vision, experience and satisfaction the top priority. When
              you put people first, results follow—and these projects speak for themselves.
            </p>
          </div>
          <a href="#" className="flex items-center justify-center border-[1.5px] border-[#ed1c24] rounded-full px-8 py-3 text-[#4a4a4a] hover:bg-[#ed1c24] hover:text-white transition-colors shrink-0 group">
            <span>View Portfolio</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
        
        {/* Top Divider */}
        <div className="w-full h-px bg-[#4a4a4a] mb-8"></div>

        {/* Sticky Project Cards Container */}
        <div className="relative w-full">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              location={project.location}
              category={project.category}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
