import { City } from 'worldcities/lib/city';

export const isTwoLocationEqual = (selected: City, current: City): boolean => {
  const isEqual = selected.longitude === current.longitude && selected.latitude === current.latitude;

  return isEqual;
};
