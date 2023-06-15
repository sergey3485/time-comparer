import { Provider } from 'effector-react';
import { Scope } from 'effector';
import { ChakraProvider } from '@chakra-ui/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';

export const renderWithProviders = (ui: React.ReactNode, scope: Scope) => {
  return render(
    <ChakraProvider>
      <Provider value={scope}>
        {ui}
      </Provider>
    </ChakraProvider>,
  );
};
