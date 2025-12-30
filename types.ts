export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI';
  level: number; // 0-100
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}