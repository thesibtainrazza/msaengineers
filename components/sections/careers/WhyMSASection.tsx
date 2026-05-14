import React from 'react';
import Link from 'next/link';

export default function WhyMSASection() {
  return (
    <section className="relative w-full bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full h-px bg-[#e5e5e5] mb-24 hidden md:block"></div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-24">
          <div className="md:col-span-3">
            <h2 className="text-[3.2rem] md:text-[4rem] font-[450] leading-[1.1] text-[#4b4b4b] mb-6">
                Why MSA Engineers & Contractors?
            </h2>
            <p className="mb-16">
                <Link href="/about" className="inline-flex items-center gap-2 text-[1.1rem] font-semibold text-[#4b4b4b] transition-all duration-300 hover:text-[#ed1c24] hover:translate-x-1 group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#ed1c24]">
                        <path d="M11.5 15.1443L15.1443 11.5L11.5 7.85575L10.4558 8.9L12.3057 10.75H7.75V12.25H12.3057L10.4558 14.1L11.5 15.1443ZM11.5017 21C10.1877 21 8.95267 20.7507 7.7965 20.252C6.64033 19.7533 5.63467 19.0766 4.7795 18.2218C3.92433 17.3669 3.24725 16.3617 2.74825 15.206C2.24942 14.0503 2 12.8156 2 11.5017C2 10.1877 2.24933 8.95267 2.748 7.7965C3.24667 6.64033 3.92342 5.63467 4.77825 4.7795C5.63308 3.92433 6.63833 3.24725 7.794 2.74825C8.94967 2.24942 10.1844 2 11.4983 2C12.8123 2 14.0473 2.24933 15.2035 2.748C16.3597 3.24667 17.3653 3.92342 18.2205 4.77825C19.0757 5.63308 19.7528 6.63833 20.2518 7.794C20.7506 8.94967 21 10.1844 21 11.4983C21 12.8123 20.7507 14.0473 20.252 15.2035C19.7533 16.3597 19.0766 17.3653 18.2218 18.2205C17.3669 19.0757 16.3617 19.7528 15.206 20.2518C14.0503 20.7506 12.8156 21 11.5017 21ZM11.5 19.5C13.7333 19.5 15.625 18.725 17.175 17.175C18.725 15.625 19.5 13.7333 19.5 11.5C19.5 9.26667 18.725 7.375 17.175 5.825C15.625 4.275 13.7333 3.5 11.5 3.5C9.26667 3.5 7.375 4.275 5.825 5.825C4.275 7.375 3.5 9.26667 3.5 11.5C3.5 13.7333 4.275 15.625 5.825 17.175C7.375 18.725 9.26667 19.5 11.5 19.5Z" fill="currentColor"></path>
                    </svg>
                    About Us
                </Link>
            </p>

            <p className="mb-4 text-[1.2rem] font-semibold text-[#4b4b4b]">Awards</p>
            <div className="flex flex-wrap md:flex-nowrap items-center gap-6 mb-16">
              <div className="w-full max-w-[180px] h-[80px] bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-500 rounded-sm border border-gray-200">Award 1</div>
              <div className="w-full max-w-[180px] h-[80px] bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-500 rounded-sm border border-gray-200">Award 2</div>
              <div className="w-full max-w-[180px] h-[80px] bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-500 rounded-sm border border-gray-200">Award 3</div>
              <div className="w-full max-w-[180px] h-[80px] bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-500 rounded-sm border border-gray-200">Award 4</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="text-[1.3rem] font-semibold text-[#4b4b4b]">No Travel Required</p>
                <ul className="list-disc pl-5 space-y-3 mt-4 text-[1.1rem] text-[#4b4b4b] marker:text-[#ed1c24]">
                  <li>Focused on the local markets of SC, NC, and GA</li>
                  <li>We hire labor locally so you can sleep in your bed at night</li>
                  <li>New MSA Engineers locations will cover their own region rather than company growth sacrificing employee quality of life at home</li>
                </ul>
              </div>
              <div>
                <p className="text-[1.3rem] font-semibold text-[#4b4b4b]">Career Growth</p>
                <ul className="list-disc pl-5 space-y-3 mt-4 text-[1.1rem] text-[#4b4b4b] marker:text-[#ed1c24]">
                  <li>We offer above-average competitive pay</li>
                  <li>The only <strong>Superintendent Sabbatical Program</strong> you’ll find!</li>
                  <li>We invest in professional development and training for our team</li>
                </ul>
              </div>
            </div>

            <div className="py-4 mt-8 md:mt-0">
                <p className="text-[1.6rem] font-semibold text-[#4b4b4b] mb-8">Convenient Locations</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <p className="text-[1.2rem] font-semibold text-[#4b4b4b]">Electric City</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-[1.1rem] text-[#4b4b4b] marker:text-[#ed1c24]">
                      <li>Off exit 14 on the I-85 Corridor</li>
                      <li>2 hours to Charlotte and Atlanta</li>
                      <li>30 minutes from Greenville, SC</li>
                      <li>15 minutes from Clemson University</li>
                      <li>Top 10 school district in South Carolina</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[1.2rem] font-semibold text-[#4b4b4b]">Holy City</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-[1.1rem] text-[#4b4b4b] marker:text-[#ed1c24]">
                      <li>Conveniently located off I-526</li>
                      <li>Minutes away from Downtown Charleston</li>
                      <li>Less than 5 miles to Charleston International Airport</li>
                      <li>A short drive to Charleston Beaches</li>
                      <li>Top 10 school district in South Carolina</li>
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-[1.2rem] font-semibold text-[#4b4b4b]">Sparkle City Coming Soon</p>
                  </div>
                </div>
            </div>
          </div>

          <div className="md:col-span-2 md:pl-16 lg:pl-32 space-y-16 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#e5e5e5] pt-12 md:pt-0 mt-8 md:mt-0">
            <div>
              <span className="block text-[4.5rem] md:text-[6rem] font-[450] leading-[1] text-[#ed1c24] mb-2">90%</span>
              <p className="text-[1.4rem] font-semibold text-[#4b4b4b] mb-3">Retention Rate</p>
              <p className="text-[0.9rem] font-semibold uppercase tracking-[0.2em] text-[#888888] max-w-[200px]">More than 90% retention rate over the last five years</p>
            </div>
            <div>
              <span className="block text-[4.5rem] md:text-[6rem] font-[450] leading-[1] text-[#ed1c24] mb-2">0</span>
              <p className="text-[1.4rem] font-semibold text-[#4b4b4b]">Nights in Hotels</p>
            </div>
            <div>
              <span className="block text-[4.5rem] md:text-[6rem] font-[450] leading-[1] text-[#ed1c24] mb-2">90</span>
              <p className="text-[1.4rem] font-semibold text-[#4b4b4b]">Minute Work Radius</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
