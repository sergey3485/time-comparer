import * as React from 'react';

import {
  Box,
  Heading,
  Text,
  Stack,
} from '@effable/react';

import { format, formatISO } from 'date-fns';

import { useUnit } from 'effector-react';

import { getTimezoneOffset, utcToZonedTime } from 'date-fns-tz';

import { City } from 'worldcities/lib/city';

import {} from '@/features/logic/locations.model';
import {
  $timeVariant,
  $time,
} from '@/features/logic/time.model';

export interface LocationProps {
  /**
   * The content
   */
  location: City;
}

export const Location = (props: LocationProps): JSX.Element => {
  const {
    location,
  } = props;

  const {
    timeVariant,
    time,
  } = useUnit({
    timeVariant: $timeVariant,
    time: $time,
  });

  const timeZone = getTimezoneOffset(location.timezone) / (1000 * 60 * 60);

  const currentDay = utcToZonedTime(time, location.timezone);

  const day = format(currentDay, 'd MMMM');

  return (
    <Stack
      direction="column"
      space="2x"
    >
      <Heading variant="h4" color="text.primary">{location.name}</Heading>

      <Text variant="s" color="text.secondary" textAlign="start">GMT {timeZone > 0 ? `+${timeZone}` : timeZone}</Text>

      <Text variant="s" color="text.secondary" textAlign="start">{day}</Text>
    </Stack>
  );
};
