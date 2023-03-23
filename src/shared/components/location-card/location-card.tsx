import * as React from 'react';
import {
  Box,
  Heading,
  Text,
} from '@effable/react';

import { Location } from '../location';

export interface LocationCardProps {
  /**
   * The content
   */
  isActive?: boolean;
  location: string;
  date: Date;
}

export const LocationCard = (props: LocationCardProps): JSX.Element => {
  const {
    isActive,
    location,
    date,
  } = props;

  return (
    <Box
      display="flex"
      borderColor="neutral.neutral7"
      borderRadius="4x"
      border="1x solid"
      padding="4x"
      flexDirection="column"
      backgroundColor={isActive ? 'accent.accent3' : 'neutral.neutral3'}
    >
      <Location location="Moscow" />
    </Box>
  );
};
