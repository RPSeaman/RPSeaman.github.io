import { useId, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PageLayout } from './PageLayout';

type Item = { id: string; title: string; description: string; tags: string[]; citation?: string };
type Props<T extends Item> = {
  title: string; label: string; introduction: string; items: T[];
  renderItem: (item: T, onTag: (tag: string) => void, selectedTag: string) => ReactNode;
};
export function Archive<T extends Item>({ title, label, introduction, items, renderItem }: Props<T>) {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const selectedTag = params.get('topic') ?? '';
  const [topicsOpen, setTopicsOpen] = useState(Boolean(selectedTag));
  const searchId = useId();
  const tags = useMemo(() => [...new Set(items.flatMap(item => item.tags))].sort(), [items]);
  const results = items.filter(item => (!selectedTag || item.tags.includes(selectedTag)) &&
    [item.title, item.description, item.citation ?? '', ...item.tags].join(' ').toLowerCase().includes(query.trim().toLowerCase()));
  function setFilter(key: 'q' | 'topic', value: string) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value); else next.delete(key);
    setParams(next, { replace: true, preventScrollReset: true });
  }
  function chooseTag(tag: string) { setFilter('topic', tag); setTopicsOpen(true); }
  return <PageLayout><title>{`${title} — Ryan Seaman`}</title><div className="wrap archive">
    <header className="page-intro"><Link className="breadcrumb" to="/">← Home</Link><p className="meta">{label}</p><h1>{title}<span className="title-period">.</span></h1><p className="page-lede">{introduction}</p></header>
    <div className="archive-toolbar"><div className="search-field"><label htmlFor={searchId}>Search {title.toLowerCase()}</label><input id={searchId} type="text" inputMode="search" value={query} onChange={event=>setFilter('q',event.target.value)} placeholder="Search by title, topic, or keyword" /></div><button className="filter-toggle" aria-expanded={topicsOpen} aria-controls="topic-filters" onClick={()=>setTopicsOpen(!topicsOpen)}>Filter by topic <span aria-hidden="true">{topicsOpen ? '−' : '+'}</span></button></div>
    {topicsOpen && <div id="topic-filters" className="topic-filters" role="group" aria-label="Topics"><button aria-pressed={!selectedTag} onClick={()=>chooseTag('')}>All</button>{tags.map(tag=><button key={tag} aria-pressed={selectedTag===tag} onClick={()=>chooseTag(tag)}>{tag}</button>)}</div>}
    <div className="result-summary"><p role="status">{results.length} {results.length === 1 ? 'result' : 'results'}{selectedTag && <> · {selectedTag}</>}</p>{(query || selectedTag) && <button className="text-button" onClick={()=>setParams({}, { replace: true })}>Reset all filters</button>}</div>
    <div className="archive-results">{results.map(item=>renderItem(item, chooseTag, selectedTag))}</div>
    {!results.length && <div className="empty-state"><p>No matches this time.</p><span>Try another term or reset your filters to see everything.</span></div>}
    <div className="archive-end"><p>Continue exploring</p><Link className="text-link" to={title==='Projects' ? '/publications' : '/projects'}>{title==='Projects' ? 'Research publications' : 'Projects & ideas'} <span aria-hidden="true">→</span></Link></div>
  </div></PageLayout>;
}
export function TopicLinks({ tags, onTag, selectedTag }: { tags: string[]; onTag: (tag: string) => void; selectedTag: string }) {
  return <div className="topic-links" aria-label="Filter by topic">{tags.map(tag=><button key={tag} aria-pressed={selectedTag===tag} onClick={()=>onTag(tag)}>{tag}</button>)}</div>;
}
