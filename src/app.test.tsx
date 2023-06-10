import { fork, allSettled } from 'effector';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/shared/lib/test-utils';

import {
  $isVisibleInput,
  prague,
  moscow,
  createInput,
  $locations,
} from '@/features/logic/locations.model';
import App from './App';

describe('app', () => {
  it('Должен рендерить инпут, если была нажата кнопка добавления новой локации', async () => {
    const scope = fork({
      values: [
        [$isVisibleInput, false],
      ],
    });

    renderWithProviders(<App />, scope);

    const element = screen.queryByPlaceholderText('write city');

    expect(element).not.toBeInTheDocument();

    await allSettled(createInput, { scope });

    const input = screen.queryByPlaceholderText('write city');

    expect(input).toBeInTheDocument();
  });

  it('Должен выводить все локации', () => {
    const scope = fork({
      values: [
        [$locations, [prague, moscow]],
        [$isVisibleInput, false],
      ],
    });

    renderWithProviders(<App />, scope);

    const grid = screen.queryByRole('grid');

    const children = grid?.childElementCount;

    console.log(children);

    expect(children).toBe(3);
  });
});
