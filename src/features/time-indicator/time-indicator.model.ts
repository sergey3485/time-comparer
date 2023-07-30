import { format } from 'date-fns';
import { combine, createEvent, sample } from 'effector';
import { interval } from 'patronum';

import { $currentTime, $time, $timeFormat } from '@/entities/time';
import { $locations } from '@/entities/location';

export const changeTimeToCurrentTime = createEvent();
export const startInterval = createEvent();

export const $formattedTime = combine([$currentTime, $timeFormat], ([date, dateFormat]) => format(date, dateFormat));

export const $isRefreshButtonVisible = combine(
  [$currentTime, $time],
  ([currentTime, time]) => currentTime.toString() !== time.toString(),
);

sample({
  clock: changeTimeToCurrentTime,
  source: $currentTime,
  target: $time,
});

sample({
  clock: $locations,
  filter: (location) => location.length === 0,
  target: changeTimeToCurrentTime,
});

const { tick } = interval({
  timeout: 1000,
  start: startInterval,
});

sample({
  clock: tick,
  source: $isRefreshButtonVisible,
  filter: (data) => !data,
  fn: () => new Date(),
  target: $time,
});

sample({
  clock: tick,
  fn: () => new Date(),
  target: $currentTime,
});

startInterval();
