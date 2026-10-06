import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

// jsdom has no viewport to scroll.
window.scrollTo = vi.fn();
