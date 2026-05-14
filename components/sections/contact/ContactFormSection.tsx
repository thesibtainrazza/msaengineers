import React from 'react';
import Link from 'next/link';

export default function ContactFormSection() {
  return (
    <section className="relative w-full bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1450px] px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Form Column */}
          <div>
            <h2 className="text-[2.5rem] font-[450] text-[#4b4b4b] mb-10">Start a project with us</h2>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#4b4b4b] mb-2">First Name*</label>
                        <input type="text" id="firstName" required className="w-full bg-[#f8f8f8] border border-[#e5e5e5] px-4 py-3 rounded-md focus:outline-none focus:border-[#ed1c24] focus:ring-1 focus:ring-[#ed1c24] transition-colors" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-[#4b4b4b] mb-2">Last Name*</label>
                        <input type="text" id="lastName" required className="w-full bg-[#f8f8f8] border border-[#e5e5e5] px-4 py-3 rounded-md focus:outline-none focus:border-[#ed1c24] focus:ring-1 focus:ring-[#ed1c24] transition-colors" />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4b4b4b] mb-2">Email*</label>
                    <input type="email" id="email" required className="w-full bg-[#f8f8f8] border border-[#e5e5e5] px-4 py-3 rounded-md focus:outline-none focus:border-[#ed1c24] focus:ring-1 focus:ring-[#ed1c24] transition-colors" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#4b4b4b] mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-[#f8f8f8] border border-[#e5e5e5] px-4 py-3 rounded-md focus:outline-none focus:border-[#ed1c24] focus:ring-1 focus:ring-[#ed1c24] transition-colors" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#4b4b4b] mb-2">Message*</label>
                    <textarea id="message" rows={5} required className="w-full bg-[#f8f8f8] border border-[#e5e5e5] px-4 py-3 rounded-md focus:outline-none focus:border-[#ed1c24] focus:ring-1 focus:ring-[#ed1c24] transition-colors"></textarea>
                </div>
                
                <div className="flex items-start pt-2">
                    <div className="flex items-center h-5">
                        <input id="consent" type="checkbox" className="w-4 h-4 text-[#ed1c24] bg-white border-gray-300 rounded focus:ring-[#ed1c24]" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="consent" className="font-medium text-gray-600">I agree to receive communications from MSA Engineers & Contractors.</label>
                    </div>
                </div>

                <div className="pt-4">
                    <button type="submit" className="inline-flex items-center justify-center px-10 py-4 text-[1.1rem] font-medium text-white bg-[#ed1c24] transition-all duration-300 border border-[#ed1c24] rounded-full hover:bg-[#c8161e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ed1c24]">
                        Send Message
                    </button>
                </div>
            </form>
          </div>

          {/* Info Blocks Column */}
          <div className="space-y-8 lg:pl-12">
            {/* Contact */}
            <div className="border border-[#e5e5e5] p-8 md:p-10 rounded-xl relative overflow-hidden group hover:border-[#ed1c24] transition-colors duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#ed1c24]"></div>
                <h3 className="text-[1.8rem] font-medium text-[#4b4b4b] mb-4">Contact</h3>
                <p className="text-[1.1rem] text-[#888888] mb-8">Reach out directly to our team.</p>
                <a href="mailto:info@jdavisgc.com" className="inline-flex items-center text-[#ed1c24] font-semibold uppercase tracking-wider text-sm group-hover:underline">
                    Email Us
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>

            {/* Careers */}
            <div className="border border-[#e5e5e5] p-8 md:p-10 rounded-xl relative overflow-hidden group hover:border-[#ed1c24] transition-colors duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#ed1c24]"></div>
                <h3 className="text-[1.8rem] font-medium text-[#4b4b4b] mb-4">Careers</h3>
                <p className="text-[1.1rem] text-[#888888] mb-8">Join the JDavis family.</p>
                <Link href="/careers" className="inline-flex items-center text-[#ed1c24] font-semibold uppercase tracking-wider text-sm group-hover:underline">
                    Learn More
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>

            {/* Subcontractors */}
            <div className="border border-[#e5e5e5] p-8 md:p-10 rounded-xl relative overflow-hidden group hover:border-[#ed1c24] transition-colors duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#ed1c24]"></div>
                <h3 className="text-[1.8rem] font-medium text-[#4b4b4b] mb-4">Subcontractors</h3>
                <p className="text-[1.1rem] text-[#888888] mb-8">Partner with us on upcoming projects.</p>
                <a href="https://jdavisgc.com/subcontractor/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#ed1c24] font-semibold uppercase tracking-wider text-sm group-hover:underline">
                    Prequalify Here
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
