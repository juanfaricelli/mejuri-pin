import { render, screen } from '@testing-library/react';

import { FavFilledIcon } from '../fav-filled-icon.component';
import { FavIcon } from '../fav-icon.component';
import { MejuriLogo } from '../mejuri-logo.component';
import { SpinnerCirclesIcon } from '../spinner-circles-icon.component';
import { SpinnerThreeDotsIcon } from '../spinner-three-dots-icon.component';

test('FavFilledIcon renders ok', () => {
  render(<FavFilledIcon />);
  const iconElement = screen.getByTestId('fav-filled-icon');
  expect(iconElement).toBeInTheDocument();
});

test('FavIcon renders ok', () => {
  render(<FavIcon />);
  const iconElement = screen.getByTestId('fav-icon');
  expect(iconElement).toBeInTheDocument();
});

test('MejuriLogo renders ok', () => {
  render(<MejuriLogo />);
  const iconElement = screen.getByTestId('mejuri-logo');
  expect(iconElement).toBeInTheDocument();
});

test('SpinnerCirclesIcon renders ok', () => {
  render(<SpinnerCirclesIcon />);
  const iconElement = screen.getByTestId('spinner-circles-icon');
  expect(iconElement).toBeInTheDocument();
});

test('SpinnerThreeDotsIcon renders ok', () => {
  render(<SpinnerThreeDotsIcon />);
  const iconElement = screen.getByTestId('spinner-three-dots-icon');
  expect(iconElement).toBeInTheDocument();
});
