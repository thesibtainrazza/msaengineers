import { Project, NavLink, Sector, Service } from "@/types";
export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Limestone Linear Stockpile Shed",
    location: "RAS, RJ",
    category: "Shed Structures",
    image: "/assets/1.jpg"
  },

  {
    title: "DIA Limestone Stockpile Shed",
    location: "Dala, RJ",
    category: "Shed Structures",
    image: "/assets/2.jpg",
  },

  {
    title: "Heavy Industrial Fabrication Unit",
    location: "RKL, OD",
    category: "Fabrication Works",
    image:
      "https://images.unsplash.com/photo-1756705406506-50500a12463c?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Clinker Conveyor Support System",
    location: "JSG, OD",
    category: "Conveyor Systems",
    image: "/assets/4.jpg",
  },

  {
    title: "Kiln Section Structural Erection",
    location: "Satna, MP",
    category: "Industrial Erection",
    image: "/assets/5.jpg",
  }
];
export const WHY_CHOOSE_US: Service[] = [
  { title: "Industrial Expertise", isActive: false },
  { title: "Structural Precision", isActive: false },
  { title: "Trusted Execution", isActive: false },
  { title: "Nationwide Operations", isActive: false }
];

export const NAV_LINKS: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];
export const SERVICES_LIST: Sector[] = [
  // BUTTON 1
  {
    label: "Shed Structures",
    image:
      "https://images.unsplash.com/photo-1662120399978-738d233edbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop",
    isImage: false,
  },

  // BUTTON 2
  {
    label: "Fabrication Works",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    isImage: false,
  },

  // IMAGE 1
  {
    image:
      "https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop",
    isImage: true,
  },

  // BUTTON 3
  {
    label: "Industrial Erection",
    image:
      "https://images.unsplash.com/photo-1746003870946-c29679f31d3e?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop",
    isImage: false,
  },

  // BUTTON 4
  {
    label: "Conveyor Systems",
    image:
      "https://images.unsplash.com/photo-1651672397008-01d088f4a9f6?q=80&w=2140&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop",
    isImage: false,
  },

  // BUTTON 5
  {
    label: "Equipment Rental",
    image:
      "https://images.unsplash.com/photo-1566624490237-b0314cb4a73f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop",
    isImage: false,
  },

  // IMAGE 2
  {
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
    isImage: true,
  },

  // IMAGE 3
  {
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop",
    isImage: true,
  },
];