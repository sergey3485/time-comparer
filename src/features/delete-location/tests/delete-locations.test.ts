import { describe, it, expect } from 'vitest';

import { fork, allSettled } from 'effector';
import worldCities from 'worldcities';
import { $locations, $selectedLocation } from '@/entities/location';
import { deleteCity } from '@/features/delete-location';

const moscow = worldCities.getByName('moscow');
const prague = worldCities.getByName('prague');
const toki = worldCities.getByName('toki');

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

  it('Должен при удалении выбранного города ставить выбранным первый город из списка', async () => {
    const scope = fork({
      values: [
        [$locations, [prague, moscow, toki]],
        [$selectedLocation, prague],
      ],
    });

    await allSettled(deleteCity, { scope, params: prague });

    expect(scope.getState($selectedLocation)).toStrictEqual(moscow);

    await allSettled(deleteCity, { scope, params: moscow });

    expect(scope.getState($selectedLocation)).toStrictEqual(toki);
  });

  it('Должен выбранный город стать null при удалении всех городов', async () => {
    const scope = fork({
      values: [
        [$locations, [prague]],
        [$selectedLocation, prague],
      ],
    });

    await allSettled(deleteCity, { scope, params: prague });

    expect(scope.getState($selectedLocation)).toBe(null);
  });
});
