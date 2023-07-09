import { describe, it, expect } from 'vitest';

import { fork, allSettled } from 'effector';

import {
  changeTimeBySlider,
  $time,
} from '../time.model';

import {
  $selectedLocation,
  prague,
} from '../../locations/locations.model';

describe('time model', () => {
  describe('слайдер', () => {
    it('должен изменить время при смене значения слайдера', async () => {
      const initialDate = new Date(2023, 5, 5, 10, 0, 0, 0);
      const expectedDate = new Date(2023, 5, 5, 1, 15, 0, 0);

      const scope = fork({
        values: [
          [$time, initialDate],
          [$selectedLocation, prague],
        ],
      });

      await allSettled(changeTimeBySlider, { scope, params: 900000 });
      expect(scope.getState($time)).toStrictEqual(expectedDate);
    });
  });
});
