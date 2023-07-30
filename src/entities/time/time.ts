import { createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';

import { format24hours, TimeFormat } from '@/shared/lib/time-format';

export const $time = createStore<Date>(new Date());

export const $currentTime = createStore(new Date());

export const $timeFormat = createStore<TimeFormat>(format24hours);

export const changeTimeFormat = createEvent<TimeFormat>();

persist({ store: $timeFormat, key: 'time format' });

sample({
  clock: changeTimeFormat,
  target: $timeFormat,
});
