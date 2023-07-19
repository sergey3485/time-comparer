import {
  sample, createEvent,
} from 'effector';

import { $timeFormat } from '@/entities/time';

import { TimeFormat } from '@/shared/lib/time-format';

export const changeTimeFormat = createEvent<TimeFormat>();

sample({
  clock: changeTimeFormat,
  target: $timeFormat,
});
