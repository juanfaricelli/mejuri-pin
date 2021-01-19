import React, { useContext } from 'react';
import styled from 'styled-components';

import { ItemsContext } from '../../context/items.context';

import { Item } from '../item/item.component';
import { ItemDetails } from '../item-details/item-details.component';
import { FavFilledIcon } from '../icons/fav-filled-icon.component';

import './items-container.component.scss';
const NoLikedItemsContainer = styled.div`
  width: 100%;
  max-height: 300px;
`;

export const ItemsContainer = () => {
  const { itemsByCategory } = useContext(ItemsContext);

  return (
    <div className="items__container--main">
      <ItemDetails />
      <div className="items__container" data-testid="items-container">
        { itemsByCategory.length === 0 &&
          <NoLikedItemsContainer data-testid="no-liked-items">
            <FavFilledIcon width="100%" height="100%" color="#FFE6E6" />
          </NoLikedItemsContainer>
        }
        {
          itemsByCategory.map(item => <Item key={item.id} itemData={item}/>)
        }
      </div>
    </div>
  );
}
