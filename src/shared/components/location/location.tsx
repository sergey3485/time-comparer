import * as React from 'react';
import { RiCloseLine } from 'react-icons/ri';

import {
  Box,
  Heading,
  Text,
  Stack,
  IconButton,
} from '@chakra-ui/react';

import { format } from 'date-fns';

import { useUnit } from 'effector-react';

import { getTimezoneOffset, utcToZonedTime, formatInTimeZone } from 'date-fns-tz';

import { City } from 'worldcities/lib/city';

import { $selectedLocation, changeSelectedLocation, deleteCity } from '@/features/logic/locations.model';
import {
  $timeFormat,
  $time,
} from '@/features/logic/time.model';
import { getMils } from '@/shared/lib/time/getMils';

import { TimeSlider } from '@/shared/components/time-slider';

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
    selectedLoc,
    selectLoc,
    deleteLocation,
  } = useUnit({
    timeVariant: $timeFormat,
    time: $time,
    selectedLoc: $selectedLocation,
    selectLoc: changeSelectedLocation,
    deleteLocation: deleteCity,
  });

  const timeZone = getTimezoneOffset(location.timezone) / (1000 * 60 * 60);

  const selectedLocTZ = getTimezoneOffset(selectedLoc?.timezone as string) / (1000 * 60 * 60);

  // const currentDay = utcToZonedTime(time, location.timezone);

  const milsValue = getMils(time, location.timezone);

  const day = formatInTimeZone(time, location.timezone, 'dd MMMM');

  const currentTime = formatInTimeZone(time, location.timezone, timeVariant);

  console.log('local hours and minutes', currentTime);

  const getTzDif = () => {
    const dif = timeZone - selectedLocTZ;
    const result = selectedLoc === location ? null : dif;
    return result;
  };

  const tzDif = getTzDif();

  return (
    <Box
      display="flex"
      borderColor="neutral.neutral7"
      borderRadius="4"
      border="1px solid"
      padding="2"
      flexDirection="column"
      width="100%"
      minWidth="260px"
      height="158px"
      onPointerDown={() => selectLoc(location)}
      backgroundColor={selectedLoc === location ? 'neutral.neutral5' : 'neutral.neutral3'}
      role="listitem"
    >
      <Stack
        direction="column"
        spacing="2px"
      >
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
        >
          <Heading variant="h4" color="text.primary">{location.name}</Heading>

          <IconButton onClick={() => deleteLocation(location)} aria-label="delete location" border="none">
            <RiCloseLine />
          </IconButton>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Text variant="s" color="text.secondary" textAlign="start">GMT {timeZone > 0 ? `+${timeZone}` : timeZone}</Text>
          {tzDif && <Text variant="s" color={tzDif > 0 ? 'success.success9' : 'error.error9'} textAlign="start">{tzDif > 0 ? `${tzDif}` : `${tzDif}`} H</Text>}
        </Box>

        <Text variant="s" color="text.secondary" textAlign="start">{day}</Text>

        <Text variant="s" color="text.secondary" textAlign="start">{currentTime}</Text>

        <TimeSlider timeValue={milsValue} changeLocation={() => selectLoc(location)} />
      </Stack>
    </Box>
  );
};
