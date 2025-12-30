import { Project, Skill, SocialLink } from './types';

export const PORTFOLIO_OWNER = "Ryan Seaman";
export const OWNER_ROLE = "Biomedical Informatics";

export const BIO = `
As a professional in Biomedical Informatics, my core mission is translating complex biological data into actionable insights. My current focus centers on the crucial step of data visualization, particularly in the realm of spatial data analysis. I specialize in developing and deploying interactive visualization tools that effectively communicate the intricate patterns and relationships hidden within large genomic or clinical datasets. By making these complex data structures geographically intuitive, I aim to provide researchers with clear, accessible views that accelerate biological discovery and inform clinical decision-making.
`;

export const SKILLS: Skill[] = [
  { name: 'RNAseq', category: 'Modalities', level: 95 },
  { name: 'sc/snRNAseq', category: 'Modalities', level: 90 },
  { name: '10x Visium', category: 'Modalities', level: 95 },
  { name: '10x Xenium', category: 'Modalities', level: 95 },
  { name: '10x Multiome', category: 'Modalities', level: 95 },
  { name: 'Python', category: 'Langauges', level: 85 },
  { name: 'R', category: 'Langauges', level: 80 },
  { name: 'Java', category: 'Langauges', level: 80 },
  { name: 'Groovy', category: 'Langauges', level: 80 },
  { name: 'Bash', category: 'Langauges', level: 80 },
  { name: 'Nextflow', category: 'Tools', level: 75 },
  { name: 'nf-core', category: 'Tools', level: 85 },
  { name: 'command line', category: 'Tools', level: 85 },
  { name: 'genomics analysis tools', category: 'Tools', level: 85 },
  { name: 'git/GitHub', category: 'Tools', level: 85 },
  { name: 'Google Cloud Platform', category: 'Platforms', level: 80 },
  { name: 'Amazon Web Services', category: 'Platforms', level: 80 },
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