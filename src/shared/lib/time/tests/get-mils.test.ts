import { describe, it, expect } from 'vitest';
import worldCities from 'worldcities';
import { City } from 'worldcities/lib/city';

import { getMils } from '../get-mils';

const prague = worldCities.getByName('prague') as City;

describe('get milliseconds', () => {
  it('Должен возвращать колличество милисекунд равное их колличеству в часах и минутах, прошедших с начала дня в зависимости от тайм зоны', () => {
    const date = new Date(2023, 7, 6, 10, 24);

    const milliseconds = getMils(date, prague.timezone);

    expect(milliseconds).toBe(33840000);
  });
});
