import * as React from 'react';
import { Box } from '@chakra-ui/react';

import { TimeIndicator } from '@/features/time-indicator';

export const Header = (): JSX.Element => {
  return (
    <Box display="flex" width="100%">
      <Box display="flex" marginLeft="auto">
        <TimeIndicator />
      </Box>
    </Box>
  );
};
