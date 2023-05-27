import {
  sample,
  createEvent,
  createStore,
  createEffect,
} from 'effector';

import { format } from 'date-fns';

import { City } from 'worldcities/lib/city';

export const $time = createStore<Date>(new Date());

export const $timeVariant = createStore<'K:m aaa' | 'HH:m'>('HH:m');

export const changeTimeVariant = createEvent<'K:m aaa' | 'HH:m'>();

export const changeTimeBySlider = createEvent<number>();

const changeTimeBySliderFx = createEffect((date: Date, dif: number) => {
  const timeInMil = +format(date, 'T');
  console.log(timeInMil);
  console.log(dif);
  const newDate = new Date(dif + timeInMil);
  console.log(newDate);
  return date;
});

sample({
  clock: changeTimeVariant,
  target: $timeVariant,
});

sample({
  clock: changeTimeBySlider,
  source: $time,
  fn: (date: Date, dif: number) => new Date(dif + +format(date, 'T')),
  target: $time,
});

// sample({
//   clock: changeTimeBySliderFx.doneData,
//   target: $time,
// });
