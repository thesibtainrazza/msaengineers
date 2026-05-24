import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border-light bg-bg-light px-6 md:px-10 lg:px-12 pt-16 pb-8">
      <div className="mx-auto max-w-[1400px]">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          {/* Left Column */}
          <div className="lg:col-span-4">
            {/* Image */}
            <div className="mb-6 h-[180px] w-full max-w-[300px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Rajgangpur,Odisha&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact */}
            <div className="space-y-1 text-[1.1rem] leading-[1.55] tracking-[-0.02em] text-[#4a4a4a]">
              <p>Phone: {siteConfig.phones.primary}</p>
              <p>Support: {siteConfig.phones.support}</p>
              <p className="pt-1 font-medium text-primary">
                {siteConfig.emails.support}
              </p>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col space-y-4 pt-2 text-[1.15rem] font-normal tracking-[-0.02em] text-[#4a4a4a] lg:col-span-3 lg:pt-10">
            {[
              { label: 'Projects', href: '/projects' },
              { label: 'Shed Structures', href: '/services#shed-structures' },
              { label: 'Fabrication Works', href: '/services#fabrication-works' },
              { label: 'Industrial Erection', href: '/services#industrial-erection' },
              { label: 'Conveyor Systems', href: '/services#conveyor-systems' },
              { label: 'Equipment Rental', href: '/services#equipment-rental' }
            ].map((link) => (
              <Link key={link.label} href={link.href} className="group relative w-fit transition-colors duration-200 hover:text-primary">
                {link.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col space-y-4 pt-2 text-[1.15rem] font-normal tracking-[-0.02em] text-[#4a4a4a] lg:col-span-2 lg:pt-10">
             {[
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Blog', href: '/blog' },
              { label: 'Careers', href: '/careers' },
              { label: 'Contact', href: '/contact' }
            ].map((link) => (
              <Link key={link.label} href={link.href} className="group relative w-fit transition-colors duration-200 hover:text-primary">
                {link.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col space-y-4 pt-2 text-[1.15rem] font-normal tracking-[-0.02em] text-[#4a4a4a] lg:col-span-3 lg:pt-10">
             {[
              { label: 'Facebook', href: siteConfig.socials.facebook },
              { label: 'LinkedIn', href: siteConfig.socials.linkedin },
              { label: 'Instagram', href: siteConfig.socials.instagram },
              { label: 'YouTube', href: siteConfig.socials.youtube }
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="group relative w-fit transition-colors duration-200 hover:text-primary">
                {link.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className="mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {Object.entries(siteConfig.addresses).map(([key, addressObj]) => (
            <div key={key}>
              <h4 className="mb-2 text-[1.05rem] font-medium tracking-[-0.02em] text-primary">
                {addressObj.title}
              </h4>
              <p className="text-[0.95rem] leading-[1.7] text-[#6d6d6d] whitespace-pre-line">
                {addressObj.address.replace(/, /g, '\n')}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col items-start justify-between gap-y-4 border-t border-border-light pt-6 text-[0.9rem] tracking-[-0.01em] text-[#7a7a7a] md:flex-row md:items-center">
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-8">
            <p>{siteConfig.copyright}</p>
            <Link href="/privacy-policy" className="group relative w-fit transition-colors duration-200 hover:text-[#4a4a4a]">
              Privacy Policy
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}