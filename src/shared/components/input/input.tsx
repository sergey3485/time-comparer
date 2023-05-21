import * as React from 'react';
import {
  Box,
  Heading,
  Text,
} from '@effable/react';
import WorldCities from 'worldcities';

import * as S from './input.styled';

export interface InputProps {
  /**
   * The content
   */
  value: string;
  changeValue: () => void;
}

export const Input = (props: InputProps): JSX.Element => {
  const {
    value,
    changeValue,
  } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
    >
      <input value={value} onChange={changeValue} />
    </Box>
  );
};
