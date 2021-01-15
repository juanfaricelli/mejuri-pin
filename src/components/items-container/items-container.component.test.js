import { render, screen } from '@testing-library/react';

import { ItemsContainer } from './items-container.component';
import { ItemsContext } from '../../context/items.context';

const customRender = (ui, itemsByCategory) => {
  const providerProps = {
    itemsByCategory: itemsByCategory || []
  };
  return render(
    <ItemsContext.Provider value={{
      ...providerProps,
    }}>
      {ui}
    </ItemsContext.Provider>
  )
}

test('ItemsContainer renders ok with no items', () => {
  customRender(<ItemsContainer />);
  const element = screen.getByTestId('no-liked-items');
  expect(element).toBeInTheDocument();
  expect(element).toContainElement(screen.getByTestId('fav-filled-icon'));
});

test('ItemsContainer renders ok with items', () => {
  const variant_images = [ { attachment_url_original: '/some-image.jpg'}, ];
  const itemsByCategoryMock = [
    { id: 1211, name: 'Solo Diamond Bracelet', variant_images},
    { id: 2112, name: 'Solo Diamond Bracelet White Gold', variant_images},
    { id: 2617, name: 'Diamond Tennis Bracelet', variant_images},
    { id: 2134, name: 'Zodiac Bracelet Aries', variant_images},
    { id: 2146, name: 'Zodiac Bracelet Aries Silver', variant_images},
    { id: 2125, name: 'Zodiac Bracelet Leo', variant_images},
    { id: 2137, name: 'Zodiac Bracelet Leo Silver', variant_images}
  ];
  customRender(<ItemsContainer />, itemsByCategoryMock);
  const element = screen.getByTestId('items-container');
  const items = screen.queryAllByTestId('item-unit')
  expect(element).toBeInTheDocument();
  expect(items).toHaveLength(itemsByCategoryMock.length);
});

