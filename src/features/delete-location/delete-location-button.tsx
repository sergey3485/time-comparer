import * as React from 'react';
import { IconButton } from '@chakra-ui/react';
import { RiCloseLine } from 'react-icons/ri';
import { useUnit } from 'effector-react';

import { City } from 'worldcities/lib/city';
import { deleteCity } from './delete-location.model';

export interface DeleteLocationButtonProps {
  location: City;
}

export const DeleteLocationButton = (props: DeleteLocationButtonProps): JSX.Element => {
  const {
    location,
  } = props;

  const {
    deleteLocation,
  } = useUnit({
    deleteLocation: deleteCity,
  });
  return (
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
  );
};
