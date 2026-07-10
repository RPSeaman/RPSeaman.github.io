import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnimatedSection } from '../App';

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

export const PublicationsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBack = () => {
    navigate('/', { state: { scrollTo: 'publications' } });
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
        <div className="fixed top-[80%] left-[8%] w-36 h-36 rounded-full bg-gradient-to-br from-red-500/30 to-amber-500/10 border border-red-400/25 shadow-[0_0_20px_rgba(239,68,68,0.1)] pointer-events-none animate-float-2 z-0" />
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
            <p className="text-sm font-mono text-text-secondary uppercase tracking-widest mb-4">Publications</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-metallic leading-[1.1] pb-1">
              All Publications
            </h1>
            <p className="text-text-secondary mt-4 text-lg font-light">
              {PROJECTS.length} publications · sorted by year
            </p>
          </div>

          {/* Publication cards (with 3D tilt scroll reveals) */}
          <div className="space-y-8">
            {PROJECTS.map((pub, index) => (
              <AnimatedSection key={pub.id} className="rounded-2xl">
                <div className="grid md:grid-cols-12 gap-6 items-start text-left">
                  {/* Index number */}
                  <div className="md:col-span-1 text-text-secondary font-mono text-sm pt-1 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="md:col-span-9 space-y-2">
                    <h2 className="text-lg font-semibold text-text-primary leading-snug group-hover:text-accent-teal transition-colors">
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
                        <span key={tag} className={`text-xs font-mono border px-2 py-0.5 rounded ${getTagStyle(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Year + link */}
                  <div className="md:col-span-2 flex flex-col items-end justify-between gap-3 h-full min-h-[80px]">
                    {pub.year && (
                      <span className="text-sm font-mono text-text-secondary">{pub.year}</span>
                    )}
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-teal transition-colors mt-auto"
                      >
                        PubMed <ExternalLink className="w-3 h-3" />
                      </a>
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
