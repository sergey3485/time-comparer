import { describe, it, expect } from 'vitest';

import { moscow } from '@/features/locations/locations.model';

import { getTimezoneInHours } from '../get-timezone-in-hours';

describe('getTimezoneInHours', () => {
  it('Должен возвращать часовой пояс в виде числа', () => {
    const timezoneInHours = getTimezoneInHours(moscow.timezone);

    expect(timezoneInHours).toBe(3);
  });
});
