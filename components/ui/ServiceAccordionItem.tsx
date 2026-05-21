import React from 'react';

export const ServiceAccordionItem = ({ title, isActive = false }: { title: string, isActive?: boolean }) => {
  return (
    <div className={`w-full border-b border-gray-300 py-8 md:py-10 flex items-center justify-between cursor-pointer group transition-colors ${isActive ? 'text-primary' : 'text-[#4a4a4a] hover:text-primary'}`}>
       <span className="text-3xl md:text-4xl lg:text-[2.5rem] font-light tracking-tight">{title}</span>
       <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border flex items-center justify-center transition-colors shrink-0 ${isActive ? 'border-primary' : 'border-gray-400 group-hover:border-primary'}`}>
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" /></svg>
       </div>
    </div>
  )
};

export default ServiceAccordionItem;
