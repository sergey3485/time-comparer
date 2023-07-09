import { fork } from 'effector';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/shared/lib/test-utils';

import { prague } from '@/features/locations/locations.model';

import { TimeSlider } from './time-slider';
import { $time } from '@/features/time/time.model';
import { getMils } from '@/shared/lib/time/get-mils';

describe('slider', () => {
  it('должен рендерить слайдер', () => {
    const time = new Date(2023, 0, 1, 12, 24);

    const mils = getMils(time, prague.timezone);

    const scope = fork({
      values: [
        [$time, time],
      ],
    });

    const { container } = renderWithProviders(<TimeSlider timeValue={mils} changeLocation={() => {}} />, scope);

    const element = screen.queryByRole('slider');

    expect(element).toBeInTheDocument();
  });
});
