import React from 'react';

export default function CommunityInvolvementSection() {
  return (
    <section className="relative w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 md:order-1 relative pb-10">
                <div className="absolute right-0 top-10 w-[190px] h-[1px] bg-[#ed1c24] z-10 hidden md:block"></div>
                <img 
                    alt="Community Involvement 1" 
                    loading="lazy" 
                    className="w-[80%] md:w-full md:-ml-10 xl:-ml-32 shadow-lg" 
                    src="https://images.unsplash.com/photo-1593113565214-8cb6b8478479?q=80&w=1200&auto=format&fit=crop" 
                />
                <img 
                    alt="Community Involvement 2" 
                    loading="lazy" 
                    className="w-[70%] md:w-full absolute -bottom-10 right-0 md:-bottom-20 lg:-bottom-24 z-10 shadow-lg border-8 border-white" 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop" 
                />
            </div>
            
            <div className="order-1 md:order-2">
                <div className="space-y-6">
                    <h4 className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
                        Community Involvement
                    </h4>
                    <h2 className="text-[3.2rem] md:text-[4rem] font-[450] leading-[1.1] text-[#4b4b4b]">
                        Loyal to Local
                    </h2>
                    <p className="text-[1.2rem] leading-[1.6] text-[#4b4b4b] max-w-[600px]">
                        Here, <span className="relative inline-block"><span className="relative z-10 text-[#ed1c24]">“Community Involvement”</span><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span> isn’t a buzzword. It’s not just a check we write to a charity once a year. The J Davis team is deeply committed to building up the communities we live, work and play in, because the health and prosperity of our home is directly tied to the health and prosperity of our employees and their families.
                    </p>
                    <p className="text-[1.8rem] md:text-[2.2rem] font-[450] leading-[1.4] text-[#4b4b4b] pt-8">
                        Just as we prioritize each clients’ legacy as a <span className="relative inline-block"><span className="relative z-10 text-[#ed1c24]">community-builder</span><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span> first, we also prioritize our own neighborhoods, schools, causes and local governments through outreach, volunteering, charitable support and engaging events. Join us, and feel proud of the role you play in your community.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
