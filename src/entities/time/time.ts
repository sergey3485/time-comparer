import { createStore, createEvent, sample } from 'effector';

import { TimeFormat, format24hours } from '@/shared/lib/time-format';

export const $time = createStore<Date>(new Date());

export const $currentTime = createStore(new Date());

export const $timeFormat = createStore<TimeFormat>(format24hours);

export const changeTimeFormat = createEvent<TimeFormat>();

sample({
  clock: changeTimeFormat,
  target: $timeFormat,
});
