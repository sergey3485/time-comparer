import { screen } from '@testing-library/react';
import { fork } from 'effector';
import { describe, expect, it } from 'vitest';
import worldCities from 'worldcities';
import { City } from 'worldcities/lib/city';

import { $time } from '@/entities/time';

import { renderWithProviders } from '@/shared/lib/test-utils';
import { getMils } from '@/shared/lib/time/get-mils';

import { TimeSlider } from '../time-slider';

const prague = worldCities.getByName('prague') as City;

describe('slider', () => {
  it('должен рендерить слайдер', () => {
    const time = new Date(2023, 0, 1, 12, 24);

    const mils = getMils(time, prague.timezone);

    const scope = fork({
      values: [[$time, time]],
    });

    const { container } = renderWithProviders(<TimeSlider timeValue={mils} changeLocation={() => {}} />, scope);

    const element = screen.queryByRole('slider');

    expect(element).toBeInTheDocument();
  });
});
