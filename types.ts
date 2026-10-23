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
  description?: string;
  location: string;
  period: string;
}

export interface SoftwareProject {
  detailPath?: string;
  note?: string;
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
  linkLabel?: string;
}
