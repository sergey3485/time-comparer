import * as React from 'react';

import { LocationGrid } from '@/shared/components/location-grid/';
import { MainLayout } from './widgets/layout/main-layout';

const App = () => {
  return (
    <MainLayout>
      <LocationGrid />
    </MainLayout>
  );
};

export default App;
