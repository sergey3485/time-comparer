import * as React from 'react';
import { MainLayout } from '@/widgets/layout/main-layout';

import { LocationGrid } from '@/shared/components/location-grid/';

const App = () => {
  return (
    <MainLayout>
      <LocationGrid />
    </MainLayout>
  );
};

export default App;
