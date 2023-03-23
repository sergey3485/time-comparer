import * as React from 'react';

import {
  Box,
  Heading,
  Text,
  Stack,
} from '@effable/react';

export interface LocationProps {
  /**
   * The content
   */
  location: string;
  time?: Date;
}

export const Location = (props: LocationProps): JSX.Element => {
  const {
    location,
    time,
  } = props;

  const dateFormat = Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
  });

  const currentDay = dateFormat.format(new Date());

  console.log(currentDay);

  return (
    <Stack
      direction="column"
      space="2x"
    >
      <Heading variant="h4" color="text.primary">{location}</Heading>

      <Text variant="s" color="text.secondary" textAlign="start">1111</Text>

      <Text variant="s" color="text.secondary" textAlign="start">{currentDay}</Text>
    </Stack>
  );
};
