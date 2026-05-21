export interface Project {
  slug: string;
  title: string;
  client?: string;
  location: string;
  category: string;
  year?: string;
  image: string;
  gallery?: string[];
  featured?: boolean;
  shortDescription?: string;
  fullDescription?: string;
  stats?: { label: string; value: string }[];
  tags?: string[];
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
