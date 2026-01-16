
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  headline: string;
  subHeadline: string;
  about: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  socials: Social[];
}
