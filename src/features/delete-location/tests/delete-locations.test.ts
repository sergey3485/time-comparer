import { describe, it, expect } from 'vitest';

import { fork, allSettled } from 'effector';
import worldCities from 'worldcities';

import {
  $inputValue, $locationVariants, addLocation, changeInputValue,
} from '@/features/add-new-location';
import { $locations, $selectedLocation } from '@/entities/location';
import { deleteCity } from '@/features/delete-location';

const moscow = worldCities.getByName('moscow');
const prague = worldCities.getByName('prague');
const toki = worldCities.getByName('moscow');

describe('Удаление локации', () => {
  it('Должен удалить город из списка городов', async () => {
    const scope = fork({
      values: [
        [$locations, [prague]],
      ],
    });

    await allSettled(deleteCity, { scope, params: prague });

    expect(scope.getState($locations)).toStrictEqual([]);
  });

  it('Должен при удалении города ставить выбранным первый город из списка', async () => {
    const scope = fork({
      values: [
        [$locations, [prague, moscow, toki]],
      ],
    });

    await allSettled(deleteCity, { scope, params: prague });

    expect(scope.getState($selectedLocation)).toStrictEqual(moscow);

    await allSettled(deleteCity, { scope, params: moscow });

    expect(scope.getState($selectedLocation)).toStrictEqual(toki);
  });
});
