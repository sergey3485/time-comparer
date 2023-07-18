import {
  sample,
  createEffect,
} from 'effector';

import { City } from 'worldcities/lib/city';

import { $locations, $selectedLocation } from '@/entities/location';

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
