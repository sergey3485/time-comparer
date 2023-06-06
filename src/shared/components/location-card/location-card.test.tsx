import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { LocationCard } from './location-card';

describe('<LocationCard />', () => {
  it('Должен рендерить children', () => {
    render(<LocationCard>Prague</LocationCard>);

    const element = screen.queryByText('Prague');

    expect(element).toBeInTheDocument();
  });

  it('Не должен рендерить элемент, когда у него нет детей', () => {
    render(<LocationCard />);

    const element = screen.queryByText('Prague');

    expect(element).not.toBeInTheDocument();
  });
});
