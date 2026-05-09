import React from 'react';

const leaders = [
  {
    name: 'Joel Davis',
    title: 'Owner/President',
    bio: "A self-made man in every respect, Joel Davis leads J. Davis Construction by example. From humble roots as a local fence and barn contractor, he has grown J. Davis into one of the fastest growing general contractors in South Carolina. While never sacrificing his principles for profit, Joel strives to make every aspect of J. Davis Construction align with our mission of changing lives with our God-given talents. He's as comfortable in the barn as he is in a board room, and he's never met a stranger. He's a Church leader, a community builder, an avid outdoorsman, and a dedicated family man. Joel settles for nothing less than greatness and his infectious personality keep J. Davis looking for the next challenge. We could list all the boards and community service initiatives he's involved in, but he'd rather you know what he's really proud of: The 150+ J. Davis employees who call this company home and carry out the vision every day.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Alley Linder',
    title: 'Chief Operations Officer',
    bio: "Alley Linder is the hardest working man in the business. A 20-year professional, and having been a part of some of the most iconic projects in the area, his guidance allows J. Davis to run like a well-oiled machine. He serves his community by providing leadership on the board of non-profits and local government committees. And on the weekends you can find him being a Super Dad to his three kids or behind the scenes of a local theater production.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Ben Weeks',
    title: 'Director Client Services',
    bio: "Ben's first question to his clients is 'What does your project look like if we get this EXACTLY right?' And from that point on, he leaves no stone unturned to make sure that happens. Ben's worn a lot of hats at J. Davis over the last 18 years helping guide clients through the preconstruction process with ease and transparency. A life-long Clemson Tiger, you'll often find Ben guest lecturing in a construction science class or mentoring students though service organizations. Outside of the office he'll either be at the lake, over the grill, or cracking jokes, surrounded by friends and family.",
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop'
  }
];

export default function LeadershipSection() {
  return (
    <section className="relative w-full bg-white py-24 md:py-32" id="leadership">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          
          {/* Left Column: Title & Intro */}
          <div className="lg:col-span-1 lg:pr-12">
            <h2 className="text-[3.5rem] font-[450] leading-[1.1] tracking-[-0.04em] text-[#4b4b4b] md:text-[4.5rem]">
              Our <span className="relative inline-block">
                  <span className="relative z-10">Leadership</span>
                  <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span>
              </span>
            </h2>
            <p className="mt-8 text-[1.6rem] font-light leading-[1.7] text-[#5f5f5f]">
              Our clients trust J Davis Construction for many reasons; direct access to exceptional, rock-solid leadership and the security and accountability it inspires is just one of them.
            </p>
          </div>

          {/* Right Column: Leader Profiles */}
          <div className="lg:col-span-2 flex flex-col gap-24">
            {leaders.map((leader, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                <div className="flex flex-col">
                  <div className="aspect-[3/4] w-full overflow-hidden mb-6 bg-gray-100">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0" />
                  </div>
                  <h3 className="text-[2.4rem] font-[450] text-[#ed1c24]">{leader.name}</h3>
                  <p className="font-serif italic text-[#4b4b4b] text-[1.4rem] mt-1">{leader.title}</p>
                </div>
                <div className="md:pt-4">
                  <p className="text-[1.5rem] font-light leading-[1.7] text-[#5f5f5f]">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
        
        <div className="mt-24 pt-20 border-t border-gray-200">
            <h2 className="text-[2.8rem] md:text-[3.6rem] font-[450] leading-[1.2] text-[#4b4b4b] max-w-[80%]">
                Aligning every decision with our mission statement, those at the helm of J Davis keep our team inspired, our work <span className="relative inline-block"><span className="relative z-10">best-in-class</span><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ed1c24]/20"></span></span>, and our growth both sustainable and smart.
            </h2>
        </div>
      </div>
    </section>
  );
}
