import * as React from 'react';
import { format } from 'date-fns';

import {
  Box,
  Text,
} from '@effable/react';

export const Header = (): JSX.Element => {
  const time = new Date();

  const currentTime = format(time, 'K m aaa');
  return (
    <Box
      display="flex"
      width="100%"
    >
      <Box
        display="flex"
        marginLeft="auto"
      >
        <Box>
          {currentTime}
        </Box>
      </Box>
    </Box>
  );
};
