import { describe, it, expect } from 'vitest';
import worldCities from 'worldcities';
import { City } from 'worldcities/lib/city';

import { getTimezoneDifference } from '../get-timezone-difference';

const moscow = worldCities.getByName('moscow') as City;
const prague = worldCities.getByName('prague') as City;

describe('getTimezoneDifference', () => {
  it('должен возвращать разницу между двумя часовыми поясами', () => {
    const timezoneDifference = getTimezoneDifference(moscow.timezone, prague.timezone);

    expect(timezoneDifference).toBe(1);
  });
});
