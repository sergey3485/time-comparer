import * as React from 'react';
import { useUnit } from 'effector-react';

import {
  Box,
  Button,
  Stack,
} from '@chakra-ui/react';

import { TimeIndicator } from '@/features/time-indicator';
import { format12hours, format24hours } from '@/shared/lib/time-format';
import { changeTimeFormat } from '@/features/change-time-format';

export const Header = (): JSX.Element => {
  return (
    <Box
      display="flex"
      width="100%"
    >
      <Box
        display="flex"
        marginLeft="auto"
      >
        <TimeIndicator />
      </Box>
    </Box>
  );
};
