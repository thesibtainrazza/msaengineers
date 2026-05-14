import React from 'react';

export default function CommunitySection() {
  return (
    <section className="relative w-full bg-white py-24 md:py-32" id="community">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
                <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
                    Community
                </h4>
                <h2 className="mb-8 text-[3.5rem] font-[450] leading-[1.1] tracking-[-0.04em] text-[#4b4b4b] md:text-[4.5rem]">
                    Hiring from and investing in <span className="relative inline-block"><span className="relative z-10">our communities</span><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span>
                </h2>
                <p className="text-[1.6rem] font-light leading-[1.7] text-[#5f5f5f]">
                    When you live, work and play in the same communities as your customers, it matters that you invest in your neighbors and the economy with intention.
                </p>
            </div>
            <div className="lg:pt-24">
                <p className="text-[2.2rem] md:text-[2.8rem] font-[450] leading-[1.3] text-[#4b4b4b]">
                    J Davis believes in doing more than <span className="relative inline-block"><span className="relative z-10">giving back:</span><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span> We create educational opportunities for the next generation. We provide free meeting spaces for community events. We hire locally, listen to the locals, and leave every location we build in better than before in every way possible.
                </p>
            </div>
        </div>

        <div className="mb-20">
            <p className="text-[1.6rem] font-light text-[#5f5f5f] mb-8">Follow us on social media to see how we stay involved on a local level all year long.</p>
            <div className="flex flex-wrap gap-6">
                <a href="#" className="flex items-center rounded-full border border-[#ed1c24] px-8 py-4 text-[1.4rem] font-medium text-[#4b4b4b] transition-colors hover:bg-[#ed1c24] hover:text-white">
                    Facebook
                </a>
                <a href="#" className="flex items-center rounded-full border border-[#ed1c24] px-8 py-4 text-[1.4rem] font-medium text-[#4b4b4b] transition-colors hover:bg-[#ed1c24] hover:text-white">
                    LinkedIn
                </a>
                <a href="#" className="flex items-center rounded-full border border-[#ed1c24] px-8 py-4 text-[1.4rem] font-medium text-[#4b4b4b] transition-colors hover:bg-[#ed1c24] hover:text-white">
                    Instagram
                </a>
            </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col">
                <div className="aspect-[4/3] overflow-hidden mb-6 bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1541888086225-ee8018e4726b?q=80&w=1200&auto=format&fit=crop" alt="Construction team" className="w-full h-full object-cover" />
                </div>
                <div className="pl-8 border-l border-[#ed1c24]">
                    <p className="font-serif italic text-[#ed1c24] text-[1.4rem]">
                        The aftermath of an EF3 tornado, J. Davis was one of first GC&apos;s to help the recovery and rebuild efforts.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:pt-32">
                <div className="aspect-[4/3] overflow-hidden mb-6 bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop" alt="Clemson students" className="w-full h-full object-cover" />
                </div>
                <div className="pl-8 border-l border-[#ed1c24]">
                    <p className="font-serif italic text-[#ed1c24] text-[1.4rem]">
                        J. Davis helped out Clemson students and the Habitat for Humanity for their Annual Homecoming Build.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
