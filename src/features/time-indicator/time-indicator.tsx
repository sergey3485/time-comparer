import * as React from 'react';
import { useUnit } from 'effector-react';
import {
  Box,
  Text,
  IconButton,
  Button,
  Stack,
} from '@chakra-ui/react';
import { RiRestartLine } from 'react-icons/ri';
import { $formattedTime, $isVisibleRefresher, changeTimeToCurrentTime } from './time-indicator.model';
import { changeTimeFormat } from '@/entities/time';
import { format12hours, format24hours } from '@/shared/lib/time-format';

export const TimeIndicator = () => {
  const {
    isVisibleRefresher,
    formattedTime,
    changeTime,
    changeTimeFormatOnClick,
  } = useUnit({
    formattedTime: $formattedTime,
    isVisibleRefresher: $isVisibleRefresher,
    changeTime: changeTimeToCurrentTime,
    changeTimeFormatOnClick: changeTimeFormat,
  });

  return (
    <Stack
      spacing="4px"
      alignItems="center"
      direction="row"
    >

      <Box
        display="flex"
        alignItems="center"
      >
        {isVisibleRefresher && (
          <IconButton aria-label="set time to current time" onClick={changeTime} variant="ghost" colorScheme="blue" borderRadius="50%">
            <RiRestartLine />
          </IconButton>
        )}
        <Text marginLeft="2" fontSize="2xl">
          {formattedTime}
        </Text>
      </Box>

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
  );
};
