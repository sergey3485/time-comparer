import { fork, allSettled } from 'effector';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/shared/lib/test-utils';

import { Location } from './location';
import { format24hours } from '@/shared/lib/time-format';
import { $time, $timeFormat } from '@/entities/time';
import { $selectedLocation } from '@/entities/location';

const moscow = ;

describe('location', () => {
  it('Должен рендерить карточку локации', () => {
    const time = new Date(2023, 0, 1, 12, 24);

    const scope = fork({
      values: [
        [$time, time],
        [$selectedLocation, moscow],
      ],
    });

    renderWithProviders(<Location location={prague} />, scope);

    const element = screen.queryByRole('listitem');

    expect(element).toBeInTheDocument();
  });

  it('Должен выводить в карточке часы и время соответствующее этой локации', () => {
    const time = new Date(2023, 0, 1, 12, 24);

    const scope = fork({
      values: [
        [$time, time],
        [$timeFormat, format24hours],
        [$selectedLocation, moscow],
      ],
    });

    renderWithProviders(<Location location={prague} />, scope);

    screen.debug();

    const element = screen.queryByText('10:24');

    expect(element).toBeInTheDocument();
  });
});
