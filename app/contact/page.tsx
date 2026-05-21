 
import React from 'react';
import ContactHeroSection from '@/components/sections/contact/ContactHeroSection';
import ContactDetailsSection from '@/components/sections/contact/ContactDetailsSection';
import ContactMapSection from '@/components/sections/contact/ContactMapSection';

export const metadata = {
  title: 'Contact | MSA Engineer & Contractors',
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactDetailsSection />
      <ContactMapSection />
    </>
  );
}
