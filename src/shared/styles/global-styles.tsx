import * as React from 'react';
import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global styles={css`
  body {
    font-display: swap;
    font-family: 'Inter';

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    text-rendering: optimizeSpeed;
  }
`}
  />
);
