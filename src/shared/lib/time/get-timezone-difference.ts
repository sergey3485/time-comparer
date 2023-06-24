import { getTimezoneInHours } from '@/shared/lib/time/get-timezone-in-hours';

export const getTimezoneDifference = (currentLocationTimezone: string, selectedLocationTimezone: string): number => {
  const currentTimezone = getTimezoneInHours(currentLocationTimezone);

  const selectedTimezone = getTimezoneInHours(selectedLocationTimezone);

  return currentTimezone - selectedTimezone;
};
