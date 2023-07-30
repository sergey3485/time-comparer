import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from '@/app/index';

import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';

import { appStarted } from '@/shared/app.model';

import { GlobalStyles } from './app/styles/global-styles';

appStarted();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyles />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
