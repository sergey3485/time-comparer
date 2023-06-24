import { getTimezoneOffset } from 'date-fns-tz';

export const getTimezoneInHours = (timezone: string): number => {
  return getTimezoneOffset(timezone) / (1000 * 60 * 60);
};
