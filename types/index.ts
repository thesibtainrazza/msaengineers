export interface Project {
  title: string;
  location: string;
  category: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Sector {
  label?: string;
  image: string;
  isImage: boolean;
}

export interface Service {
  id?: number;
  title: string;
  isActive?: boolean;
  content?: {
    heading: string;
    description: string;
  };
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Stat {
  value: string;
  label: string;
}
