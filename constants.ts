import { Project, Skill, SocialLink } from './types';

export const PORTFOLIO_OWNER = "Ryan Seaman";
export const OWNER_ROLE = "Biomedical Informatics";

export const BIO = `
As a professional in Biomedical Informatics, my core mission is translating complex biological data into actionable insights. My current focus centers on the crucial step of data visualization, particularly in the realm of spatial data analysis. I specialize in developing and deploying interactive visualization tools that effectively communicate the intricate patterns and relationships hidden within large genomic or clinical datasets. By making these complex data structures geographically intuitive, I aim to provide researchers with clear, accessible views that accelerate biological discovery and inform clinical decision-making.
`;

export const SKILLS: Skill[] = [
  { name: 'React', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 95 },
  { name: 'Node.js', category: 'Backend', level: 85 },
  { name: 'PostgreSQL', category: 'Backend', level: 80 },
  { name: 'Python', category: 'AI', level: 75 },
  { name: 'Docker', category: 'Tools', level: 85 },
  { name: 'Figma', category: 'Tools', level: 80 },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nebula Dashboard',
    description: 'Real-time IoT analytics.',
    tags: ['React', 'D3.js', 'WebSockets'],
    imageUrl: 'https://picsum.photos/600/400?grayscale&random=1',
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'Minimal Notes',
    description: 'Markdown based note-taking app.',
    tags: ['React', 'LocalFirst'],
    imageUrl: 'https://picsum.photos/600/400?grayscale&random=2',
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Sonic Scapes',
    description: 'Generative audio visualization.',
    tags: ['Web Audio', 'Canvas'],
    imageUrl: 'https://picsum.photos/600/400?grayscale&random=3',
    link: '#',
    github: '#'
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/RPSeaman', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/ryanpseaman', icon: 'linkedin' },
  { platform: 'Instagram', url: 'https://instagram.com/ryanpseaman', icon: 'instagram' },

];