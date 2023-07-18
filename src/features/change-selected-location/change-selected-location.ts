import { createEvent, sample } from 'effector';
import { City } from 'worldcities/lib/city';

import { $selectedLocation } from '@/entities/location';

export const changeSelectedLocation = createEvent<City>();

sample({
  clock: changeSelectedLocation,
  target: $selectedLocation,
});
