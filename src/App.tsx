import * as React from 'react';

import { SimpleGrid, Button } from '@effable/react';
import { useUnit } from 'effector-react';

import { LocationCard } from '@/shared/components/location-card';
import { Input } from '@/shared/components/input';
import { Location } from './shared/components/location';
import { MainLayout } from './widgets/layout/main-layout';

import {
  $locations,
  changeInputValue,
  createInput,
  $isVisibleInput,
} from '@/features/logic/locations.model';

// import './App.css';

const App = () => {
  const {
    locations,
    showInput,
    isVisible,
  } = useUnit({
    locations: $locations,
    changeInput: changeInputValue,
    showInput: createInput,
    isVisible: $isVisibleInput,
  });
  const [items, setItems] = React.useState<number[]>([]);

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

        {isVisible && <Input /> }
        <Button
          onClick={showInput}
        >
          add new
        </Button>
      </SimpleGrid>
    </MainLayout>
  );
};

export default App;
