import { render, screen, fireEvent } from '@testing-library/react';
import { FilterChip } from './filter-chip.component';
import { ItemsContext } from '../../context/items.context';

const LIKED_ITEMS = {id: 'liked_items', name: 'Liked Items'};
const customRender = (ui) => {
  const providerProps = {
    filter: [LIKED_ITEMS.id]
  };
  return render(
    <ItemsContext.Provider value={{
      ...providerProps,
    }}>
        {ui}
    </ItemsContext.Provider>
  )
}

test('FilterChip renders ok', () => {
  render(<FilterChip />);
  const element = screen.getByRole('button');
  expect(element).toBeInTheDocument();
  expect(element).toContainElement(screen.getByRole('button'));
});

test('FilterChip renders selected ok', () => {
  customRender(<FilterChip {...LIKED_ITEMS}/>);
  const element = screen.getByRole('button');
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('filter-chip--active');
  expect(element).toHaveTextContent(LIKED_ITEMS.name);
});

test('FilterChip handles OnClick ok', () => {
  const handlerOnClick = jest.fn();
  customRender(<FilterChip {...LIKED_ITEMS} handlerOnClick={handlerOnClick}/>);
  const element = screen.getByRole('button');
  expect(element).toBeInTheDocument();
  fireEvent.click(element);
  expect(element).toHaveClass('filter-chip--active');
  expect(handlerOnClick).toHaveBeenCalled();
});
