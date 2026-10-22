export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  tools: string[];
  overview: string;
  problem: string;
  process: string;
  solution: string;
  results: string;
  keyTakeaways: string;
}

export interface Skills {
  technical: string[];
  business: string[];
  tools: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  graduated: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  summary: string;
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  education: Education[];
  certifications: Certification[];
}
