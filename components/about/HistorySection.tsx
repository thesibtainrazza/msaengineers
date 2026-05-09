import React from 'react';

export default function HistorySection() {
  return (
    <section className="relative w-full bg-[#f7f7f5] py-24 md:py-32" id="history">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20 text-center">
        <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
          History
        </h4>
        <h2 className="mb-10 text-[3.5rem] font-[450] leading-[1.1] tracking-[-0.04em] text-[#4b4b4b] md:text-[4.5rem]">
          A Strong Foundation
        </h2>
        <p className="mx-auto max-w-[800px] text-[1.6rem] font-light leading-[1.7] text-[#5f5f5f] mb-20">
          We may be building world-class community spaces today, but many remember J Davis as a handful of good friends who built their grandfather&apos;s barn—and that&apos;s just fine with us, because we&apos;re proud of our heritage, our hard work, and how far we&apos;ve come.
        </p>
        
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
          <div className="aspect-video w-full bg-gray-200 relative">
            <video 
              className="w-full h-full object-cover" 
              controls 
              preload="auto" 
              playsInline 
              poster="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
            >
            </video>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ed1c24] text-white transition-transform hover:scale-110 shadow-lg pointer-events-auto cursor-pointer">
                    <svg className="ml-2 h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
