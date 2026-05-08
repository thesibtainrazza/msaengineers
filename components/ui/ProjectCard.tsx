import React from 'react';

export const ProjectCard = ({ title, location, category, image, index }: { title: string, location: string, category: string, image: string, index: number }) => {
  return (
    <div 
      className="sticky w-full bg-white transition-all duration-300 group cursor-pointer pt-8 pb-12"
      style={{ top: '20px', zIndex: index }}
    >
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 bg-white z-10 relative">
        <h3 className="text-3xl md:text-[2.75rem] font-normal text-[#4a4a4a] group-hover:text-[#ed1c24] transition-colors leading-none tracking-tight">{title}</h3>
        
        <div className="flex items-center space-x-6 mt-6 md:mt-0 text-[#4a4a4a]">
          <span className="text-lg md:text-xl font-light">{location}</span>
          <span className="border border-gray-300 rounded-[50px] px-6 py-2 text-sm font-light">{category}</span>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#4a4a4a] group-hover:border-[#ed1c24] flex items-center justify-center group-hover:text-[#ed1c24] transition-colors shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>
      </div>
      
      {/* Image */}
      <div className="w-full aspect-[21/9] md:aspect-[24/7] overflow-hidden bg-gray-100 shadow-2xl">
         <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${image}')` }}></div>
      </div>
    </div>
  );
};

export default ProjectCard;
