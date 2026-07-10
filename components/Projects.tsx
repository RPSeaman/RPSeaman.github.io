import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight } from 'lucide-react';

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

export const Projects: React.FC = () => {
  const renderDescription = (description: string) => {
    // First handle underline + bold: __**text**__
    let result: React.ReactNode[] = [];
    const parts = description.split(/__(\*\*.*?\*\*)__/);
    
    parts.forEach((part, index) => {
      if (index % 2 === 1) {
        // This is underlined bold text
        const boldText = part.replace(/\*\*/g, '');
        result.push(<u key={index}><strong>{boldText}</strong></u>);
      } else {
        // Check for remaining ** (bold only)
        const boldParts = part.split(/\*\*(.*?)\*\*/);
        boldParts.forEach((boldPart, boldIndex) => {
          if (boldIndex % 2 === 1) {
            result.push(<strong key={`${index}-${boldIndex}`}>{boldPart}</strong>);
          } else if (boldPart) {
            result.push(boldPart);
          }
        });
      }
    });
    
    return <>{result}</>;
  };

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between border-b border-border-color pb-4">
        <div>
          <p className="text-xs font-mono text-accent-teal uppercase tracking-widest mb-2">Research</p>
          <h2 className="text-3xl font-light text-metallic leading-tight">Selected Publications</h2>
        </div>
        <Link
          to="/publications"
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
                  {renderDescription(project.description)}
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
                <div className="aspect-video w-full overflow-hidden bg-[#111] border border-white/[0.05] rounded-md grayscale-[60%] group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
             </div>
          </div>
        ))}
      </div>

    </div>
  );
};