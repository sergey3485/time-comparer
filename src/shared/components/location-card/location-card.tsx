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
  isActive?: boolean;
}

export const LocationCard = (props: LocationCardProps): JSX.Element => {
  const {
    children,
    isActive,
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
      width="100%"
      minWidth="260px"
      height="100%"
    >
      {children}
    </Box>
  );
};
