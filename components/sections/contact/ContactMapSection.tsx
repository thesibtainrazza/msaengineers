import React from 'react';

export default function ContactMapSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      {/* Fallback or styling overlay if needed */}
      <div className="absolute bottom-8 right-8 bg-white px-6 py-3 shadow-lg rounded-md hidden md:block">
        <p className="text-[#4b4b4b] font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#ed1c24] mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            MSA Engineers & Contractors HQ
        </p>
      </div>
    </section>
  );
}
