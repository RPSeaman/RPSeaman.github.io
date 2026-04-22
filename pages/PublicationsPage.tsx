import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../constants';

const renderAuthors = (description: string) => {
  let result: React.ReactNode[] = [];
  const parts = description.split(/__(\*\*.*?\*\*)__/);
  parts.forEach((part, index) => {
    if (index % 2 === 1) {
      const boldText = part.replace(/\*\*/g, '');
      result.push(<u key={index}><strong>{boldText}</strong></u>);
    } else {
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

export const PublicationsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBack = () => {
    navigate('/', { state: { scrollTo: 'projects' } });
  };

  return (
    <div className="min-h-screen bg-bg-primary selection:bg-white selection:text-black">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-24">

        {/* Back link */}
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mb-16 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </button>

        {/* Header */}
        <div className="border-b border-border-color pb-12 mb-16">
          <p className="text-sm font-mono text-text-secondary uppercase tracking-widest mb-4">Publications</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-text-primary">
            All Publications
          </h1>
          <p className="text-text-secondary mt-4 text-lg font-light">
            {PROJECTS.length} publications · sorted by year
          </p>
        </div>

        {/* Publication list */}
        <div className="space-y-0">
          {PROJECTS.map((pub, index) => (
            <div
              key={pub.id}
              className="group grid md:grid-cols-12 gap-6 py-10 border-b border-border-color hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded"
            >
              {/* Index number */}
              <div className="md:col-span-1 text-text-secondary font-mono text-sm pt-1 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="md:col-span-9 space-y-2">
                <h2 className="text-lg font-semibold text-text-primary leading-snug group-hover:text-white transition-colors">
                  {pub.title}
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {renderAuthors(pub.description)}
                </p>
                {pub.citation && (
                  <p className="text-xs font-mono text-text-secondary/70 italic pt-1">
                    {pub.citation}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 pt-2">
                  {pub.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-text-secondary border border-border-color px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year + link */}
              <div className="md:col-span-2 flex flex-col items-end justify-between gap-3">
                {pub.year && (
                  <span className="text-sm font-mono text-text-secondary">{pub.year}</span>
                )}
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors"
                  >
                    PubMed <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
