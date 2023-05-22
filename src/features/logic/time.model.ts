import {
  sample,
  createEvent,
  createStore,
  createEffect,
} from 'effector';

import { City } from 'worldcities/lib/city';

export const $currentLocation = createStore<City>({} as City);

export const $time = createStore<Date>(new Date());

export const $timeVariant = createStore<'K:m aaa' | 'H:m'>('H:m');

export const changeCurrentLocation = createEvent<City>();

export const changeTimeVariant = createEvent<'K:m aaa' | 'H:m'>();

sample({
  clock: changeCurrentLocation,
  target: $currentLocation,
});

sample({
  clock: changeTimeVariant,
  target: $timeVariant,
});
