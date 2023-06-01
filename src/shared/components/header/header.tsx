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
  $timeVariant,
  $currentTime,
  changeTimeVariant,
} from '@/features/logic/time.model';

export const Header = (): JSX.Element => {
  const {
    timeVariant,
    time,
    changeTimeVariantOnClick,
  } = useUnit({
    timeVariant: $timeVariant,
    time: $currentTime,
    changeTimeVariantOnClick: changeTimeVariant,
  });

  const currentTime = format(time, timeVariant);
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
          <Box>
            {currentTime}
          </Box>

          <Stack
            space="2x"
          >
            <Button
              onClick={() => changeTimeVariantOnClick('KK:mm aaa')}
            >
              12
            </Button>

            <Button
              onClick={() => changeTimeVariantOnClick('HH:mm')}
            >
              24
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
