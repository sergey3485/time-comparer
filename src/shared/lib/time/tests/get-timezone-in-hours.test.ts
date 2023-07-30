import { describe, expect, it } from 'vitest';
import worldCities from 'worldcities';
import { City } from 'worldcities/lib/city';

import { getTimezoneInHours } from '../get-timezone-in-hours';

const moscow = worldCities.getByName('moscow') as City;

describe('getTimezoneInHours', () => {
  it('Должен возвращать часовой пояс в виде числа', () => {
    const timezoneInHours = getTimezoneInHours(moscow.timezone);

    expect(timezoneInHours).toBe(3);
  });
});
