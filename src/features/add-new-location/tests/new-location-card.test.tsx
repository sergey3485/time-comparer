import { screen } from '@testing-library/react';
import { allSettled, fork } from 'effector';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/shared/lib/test-utils';

import { $inputValue, changeInputValue } from '../add-new-location.model';
import { NewLocationCard } from '../new-location-card';

describe('input', () => {
  it(' Должен содержать инпут', () => {
    const scope = fork();

    renderWithProviders(<NewLocationCard />, scope);

    const element = screen.queryByPlaceholderText('Write city');

    expect(element).toBeInTheDocument();
  });

  it('должен менять значение инпута', async () => {
    const scope = fork({
      values: [[$inputValue, '']],
    });

    await allSettled(changeInputValue, { scope, params: 'lo' });

    renderWithProviders(<NewLocationCard />, scope);

    const element = screen.queryByDisplayValue('lo');

    expect(element).toBeInTheDocument();
  });

  it('Не должно быть предложеных вариантов локаций, если значение имнута меньше 3 символов', async () => {
    const scope = fork({
      values: [[$inputValue, '']],
    });

    renderWithProviders(<NewLocationCard />, scope);

    const list = screen.queryByRole('list');

    expect(list).toBeInTheDocument();

    expect(list).toBeEmptyDOMElement();

    await allSettled(changeInputValue, { scope, params: 'lo' });

    const changedList = screen.queryByRole('list');

    expect(changedList).toBeEmptyDOMElement();

    await allSettled(changeInputValue, { scope, params: 'los' });

    const changed2List = screen.queryByRole('list');

    expect(changed2List).not.toBeEmptyDOMElement();
  });
});
