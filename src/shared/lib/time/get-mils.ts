import { formatInTimeZone } from 'date-fns-tz';

export const getMils = (date: Date, tz: string) => {
  const hour = Number(formatInTimeZone(date, tz, 'H')) * 3600000;

  const min = Number(formatInTimeZone(date, tz, 'm')) * 60000;

  return hour + min;
};
