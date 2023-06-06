import * as React from 'react';

import { SimpleGrid, Button } from '@chakra-ui/react';
import { useUnit } from 'effector-react';

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
        spacing="12px"
        columns={[
          1,
          3,
          5,
        ]}
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
          variant="outline"
          size="lg"
        >
          add new
        </Button>
      </SimpleGrid>
    </MainLayout>
  );
};

export default App;
