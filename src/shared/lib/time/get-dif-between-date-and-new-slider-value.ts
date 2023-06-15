import { getMils } from './get-mils';

export const getDifBetweenDateAndNewSliderValue = (firsDate: Date, value: number, tz: string) => {
  const mils = getMils(firsDate, tz);

  return value - mils;
};
