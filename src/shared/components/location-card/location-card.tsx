import * as React from 'react';
import {
  Box,
  Heading,
  Text,
} from '@effable/react';

export interface LocationCardProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const LocationCard = (props: LocationCardProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <Box
      display="flex"
      borderColor="neutral.neutral7"
      borderRadius="4x"
      border="1x solid"
      flexDirection="column"
      width="100%"
      minWidth="260px"
      height="100%"
      component="form"
    >
      {children}
    </Box>
  );
};
