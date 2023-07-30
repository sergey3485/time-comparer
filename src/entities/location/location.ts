import {
  createEffect, createEvent, createStore, sample,
} from 'effector';
import { City } from 'worldcities/lib/city';

import { appStarted } from '@/shared/app.model';

export const $locations = createStore<City[]>([]);

export const $selectedLocation = createStore<City | null>(null);

export const changeSelectedLocation = createEvent<City>();

sample({
  clock: changeSelectedLocation,
  target: $selectedLocation,
});

const getLocationsFromLocalStorageFx = createEffect(() => {
  const savedLocation = localStorage.getItem('locations');

  const parsedLocations = savedLocation ? (JSON.parse(savedLocation) as City[]) : null;

  const savedLocationToJson = parsedLocations || ([] as City[]);

  return savedLocationToJson;
});

const getSelectedLocationFx = createEffect(() => {
  const savedSelectedLocation = localStorage.getItem('selectedLocation');
  const parsedData = savedSelectedLocation ? (JSON.parse(savedSelectedLocation) as City) : null;

  const savedSelectedLocationJson = parsedData || null;
  return savedSelectedLocationJson;
});

sample({
  clock: appStarted,
  target: getSelectedLocationFx,
});

sample({
  clock: appStarted,
  target: getLocationsFromLocalStorageFx,
});

sample({
  clock: getLocationsFromLocalStorageFx.doneData,
  target: $locations,
});

sample({
  clock: getSelectedLocationFx.doneData,
  target: $selectedLocation,
});

sample({
  clock: $locations,
  filter: (locations) => locations.length === 0,
  fn: () => null,
  target: $selectedLocation,
});

const saveLocationsToLocalStorageFx = createEffect((locations: City[]) => {
  const savedLocationsToString = JSON.stringify(locations);
  localStorage.setItem('locations', savedLocationsToString);
});

const saveSelectedLocationFx = createEffect((selectedLocation: City | null) => {
  const savedSelectedLocation = JSON.stringify(selectedLocation);
  localStorage.setItem('selectedLocation', savedSelectedLocation);
});

sample({
  clock: $locations,
  target: saveLocationsToLocalStorageFx,
});

sample({
  clock: $selectedLocation,
  target: saveSelectedLocationFx,
});
