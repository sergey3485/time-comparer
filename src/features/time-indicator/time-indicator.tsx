import * as React from 'react';
import {
  Box, Button, IconButton, Stack, Text,
} from '@chakra-ui/react';
import { useUnit } from 'effector-react';
import { RiRestartLine } from 'react-icons/ri';

import { $timeFormat, changeTimeFormat } from '@/entities/time';

import { format12hours, format24hours } from '@/shared/lib/time-format';

import { $formattedTime, $isRefreshButtonVisible, changeTimeToCurrentTime } from './time-indicator.model';

export const TimeIndicator = () => {
  const {
    isVisibleRefresher, formattedTime, changeTime, changeTimeFormatOnClick, currentFormat,
  } = useUnit({
    formattedTime: $formattedTime,
    isVisibleRefresher: $isRefreshButtonVisible,
    changeTime: changeTimeToCurrentTime,
    changeTimeFormatOnClick: changeTimeFormat,
    currentFormat: $timeFormat,
  });

  return (
    <Stack spacing="4px" alignItems="center" direction="row">
      <Box display="flex" alignItems="center">
        {isVisibleRefresher && (
          <IconButton
            aria-label="set time to current time"
            onClick={changeTime}
            variant="ghost"
            colorScheme="blue"
            borderRadius="50%"
          >
            <RiRestartLine />
          </IconButton>
        )}
        <Text marginLeft="2" fontSize="2xl">
          {formattedTime}
        </Text>
      </Box>

      <Stack spacing="2px" direction="row" marginLeft="2">
        <Button isDisabled={currentFormat === format12hours} onClick={() => changeTimeFormatOnClick(format12hours)} colorScheme="blue">
          12
        </Button>

        <Button isDisabled={currentFormat === format24hours} onClick={() => changeTimeFormatOnClick(format24hours)} colorScheme="blue">
          24
        </Button>
      </Stack>
    </Stack>
  );
};
