import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { PublicationsPage } from '../pages/PublicationsPage';
import { SoftwareProjectsPage } from '../pages/SoftwareProjectsPage';
import { PROJECTS, SOFTWARE_PROJECTS } from '../constants';

// These tests exercise real page controls and data, independent of viewport animations.
vi.mock('../components/AnimatedSection', () => ({
  AnimatedSection: ({ children }: { children: ReactNode }) => <section>{children}</section>,
}));

const cases = [
  {
    name: 'publications',
    path: '/publications',
    Page: PublicationsPage,
    items: PROJECTS,
    query: 'Nextflow',
    tag: 'Tissue Clearing',
    matchingTitle: PROJECTS.find(item => item.tags.includes('Tissue Clearing'))!.title,
  },
  {
    name: 'projects',
    path: '/projects',
    Page: SoftwareProjectsPage,
    items: SOFTWARE_PROJECTS,
    query: 'AperioVis',
    tag: 'Vitessce',
    matchingTitle: 'VitessceGen',
  },
];

describe.each(cases)('$name', ({ path, Page, items, query, tag, matchingTitle }) => {
  function setup() {
    render(<MemoryRouter initialEntries={[path]}><Page /></MemoryRouter>);
    return userEvent.setup();
  }

  function expectAllResults() {
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(items.length);
    for (const item of items) {
      expect(screen.getByRole('heading', { name: item.title })).toBeTruthy();
    }
  }

  it('restores every result after resetting an unmatched search', async () => {
    const user = setup();
    const input = screen.getByRole('textbox');
    await user.type(input, 'no-match-xyz');
    expect(screen.queryAllByRole('heading', { level: 2 })).toHaveLength(0);

    await user.click(screen.getByRole('button', { name: 'Reset all filters' }));
    expect((input as HTMLInputElement).value).toBe('');
    expectAllResults();
  });

  it('clears the search and selected tag together, then accepts a new search', async () => {
    const user = setup();
    const input = screen.getByRole('textbox');
    await user.click(screen.getAllByRole('button', { name: tag })[0]);
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1);
    expect(screen.getByRole('heading', { name: matchingTitle })).toBeTruthy();
    await user.type(input, 'no-match-xyz');

    await user.click(screen.getByRole('button', { name: 'Reset all filters' }));
    expectAllResults();

    await user.type(input, query);
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1);
    await user.clear(input);
    expectAllResults();
  });

  it('supports filtering from a result card and returning to all tags', async () => {
    const user = setup();
    const card = screen.getByRole('heading', { name: matchingTitle }).closest('section')!;
    await user.click(within(card).getByRole('button', { name: tag }));
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1);
    await user.click(screen.getByRole('button', { name: 'All' }));
    expectAllResults();
  });
});
