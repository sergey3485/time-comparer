import { zonedTimeToUtc } from 'date-fns-tz';

export const getUtcTime = (time: Date) => {
  const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return zonedTimeToUtc(time, localTz);
};
