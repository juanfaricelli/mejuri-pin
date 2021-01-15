import { render, screen } from '@testing-library/react';
import { Header } from './header.component';

test('renders header', () => {
  render(<Header />);
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
});
