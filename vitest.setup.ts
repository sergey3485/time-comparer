import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

import '@testing-library/dom';

expect.extend(matchers);
