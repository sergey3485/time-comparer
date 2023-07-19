import { fork, allSettled } from 'effector';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

import worldCities from 'worldcities';
import { LocationGrid } from './location-grid';
import { renderWithProviders } from '@/shared/lib/test-utils';
import { $locations, $selectedLocation } from '@/entities/location';
import { $isVisibleInput, createInput } from '@/features/add-new-location';

const moscow = worldCities.getByName('moscow');
const prague = worldCities.getByName('prague');

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
        [$selectedLocation, moscow],
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

    const element = screen.queryByPlaceholderText('Write city');

    expect(element).not.toBeInTheDocument();

    await allSettled(createInput, { scope });

    const input = screen.queryByPlaceholderText('Write city');

    expect(input).toBeInTheDocument();
  });
});
