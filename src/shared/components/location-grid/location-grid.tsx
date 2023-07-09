import * as React from 'react';

import { useUnit } from 'effector-react';

import {
  SimpleGrid,
  Button,
} from '@chakra-ui/react';

import { Input } from '@/shared/components/input';
import { Location } from '@/shared/components/location';

import {
  $locations,
  changeInputValue,
  createInput,
  $isVisibleInput,
} from '@/features/locations/locations.model';

export const LocationGrid = (): JSX.Element => {
  const {
    locations,
    showInput,
    isVisible,
  } = useUnit({
    locations: $locations,
    changeInput: changeInputValue,
    showInput: createInput,
    isVisible: $isVisibleInput,
  });

  return (
    <SimpleGrid
      spacing="12px"
      columns={[
        1,
        1,
        2,
        3,
        5,
      ]}
      role="grid"
    >
      {locations.map((item) => (
        <Location
          location={item}
          key={item.name}
        />
      ))}

      {isVisible && <Input /> }

      <Button
        onClick={showInput}
        variant="outline"
        size="lg"
        role="button"
        colorScheme="blue"
      >
        add new
      </Button>
    </SimpleGrid>
  );
};
