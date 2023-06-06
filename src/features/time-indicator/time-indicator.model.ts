import { combine, sample, createEvent } from 'effector';
import { interval } from 'patronum';
import { format } from 'date-fns';

import {
  $currentTime,
  $timeFormat,
  $time,
} from '@/features/logic/time.model';

export const changeTimeToCurrentTime = createEvent();
export const startInterval = createEvent();

export const $formattedTime = combine([$currentTime, $timeFormat], ([date, dateFormat]) => format(date, dateFormat));

export const $isVisibleRefresher = combine([$currentTime, $time], ([currentTime, time]) => currentTime.toString() !== time.toString());

sample({
  clock: changeTimeToCurrentTime,
  source: $currentTime,
  target: $time,
});

const { tick } = interval({
  timeout: 1000,
  start: startInterval,
});

// TODO: Синхронизировать время в $currentTime с $time, если они равны
sample({
  clock: tick,
  fn: () => new Date(),
  target: $currentTime,
});

startInterval();
