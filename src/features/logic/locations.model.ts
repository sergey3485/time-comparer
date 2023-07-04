import {
  sample,
  createEvent,
  createStore,
  createEffect,
} from 'effector';

import worldCities from 'worldcities';
import { City } from 'worldcities/lib/city';
import { appStarted } from '@/shared/app.model';

export const moscow = worldCities.getByName('Moscow') as City;
export const prague = worldCities.getByName('prague') as City;
export const toki = worldCities.getByName('toki') as City;

export const $locations = createStore<City[]>([]);

export const $locationVariants = createStore<City[]>([]);

export const $inputValue = createStore<string>('');

export const $selectedLocation = createStore<City | null>(null);

export const changeInputValue = createEvent<string>();

export const addLocation = createEvent<City>();

export const deleteCity = createEvent<City>();

export const changeSelectedLocation = createEvent<City>();

export const $isVisibleInput = createStore<boolean>(false);

export const createInput = createEvent();

const getCitiesByNameFx = createEffect((inputValue: string) => {
  const loc = inputValue.length >= 3 ? worldCities.getAllByName(inputValue) : [];
  return loc;
});

const getLocationsFromLocalStorageFx = createEffect(() => {
  const savedLocation = localStorage.getItem('locations');

  const parsedLocations = savedLocation ? JSON.parse(savedLocation) as City[] : null;

  const savedLocationToJson = parsedLocations || [] as City[];

  return savedLocationToJson;
});

const getSelectedLocationFx = createEffect(() => {
  const savedSelectedLocation = localStorage.getItem('selectedLocation');
  const parsedData = savedSelectedLocation ? JSON.parse(savedSelectedLocation) as City : null;

  const savedSelectedLocationJson = parsedData || null;
  return savedSelectedLocationJson;
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
  clock: appStarted,
  target: getSelectedLocationFx,
});

sample({
  clock: getSelectedLocationFx.doneData,
  target: $selectedLocation,
});

sample({
  clock: appStarted,
  target: getLocationsFromLocalStorageFx,
});

sample({
  clock: $selectedLocation,
  target: saveSelectedLocationFx,
});

sample({
  clock: getLocationsFromLocalStorageFx.doneData,
  target: $locations,
});

sample({
  clock: $locations,
  target: saveLocationsToLocalStorageFx,
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
  clock: deleteCity,
  source: $locations,
  fn: (allLocation, deletedLocation) => allLocation.filter((city) => (city.latitude !== deletedLocation.latitude) && (city.longitude !== deletedLocation.longitude)),
  target: $locations,
});

sample({
  clock: changeSelectedLocation,
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
  clock: deleteCity,
  source: $locations,
  fn: (allLocation) => allLocation[0],
  target: $selectedLocation,
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
