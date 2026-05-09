/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactHeroSection from '@/components/contact/ContactHeroSection';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactDetailsSection from '@/components/contact/ContactDetailsSection';
import ContactMapSection from '@/components/contact/ContactMapSection';

export const metadata = {
  title: 'Contact | JDavis Construction',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ContactHeroSection />
        <ContactFormSection />
        <ContactDetailsSection />
        <ContactMapSection />
      </main>
      <Footer />
    </div>
  );
}
