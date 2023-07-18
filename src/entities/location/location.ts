import {
  createStore,
} from 'effector';

import { City } from 'worldcities/lib/city';

export const $locations = createStore<City[]>([]);

export const $selectedLocation = createStore<City | null>(null);
