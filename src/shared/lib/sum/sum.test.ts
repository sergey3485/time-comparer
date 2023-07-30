import { describe, expect, it } from 'vitest';

import { sum } from './sum';

describe('sum', () => {
  it('Должно складывать два числа', () => {
    const result = sum(5, 10);

    expect(result).toBe(15);
  });
});
