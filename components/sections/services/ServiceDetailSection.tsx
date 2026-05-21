import React from 'react';

interface Props {
  service: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    listTitle: string;
    listItems: string[];
    conclusion: string;
    reverse?: boolean;
  };
  index: number;
}

export default function ServiceDetailSection({ service }: Props) {
  return (
    <section className="relative w-full bg-white py-24 md:py-32" id={service.id}>
      {/* Optional decorative background lines could go here based on the design system */}
      
      <div className="container-primary">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Content */}
          <div className={`flex flex-col ${service.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="mb-6 text-[3.5rem] font-[450] leading-[1.1] tracking-[-0.04em] text-text-dark md:text-[4.5rem]">
              {service.title}
            </h2>
            <p className="mb-6 text-[2rem] font-[450] leading-[1.3] text-text-dark">
              {service.subtitle}
            </p>
            {/* Split description safely if there's a specific highlighted word or just render it */}
            <p className="mb-10 text-[1.6rem] font-light leading-[1.7] text-text-muted">
               {service.description}
            </p>

            <div className="bg-bg-light p-10 md:p-12 rounded-xl mb-10">
                <h4 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.28em] text-primary">
                    {service.listTitle}
                </h4>
                <ul className="space-y-4">
                    {service.listItems.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="mr-4 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                            <span className="text-[1.6rem] font-light text-text-muted">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <p className="mb-10 text-[1.6rem] font-light leading-[1.7] text-text-muted">
                {service.conclusion}
            </p>

            <div>
                <a href="/contact" className="inline-flex items-center justify-center bg-white border border-primary rounded-full px-10 py-4 text-text-dark hover:bg-primary hover:text-white transition-colors group">
                    <span className="font-medium text-lg mr-2">Get Started</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
            </div>
          </div>

          {/* Image */}
          <div className={`relative w-full ${service.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            {/* Red decorative line */}
            <div className={`hidden lg:block absolute top-[10%] w-[40%] h-[2px] bg-primary z-20 ${service.reverse ? 'right-[-20%]' : 'left-[-20%]'}`}></div>
            
            <div className="relative aspect-[3/4] w-[90%] md:w-[80%] ml-auto overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{backgroundImage: `url('${service.image}')`}}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
