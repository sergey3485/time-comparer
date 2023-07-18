import {
  sample,
  createEffect,
} from 'effector';

import { City } from 'worldcities/lib/city';

import { $locations, $selectedLocation } from '@/entities/location';

import { appStarted } from '@/shared/app.model';

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
