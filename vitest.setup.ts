import matchers from '@testing-library/jest-dom/matchers';
// eslint-disable-next-line import/no-extraneous-dependencies
import { cleanup } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, afterEach, vi } from 'vitest';

import '@testing-library/dom';

expect.extend(matchers);

afterEach(() => cleanup());

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })),
});
