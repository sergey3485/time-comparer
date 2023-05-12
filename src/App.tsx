import * as React from 'react';

import { SimpleGrid, Button } from '@effable/react';

import { LocationCard } from './shared/components/location-card';
import { MainLayout } from './widgets/layout/main-layout';
// import './App.css';

const App = () => {
  const [items, setItems] = React.useState<number[]>([]);

  const addNew = () => {
    const newArr = [...items, items.length];
    setItems(newArr);
  };
  return (
    <MainLayout>
      <SimpleGrid>
        {items.map((item) => item)}
        <Button
          onClick={addNew}
        >
          add new
        </Button>
      </SimpleGrid>
    </MainLayout>
  );
};

export default App;
