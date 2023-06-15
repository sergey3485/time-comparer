import * as React from 'react';
import { format } from 'date-fns';
import { useUnit } from 'effector-react';
// import {
//   Box,
//   Button,
//   Stack,
// } from '@effable/react';

import {
  Box,
  Button,
  Stack,
} from '@chakra-ui/react';

import {
  changeTimeFormat,
} from '@/features/logic/time.model';

import { TimeIndicator } from '@/features/time-indicator';

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
              onClick={() => changeTimeFormatOnClick('hh:mm aaa')}
              colorScheme="purple"
            >
              12
            </Button>

            <Button
              onClick={() => changeTimeFormatOnClick('HH:mm')}
              colorScheme="purple"
            >
              24
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
