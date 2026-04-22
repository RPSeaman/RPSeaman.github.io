import { Project, Skill, SocialLink, Education, WorkExperience } from './types';

export const PORTFOLIO_OWNER = "Ryan Seaman";
export const OWNER_ROLE = "Biomedical Informatics";

export const BIO = `
Computational biologist and data scientist pursuing an MMSc in Biomedical Informatics at Harvard Medical School. Experienced in bioinformatics pipelines, cloud infrastructure, machine learning, and single-cell genomics, with current thesis work applying multi-agent LLM systems to automated data visualization.
`;

export const SKILLS: Skill[] = [
  { name: 'RNAseq', category: 'Modalities', level: 95 },
  { name: 'sc/snRNAseq', category: 'Modalities', level: 90 },
  { name: '10x Visium', category: 'Modalities', level: 95 },
  { name: '10x Xenium', category: 'Modalities', level: 95 },
  { name: '10x Multiome', category: 'Modalities', level: 95 },
  { name: 'Python', category: 'Languages', level: 85 },
  { name: 'R', category: 'Languages', level: 80 },
  { name: 'Java', category: 'Languages', level: 80 },
  { name: 'Groovy', category: 'Languages', level: 80 },
  { name: 'Bash', category: 'Languages', level: 80 },
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
    id: '6',
    title: 'Injury-induced Cxcl11 and neutrophil signaling drive zebrafish kidney regeneration by generating a nephrogenic niche of Fgf and Wnt expression',
    description: 'Olajuyin O, Schenk H, Sampson WGB, Adekeye O, Kamei CN, Upadhyay RM, Kennedy R, Morrison E, Callahan R, Bonnet F, Graber J, __**Seaman R**__, Fuqua H, Wheeler R, Oxburgh L, Drummond IA',
    tags: ['Zebrafish', 'Kidney Regeneration', 'scRNAseq'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/41993248',
    journal: 'bioRxiv',
    citation: 'bioRxiv [Preprint]. 2026 Apr 10:2026.04.08.717325',
    year: '2026',
    featured: false
  },
  {
    id: '5',
    title: 'Sexually Dimorphic Response to Dietary Restriction-induced Longevity and Muscle Rejuvenation in Nothobranchius furzeri',
    description: 'Sandhi S, Somers H, Cox M, Nobrega C, __**Seaman R**__, Bakers E, Letchner O, Reeve R, Menard R, Godwin J, Paulmann A, Rogers A, Valenzano DR, Graber J, Haller H, Madelaine R',
    tags: ['Nothobranchius furzeri', 'Dietary Restriction', 'Aging'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/41727172',
    journal: 'bioRxiv',
    citation: 'bioRxiv [Preprint]. 2026 Feb 11:2026.02.09.704879',
    year: '2026',
    featured: false
  },
  {
    id: '3',
    title: 'Sodium-glucose co-transporter 2 inhibition improves age-dependent kidney microvascular rarefaction',
    description: 'Paulmann A, Cox MD, Boewer T, Somers HM, Fuqua H, __**Seaman RP**__, Graber JH, Mahajan A, Johnson CP, Beverly-Staggs LL, Sandhi S, Schenk H, Haller H',
    tags: ['African Turquoise Killifish', 'scRNAseq'],
    imageUrl: './images/ATK.jpg',
    link: 'https://pubmed.ncbi.nlm.nih.gov/41448458/',
    journal: 'Kidney Int.',
    citation: 'Kidney Int. 2026 Mar;109(3):525-544',
    year: '2026',
    featured: true
  },
  {
    id: '2',
    title: 'The essential role of connective-tissue cells during axolotl limb regeneration',
    description: 'García-García D, Knapp D, Kim M, Jamwal K, Fuqua H, __**Seaman RP**__, Grindle RE, Nowoshilow S, Novatchkova M, Kolling FW, Graber JH, Murawala P',
    tags: ['Axolotl', 'scRNAseq', 'Spatial'],
    imageUrl: './images/AXO.jpeg',
    link: 'https://pubmed.ncbi.nlm.nih.gov/40236065',
    journal: 'bioRxiv',
    citation: 'bioRxiv [Preprint]. 2025 Apr 2:2025.03.30.645595',
    year: '2025',
    featured: true
  },
  {
    id: '1',
    title: 'A cloud-based training module for efficient de novo transcriptome assembly using Nextflow and Google Cloud',
    description: '__**Seaman RP**__, Campbell R, Doe V, Yosufzai Z, Graber JH',
    tags: ['Transcriptome Assembly', 'GCP', 'Nextflow'],
    imageUrl: './images/SEQ.jpg',
    link: 'https://pubmed.ncbi.nlm.nih.gov/38941113',
    journal: 'Briefings in Bioinformatics',
    citation: 'Brief Bioinform. 2024 May 23;25(4):bbae313',
    year: '2024',
    featured: true
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/RPSeaman', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/ryanpseaman', icon: 'linkedin' },
  { platform: 'ORCID', url: 'https://orcid.org/0009-0006-1204-4176', icon: 'orcid' },
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
    position: 'Thesis Research, HIDIVE Lab',
    organization: 'Harvard Medical School, Dr. Nils Gehlenborg',
    location: 'Boston, MA',
    period: 'December 2025 – Present'
  },
  {
    position: 'Bioinformatician, Comparative Genomic and Data Science Core',
    organization: 'MDI Biological Laboratory',
    location: 'Bar Harbor, ME',
    period: 'January 2023 – August 2025'
  }
];