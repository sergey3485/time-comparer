import * as React from 'react';
import { format } from 'date-fns';
import { useUnit } from 'effector-react';
import {
  ActionButton,
  Box,
  Button,
  ButtonBase,
  Stack,
  Text,
} from '@effable/react';

import {
  $timeFormat,
  $currentTime,
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
          space="4x"
          alignItems="center"
        >

          <TimeIndicator />

          <Stack
            space="2x"
          >
            <Button
              onClick={() => changeTimeFormatOnClick('hh:mm aaa')}
            >
              12
            </Button>

            <Button
              onClick={() => changeTimeFormatOnClick('HH:mm')}
            >
              24
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
