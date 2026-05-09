/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Modular Components
import ServicesHeroSection from '@/components/services/ServicesHeroSection';
import ServiceDetailSection from '@/components/services/ServiceDetailSection';
import ValueEngineeringSection from '@/components/services/ValueEngineeringSection';

export const metadata = {
  title: 'Services | JDavis Construction',
};

const servicesData = [
  {
    id: "preconstruction",
    title: "Preconstruction",
    subtitle: "We learned a long time ago that if you fail to plan, you plan to fail.",
    description: "Preconstruction services are the foundation of every successful project, ensuring your vision is translated into a buildable, cost-effective plan. At J Davis, we have an entire department dedicated to assessing feasibility, evaluating budgets, and identifying risks to streamline your project from concept to construction.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
    listTitle: "Our Services Include",
    listItems: [
        "Detailed cost analysis and budgeting",
        "Early schedule development to meet key milestones",
        "Constructability reviews to avoid costly surprises and proactively address challenges",
        "Coordination with local AHJ, architects, engineers, and stakeholders"
    ],
    conclusion: "Start your project with confidence. Partner with us for a preconstruction process that eliminates guesswork and ensures smooth execution.",
    reverse: false
  },
  {
    id: "design-build",
    title: "Design-Build",
    subtitle: "A seamless, single-source solution for your construction needs.",
    description: "The Design-Build approach simplifies the construction process by consolidating design and construction under one roof. J Davis takes full responsibility for both, providing you with a single point of contact from initial concept to final completion. This collaborative method fosters innovation, accelerates schedules, and ensures your vision is realized exactly as planned.",
    image: "https://images.unsplash.com/photo-1541888086225-ee8018e4726b?q=80&w=2000&auto=format&fit=crop",
    listTitle: "Benefits of Design-Build",
    listItems: [
        "Single point of responsibility and communication",
        "Faster delivery times due to overlapping design and construction phases",
        "Enhanced collaboration between designers and builders",
        "Reduced risk and improved cost control"
    ],
    conclusion: "Experience a streamlined construction journey with our integrated Design-Build services.",
    reverse: true
  },
  {
    id: "cmar",
    title: "Construction Management at Risk (CMAR)",
    subtitle: "Expert guidance and guaranteed maximum price.",
    description: "As your Construction Manager at Risk, J Davis partners with you early in the design phase to provide critical input on constructability, scheduling, and cost. We commit to delivering your project within a Guaranteed Maximum Price (GMP), minimizing your financial risk while ensuring the highest quality standards. Our transparent approach gives you peace of mind throughout the entire process.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
    listTitle: "Why Choose CMAR?",
    listItems: [
        "Early involvement of the construction manager for better planning",
        "Guaranteed Maximum Price (GMP) reduces owner risk",
        "Open-book transparency on all project costs",
        "Value engineering opportunities maximized during design"
    ],
    conclusion: "Secure your project's success with the reliable oversight of our CMAR approach.",
    reverse: false
  },
  {
    id: "traditional-contracting",
    title: "Traditional Contracting",
    subtitle: "Delivering excellence through competitive bidding.",
    description: "In the traditional Design-Bid-Build method, J Davis brings decades of expertise to execute your fully designed plans. We provide competitive, comprehensive bids and manage the construction phase with meticulous attention to detail, schedule, and safety. Our experienced team ensures that your project is built exactly to specifications, delivering uncompromising quality on time and on budget.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2000&auto=format&fit=crop",
    listTitle: "Our Commitment",
    listItems: [
        "Competitive and accurate bidding process",
        "Strict adherence to architectural plans and specifications",
        "Rigorous quality control and safety standards",
        "Efficient project management and timely completion"
    ],
    conclusion: "Trust our proven track record to bring your fully designed project to life.",
    reverse: true
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ServicesHeroSection />
        {servicesData.map((service, index) => (
            <ServiceDetailSection key={service.id} service={service} index={index} />
        ))}
        <ValueEngineeringSection />
      </main>
      <Footer />
    </div>
  );
}
