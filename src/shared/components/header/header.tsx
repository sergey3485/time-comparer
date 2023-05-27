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
  $time,
  changeTimeVariant,
} from '@/features/logic/time.model';

export const Header = (): JSX.Element => {
  const {
    timeVariant,
    time,
    changeTimeVariantOnClick,
  } = useUnit({
    timeVariant: $timeVariant,
    time: $time,
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
              onClick={() => changeTimeVariantOnClick('K:m aaa')}
            >
              12
            </Button>

            <Button
              onClick={() => changeTimeVariantOnClick('HH:m')}
            >
              24
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
