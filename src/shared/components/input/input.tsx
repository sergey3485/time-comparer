import * as React from 'react';
import {
  Box,
} from '@chakra-ui/react';

import { useUnit } from 'effector-react';

import { v4 as uuidv4 } from 'uuid';

import {
  $inputValue,
  $locationVariants,
  changeInputValue,
  addLocation,
} from '@/features/logic/locations.model';

import * as S from './input.styled';

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
      borderColor="neutral.neutral7"
      borderRadius="4px"
      border="1px solid"
      padding="1px"
      flexDirection="column"
      width="100%"
      minWidth="260px"
      height="158px"
    >
      <input value={inputValue} onChange={(event) => changeInput(event.currentTarget.value)} placeholder="write city" />
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
            key={uuidv4()}
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
