import {
  sample, createEvent, createStore, createEffect,
} from 'effector';

import { format } from 'date-fns';

import { utcToZonedTime } from 'date-fns-tz';

import { City } from 'worldcities/lib/city';

import { $selectedLocation } from './locations.model';

export const $time = createStore<Date>(new Date());

export const $timeVariant = createStore<'KK:mm aaa' | 'HH:mm'>('HH:mm');

export const changeTimeVariant = createEvent<'KK:mm aaa' | 'HH:mm'>();

export const changeTimeBySlider = createEvent<number>();

const changeTimeBySliderFx = createEffect((data: { date: Date; dif: number, loc: City }) => {
  const hour = Math.trunc(data.dif / 3600000);
  const min = Math.trunc((data.dif - hour * 3600000) / 60000);
  const sec = Math.trunc((data.dif - hour * 3600000 - min * 60000) / 1000);
  const milS = Math.trunc(data.dif - hour * 3600000 - min * 60000 - sec * 1000);
  // console.log('hours ', hour);
  // console.log('minutes ', min);
  // console.log('seconds ', sec);
  // console.log('mill seconds ', milS);

  const localDate = utcToZonedTime(data.date, data.loc.timezone).getTime();

  const newDate = new Date(localDate).setHours(hour, min, sec, milS);

  const timeDif = newDate - localDate;

  const resultDate = data.date.getTime() + timeDif;
  // console.log('old date ', data.date);
  // console.log('local date', localDate);
  // console.log('new local date', newDate);
  // console.log('dif ', timeDif);

  return new Date(resultDate);
});

sample({
  clock: changeTimeVariant,
  target: $timeVariant,
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
