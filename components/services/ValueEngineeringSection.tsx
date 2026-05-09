import React from 'react';

export default function ValueEngineeringSection() {
  return (
    <section className="relative w-full bg-[#f7f7f5] py-24 md:py-32 overflow-hidden" id="value-engineering">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="flex flex-col">
                <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
                    Value Engineering Philosophy
                </h4>
                <h2 className="mb-8 text-[3.5rem] font-[450] leading-[1.1] tracking-[-0.04em] text-[#4b4b4b] md:text-[4.5rem]">
                    Value Engineering <span className="text-[#ed1c24]">≠</span> Scope Cutting
                </h2>
                
                <p className="mb-8 text-[1.6rem] font-light leading-[1.7] text-[#5f5f5f]">
                    At J Davis, we put the VALUE back in Value Engineering! VE, a buzzword in our industry, is too often used by contractors to justify cutting scope or including inferior products to achieve budget. Our preconstruction process, artfully hones in on the overall worth of each part, piece, and design decision made. We are on a constant mission to make sure that every dollar spent in your construction project has the maximum value squeezed out of it. Our track record of delivering project goals within budget speaks for itself, just ask our clients.
                </p>

                <p className="text-[2.2rem] md:text-[2.6rem] font-[450] leading-[1.3] text-[#4b4b4b]">
                    We join the customer&apos;s journey, take on their goals, guide them through the design phase and deliver a building that will best <span className="relative inline-block"><span className="relative z-10">accomplish those goals.</span><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span>
                </p>
            </div>

            <div className="relative w-full mt-16 lg:mt-0">
                <div className="relative aspect-[4/3] w-[80%] md:w-[70%] ml-auto overflow-hidden shadow-2xl z-10">
                    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop')"}}></div>
                </div>
                <div className="absolute -bottom-16 -left-8 md:-bottom-24 md:-left-16 aspect-[4/3] w-[70%] overflow-hidden shadow-2xl z-20 border-8 border-[#f7f7f5]">
                    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1541888086225-ee8018e4726b?q=80&w=1200&auto=format&fit=crop')"}}></div>
                </div>
            </div>

        </div>

      </div>

      {/* Testimonial */}
      <div className="mt-32 w-full bg-black py-24 md:py-32 px-8">
          <div className="mx-auto max-w-[1200px] text-center">
              <p className="text-[2.4rem] md:text-[3.2rem] font-[450] leading-[1.4] text-[#ed1c24] mb-12">
                  &quot;What you can expect from J. Davis is a streamlined, honest process built upon open communication and thorough market/industry knowledge that dramatically simplifies the construction process.&quot;
              </p>
              <div className="text-white">
                  <p className="text-[1.8rem] font-semibold mb-2">Phillip Addington</p>
                  <p className="text-[1.4rem] font-light text-gray-400">Clemson University, Project Manager</p>
              </div>
          </div>
      </div>
    </section>
  );
}
