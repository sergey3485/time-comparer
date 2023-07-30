import {
  createEffect, createEvent, createStore, sample,
} from 'effector';
import { persist } from 'effector-storage/local';
import { City } from 'worldcities/lib/city';

import { appStarted } from '@/shared/app.model';

export const $locations = createStore<City[]>([]);

export const $selectedLocation = createStore<City | null>(null);

export const changeSelectedLocation = createEvent<City>();

persist({ store: $locations, key: 'locations' });
persist({ store: $selectedLocation, key: 'selectedLocation' });

sample({
  clock: changeSelectedLocation,
  target: $selectedLocation,
});

sample({
  clock: $locations,
  filter: (locations) => locations.length === 0,
  fn: () => null,
  target: $selectedLocation,
});
