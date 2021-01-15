import { render, screen, fireEvent } from '@testing-library/react';
import { FavButton } from './fav-button.component';
import { ItemsContext } from '../../context/items.context';

const customRender = (ui) => {
  const providerProps = {
    addItemLiked: jest.fn(),
    removeItemLiked: jest.fn()
  };

  return render(
    <ItemsContext.Provider value={{
      ...providerProps,
    }}>
        {ui}
    </ItemsContext.Provider>
  )
}

test('FavButton renders ok and with liked icon', () => {
  render(<FavButton />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toContainElement(screen.getByTestId('fav-icon'));
});

test('FavButton renders with liked filled icon', () => {
  render(<FavButton likedItem={true}/>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toContainElement(screen.getByTestId('fav-filled-icon'));
});

test('renders FavButton click', () => {
  customRender(<FavButton />);
  const buttonElement = screen.getByRole('button');
  fireEvent.click(buttonElement);
  expect(buttonElement).toContainElement(screen.getByTestId('fav-filled-icon'));
});
