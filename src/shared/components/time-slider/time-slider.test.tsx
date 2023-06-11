import { fork, allSettled } from 'effector';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/shared/lib/test-utils';

import { $inputValue, changeInputValue, prague } from '@/features/logic/locations.model';

import { TimeSlider } from './time-slider';
import { $time, changeTimeBySlider } from '@/features/logic/time.model';
import { getMils } from '@/shared/lib/time/getMils';

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

  // it('Должен правильно показывать значение слайдера от времени', () => {
  //   const time = new Date(2023, 0, 1, 12, 24);

  //   const mils = getMils(time, prague.timezone);

  //   const scope = fork({
  //     values: [
  //       [$time, time],
  //     ],
  //   });

  //   renderWithProviders(<TimeSlider timeValue={mils} changeLocation={() => {}} />, scope);

  //   const element = screen.queryByRole('slider');

  //   const attribute = element?.getAttribute('aria-valuenow');

  //   console.log(attribute);

  //   // screen.debug();

  //   expect(attribute).toBe(mils);
  // });

  // it('Должен сменить время при изменение значения слайдера', async () => {
  //   const time = new Date(2023, 0, 1, 12, 24);

  //   const mils = getMils(time, prague.timezone);

  //   const scope = fork({
  //     values: [
  //       [$time, time],
  //     ],
  //   });

  //   renderWithProviders(<TimeSlider timeValue={mils} changeLocation={() => {}} />, scope);

  //   await allSettled(changeTimeBySlider, { scope, params: 0 });

  //   ex
  // });
});
