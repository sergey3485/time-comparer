import * as React from 'react';
import {
  Box,
  Input as InputChakra,
} from '@chakra-ui/react';

import { useUnit } from 'effector-react';

import { v4 as uuidv4 } from 'uuid';

import {
  $inputValue,
  $locationVariants,
  changeInputValue,
  addLocation,
} from '@/features/logic/locations.model';

export const Input = (): JSX.Element => {
  const {
    inputValue,
    locationVariants,
    changeInput,
    addNewLocation,
  } = useUnit({
    inputValue: $inputValue,
    locationVariants: $locationVariants,
    changeInput: changeInputValue,
    addNewLocation: addLocation,
  });

  return (
    <Box
      display="flex"
      borderRadius="4px"
      flexDirection="column"
      width="100%"
      height="158px"
      backgroundColor="white"
    >
      <InputChakra size="md" padding={2} variant="flushed" value={inputValue} onChange={(event) => changeInput(event.currentTarget.value)} placeholder="Write city" />
      <Box
        display="flex"
        flexDirection="column"
        overflow="scroll"
        width="100%"
        height="100%"
        role="list"
      >
        {locationVariants.map((loc) => (
          <Box
            display="flex"
            key={`${loc.country.name}/${loc.name}`}
            width="100%"
            padding="1px"
            borderColor="neutral.neutral3"
            borderBottom="1px solid"
            onClick={() => addNewLocation(loc)}
          >
            {loc.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
