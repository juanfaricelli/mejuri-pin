import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Item } from './item.component';

import { ItemsContext } from '../../context/items.context';

const customRender = (ui, providerProps) => {
  return render(
    <ItemsContext.Provider value={{
      ...providerProps,
    }}>
      {ui}
    </ItemsContext.Provider>
  )
}

const itemDataMock ={
  id: 1211,
  name: 'Solo Diamond Bracelet',
  variant_images: [
    {
      attachment_url_original: '/system/spree/products/18347/original/BoldHoops_earring_yg_hero_0189.jpg'
    }
  ]
};

const providerProps = {
  addItemLiked: jest.fn(),
  removeItemLiked: jest.fn()
};

test('Item renders ok', () => {
  render(<Item itemData={itemDataMock} />);
  const itemElement = screen.getByTestId('item-unit');
  expect(itemElement).toBeInTheDocument();
  expect(itemElement).toHaveTextContent(itemDataMock.name);
  expect(screen.queryAllByTestId('fav-icon')).toHaveLength(2);
});

test('Item renders liked-item ok when like button clicked', () => {
  customRender(<Item itemData={itemDataMock} />, providerProps);
  const elementButton = screen.getByRole('button');
  fireEvent.click(elementButton);
  expect(screen.queryAllByTestId('fav-filled-icon')).toHaveLength(2);
});

test('Item renders liked-item ok when doubled clicked on item', () => {
  customRender(<Item itemData={itemDataMock} />, providerProps);
  const itemUnitElement = screen.getByTestId('item-unit');
  userEvent.dblClick(itemUnitElement);
  expect(screen.queryAllByTestId('fav-filled-icon')).toHaveLength(2);
});
