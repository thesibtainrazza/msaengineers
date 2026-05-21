import { Project } from "@/types";
import { IMAGES } from "@/constants/images";

export const PROJECTS: Project[] = [
  // FEATURED SLIDER PROJECTS (First 5 are traditionally featured in Hero/Sliders)
  {
    slug: "limestone-linear-stockpile-shed-ras",
    title: "Limestone Linear Stockpile Shed",
    client: "Shree Cement",
    location: "RAS, RJ",
    category: "Shed Structures",
    year: "2023",
    image: IMAGES.projects.limestoneShed,
    gallery: [IMAGES.projects.limestoneShed],
    featured: true,
    shortDescription: "A large-scale limestone storage shed built to withstand extreme industrial conditions.",
    fullDescription: "Designed for high-capacity material storage, this limestone linear stockpile shed ensures continuous operation and protection of raw materials from environmental factors. The structural integrity and rapid erection timeline set a new benchmark for industrial shed construction in the region.",
    stats: [
      { label: "Capacity", value: "1.2M Tons" },
      { label: "Completion", value: "14 Months" }
    ],
    tags: ["Limestone", "Shed", "Industrial"]
  },
  {
    slug: "dia-limestone-stockpile-shed-dala",
    title: "DIA Limestone Stockpile Shed",
    client: "UltraTech Cement",
    location: "Dala, UP",
    category: "Shed Structures",
    year: "2022",
    image: IMAGES.projects.diLimestoneShed,
    gallery: [IMAGES.projects.diLimestoneShed],
    featured: true,
    shortDescription: "Heavy-duty stockpile shed engineered for optimized raw material handling.",
    fullDescription: "Constructed to support continuous feed operations, the DIA Limestone Stockpile Shed minimizes material degradation and optimizes the logistics of limestone handling within the plant. Precision fabrication and modular erection were key to meeting the aggressive project timeline.",
    stats: [
      { label: "Area", value: "45,000 Sq Ft" },
      { label: "Steel Used", value: "2,500 MT" }
    ],
    tags: ["Stockpile", "Fabrication", "Heavy Engineering"]
  },
  {
    slug: "heavy-industrial-fabrication-unit-rkl",
    title: "Heavy Industrial Fabrication Unit",
    client: "OCL India",
    location: "RKL, OD",
    category: "Fabrication Works",
    year: "2024",
    image: IMAGES.projects.limestoneHandling,
    gallery: [IMAGES.projects.limestoneHandling],
    featured: true,
    shortDescription: "State-of-the-art heavy fabrication unit tailored for large-scale industrial assemblies.",
    fullDescription: "This facility was custom-built to handle massive structural steel fabrication and assembly processes. Equipped with heavy-duty overhead cranes and reinforced flooring, it serves as the backbone for subsequent industrial expansion projects.",
    stats: [
      { label: "Crane Capacity", value: "50T" },
      { label: "Safety Record", value: "Zero LTIs" }
    ],
    tags: ["Fabrication", "Steel", "Industrial Unit"]
  },
  {
    slug: "clinker-conveyor-support-system-jsg",
    title: "Clinker Conveyor Support System",
    client: "Dalmia Bharat",
    location: "JSG, OD",
    category: "Conveyor Systems",
    year: "2023",
    image: IMAGES.projects.clinkerConveyor,
    gallery: [IMAGES.projects.clinkerConveyor],
    featured: true,
    shortDescription: "Elevated structural support system for heavy-duty clinker transportation.",
    fullDescription: "Spanning over 2 kilometers, this conveyor support system was erected across challenging terrain. The project demanded high-precision alignment and robust vibration-dampening structures to ensure the uninterrupted flow of abrasive clinker material.",
    stats: [
      { label: "Length", value: "2.4 km" },
      { label: "Terrain", value: "Uneven/Hilly" }
    ],
    tags: ["Conveyor", "Clinker", "Erection"]
  },
  {
    slug: "kiln-section-structural-erection-satna",
    title: "Kiln Section Structural Erection",
    client: "Birla Corporation",
    location: "Satna, MP",
    category: "Industrial Erection",
    year: "2021",
    image: IMAGES.projects.satnaErection,
    gallery: [IMAGES.projects.satnaErection],
    featured: true,
    shortDescription: "Complex structural erection for a high-capacity rotary kiln section.",
    fullDescription: "Erecting the structural framework around a massive rotary kiln requires immense precision and adherence to strict safety protocols. This project involved heavy lifting in tight spatial constraints, successfully completed ahead of schedule without compromising quality.",
    stats: [
      { label: "Max Lift", value: "120 MT" },
      { label: "Height", value: "65m" }
    ],
    tags: ["Kiln", "Erection", "Heavy Lifting"]
  },


];
