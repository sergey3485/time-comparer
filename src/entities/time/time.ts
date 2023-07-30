import { createEvent, createStore, sample } from 'effector';

import { format24hours, TimeFormat } from '@/shared/lib/time-format';

export const $time = createStore<Date>(new Date());

export const $currentTime = createStore(new Date());

export const $timeFormat = createStore<TimeFormat>(format24hours);

export const changeTimeFormat = createEvent<TimeFormat>();

sample({
  clock: changeTimeFormat,
  target: $timeFormat,
});
