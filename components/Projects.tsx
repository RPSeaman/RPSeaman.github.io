import { AuthorList } from './AuthorList';
import { getTagStyle } from '../utils/projectPresentation';
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between border-b border-border-color pb-4">
        <div>
          <p className="text-xs font-mono text-accent-teal uppercase tracking-widest mb-2">Research</p>
          <h2 className="text-3xl font-light text-metallic leading-tight">Selected Publications</h2>
        </div>
        <Link
          to="/publications"
          viewTransition
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-teal transition-colors group pb-1 cursor-pointer"
        >
          View all
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="space-y-8">
        {PROJECTS.filter(p => p.featured).map((project) => (
          <div key={project.id} className="grid md:grid-cols-12 gap-8 group glass-panel-nested glass-panel-nested-hover p-6 rounded-xl">
             <div className="md:col-span-5 space-y-4">
                <h3 className="text-2xl font-semibold text-text-primary group-hover:text-accent-teal transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  <AuthorList description={project.description} />
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-xs font-mono border px-2 py-0.5 rounded ${getTagStyle(tag)}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-text-primary hover:text-accent-teal transition-colors">
                    View Publication <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
             </div>
             <div className="md:col-span-7">
                <div className="aspect-video w-full overflow-hidden bg-[#111] border border-white/[0.05] rounded-md">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
             </div>
          </div>
        ))}
      </div>

    </div>
  );
};