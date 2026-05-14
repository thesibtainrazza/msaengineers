"use client";
import React, { useState } from 'react';

const leaders = [
  {
    name: 'Mohammad Shahanawaz Attari',
    title: 'Owner/President',
    bio: "Many clients know him as the person who still prefers walking the site floor over sitting inside an office. Years of handling fabrication, erection, and industrial execution projects taught him that real engineering is not only about drawings — it is about solving problems under pressure without compromising quality. From coordinating manpower at difficult industrial sites to ensuring work moves even during tight shutdown deadlines, his leadership style is practical, disciplined, and deeply execution-focused. He believes trust is earned when commitments made during meetings are fulfilled on-site without excuses. Even as MSA continues to grow, he remains closely involved in project discussions, planning, and field execution — because for him, every completed structure carries the reputation of the company behind it.",
    image: '/assets/msa.jpg?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Nahid Akhtar',
    title: 'Chief Operations Officer',
    bio: "Known for maintaining calm during demanding project conditions, Alley plays a key role in keeping operations organized across fabrication, erection, and industrial execution works. Whether it is coordinating teams, handling site challenges, or managing execution timelines, his focus remains on keeping work moving efficiently and safely. Years of industrial exposure have given him a strong understanding of how projects succeed on the ground — not just on paper. Team members value his practical mindset, problem-solving approach, and ability to keep coordination strong even in high-pressure environments. For him, consistency matters more than noise — delivering dependable execution project after project is what truly builds long-term trust.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Pradhan Kumar',
    title: 'Director Client Services',
    bio: "On industrial sites, where timelines are tight and coordination between teams matters every hour, Ben is known for keeping execution disciplined and structured. From fabrication yard planning to final erection activities, he ensures that every stage moves with clarity and accountability. His strength lies in handling real on-ground challenges without slowing project momentum. Workers respect his hands-on approach, while clients value the confidence that comes from knowing execution is being monitored closely and responsibly. For him, the best projects are the ones completed safely, efficiently, and without unnecessary complications.",
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Faisal Raza',
    title: 'Head of Fabrication',
    bio: "Precision in fabrication is not achieved by chance — it comes from experience, supervision, and attention to detail. Rohit oversees fabrication activities with a strong focus on workmanship, structural accuracy, and production efficiency. Having spent years around industrial fabrication works, he understands the importance of maintaining quality before materials even reach the site. From raw steel handling to final assembly preparation, his approach ensures every component leaving the workshop reflects reliability and engineering discipline.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Aman Verma',
    title: 'Site Coordination Lead',
    bio: "Industrial projects often involve multiple teams, shifting schedules, and fast-moving execution environments. Aman specializes in keeping communication and coordination aligned between site teams, supervisors, and project management. Known for staying solution-oriented during demanding conditions, he plays an important role in reducing delays and ensuring smooth workflow across operations. His ability to manage responsibilities calmly under pressure has made him a dependable part of MSA’s execution process.",
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Vikash Singh',
    title: 'Safety & Quality Supervisor',
    bio: "For Vikash, quality and safety are not separate checkpoints — they are part of every stage of execution. From monitoring site practices to ensuring structural and fabrication standards are maintained, his role focuses on building reliability into daily operations. He works closely with teams on-site to maintain organized work environments, safe practices, and consistent quality checks throughout project execution. His mindset is simple: strong industrial work should never compromise on responsibility, precision, or worker safety.",
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop'
  }
];

export default function LeadershipSection() {
  const [current, setCurrent] = useState(0);
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
              The strength of MSA Engineers & Contractors is not built only through machinery, fabrication, or execution — it is built through people who understand responsibility on the ground. Our leadership stays closely connected to every project, ensuring decisions are practical, transparent, and execution-focused from planning to completion.
            </p>
          </div>

          {/* Right Column: Leader Profiles */}
        <div className="lg:col-span-2">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

    <div className="flex flex-col">

      <div className="aspect-[3/4] w-full overflow-hidden mb-6 bg-gray-100">

        <img
          src={leaders[current].image}
          alt={leaders[current].name}
          className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
        />

      </div>

      <h3 className="text-[2.4rem] font-[450] text-[#ed1c24]">
        {leaders[current].name}
      </h3>

      <p className="font-serif italic text-[#4b4b4b] text-[1.4rem] mt-1">
        {leaders[current].title}
      </p>

    </div>

    <div className="md:pt-4 flex flex-col justify-between h-full">

      <p className="text-[1rem] font-light leading-[1.7] text-[#5f5f5f]">
        {leaders[current].bio}
      </p>

      <div className="mt-16 flex items-center gap-8">

        <button
          onClick={() =>
            setCurrent((prev) =>
              prev === 0 ? leaders.length - 1 : prev - 1
            )
          }
          className="group"
        >

          <svg
            className="w-14 h-14 text-[#ed1c24] transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>

        </button>

        <div className="h-10 w-[1px] bg-[#d9d9d9]"></div>

        <button
          onClick={() =>
            setCurrent((prev) =>
              prev === leaders.length - 1 ? 0 : prev + 1
            )
          }
          className="group"
        >

          <svg
            className="w-14 h-14 text-[#ed1c24] transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>

        </button>

      </div>

    </div>

  </div>

</div>

        </div>
        
         <div className="mt-24 pt-20 border-t border-gray-200">

          <h2 className="text-[1.8rem] md:text-[2.6rem] font-[450] leading-[1.2] tracking-[-0.04em] text-[#4b4b4b] max-w-[82%]">

            Every decision at MSA Engineers & Contractors is driven by practical execution, long-term trust, and the responsibility that comes with industrial work. Our leadership keeps teams aligned, projects moving efficiently, and every structure built with the same{" "}

            <span className="bg-[#ed1c24] text-white px-2">
              discipline, precision,and commitment
            </span>

             that shaped the company from the beginning.

          </h2>

        </div>
      </div>
    </section>
  );
}
