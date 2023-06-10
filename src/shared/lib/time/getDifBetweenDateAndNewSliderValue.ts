import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

import { getMils } from './getMils';

export const getDifBetweenDateAndNewSliderValue = (firsDate: Date, value: number, tz: string) => {
  const mils = getMils(firsDate, tz);

  return value - mils;
};
