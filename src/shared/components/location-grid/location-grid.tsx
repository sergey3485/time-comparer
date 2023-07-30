import * as React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { useUnit } from 'effector-react';

import { AddNewLocationButton } from '@/features/add-new-location';

import { $locations } from '@/entities/location';

import { Location } from '@/shared/components/location';

export const LocationGrid = (): JSX.Element => {
  const { locations } = useUnit({
    locations: $locations,
  });

  return (
    <SimpleGrid spacing="12px" columns={[1, 1, 2, 3, 5]} role="grid">
      {locations.map((item) => (
        <Location location={item} key={item.name} />
      ))}

      <AddNewLocationButton />
    </SimpleGrid>
  );
};
