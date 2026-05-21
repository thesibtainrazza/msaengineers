/* eslint-disable react/no-unescaped-entities */
import React from 'react';

// Modular Components
import ServicesHeroSection from '@/components/sections/services/ServicesHeroSection';
import ServiceDetailSection from '@/components/sections/services/ServiceDetailSection';
import ValueEngineeringSection from '@/components/sections/services/ValueEngineeringSection';

export const metadata = {
  title: 'Services | MSA Engineer & Contractors',
};
export const services = [
  {
    id: "shed-structures",
    title: "Shed Structures",
    subtitle:
      "Industrial shed solutions engineered for strength, scale, and long-term durability.",

    description:
      "MSA delivers industrial shed structures designed to perform in demanding environments. From fabrication planning to on-site erection, our team focuses on structural stability, execution efficiency, and reliable delivery timelines for industrial and manufacturing operations.",

    image:
      "https://images.unsplash.com/photo-1662120399978-738d233edbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop",

    listTitle: "OUR CAPABILITIES",

    listItems: [
      "Pre-engineered industrial shed structures",
      "Factory and warehouse shed execution",
      "Heavy structural steel installation",
      "Industrial roofing and cladding systems",
      "On-site erection and alignment works",
    ],

    conclusion:
      "Every shed structure is executed with a focus on safety, durability, and practical industrial functionality — ensuring dependable performance for years ahead.",
  },

  {
    id: "fabrication-works",
    title: "Fabrication Works",

    subtitle:
      "Precision fabrication built for industrial-scale operations and execution reliability.",

    description:
      "Our fabrication works combine technical accuracy with real-world industrial experience. MSA handles structural steel fabrication, custom assemblies, and heavy industrial components with disciplined quality control and execution-focused planning.",

    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",

    listTitle: "FABRICATION SERVICES",

    listItems: [
      "Structural steel fabrication",
      "Custom industrial assemblies",
      "Heavy-duty support structures",
      "Industrial platforms and frames",
      "Workshop and site fabrication support",
    ],

    conclusion:
      "Our fabrication process prioritizes dimensional accuracy, structural integrity, and seamless coordination with site execution requirements.",

    reverse: true,
  },

  {
    id: "industrial-erection",
    title: "Industrial Erection",

    subtitle:
      "Field execution backed by experienced manpower and disciplined coordination.",

    description:
      "MSA manages industrial erection projects with a strong focus on execution planning, safety compliance, and efficient on-site coordination. From structural installation to shutdown support, we ensure industrial works progress smoothly under demanding site conditions.",

    image:
      "https://images.unsplash.com/photo-1746003870946-c29679f31d3e?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop",

    listTitle: "ERECTION SERVICES",

    listItems: [
      "Heavy structural erection",
      "Industrial shutdown assistance",
      "Mechanical installation support",
      "Equipment positioning and alignment",
      "Skilled manpower coordination",
    ],

    conclusion:
      "Our site teams are trained to execute under strict industrial timelines while maintaining safety, precision, and accountability throughout every stage.",
  },

  {
    id: "conveyor-systems",
    title: "Conveyor Systems",

    subtitle:
      "Efficient material handling systems designed for industrial productivity.",

    description:
      "We execute conveyor system projects that support efficient bulk material handling across industrial facilities. MSA provides fabrication, structural support, installation, and execution assistance for conveyor infrastructure and associated systems.",

    image:
      "https://images.unsplash.com/photo-1651672397008-01d088f4a9f6?q=80&w=2140&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop",

    listTitle: "SYSTEM EXECUTION",

    listItems: [
      "Belt conveyor structures",
      "Conveyor gallery fabrication",
      "Support structure installation",
      "Material handling infrastructure",
      "Industrial conveyor maintenance support",
    ],

    conclusion:
      "Our conveyor execution approach focuses on operational reliability, structural efficiency, and long-term industrial performance.",

    reverse: true,
  },

  {
    id: "equipment-rental",
    title: "Equipment Rental",

    subtitle:
      "Reliable industrial equipment support for project execution and site operations.",

    description:
      "MSA provides equipment rental solutions that help industrial projects maintain productivity and execution continuity. Our support includes dependable machinery availability, operational assistance, and coordination for demanding site requirements.",

    image:
      "https://images.unsplash.com/photo-1566624490237-b0314cb4a73f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop",

    listTitle: "RENTAL SUPPORT",

    listItems: [
      "Industrial equipment availability",
      "Site execution support machinery",
      "Material handling assistance",
      "Short-term and project-based rentals",
      "Operational coordination support",
    ],

    conclusion:
      "We ensure equipment support remains dependable, timely, and aligned with the operational needs of industrial execution environments.",
  },
];
export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      {services.map((service, index) => (
          <ServiceDetailSection key={service.id} service={service} index={index} />
      ))}
      <ValueEngineeringSection />
    </>
  );
}
