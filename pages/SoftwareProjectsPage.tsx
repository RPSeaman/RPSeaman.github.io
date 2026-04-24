import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { SOFTWARE_PROJECTS } from '../constants';
import { Footer } from '../components/Footer';

const statusLabel: Record<string, string> = {
  active: 'Active',
  completed: 'Completed',
  archived: 'Archived',
};

export const SoftwareProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBack = () => {
    navigate('/', { state: { scrollTo: 'projects' } });
  };

  return (
    <div className="min-h-screen bg-bg-primary selection:bg-white selection:text-black">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-10 pb-24">

        {/* Back link */}
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </button>

        {/* Header */}
        <div className="border-b border-border-color pb-8 mb-10">
          <p className="text-sm font-mono text-text-secondary uppercase tracking-widest mb-4">Work</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-text-primary">
            All Projects
          </h1>
          <p className="text-text-secondary mt-4 text-lg font-light">
            {SOFTWARE_PROJECTS.length} projects
          </p>
        </div>

        {/* Project rows */}
        <div className="space-y-0">
          {[...SOFTWARE_PROJECTS].sort((a, b) => parseInt(b.year ?? '0') - parseInt(a.year ?? '0')).map((project) => (
            <div
              key={project.id}
              className="group grid md:grid-cols-12 gap-8 py-10 border-b border-border-color hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded items-start"
            >
              {/* Content */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-lg font-semibold text-text-primary leading-snug group-hover:text-white transition-colors">
                    {project.title}
                  </h2>
                  {project.featured && (
                    <span className="text-xs font-mono text-text-secondary border border-border-color px-1.5 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-text-secondary border border-border-color px-2 py-0.5 rounded">
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
                      className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> {project.linkLabel ?? 'Live'}
                    </a>
                  )}
                  {project.status && (
                    <span className={`text-xs font-mono ml-auto ${
                      project.status === 'active' ? 'text-green-500/70' :
                      project.status === 'completed' ? 'text-text-secondary' : 'text-text-secondary/50'
                    }`}>
                      ● {statusLabel[project.status]}
                    </span>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className="md:col-span-5">
                {project.imageUrl ? (
                  <div className={`aspect-video w-full overflow-hidden border border-border-color grayscale group-hover:grayscale-0 transition-all duration-500 ${project.imageBg ?? ''}`}>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                ) : (
                  <div className="aspect-video w-full border border-border-color bg-white/[0.02] flex items-center justify-center">
                    <span className="text-xs font-mono text-text-secondary/40">No image</span>
                  </div>
                )}
                {project.year && (
                  <p className="text-xs font-mono text-text-secondary mt-2 text-right">{project.year}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
