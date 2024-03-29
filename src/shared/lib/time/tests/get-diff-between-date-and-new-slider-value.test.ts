import { describe, it, expect } from 'vitest';

import { getDiffBetweenDateAndNewSliderValue } from '../get-diff-between-date-and-new-slider-value';

import { prague } from '@/features/logic/locations.model';

describe('get difference between date and new slider value', () => {
  it('Должен вернуть разницу в милисекундах между старым и новым значением времени в выбранном часовом поясе', () => {
    const date = new Date(2023, 7, 6, 10, 24);
    const result = getDiffBetweenDateAndNewSliderValue(date, 900000, prague.timezone);

    expect(result).toBe(-32940000);
  });
});
