import React from 'react';
import Link from 'next/link';

export default function BlogGridSection() {
  const posts = [
    {
      id: 1,
      type: "Article",
      title: "Elevating Project Results Begins With A Properly Prepared Construction Site",
      image: "https://images.unsplash.com/photo-1541888086225-ee8018e4726b?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      type: "Article",
      title: "Four Key Components That Affect Project Delivery",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative w-full bg-white pb-24 md:pb-32 overflow-hidden">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20 relative">
        <div className="absolute right-0 top-0 w-px h-full bg-[#e5e5e5] hidden lg:block"></div>
        <div className="absolute right-[33%] top-0 w-px h-full bg-[#e5e5e5] hidden lg:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 relative z-10 pt-12 md:pt-20">
          {posts.map((post) => (
            <Link key={post.id} href="#" className="group block">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: `url('${post.image}')` }}
                ></div>
              </div>
              
              <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-[#ed1c24] mb-3">
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.3 12C0.9425 12 0.636458 11.8694 0.381875 11.6083C0.127292 11.3472 0 11.0333 0 10.6667V0L1.08875 1.11667L2.16125 0L3.25 1.11667L4.33875 0L5.41125 1.11667L6.5 0L7.58875 1.11667L8.66125 0L9.75 1.11667L10.8387 0L11.9112 1.11667L13 0V10.6667C13 11.0333 12.8727 11.3472 12.6181 11.6083C12.3635 11.8694 12.0575 12 11.7 12H1.3ZM1.3 10.6667H5.85V6.66667H1.3V10.6667ZM7.15 10.6667H11.7V9.33333H7.15V10.6667ZM7.15 8H11.7V6.66667H7.15V8ZM1.3 5.33333H11.7V3.33333H1.3V5.33333Z" fill="currentColor"></path>
                  </svg>
                  {post.type}
              </p>
              
              <h3 className="text-[1.8rem] font-[450] leading-[1.3] text-[#4b4b4b] group-hover:text-[#ed1c24] transition-colors duration-300">
                  {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
