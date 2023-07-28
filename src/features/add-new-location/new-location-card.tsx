import * as React from 'react';
import {
  Box,
  Input,
  List,
  ListItem,
} from '@chakra-ui/react';

import { useUnit } from 'effector-react';
import {
  $inputValue, $locationVariants, addLocation, changeInputValue,
} from './add-new-location.model';

export const NewLocationCard = (): JSX.Element => {
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
      <Input size="md" padding={2} variant="flushed" value={inputValue} onChange={(event) => changeInput(event.currentTarget.value)} placeholder="Write city" />

      <List
        display="flex"
        flexDirection="column"
        overflow="auto"
        width="100%"
        height="100%"
        py="8px"
      >
        {locationVariants.map((loc) => (
          <ListItem
            display="flex"
            key={`${loc.country.name}/${loc.name}`}
            width="100%"
            py="6px"
            px="12px"
            cursor="pointer"
            _hover={{ bg: 'gray.100' }}
            borderBottom="1px solid"
            borderColor="gray.200"
            onClick={() => addNewLocation(loc)}
          >
            {loc.name}, {loc.country.name}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
