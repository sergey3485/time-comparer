import { sample, createEvent, createStore, createEffect } from 'effector';

import { format } from 'date-fns';

import { City } from 'worldcities/lib/city';

export const $time = createStore<Date>(new Date());

export const $timeVariant = createStore<'KK:mm aaa' | 'HH:mm'>('HH:mm');

export const changeTimeVariant = createEvent<'KK:mm aaa' | 'HH:mm'>();

export const changeTimeBySlider = createEvent<number>();

const changeTimeBySliderFx = createEffect((data: { date: Date; dif: number }) => {
  const hour = Math.trunc(data.dif / 3600000);
  const min = Math.trunc((data.dif - hour * 3600000) / 60000);
  const sec = Math.trunc((data.dif - hour * 3600000 - min * 60000) / 1000);
  const milS = Math.trunc(data.dif - hour * 3600000 - min * 60000 - sec * 1000);
  console.log('hours ', hour);
  console.log('minutes ', min);
  console.log('seconds ', sec);
  console.log('mill seconds ', milS);
  console.log('old date ', data.date);
  const newDate = new Date(data.date).setHours(hour, min, sec, milS);
  console.log('new date ', new Date(newDate));
  // console.log('dif ', data.dif);

  return new Date(newDate);
});

sample({
  clock: changeTimeVariant,
  target: $timeVariant,
});

sample({
  clock: changeTimeBySlider,
  source: $time,
  fn: (date, dif) => ({
    date,
    dif,
  }),
  target: changeTimeBySliderFx,
});

sample({
  clock: changeTimeBySliderFx.doneData,
  target: $time,
});
