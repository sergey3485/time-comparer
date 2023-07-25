import { fork, allSettled } from 'effector';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/shared/lib/test-utils';

import { TimeIndicator } from './time-indicator';
import { changeTimeToCurrentTime } from './time-indicator.model';
import { $currentTime, $time } from '@/entities/time';

describe('time indicator', () => {
  it('отображение текущего времени', () => {
    const currentDate = new Date(2023, 0, 1, 12, 24);

    const scope = fork({
      values: [
        [$currentTime, currentDate],
      ],
    });

    renderWithProviders(<TimeIndicator />, scope);

    const element = screen.queryByText('12:24');

    expect(element).toBeInTheDocument();
  });

  it('отображение иконки обновления времени', async () => {
    const time = new Date(2023, 2, 2, 2, 2);
    const currentTime = new Date(2023, 3, 3, 3, 3);
    const scope = fork({
      values: [
        [$currentTime, currentTime],
        [$time, time],
      ],
    });

    renderWithProviders(<TimeIndicator />, scope);

    const icon = screen.queryByLabelText('set time to current time');

    expect(icon).toBeInTheDocument();

    await allSettled(changeTimeToCurrentTime, { scope });

    expect(icon).not.toBeInTheDocument();
  });
});
