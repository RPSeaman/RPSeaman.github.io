import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { SOFTWARE_PROJECTS } from '../constants';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnimatedSection } from '../App';

const getTagStyle = (tag: string) => {
  const lowercase = tag.toLowerCase();
  
  // Organism / Biology keywords -> Indigo
  const organismKeywords = ['zebrafish', 'killifish', 'nothobranchius', 'furzeri', 'axolotl', 'mouse', 'human'];
  // Medical / Disease Focus keywords -> Emerald
  const medicalKeywords = ['regeneration', 'dietary restriction', 'longevity', 'muscle', 'rejuvenation', 'microvascular', 'rarefaction', 'aging', 'kidney', 'digital health', 'health tech', 'startup', 'disease'];

  if (organismKeywords.some(kw => lowercase.includes(kw))) {
    return 'text-accent-indigo bg-accent-indigo/5 border-accent-indigo/15';
  } else if (medicalKeywords.some(kw => lowercase.includes(kw))) {
    return 'text-accent-emerald bg-accent-emerald/5 border-accent-emerald/15';
  } else {
    // Default to Methodology / Technology -> Teal
    return 'text-accent-teal bg-accent-teal/5 border-accent-teal/15';
  }
};

const statusLabel: Record<string, string> = {
  active: 'Active',
  completed: 'Completed',
  archived: 'Archived',
};

export const SoftwareProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Projects | Ryan Seaman";
    return () => {
      document.title = "Ryan Seaman";
    };
  }, []);

  const handleBack = () => {
    navigate('/', { state: { scrollTo: 'projects' } });
  };

  return (
    <div className="min-h-screen bg-bg-primary selection:bg-accent-teal/30 selection:text-white relative bg-dot-grid">
      {/* Background ambient elements wrapper for theme-level opacity/contrast dimming */}
      <div className="spheres-wrapper">
        {/* Ambient background glows */}
        <div className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none -translate-x-1/3 -translate-y-1/3 animate-float-1 z-0" />
        <div className="fixed top-[35%] right-0 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.1),transparent_70%)] pointer-events-none translate-x-1/3 animate-float-2 z-0" />
        <div className="fixed bottom-0 left-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12),transparent_70%)] pointer-events-none -translate-x-1/2 translate-y-1/4 animate-float-1 z-0" />

        {/* Extra Decorative background spheres for enhanced depth */}
        <div className="fixed top-[12%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/35 to-teal-600/15 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.12)] pointer-events-none animate-float-1 z-0" />
        <div className="fixed top-[28%] right-[15%] w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400/35 to-teal-500/15 border border-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.12)] pointer-events-none animate-float-2 z-0" />
        <div className="fixed top-[48%] left-[22%] w-40 h-40 rounded-full bg-gradient-to-tr from-pink-500/35 to-purple-600/15 border border-pink-400/30 shadow-[0_0_25px_rgba(244,63,94,0.12)] pointer-events-none animate-float-2 z-0" />
        <div className="fixed top-[65%] right-[25%] w-28 h-28 rounded-full bg-gradient-to-tr from-lime-400/30 to-emerald-500/10 border border-lime-400/25 shadow-[0_0_15px_rgba(163,230,53,0.08)] pointer-events-none animate-float-1 z-0" />
        <div className="fixed top-[80%] left-[8%] w-36 h-36 rounded-full bg-gradient-to-br from-red-500/30 to-amber-500/10 border border-red-400/25 shadow-[0_0_20px_rgba(239,68,68,0.15)] pointer-events-none animate-float-2 z-0" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
          {/* Back link */}
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-teal transition-colors mb-8 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </button>

          {/* Header */}
          <div className="border-b border-border-color pb-8 mb-10">
            <p className="text-sm font-mono text-text-secondary uppercase tracking-widest mb-4">Work</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-metallic leading-[1.1] pb-1">
              All Projects
            </h1>
            <p className="text-text-secondary mt-4 text-lg font-light">
              {SOFTWARE_PROJECTS.length} projects
            </p>
          </div>

          {/* Project cards (with 3D tilt scroll reveals) */}
          <div className="space-y-8">
            {[...SOFTWARE_PROJECTS].sort((a, b) => parseInt(b.year ?? '0') - parseInt(a.year ?? '0')).map((project) => (
              <AnimatedSection key={project.id} className="rounded-2xl">
                <div className="grid md:grid-cols-12 gap-8 items-start text-left">
                  {/* Content */}
                  <div className="md:col-span-7 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-lg font-semibold text-text-primary leading-snug group-hover:text-accent-teal transition-colors">
                        {project.title}
                      </h2>
                      {project.featured && (
                        <span className="text-xs font-mono text-accent-teal border border-accent-teal/20 bg-accent-teal/5 px-1.5 py-0.5 rounded">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map(tag => (
                        <span key={tag} className={`text-xs font-mono border px-2 py-0.5 rounded ${getTagStyle(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links row */}
                    <div className="flex items-center gap-4 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-teal transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" /> GitHub
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-teal transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> {project.linkLabel ?? 'Live'}
                        </a>
                      )}
                      {project.status && (
                        <span className={`text-xs font-mono ml-auto ${project.status === 'active' ? 'text-accent-teal/80 font-medium' :
                            project.status === 'completed' ? 'text-text-secondary/70' : 'text-text-secondary/50'
                          }`}>
                          ● {statusLabel[project.status]}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="md:col-span-5">
                    {project.imageUrl ? (
                      <div className={`aspect-video w-full overflow-hidden border border-white/10 rounded-md grayscale-[60%] group-hover:grayscale-0 transition-all duration-500 ${project.imageBg ?? ''}`}>
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video w-full border border-white/10 rounded-md bg-white/[0.01] flex items-center justify-center">
                        <span className="text-xs font-mono text-text-secondary/40">No image</span>
                      </div>
                    )}
                    {project.year && (
                      <p className="text-xs font-mono text-text-secondary mt-2 text-right">{project.year}</p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
