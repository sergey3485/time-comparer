import { describe, it, expect } from 'vitest';

import { prague, moscow } from '@/features/logic/locations.model';

import { getTimezoneDifference } from '../get-timezone-difference';

describe('getTimezoneDifference', () => {
  it('должен возвращать разницу между двумя часовыми поясами', () => {
    const timezoneDifference = getTimezoneDifference(moscow.timezone, prague.timezone);

    expect(timezoneDifference).toBe(1);
  });
});
