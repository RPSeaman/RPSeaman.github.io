import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { SOFTWARE_PROJECTS } from '../constants';

const statusLabel: Record<string, string> = {
  active: 'Active',
  completed: 'Completed',
  archived: 'Archived',
};

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

export const SoftwareProjects: React.FC = () => {
  const featured = SOFTWARE_PROJECTS.filter(p => p.featured);

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between border-b border-border-color pb-4">
        <div>
          <p className="text-xs font-mono text-accent-teal uppercase tracking-widest mb-2">Code</p>
          <h2 className="text-3xl font-light text-metallic leading-tight">Software Projects</h2>
        </div>
        <Link
          to="/projects"
          viewTransition
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-teal transition-colors group pb-1 cursor-pointer"
        >
          View all
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {featured.map((project) => (
          <div
            key={project.id}
            className="group glass-panel-nested glass-panel-nested-hover p-6 rounded-xl flex flex-col gap-4"
          >
            {/* Header row */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-text-primary group-hover:text-accent-teal transition-colors leading-snug">
                {project.title}
              </h3>
              <div className="flex gap-3 shrink-0 pt-0.5">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-teal transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-teal transition-colors">
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
                  <span key={tag} className={`text-xs font-mono border px-2 py-0.5 rounded ${getTagStyle(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>
              {project.status && (
                <span className={`text-xs font-mono ${
                  project.status === 'active' ? 'text-accent-teal/80 font-medium' :
                  project.status === 'completed' ? 'text-text-secondary/70' : 'text-text-secondary/50'
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
