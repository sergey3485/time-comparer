import formatInTimeZone from 'date-fns-tz/formatInTimeZone';
import { City } from 'worldcities/lib/city';

export const isDayEqual = (selected: City, current: City, time: Date): boolean => {
  const selectedLocationDay = formatInTimeZone(time, selected.timezone, 'dd MMMM');
  const currentLocationDay = formatInTimeZone(time, current.timezone, 'dd MMMM');

  return selectedLocationDay === currentLocationDay;
};
