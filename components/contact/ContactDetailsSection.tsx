import React from 'react';

export default function ContactDetailsSection() {
  const locations = [
    {
      city: "Anderson, SC",
      address: "109 Nunnally Rd.",
      addressLine2: "Anderson, SC 29625",
      link: "https://g.co/kgs/2FdEy4d"
    },
    {
      city: "Charleston, SC",
      address: "4465 Tile Dr. Suite 105",
      addressLine2: "North Charleston, SC 29405",
      link: "https://maps.app.goo.gl/a4ssR1orBumak92HA"
    },
    {
      city: "Spartanburg, SC",
      address: "104 N. Daniel Morgan Ave. #220",
      addressLine2: "Spartanburg, SC 29306",
      link: "https://www.google.com/maps/place/104+N+Daniel+Morgan+Ave,+Spartanburg,+SC+29306"
    },
    {
      city: "Westminster, SC",
      address: "12245 SC-11",
      addressLine2: "Westminster, SC 29693",
      link: "https://maps.app.goo.gl/5hMEJQtpfizD1Heu5"
    }
  ];

  return (
    <section className="relative w-full bg-[#f8f8f8] py-20 md:py-32">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
            
            {/* Phone Numbers */}
            <div className="md:col-span-1 space-y-12">
                <div>
                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24] mb-4">
                        Call Us
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <p className="text-[1.2rem] font-semibold text-[#4b4b4b] mb-1">Upstate Region</p>
                            <a href="tel:8649724720" className="text-[1.5rem] text-[#4b4b4b] hover:text-[#ed1c24] transition-colors">(864) 972-4720</a>
                        </div>
                        <div>
                            <p className="text-[1.2rem] font-semibold text-[#4b4b4b] mb-1">Coastal Region</p>
                            <a href="tel:8548003222" className="text-[1.5rem] text-[#4b4b4b] hover:text-[#ed1c24] transition-colors">(854) 800-3222</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Addresses */}
            <div className="md:col-span-3">
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#ed1c24] mb-8">
                    Find Us
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {locations.map((loc, index) => (
                        <div key={index} className="group">
                            <a href={loc.link} target="_blank" rel="noopener noreferrer" className="block">
                                <h4 className="text-[1.3rem] font-semibold text-[#4b4b4b] mb-3 group-hover:text-[#ed1c24] transition-colors">
                                    {loc.city}
                                </h4>
                                <p className="text-[1.1rem] text-[#888888] leading-[1.5]">
                                    {loc.address}<br />
                                    {loc.addressLine2}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
