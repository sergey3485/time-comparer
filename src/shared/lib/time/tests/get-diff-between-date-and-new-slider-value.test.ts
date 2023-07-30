import { describe, expect, it } from 'vitest';
import worldCities from 'worldcities';
import { City } from 'worldcities/lib/city';

import { getDiffBetweenDateAndNewSliderValue } from '../get-diff-between-date-and-new-slider-value';

const prague = worldCities.getByName('prague') as City;

describe('get difference between date and new slider value', () => {
  it('Должен вернуть разницу в милисекундах между старым и новым значением времени в выбранном часовом поясе', () => {
    const date = new Date(2023, 7, 6, 10, 24);
    const result = getDiffBetweenDateAndNewSliderValue(date, 900000, prague.timezone);

    expect(result).toBe(-32940000);
  });
});
