import * as React from 'react';
import { useUnit } from 'effector-react';
import {
  Box,
  Button,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { RiRestartLine } from 'react-icons/ri';
import { $formattedTime, $isVisibleRefresher, changeTimeToCurrentTime } from './time-indicator.model';

export const TimeIndicator = () => {
  const {
    isVisibleRefresher,
    formattedTime,
    changeTime,
  } = useUnit({
    formattedTime: $formattedTime,
    isVisibleRefresher: $isVisibleRefresher,
    changeTime: changeTimeToCurrentTime,
  });

  return (
    <Box
      display="flex"
      alignItems="center"
    >
      {isVisibleRefresher && (
        <IconButton aria-label="set time to current time" onClick={changeTime} variant="ghost" colorScheme="purple" borderRadius="50%">
          <RiRestartLine />
        </IconButton>
      )}
      <Text marginLeft="2" fontSize="2xl">
        {formattedTime}
      </Text>
    </Box>
  );
};
