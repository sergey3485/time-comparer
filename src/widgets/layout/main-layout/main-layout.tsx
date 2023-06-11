import * as React from 'react';

// import { Box } from '@effable/react';

import { Box } from '@chakra-ui/react';

import { Header } from '../../../shared/components/header';

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      minHeight="100vh"
      flexDirection="column"
      padding="4"
    >
      <Header />
      <Box
        marginTop="4"
      >
        {children}
      </Box>
    </Box>
  );
};
