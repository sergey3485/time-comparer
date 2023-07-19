import {
  sample,
  createEvent,
} from 'effector';

import { City } from 'worldcities/lib/city';

import { $locations, $selectedLocation } from '@/entities/location';

export const deleteCity = createEvent<City>();

sample({
  clock: deleteCity,
  source: $locations,
  fn: (allLocation, deletedLocation) => allLocation.filter((city) => (city.latitude !== deletedLocation.latitude) && (city.longitude !== deletedLocation.longitude)),
  target: $locations,
});

sample({
  clock: deleteCity,
  source: $locations,
  fn: (allLocation) => allLocation[0],
  target: $selectedLocation,
});
