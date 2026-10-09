import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import { SoftwareProjectsPage } from '../pages/SoftwareProjectsPage';
import { PublicationsPage } from '../pages/PublicationsPage';
import { ProjectDetailPage } from '../pages/ProjectDetailPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { RouteScroll } from '../components/RouteScroll';

function setup(path = '/') {
  render(<MemoryRouter initialEntries={[path]}><RouteScroll /><Routes>
    <Route path="/" element={<App />} />
    <Route path="/projects" element={<SoftwareProjectsPage />} />
    <Route path="/publications" element={<PublicationsPage />} />
    <Route path="/projects/:slug" element={<ProjectDetailPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></MemoryRouter>);
  return userEvent.setup();
}

describe('site navigation', () => {
  it('connects the homepage, both project stories, and the collection', async () => {
    const user = setup();
    await user.click(screen.getByRole('link', { name: 'Explore Vitessce Annotations' }));
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Vitessce Annotations.');
    expect(document.title).toBe('Vitessce Annotations — Ryan Seaman');
    await user.click(screen.getByRole('link', { name: /Keep exploring VitessceGen/ }));
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('VitessceGen.');
    await user.click(screen.getAllByRole('link', { name: '← All projects' })[0]);
    expect(screen.getByRole('textbox', { name: 'Search projects' })).toBeTruthy();
  });

  it.each([
    { label: 'Work', id: 'projects', heading: 'Making research easier to explore.' },
    { label: 'About', id: 'about', heading: 'How I work' },
    { label: 'Publications', id: 'publications', heading: 'Selected publications' },
  ])('takes $label to its homepage section, including repeat visits', async ({ label, id, heading }) => {
    const user = setup('/projects/vitessce-annotations');
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;
    await user.click(screen.getByRole('link', { name: label }));
    expect(screen.getByRole('heading', { name: heading })).toBeTruthy();
    expect(scrollIntoView.mock.instances).toContain(document.getElementById(id));
    expect(screen.getByRole('link', { name: label }).getAttribute('aria-current')).toBe('location');
    scrollIntoView.mockClear();
    await user.click(screen.getByRole('link', { name: label }));
    expect(scrollIntoView.mock.instances).toContain(document.getElementById(id));
  });

  it.each([
    { link: 'All projects', search: 'Search projects' },
    { link: 'All publications', search: 'Search publications' },
  ])('opens the complete collection through $link', async ({ link, search }) => {
    const user = setup();
    await user.click(screen.getByRole('link', { name: link }));
    expect(screen.getByRole('textbox', { name: search })).toBeTruthy();
  });

  it('keeps scroll position while changing archive search filters', async () => {
    const user = setup('/projects');
    vi.mocked(window.scrollTo).mockClear();
    await user.type(screen.getByRole('textbox'), 'Vitessce');
    expect(window.scrollTo).not.toHaveBeenCalled();
  });

  it('lets keyboard users skip navigation without changing the route', async () => {
    const user = setup('/projects/vitessce-annotations');
    await user.tab();
    expect(document.activeElement).toBe(screen.getByRole('link', { name: 'Skip to content' }));
    await user.keyboard('{Enter}');
    expect(document.activeElement).toBe(screen.getByRole('main'));
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Vitessce Annotations.');
  });

  it.each(['/projects/unknown', '/missing'])('provides a way home from %s', async path => {
    const user = setup(path);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Let’s findour way back.');
    await user.click(screen.getByRole('link', { name: /Back to home/ }));
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Biomedical research.Health technology.');
  });
});
