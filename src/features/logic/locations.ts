import {
  sample,
  createEvent,
  createStore,
  Store,
  Event,
} from 'effector';

import worldCities from 'worldcities';

const city = worldCities.getByName('lo');

type T = typeof city;

export const $locations = createStore<T[]>([]);

export const $locationVariants = createStore<T[]>([]);

export const $inputValue = createStore<string>('');

export const changeInputValue = createEvent<string>();

export const addLocation = createEvent<T>();

sample({
  clock: changeInputValue,
  target: $inputValue,
});

sample({
  clock: changeInputValue,
  filter: (inputValue) => inputValue.length >= 3,
  fn: (inputValue) => {
    const loc = worldCities.getAllByName(inputValue);
    return loc;
  },
  target: $locationVariants,
});

sample({
  clock:
});

sample({
  clock: addLocation,
  source: [addLocation, $locations],
  fn: (data) => [...data[1], data[0]],
  target: $locations,
});
