import React from 'react';
import Link from 'next/link';

export default function FeaturedPostSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-24">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="bg-[#f8f8f8] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Text Content */}
            <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-center order-2 md:order-1">
                <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-[#ed1c24] mb-6">
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.3 12C0.9425 12 0.636458 11.8694 0.381875 11.6083C0.127292 11.3472 0 11.0333 0 10.6667V0L1.08875 1.11667L2.16125 0L3.25 1.11667L4.33875 0L5.41125 1.11667L6.5 0L7.58875 1.11667L8.66125 0L9.75 1.11667L10.8387 0L11.9112 1.11667L13 0V10.6667C13 11.0333 12.8727 11.3472 12.6181 11.6083C12.3635 11.8694 12.0575 12 11.7 12H1.3ZM1.3 10.6667H5.85V6.66667H1.3V10.6667ZM7.15 10.6667H11.7V9.33333H7.15V10.6667ZM7.15 8H11.7V6.66667H7.15V8ZM1.3 5.33333H11.7V3.33333H1.3V5.33333Z" fill="currentColor"></path>
                    </svg>
                    Article
                </p>
                <h2 className="text-[2.2rem] md:text-[3rem] font-[450] leading-[1.2] text-[#4b4b4b] mb-6">
                    Elevating Project Results Begins With A Properly Prepared Construction Site
                </h2>
                <p className="text-[1.3rem] leading-[1.6] text-[#888888] mb-10">
                    Investing time in preparation before construction begins can save you money, minimize risks, and keep your project on track.
                </p>
                <Link href="#" className="inline-flex items-center text-[#4b4b4b] font-medium text-[1.1rem] hover:text-[#ed1c24] transition-colors group">
                    <span className="underline mr-2">Read More</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
            </div>

            {/* Image Content */}
            <div className="relative min-h-[300px] md:min-h-full order-1 md:order-2">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888086225-ee8018e4726b?q=80&w=2000&auto=format&fit=crop')" }}></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
