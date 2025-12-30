import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div className="space-y-16">
       <div className="grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-4">
          <h2 className="text-sm font-mono text-text-secondary uppercase tracking-widest">Selected Work</h2>
        </div>
      </div>

      <div className="space-y-20">
        {PROJECTS.map((project) => (
          <div key={project.id} className="grid md:grid-cols-12 gap-8 group">
             <div className="md:col-span-4 space-y-4">
                <h3 className="text-2xl font-semibold text-text-primary group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-3 text-xs font-mono text-text-secondary pt-2">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <div className="pt-4">
                  <a href={project.link} className="inline-flex items-center gap-2 text-sm text-text-primary hover:opacity-70 transition-opacity">
                    View Project <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
             </div>
             <div className="md:col-span-8">
                <div className="aspect-video w-full overflow-hidden bg-[#111] border border-border-color grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};