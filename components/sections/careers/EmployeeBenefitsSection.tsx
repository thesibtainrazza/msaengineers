import React from 'react';

export default function EmployeeBenefitsSection() {
 const benefits = [
  "Performance-Based Growth Opportunities",
  "Hands-On Industrial Project Exposure",
  "Supportive & Safety-First Work Culture",
  "Practical Learning From Live Site Execution",
  "Long-Term Career Stability",
  "Recognition For Dedication, Discipline & Quality Work"
];
  return (
    <section className="relative w-full bg-[#f8f8f8] py-24 md:py-32">
      <div className="container-primary">
        <h4 className="text-[13px] font-semibold uppercase tracking-[0.28em] text-primary mb-4">
            Big(ger) Perks
        </h4>
        <h2 className="text-[3.2rem] md:text-[4rem] font-[450] leading-[1.1] text-text-dark mb-16">
            Employee Benefits
        </h2>
        
        <div className="grid grid-col s-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 md:p-10 min-h-[160px] flex items-center border border-border-light rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-12 h-12 text-primary mr-6 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                    <p className="text-[1.2rem] font-medium text-text-dark leading-[1.4]">{benefit}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
