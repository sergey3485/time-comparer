import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { EffableProvider } from '@effable/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EffableProvider>
      <App />
    </EffableProvider>
  </React.StrictMode>,
)
