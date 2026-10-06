import { getTagStyle, statusLabel } from '../utils/projectPresentation';
import { PageLayout } from '../components/PageLayout';
import { AnimatedSection } from '../components/AnimatedSection';
import React, { useEffect, useTransition, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink, ArrowLeft, Search, RefreshCw } from 'lucide-react';
import { SOFTWARE_PROJECTS } from '../constants';

export const SoftwareProjectsPage: React.FC = () => {
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
    navigate('/', { state: { scrollTo: 'projects' }, viewTransition: true });
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

  // Compile unique list of tags from SOFTWARE_PROJECTS
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    SOFTWARE_PROJECTS.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, []);

  // Filtered & sorted projects list
  const displayProjects = useMemo(() => {
    return [...SOFTWARE_PROJECTS]
      .sort((a, b) => parseInt(b.year ?? '0') - parseInt(a.year ?? '0'))
      .filter(project => {
        const matchesSearch =
          project.title.toLowerCase().includes(filteredQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(filteredQuery.toLowerCase());

        const matchesTag = !filteredTag || project.tags.includes(filteredTag);

        return matchesSearch && matchesTag;
      });
  }, [filteredQuery, filteredTag]);

  return (
    <PageLayout>
      {/* React 19 Document Metadata Hoisting */}
      <title>Projects | Ryan Seaman</title>
      <meta name="description" content="A collection of projects and tools developed by Ryan Seaman." />

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
            {displayProjects.length} of {SOFTWARE_PROJECTS.length} projects
          </p>
        </div>

        {/* Search bar & filter pills */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects by name, technology, or description..."
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
              className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${!selectedTag
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
                className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${selectedTag === tag
                    ? 'bg-accent-teal/10 border-accent-teal/30 text-accent-teal'
                    : 'bg-white/[0.01] border-white/10 text-text-secondary hover:border-white/20 hover:text-text-primary'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {displayProjects.length > 0 ? (
            displayProjects.map((project) => (
              <AnimatedSection key={project.id} className="rounded-2xl glass-panel-hover">
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
                        <button
                          key={tag}
                          onClick={() => handleTagClick(tag)}
                          className={`text-xs font-mono border px-2 py-0.5 rounded transition-all duration-300 hover:scale-105 cursor-pointer ${getTagStyle(tag)}`}
                        >
                          {tag}
                        </button>
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
                      <div className={`aspect-video w-full overflow-hidden border border-white/10 rounded-md ${project.imageBg ?? ''}`}>
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
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
            ))
          ) : (
            <div className="text-center py-16 border border-white/5 rounded-2xl bg-white/[0.01]">
              <p className="text-text-secondary font-light">No projects match your search or filter tags.</p>
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
