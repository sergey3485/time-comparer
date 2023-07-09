import * as React from 'react';
import { useUnit } from 'effector-react';

import {
  Box,
  Button,
  Stack,
} from '@chakra-ui/react';

import {
  changeTimeFormat,
} from '@/features/time/time.model';

import { TimeIndicator } from '@/features/time-indicator';
import { format12hours, format24hours } from '@/shared/lib/time-format';

export const Header = (): JSX.Element => {
  const {
    changeTimeFormatOnClick,
  } = useUnit({
    changeTimeFormatOnClick: changeTimeFormat,
  });

  return (
    <Box
      display="flex"
      width="100%"
    >
      <Box
        display="flex"
        marginLeft="auto"
      >
        <Stack
          spacing="4px"
          alignItems="center"
          direction="row"
        >

          <TimeIndicator />

          <Stack
            spacing="2px"
            direction="row"
            marginLeft="2"
          >
            <Button
              onClick={() => changeTimeFormatOnClick(format12hours)}
              colorScheme="blue"
            >
              12
            </Button>

            <Button
              onClick={() => changeTimeFormatOnClick(format24hours)}
              colorScheme="blue"
            >
              24
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
