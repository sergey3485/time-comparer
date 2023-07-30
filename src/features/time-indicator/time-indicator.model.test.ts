import { allSettled, fork } from 'effector';
import { describe, expect, it } from 'vitest';

import { $currentTime, $time } from '@/entities/time';

import { changeTimeToCurrentTime } from './time-indicator.model';

describe('time-indicator', () => {
  it('Должен менять время на текущее', async () => {
    const time = new Date(2023, 2, 2, 2, 2);
    const currentTime = new Date(2023, 3, 3, 3, 3);

    const scope = fork({
      values: [
        [$currentTime, currentTime],
        [$time, time],
      ],
    });

    await allSettled(changeTimeToCurrentTime, { scope });

    expect(scope.getState($time)).toStrictEqual(scope.getState($currentTime));
  });
});
