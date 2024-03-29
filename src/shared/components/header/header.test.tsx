import { fork, allSettled } from 'effector';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/shared/lib/test-utils';

import { $currentTime, $timeFormat, changeTimeFormat } from '@/features/logic/time.model';
import { Header } from './header';

import { TimeFormat, format24hours, format12hours } from '@/shared/lib/time-format';

describe('header', () => {
  it('Должен отображать кнопки смены формата времени', () => {
    const scope = fork();

    renderWithProviders(<Header />, scope);

    const classicFormat = screen.queryByText('24');
    const ampmFormat = screen.queryByText('12');

    expect(classicFormat).toBeInTheDocument();
    expect(ampmFormat).toBeInTheDocument();
  });

  it('Должен отображать текущее время', () => {
    const currentDate = new Date(2023, 0, 1, 12, 24);

    const scope = fork({
      values: [
        [$currentTime, currentDate],
      ],
    });

    renderWithProviders(<Header />, scope);

    const element = screen.queryByText('12:24');

    expect(element).toBeInTheDocument();
  });

  it('Должен менять формат отображения времени', async () => {
    const currentDate = new Date(2023, 0, 1, 12, 24);

    const scope = fork({
      values: [
        [$currentTime, currentDate],
        [$timeFormat, format24hours],
      ],
    });

    renderWithProviders(<Header />, scope);

    const element = screen.queryByText('12:24');

    expect(element).toBeInTheDocument();

    await allSettled(changeTimeFormat, { scope, params: format12hours });

    const changedTime = screen.queryByText('12:24 pm');

    expect(changedTime).toBeInTheDocument();
  });
});
