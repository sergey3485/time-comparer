/* eslint-disable @typescript-eslint/indent */
import {
  sample, createEvent, createStore, createEffect,
} from 'effector';

import { City } from 'worldcities/lib/city';

import { getDifBetweenDateAndNewSliderValue } from '@/shared/lib/time/get-dif-between-date-and-new-slider-value';

import { $selectedLocation } from './locations.model';

export const $time = createStore<Date>(new Date());

export const $currentTime = createStore(new Date());

export const $timeFormat = createStore<'hh:mm aaa' | 'HH:mm'>('HH:mm');

export const changeTimeFormat = createEvent<'hh:mm aaa' | 'HH:mm'>();

export const changeTimeBySlider = createEvent<number>();

const changeTimeBySliderFx = createEffect((data: { date: Date; dif: number, loc: City | null }) => {
  const timeDif = getDifBetweenDateAndNewSliderValue(data.date, data.dif, data.loc?.timezone as string);

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
