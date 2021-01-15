import { render, screen } from '@testing-library/react';

import { FiltersList } from './filters-list.component';
import { parentFilters } from '../../api/categories.constants'

test('FiltersList renders ok', () => {
  render(<FiltersList />);
  const element = screen.getByTestId('filter-list');
  expect(element).toBeInTheDocument();
});

test('FiltersList with elements renders ok', () => {
  render(<FiltersList collection={parentFilters} />);
  const element = screen.getByTestId('filter-list');
  expect(element).toBeInTheDocument();
  parentFilters.forEach(filter => {
    expect(element).toHaveTextContent(filter.name);
  })
});
