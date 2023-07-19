import {
  sample,
  createEvent,
  createStore,
  createEffect,
} from 'effector';

import worldCities from 'worldcities';
import { City } from 'worldcities/lib/city';

import {
  $locations,
  $selectedLocation,
} from '@/entities/location';

export const $inputValue = createStore<string>('');

export const $locationVariants = createStore<City[]>([]);

export const changeInputValue = createEvent<string>();

export const addLocation = createEvent<City>();

export const $isVisibleInput = createStore<boolean>(false);

export const createInput = createEvent();

const getCitiesByNameFx = createEffect((inputValue: string) => {
  const loc = inputValue.length >= 3 ? worldCities.getAllByName(inputValue) : [];
  return loc;
});

sample({
  clock: changeInputValue,
  target: $inputValue,
});

sample({
  clock: $inputValue,
  target: getCitiesByNameFx,
});

sample({
  clock: getCitiesByNameFx.doneData,
  target: $locationVariants,
});

sample({
  clock: addLocation,
  source: $locations,
  filter: (allLocation, newLocation) => !allLocation.includes(newLocation),
  fn: (allLocation, newLocation) => [...allLocation, newLocation],
  target: $locations,
});

sample({
  clock: addLocation,
  source: $selectedLocation,
  filter: (selectedLocation) => selectedLocation === null,
  fn: (selectedLocation, newLocation) => newLocation,
  target: $selectedLocation,
});

sample({
  clock: addLocation,
  fn: () => '',
  target: $inputValue,
});

sample({
  clock: addLocation,
  fn: () => [],
  target: $locationVariants,
});

sample({
  clock: createInput,
  fn: () => true,
  target: $isVisibleInput,
});

sample({
  clock: addLocation,
  fn: () => false,
  target: $isVisibleInput,
});
