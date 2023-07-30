import { fork } from 'effector';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

import worldCities from 'worldcities';
import { City } from 'worldcities/lib/city';
import { renderWithProviders } from '@/shared/lib/test-utils';

import { TimeSlider } from '../time-slider';
import { getMils } from '@/shared/lib/time/get-mils';
import { $time } from '@/entities/time';

const prague = worldCities.getByName('prague') as City;

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
