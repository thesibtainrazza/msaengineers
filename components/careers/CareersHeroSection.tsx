import React from 'react';

export default function CareersHeroSection() {
  return (
    <section className="relative w-full bg-[#f7f7f5] pt-36 pb-20 md:pt-48 overflow-hidden">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
                <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
                    Life at JDavis
                </h4>
                <h1 className="text-[4.2rem] font-[450] leading-[0.98] tracking-[-0.06em] text-[#4b4b4b] md:text-[5.4rem] lg:text-[5.8rem]">
                    Careers
                </h1>
            </div>

            <div className="lg:pt-20 lg:pl-16">
                <p className="text-[1.8rem] md:text-[2.2rem] font-[450] leading-[1.4] text-[#4b4b4b]">
                    When we say that our team members are like family to us, people believe it. After all, you see it in our priorities: <span className="relative inline-block"><span className="relative z-10 text-[#ed1c24]">Growth without traveling</span><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span>. Dedicated downtime. A rich culture that celebrates the individual and their family. Heads in their own beds. Low employee turnover.
                </p>
            </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#e5e5e5] mb-16 max-w-[1450px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20"></div>

      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20 mb-20">
          <p className="text-[2.2rem] md:text-[2.8rem] font-[450] leading-[1.3] text-[#4b4b4b] max-w-[80%] mb-12">
              We are proud to have some of the <span className="relative inline-block"><span className="relative z-10 text-[#ed1c24]">best and brightest</span><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span> construction professionals on our team—people who chose us over others because we believe in applying our principles beyond our projects and into the lives of others.
          </p>
          <a href="https://recruitingbypaycor.com/career/CareerHome.action?clientId=8a7883c6929721830192bb774eb707d5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-[1.2rem] font-medium text-[#4b4b4b] transition-all duration-300 border border-[#ed1c24] rounded-full hover:bg-[#ed1c24] hover:text-white">
            <span className="mr-3">See open positions</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
              <path d="M0 8.25H12.127L6.43075 13.9463L7.5 15L15 7.5L7.5 0L6.43075 1.05375L12.127 6.75H0V8.25Z" fill="currentColor"></path>
            </svg>
          </a>
      </div>

      <div className="relative w-full aspect-[21/9] md:aspect-[3/1]">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1541888086225-ee8018e4726b?q=80&w=2000&auto=format&fit=crop')"}}></div>
      </div>
    </section>
  );
}
