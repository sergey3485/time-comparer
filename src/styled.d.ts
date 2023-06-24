import '@emotion/react';

import { Theme } from '@chakra-ui/react';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends Theme {}
}
