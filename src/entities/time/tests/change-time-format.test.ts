import { allSettled, fork } from 'effector';
import { describe, expect, it } from 'vitest';

import { $timeFormat, changeTimeFormat } from '@/entities/time';

import { format12hours, format24hours } from '@/shared/lib/time-format';

describe('change time format', () => {
  it('должен сменить формат времени', async () => {
    const scope = fork({
      values: [[$timeFormat, format24hours]],
    });

    await allSettled(changeTimeFormat, { scope, params: format12hours });

    expect(scope.getState($timeFormat)).toBe(format12hours);
  });
});
