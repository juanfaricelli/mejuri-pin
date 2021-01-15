import { render, screen } from '@testing-library/react';
import { Item } from './item.component';

test('Item renders ok', () => {
  const itemDataMock = [
    {
      id: 1211,
      name: 'Solo Diamond Bracelet',
      variant_images: [
        {
          attachment_url_original: '/system/spree/products/18347/original/BoldHoops_earring_yg_hero_0189.jpg'
        }
      ]
    }
  ];
  render(<Item itemData={itemDataMock} />);
  const itemElement = screen.getByTestId('item-unit');
  expect(itemElement).toBeInTheDocument();
});
