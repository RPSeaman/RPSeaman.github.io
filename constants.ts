import { Project, SocialLink, Education, WorkExperience, SoftwareProject } from './types';

export const PORTFOLIO_OWNER = "Ryan Seaman";
export const RESUME_URL = './files/RyanSeamanResume-2026-10-08-r3.pdf';
export const OWNER_ROLE = "Biomedical Informatics";

export const BIO = `I’m Ryan, a biomedical informatics researcher interested in turning scientific questions into useful health technology. I enjoy working through ideas with other people.`;


export const PROJECTS: Project[] = [
  {
    id: '7',
    title: 'A uniform tissue-clearing framework and mesoSPIM-ultra enable cm-scale single-neuron tracing',
    description: 'Pende M, Cregg JM, Saghafi S, Broadbent S, Avdibasic A, Roeles J, Papadopoulos SC, __**Seaman RP**__, Pende N, Mateos MS, Jamwal K, Wunch M, Pasierbek P, Moreno-Cencerrado A, Korchynska S, Hauer R, Anderson P, Supper P, Kastriti ME, Reumann D, Moorhead M, Graber JH, Scholze P, Henschke JU, Budinger E, Knoblich JA, Klausberger T, Adameyko I, Harkany T, Kumar V, Joy MT, Kiehn O, Dodt HU, Voigt FF, Murawala P',
    tags: ['Mouse', 'Tissue Clearing', 'mesoSPIM'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/42427676',
    journal: 'bioRxiv',
    citation: 'bioRxiv [Preprint]. 2026 Jul 3:2026.06.29.734841',
    year: '2026',
    featured: false
  },
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
    tags: ['African Turquoise Killifish', 'Dietary Restriction', 'Aging'],
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

export const SOFTWARE_PROJECTS: SoftwareProject[] = [
  {
    id: 'annotations',
    title: 'Vitessce Annotations',
    description: 'An annotation and narrative system that connects scientific explanations to interactive spatial and single-cell data. I built the full annotation system within the existing Vitessce framework, with supervision and guidance from Mark S. Keller and Nils Gehlenborg.',
    tags: ['Narrative Visualization', 'Vitessce', 'Spatial Data'],
    year: '2026',
    featured: true,
    detailPath: '/projects/vitessce-annotations',
    note: 'Manuscript in preparation',
  },
  {
    id: 'sp4',
    detailPath: '/projects/vitesscegen',
    note: 'MMSc thesis · In progress',
    title: 'VitessceGen',
    description: 'MMSc thesis project at the HIDIVE Lab, Harvard Medical School. VitessceGen uses a multi-agent LLM pipeline to automatically generate Vitessce visualization configurations from biomedical datasets. The research explores how coordinated agents can analyze dataset structure, select visualization components, and produce configurations for spatial and single-cell data.',
    tags: ['LLM', 'Multi-Agent', 'Vitessce', 'Data Visualization', 'Python'],
    imageUrl: './images/VitessceGen.png',
    imageBg: 'bg-white',
    year: '2026',
    status: 'active',
    featured: true
  },
  {
    id: 'sp1',
    title: 'AperioVis',
    description: 'An interactive Shiny for Python application for exploring processed single-cell RNA sequencing datasets. It brings quality-controlled, normalized data and dimensionality-reduction views into a browser interface for researchers.',
    tags: ['Shiny for Python', 'scRNAseq', 'Data Visualization'],
    imageUrl: './images/AperioVis.png',
    imageBg: 'bg-white',
    github: 'https://github.com/RPSeaman/AperioVis',
    year: '2026',
    status: 'completed',
    featured: true
  },
  {
    id: 'sp2',
    title: 'scscape',
    description: 'nf-core Nextflow pipeline for multi-sample single-cell RNA-seq analysis downstream of count matrix generation. Built on the Seurat R package, the pipeline handles QC, normalization, doublet removal, SCTransform, PCA, integration, clustering (Louvain), and dimensionality reduction, producing analysis-ready Seurat objects with cell clusters and expression projections.',
    tags: ['Nextflow', 'nf-core', 'Seurat', 'scRNAseq', 'R'],
    imageUrl: './images/scscape.png',
    imageBg: 'bg-white',
    github: 'https://github.com/mdibl/scscape',
    year: '2025',
    status: 'completed',
    featured: false
  },
  {
    id: 'sp5',
    title: 'Cadence Health',
    description: 'A digital health concept exploring how continuous biosignal data could become more useful, understandable health information. An early prototype connects my interests in health technology and interpreting complex data.',
    tags: ['Digital Health', 'Health Tech', 'Startup'],
    imageUrl: './images/CadenceHealth.png',
    imageBg: 'bg-white',
    link: 'https://rpseaman.com/cadence-health',
    linkLabel: 'Prototype',
    year: '2026',
    status: 'active',
    featured: false
  },
  {
    id: 'sp3',
    title: 'Personal Website',
    description: 'A personal site built around a warm visual identity, accessible typography, and stories about research. Built with React, TypeScript, and Vite, with continuous deployment through GitHub Actions to GitHub Pages.',
    tags: ['React', 'TypeScript', 'Vite'],
    imageUrl: './images/Website.png',
    github: 'https://github.com/RPSeaman/RPSeaman.github.io',
    year: '2026',
    status: 'active',
    featured: false
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
    position: 'Summer Research Intern',
    organization: 'Harvard Medical School, Dr. Nils Gehlenborg',
    location: 'Boston, MA',
    period: 'May 2026 – August 2026'
  },
  {
    position: 'Bioinformatician, Comparative Genomic and Data Science Core',
    organization: 'MDI Biological Laboratory',
    location: 'Bar Harbor, ME',
    period: 'January 2023 – August 2025'
  }
];
