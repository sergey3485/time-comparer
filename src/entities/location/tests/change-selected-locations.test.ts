import { describe, it, expect } from 'vitest';

import { fork, allSettled } from 'effector';
import worldCities from 'worldcities';

import { City } from 'worldcities/lib/city';
import { $locations, $selectedLocation, changeSelectedLocation } from '@/entities/location';

const moscow = worldCities.getByName('moscow') as City;
const prague = worldCities.getByName('prague') as City;
const toki = worldCities.getByName('moscow');

describe('изменение выбраной локации', () => {
  it('Должен сменить выбранную локацию', async () => {
    const scope = fork({
      values: [
        [$locations, [prague, moscow, toki]],
        [$selectedLocation, [moscow]],
      ],
    });

    await allSettled(changeSelectedLocation, { scope, params: prague });

    expect(scope.getState($selectedLocation)).toStrictEqual(prague);
  });
});
