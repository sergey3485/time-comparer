import {
  sample, createEvent, createEffect,
} from 'effector';

import { City } from 'worldcities/lib/city';

import { getDiffBetweenDateAndNewSliderValue } from '@/shared/lib/time/get-diff-between-date-and-new-slider-value';

import { $time } from '@/entities/time';

import { $selectedLocation } from '@/entities/location';

export const changeTimeBySlider = createEvent<number>();

const changeTimeBySliderFx = createEffect((data: { date: Date; dif: number, loc: City | null }) => {
  const timeDif = getDiffBetweenDateAndNewSliderValue(data.date, data.dif, data.loc?.timezone as string);

  const resultDate = data.date.getTime() + timeDif;

  return new Date(resultDate);
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
