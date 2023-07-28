import { Box, Button } from '@chakra-ui/react';
import { useUnit } from 'effector-react';
import { RiAddLine } from 'react-icons/ri';

import { $locations } from '@/entities/location';

import { changeInputValue, createInput, $isVisibleInput } from './add-new-location.model';
import { NewLocationCard } from './new-location-card';

export const AddNewLocationButton = () => {
  const {
    showInput,
    isVisible,
  } = useUnit({
    changeInput: changeInputValue,
    showInput: createInput,
    isVisible: $isVisibleInput,
  });

  return (
    <>
      {isVisible && <NewLocationCard />}

      {!isVisible && (
        <Button
          onClick={showInput}
          variant="ghost"
          size="lg"
          colorScheme="blue"
          height="158px"
          flexDirection="column"
        >
          <Box as="span" fontSize="5xl">
            <RiAddLine fontSize="inherit" />
          </Box>

          <Box as="span">
            Add new location
          </Box>
        </Button>
      )}
    </>
  );
};
