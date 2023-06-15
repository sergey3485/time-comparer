import { fork, allSettled } from 'effector';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

import {
  $locations,
  createInput,
  $isVisibleInput,
  prague,
  moscow,
} from '@/features/logic/locations.model';

import { LocationGrid } from './location-grid';
import { renderWithProviders } from '@/shared/lib/test-utils';

describe('location grid', () => {
  it('должен иметь только кнопку, если локации пусты', () => {
    const scope = fork({
      values: [
        [$locations, []],
        [$isVisibleInput, false],
      ],
    });

    renderWithProviders(<LocationGrid />, scope);

    const grid = screen.queryByRole('grid');

    const children = grid?.childElementCount;

    expect(children).toBe(1);
  });

  it('Должен выводить все локации', () => {
    const scope = fork({
      values: [
        [$locations, [prague, moscow]],
        [$isVisibleInput, false],
      ],
    });

    renderWithProviders(<LocationGrid />, scope);

    const grid = screen.queryByRole('grid');

    const children = grid?.childElementCount;

    expect(children).toBe(3);
  });

  it('Должен рендерить инпут, если была нажата кнопка добавления новой локации', async () => {
    const scope = fork({
      values: [
        [$isVisibleInput, false],
      ],
    });

    renderWithProviders(<LocationGrid />, scope);

    const element = screen.queryByPlaceholderText('write city');

    expect(element).not.toBeInTheDocument();

    await allSettled(createInput, { scope });

    const input = screen.queryByPlaceholderText('write city');

    expect(input).toBeInTheDocument();
  });
});
