import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';

import { GlobalStyles } from './shared/styles/global-styles';

import { appStarted } from '@/shared/app.model';

appStarted();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyles />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
