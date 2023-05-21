import {
  sample,
  createEvent,
  createStore,
  createEffect,
} from 'effector';

import { City } from 'worldcities/lib/city';

export const $currentLocation = createStore<City>({} as City);

export const $time = createStore<Date>(new Date());

export const $timeVariant = createStore<'K m aaa' | 'H m'>('H m');

export const changeCurrentLocation = createEvent<City>();

export const changeTimeVariant = createEvent();

export const changeTimeVariantFx = createEffect((timeVariant: 'K m aaa' | 'H m') => (timeVariant === 'H m' ? 'K m aaa' : 'H m'));

sample({
  clock: changeCurrentLocation,
  target: $currentLocation,
});

sample({
  clock: changeTimeVariant,
  source: $timeVariant,
  target: changeTimeVariantFx,
});

sample({
  clock: changeTimeVariantFx.doneData,
  target: $timeVariant,
});
