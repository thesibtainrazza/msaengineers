"use client";

import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '@/data';

export default function PortfolioGridSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Amenities', 'Education', 'Industrial', 'Mixed-Use + Retail', 'Municipality + Community'];

  const filteredProjects = activeFilter === 'All' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(project => project.category === activeFilter);

  return (
    <section className="relative w-full bg-white py-12 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Filters */}
        <div className="mb-12 md:mb-16">
            <div className="flex flex-wrap gap-4">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-6 py-2 rounded-full text-[1.1rem] font-medium transition-colors duration-300 ${
                            activeFilter === filter
                            ? 'bg-[#ed1c24] text-white border border-[#ed1c24]'
                            : 'bg-white text-[#4b4b4b] border border-[#e5e5e5] hover:border-[#ed1c24] hover:text-[#ed1c24]'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                            style={{ backgroundImage: `url('${project.image}')` }}
                        ></div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                        
                        {/* Hover Overlay Icon */}
                        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ed1c24] text-white transform scale-50 group-hover:scale-100 transition-transform duration-500">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#ed1c24] mb-2">
                            {project.category}
                        </p>
                        <h3 className="text-[1.8rem] font-[450] leading-[1.2] text-[#4b4b4b] group-hover:text-[#ed1c24] transition-colors duration-300 mb-1">
                            {project.title}
                        </h3>
                        <p className="text-[1.1rem] text-[#888888]">
                            {project.location}
                        </p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
