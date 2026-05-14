import React from 'react';

export default function EducationInternshipsSection() {
  return (
    <section className="relative w-full bg-[#f7f7f5] py-20 md:py-32">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="lg:pr-8">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24] mb-6">
                Education & Internships
            </h4>
            <h2 className="text-[3.2rem] md:text-[4rem] font-[450] leading-[1.1] text-[#4b4b4b] mb-8">
                The Next Generation
            </h2>
            <div className="space-y-6 text-[1.2rem] leading-[1.6] text-[#4b4b4b]">
                <p>
                    Here, a student’s time is just as valuable as our CEO’s. J Davis believes in empowering students and emerging construction industry professionals by offering them the <span className="relative inline-block"><span className="relative z-10 text-[#ed1c24]">highest-quality experience</span><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span> possible, whether it’s in a classroom, on the ground as one of our interns, or in a lecture hall at one of our partner schools like Clemson University.
                </p>
                <p>
                    Currently, J Davis is seeking interns excited to experience what working in construction is like. We are currently linked up with Clemson University’s Construction Science Management program and heavily involved in the Citadel’s Career Fair.
                </p>
                <p className="font-semibold text-[1.3rem]">
                    Interested in interning? <a href="mailto:recruiting@jdavisinc.com" rel="noopener noreferrer" className="text-[#ed1c24] hover:text-[#4b4b4b] underline transition-colors duration-300">Email us</a>
                </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute left-[-100px] top-10 w-[190px] h-[1px] bg-[#ed1c24] z-10 hidden lg:block"></div>
            <img 
                alt="Kids in front of a teacher" 
                loading="lazy" 
                className="w-full block max-w-[600px] shadow-lg rounded-sm" 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
