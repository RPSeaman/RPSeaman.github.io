export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
  github?: string;
  journal?: string;
  citation?: string;
  year?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'Modalities' | 'Languages' | 'Tools' | 'Platforms';
  level: number; // 0-100
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  graduationDate: string;
}

export interface WorkExperience {
  position: string;
  organization: string;
  location: string;
  period: string;
}

export interface SoftwareProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  imageUrl?: string;
  year?: string;
  status?: 'active' | 'completed' | 'archived';
  featured?: boolean;
  imageBg?: string;
}