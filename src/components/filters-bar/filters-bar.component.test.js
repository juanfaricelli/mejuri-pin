import { render, screen } from '@testing-library/react';
import { FiltersBar } from './filters-bar.component';

import { ItemsContext } from '../../context/items.context';

const customRender = (ui) => {
  const providerProps = {
    itemsLiked: [
      {
        id: 1211,
        name: 'Solo Diamond Bracelet',
        variant_images: [
          {
            attachment_url_original: '/system/spree/products/18347/original/BoldHoops_earring_yg_hero_0189.jpg'
          }
        ]
      }
    ],
    listItems: jest.fn(),
    itemDetails: jest.fn(),
  };

  return render(
    <ItemsContext.Provider value={{
      ...providerProps,
    }}>
        {ui}
    </ItemsContext.Provider>
  )
}

test('FiltersBar renders ok', () => {
  customRender(<FiltersBar />);
  const element = screen.getByTestId('filter-bar');
  expect(element).toBeInTheDocument();
});
