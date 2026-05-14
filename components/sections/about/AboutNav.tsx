"use client";

import React, { useState } from 'react';

export default function AboutNav() {
  const [activeTab, setActiveTab] = useState('About Us');

  const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'History', href: '#history' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Awards', href: '#awards' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <div className="sticky top-0 z-40 w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] hidden md:block">
      <div className="mx-auto flex max-w-[1450px] items-center justify-center px-8">
        <ul className="flex items-center space-x-12 lg:space-x-16">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`relative inline-block py-6 text-[1.1rem] font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  activeTab === item.label
                    ? 'text-[#ed1c24]'
                    : 'text-[#4b4b4b] hover:text-[#ed1c24]'
                }`}
                onClick={() => setActiveTab(item.label)}
              >
                {item.label}
                {activeTab === item.label && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ed1c24]" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
