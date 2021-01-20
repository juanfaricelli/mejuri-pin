import { render, screen, fireEvent } from '@testing-library/react';
import { ItemDetails } from './item-details.component';

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

test('ItemDetails renders ok', () => {
  customRender(<ItemDetails />);
  const itemDetailsElement = screen.getByTestId('item-details');
  expect(itemDetailsElement).toBeInTheDocument();
});

test('ItemDetails renders ok with details', () => {
  const providerProps = {
    itemView: {
      name: "Diamond Tennis Bracelet White Gold",
      price: {
        amount: "2300.0",
        currency: "USD"
      },
      variant_images: [ { attachment_url_original: '/some-image.jpg'} ],
      material_name: "14k White Gold, Diamond",
      product_label: "Only a few left"
    }
  }
  customRender(<ItemDetails />, providerProps);
  const itemDetailsElement = screen.getByTestId('item-details');
  expect(itemDetailsElement).toBeInTheDocument();
  const itemDescriptionElement = screen.getByTestId('item-details-description');
  expect(itemDescriptionElement).toBeInTheDocument();
  expect(itemDescriptionElement).toHaveTextContent(providerProps.itemView.name);
  expect(itemDescriptionElement).toHaveTextContent('$ 2300.0');
  expect(itemDescriptionElement).toHaveTextContent(providerProps.itemView.material_name);
  expect(itemDescriptionElement).toHaveTextContent(providerProps.itemView.product_label);
});