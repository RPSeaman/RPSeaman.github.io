import { AuthorList } from '../components/AuthorList';
import { getTagStyle } from '../utils/projectPresentation';
import { PageLayout } from '../components/PageLayout';
import { AnimatedSection } from '../components/AnimatedSection';
import React, { useEffect, useTransition, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowLeft, Search, RefreshCw } from 'lucide-react';
import { PROJECTS } from '../constants';

export const PublicationsPage: React.FC = () => {
  const navigate = useNavigate();

  // Search & Filtering states with React 19 useTransition
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const [filteredQuery, setFilteredQuery] = useState('');
  const [filteredTag, setFilteredTag] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBack = () => {
    navigate('/', { state: { scrollTo: 'publications' }, viewTransition: true });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    startTransition(() => {
      setFilteredQuery(val);
    });
  };

  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag);
    startTransition(() => {
      setFilteredTag(tag);
    });
  };

  // Compile unique list of tags from PROJECTS
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, []);

  // Filtered publications list
  const displayPublications = useMemo(() => {
    return PROJECTS.filter(pub => {
      const matchesSearch =
        pub.title.toLowerCase().includes(filteredQuery.toLowerCase()) ||
        pub.description.toLowerCase().includes(filteredQuery.toLowerCase()) ||
        (pub.citation && pub.citation.toLowerCase().includes(filteredQuery.toLowerCase()));

      const matchesTag = !filteredTag || pub.tags.includes(filteredTag);

      return matchesSearch && matchesTag;
    });
  }, [filteredQuery, filteredTag]);

  return (
    <PageLayout>
      {/* React 19 Document Metadata Hoisting */}
      <title>Publications | Ryan Seaman</title>
      <meta name="description" content="Academic publications and preprint research by Ryan Seaman in single-cell genomics and bioinformatics." />

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
            {displayPublications.length} of {PROJECTS.length} publications · sorted by year
          </p>
        </div>

        {/* Search bar & filter pills */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search publications by title, author, or citation details..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-5 py-3 pl-12 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-accent-teal/40 focus:outline-none text-text-primary placeholder:text-text-secondary/50 transition-all duration-300"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/50">
              <Search className="w-5 h-5" />
            </span>
            {isPending && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-teal text-xs font-mono flex items-center gap-1.5 animate-pulse">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                Filtering...
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono text-text-secondary/50 mr-1">Filter by tag:</span>
            <button
              onClick={() => handleTagClick(null)}
              className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
                !selectedTag
                  ? 'bg-accent-teal/10 border-accent-teal/30 text-accent-teal'
                  : 'bg-white/[0.01] border-white/10 text-text-secondary hover:border-white/20 hover:text-text-primary'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-accent-teal/10 border-accent-teal/30 text-accent-teal'
                    : 'bg-white/[0.01] border-white/10 text-text-secondary hover:border-white/20 hover:text-text-primary'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Publication cards */}
        <div className="space-y-8">
          {displayPublications.length > 0 ? (
            displayPublications.map((pub, index) => (
              <AnimatedSection key={pub.id} className="rounded-2xl glass-panel-hover">
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
                      <AuthorList description={pub.description} />
                    </p>
                    {pub.citation && (
                      <p className="text-xs font-mono text-text-secondary/70 italic pt-1">
                        {pub.citation}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {pub.tags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => handleTagClick(tag)}
                          className={`text-xs font-mono border px-2 py-0.5 rounded transition-all duration-300 hover:scale-105 cursor-pointer ${getTagStyle(tag)}`}
                        >
                          {tag}
                        </button>
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
            ))
          ) : (
            <div className="text-center py-16 border border-white/5 rounded-2xl bg-white/[0.01]">
              <p className="text-text-secondary font-light">No publications match your search or filter tags.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilteredQuery('');
                  handleTagClick(null);
                }}
                className="mt-4 text-xs font-mono text-accent-teal hover:underline cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};
