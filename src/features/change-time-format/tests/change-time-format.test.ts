import { fork, allSettled } from 'effector';
import { describe, it, expect } from 'vitest';

import { format24hours, format12hours } from '@/shared/lib/time-format';
import { $timeFormat } from '@/entities/time';
import { changeTimeFormat } from '@/features/change-time-format';

describe('change time format', () => {
  it('должен сменить формат времени', async () => {
    const scope = fork({
      values: [
        [$timeFormat, format24hours],
      ],
    });

    await allSettled(changeTimeFormat, { scope, params: format12hours });

    expect(scope.getState($timeFormat)).toBe(format12hours);
  });
});
