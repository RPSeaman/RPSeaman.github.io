import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { SOFTWARE_PROJECTS } from '../constants';

const statusLabel: Record<string, string> = {
  active: 'Active',
  completed: 'Completed',
  archived: 'Archived',
};

export const SoftwareProjects: React.FC = () => {
  const featured = SOFTWARE_PROJECTS.filter(p => p.featured);

  return (
    <div className="space-y-16">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-mono text-text-secondary uppercase tracking-widest">Projects</h2>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group"
        >
          View all
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {featured.map((project) => (
          <div
            key={project.id}
            className="group border border-border-color p-6 rounded hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.04)] hover:border-white/20 transition-all duration-300 flex flex-col gap-4"
          >
            {/* Header row */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-text-primary group-hover:text-white transition-colors leading-snug">
                {project.title}
              </h3>
              <div className="flex gap-3 shrink-0 pt-0.5">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="text-text-secondary hover:text-text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="text-text-secondary hover:text-text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Footer */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-text-secondary border border-border-color px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              {project.status && (
                <span className={`text-xs font-mono ${
                  project.status === 'active' ? 'text-green-500/70' :
                  project.status === 'completed' ? 'text-text-secondary' : 'text-text-secondary/50'
                }`}>
                  ● {statusLabel[project.status]}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
