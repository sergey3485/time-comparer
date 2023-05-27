import * as React from 'react';

import { SimpleGrid, Button } from '@effable/react';
import { useUnit } from 'effector-react';

import { LocationCard } from './shared/components/location-card';
import { Location } from './shared/components/location';
import { MainLayout } from './widgets/layout/main-layout';

import {
  $locations,
} from '@/features/logic/locations.model';
// import './App.css';

const App = () => {
  const {
    locations,
  } = useUnit({
    locations: $locations,
  });
  const [items, setItems] = React.useState<number[]>([]);

  const addNew = () => {
    const newArr = [...items, items.length];
    setItems(newArr);
  };

  console.log(locations);
  return (
    <MainLayout>
      <SimpleGrid
        space="3x"
        cols={{
          base: 1,
          tablet: 2,
          laptop: 3,
          desktop: 5,
        }}
      >
        {locations.map((item) => (
          <Location
            location={item}
            key={item.name}
          />
        ))}
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
