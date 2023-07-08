/* eslint-disable @typescript-eslint/indent */
import {
  sample, createEvent, createStore, createEffect,
} from 'effector';

import { City } from 'worldcities/lib/city';

import { getDiffBetweenDateAndNewSliderValue } from '@/shared/lib/time/get-diff-between-date-and-new-slider-value';

import { $selectedLocation } from './locations.model';
import { TimeFormat, format24hours } from '@/shared/lib/time-format';

export const $time = createStore<Date>(new Date());

export const $currentTime = createStore(new Date());

export const $timeFormat = createStore<TimeFormat>(format24hours);

export const changeTimeFormat = createEvent<TimeFormat>();

export const changeTimeBySlider = createEvent<number>();

const changeTimeBySliderFx = createEffect((data: { date: Date; dif: number, loc: City | null }) => {
  const timeDif = getDiffBetweenDateAndNewSliderValue(data.date, data.dif, data.loc?.timezone as string);

  const resultDate = data.date.getTime() + timeDif;

  return new Date(resultDate);
});

sample({
  clock: changeTimeFormat,
  target: $timeFormat,
});

sample({
  clock: changeTimeBySlider,
  source: { $time, $selectedLocation },
  fn: (data, dif) => ({
    date: data.$time,
    loc: data.$selectedLocation,
    dif,
  }),
  target: changeTimeBySliderFx,
});

sample({
  clock: changeTimeBySliderFx.doneData,
  target: $time,
});
