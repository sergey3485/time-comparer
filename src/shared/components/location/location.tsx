import * as React from 'react';
import { RiCloseLine } from 'react-icons/ri';

import {
  Box,
  Heading,
  Text,
  Stack,
  IconButton,
  Tag,
} from '@chakra-ui/react';

import { useUnit } from 'effector-react';

import { getTimezoneOffset, formatInTimeZone } from 'date-fns-tz';

import { City } from 'worldcities/lib/city';

import { $selectedLocation, changeSelectedLocation, deleteCity } from '@/features/logic/locations.model';
import {
  $timeFormat,
  $time,
} from '@/features/logic/time.model';

import {
  getMils,
  getTimezoneDifference,
  getTimezoneInHours,
} from '@/shared/lib/time';

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

  const timeZone = getTimezoneInHours(location.timezone);

  const milsValue = getMils(time, location.timezone);

  const day = formatInTimeZone(time, location.timezone, 'dd MMMM');

  const currentTime = formatInTimeZone(time, location.timezone, timeVariant);

  const timezoneDifference = getTimezoneDifference(location.timezone, selectedLoc?.timezone as string);

  const isSelectedLocation = location.name !== selectedLoc?.name;

  return (
    <Box
      display="flex"
      borderRadius="4"
      padding="2"
      flexDirection="column"
      width="100%"
      height="158px"
      onPointerDown={() => selectLoc(location)}
      backgroundColor={selectedLoc === location ? 'blackAlpha.300' : 'white'}
      role="listitem"
      position="relative"
    >
      <IconButton
        position="absolute"
        top="4px"
        right="4px"
        onClick={() => deleteLocation(location)}
        aria-label="delete location"
        variant="ghost"
        size="xs"
        colorScheme="blackAlpha"
        borderRadius="50%"
      >
        <RiCloseLine />
      </IconButton>

      <Stack
        direction="column"
        spacing="2px"
        flex="1"
      >
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
        >
          <Heading size="sm" fontWeight={500} color="text.primary">
            {location.name},  {location.country.name}
          </Heading>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Text fontSize="sm" fontWeight={500} color="gray.500" textAlign="start">GMT{timeZone > 0 ? `+${timeZone}` : timeZone}</Text>
        </Box>

        <Text fontSize="sm" fontWeight={500} color="gray.500" textAlign="start">{day}</Text>

        <Box mt="auto">
          <Stack direction="row" alignItems="center">
            <Text style={{ fontVariantNumeric: 'tabular-nums slashed-zero' }} letterSpacing="-1.5px" fontSize="3xl" fontWeight={500} color="blackAlpha.900" textAlign="start">{currentTime}</Text>
            {isSelectedLocation && <Tag size="md" variant="subtle" colorScheme={timezoneDifference >= 0 ? 'green' : 'red'} textAlign="start">{timezoneDifference >= 0 ? `+${timezoneDifference}` : `${timezoneDifference}`} H</Tag>}
          </Stack>
          <TimeSlider timeValue={milsValue} changeLocation={() => selectLoc(location)} />
        </Box>
      </Stack>
    </Box>
  );
};
