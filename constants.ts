import { Project, Skill, SocialLink, Education, WorkExperience } from './types';

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
  { name: 'Slurm', category: 'Platforms', level: 80 },

];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'A cloud-based training module for efficient de novo transcriptome assembly using Nextflow and Google Cloud',
    description: '__**Seaman RP**__, Campbell R, Doe V, Yosufzai Z, Graber JH',
    tags: ['Transcriptome Assembly', 'GCP', 'Nextflow'],
    imageUrl: './images/SEQ.jpg',
    link: 'https://pubmed.ncbi.nlm.nih.gov/38941113',
    github: '#'
  },
  {
    id: '2',
    title: 'The essential role of connective-tissue cells during axolotl limb regeneration',
    description: 'García-García D, Knapp D, Kim M, Jamwal K, Fuqua H, __**Seaman RP**__, Grindle RE, Nowoshilow S, Novatchkova M, Kolling FW, Graber JH, Murawala P',
    tags: ['Axolotl', 'SCRNAseq', 'Spatial'],
    imageUrl: './images/AXO.jpeg',
    link: 'https://pubmed.ncbi.nlm.nih.gov/40236065',
    github: '#'
  },
  {
    id: '3',
    title: 'SGLT2 Inhibition Ameliorates Age-Dependent Renovascular Rarefaction',
    description: 'Paulmann A, Cox MD, Boewer T, Somers HM, Fuqua H, __**Seaman RP**__, Graber JH, Mahajan A, Johnson CP, Beverly-Staggs LL, Sandhi S, Schenk H, Haller H',
    tags: ['African Truquoise Killifish', 'SCRNAseq'],
    imageUrl: './images/ATK.jpg',
    link: 'https://pubmed.ncbi.nlm.nih.gov/40667048',
    github: '#'
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/RPSeaman', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/ryanpseaman', icon: 'linkedin' },
  { platform: 'Instagram', url: 'https://instagram.com/ryanpseaman', icon: 'instagram' },

];

export const EDUCATION: Education[] = [
  {
    school: 'Harvard Medical School',
    degree: 'MMSc. Biomedical Informatics',
    location: 'Boston, MA',
    graduationDate: 'Expected Graduation May 2027'
  },
  {
    school: 'Colby College',
    degree: 'B.A. Computational Biology',
    location: 'Waterville, ME',
    graduationDate: 'January 2023'
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    position: 'Bioinformatician, Comparative Genomic and Data Science Core',
    organization: 'MDI Biological Laboratory',
    location: 'Bar Harbor, ME',
    period: 'January 2023 – August 2025'
  },
  {
    position: 'Research Assistant, Chang Lab',
    organization: 'Department of Geology, Portland State University',
    location: 'Portland, OR',
    period: 'May – August 2017'
  }
];