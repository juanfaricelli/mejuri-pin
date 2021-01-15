import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FavIcon } from '../icons/fav-icon.component';
import { FavFilledIcon } from '../icons/fav-filled-icon.component';

// NOTE: *.scss not used after styled-components
// import './fav-button.component.scss'

import { ItemsContext } from '../../context/items.context';

// NOTE: This could be imported into a different file.
const StyledFavButton = styled.button`
  width: 23px;
  height: 23px;
  background-color: white;
  border: none;
  border-radius: 50%;
  position: relative;
  &:active,
  &:hover {
    background-color: #D9D9D9;
    border-radius: 50%;
  }
  &:focus,
  &:focus-within {
    outline: none;
  }
  svg {
    position: absolute;
    top: 3px;
    left: 3px;
  }
`;

export const FavButton = props => {
  const { addItemLiked, removeItemLiked } = useContext(ItemsContext);
  const [likedItem, setLikedItem] = useState(props.likedItem)

  const favoriteItem = () => {
    const likedItemToggler = !likedItem;
    setLikedItem(likedItemToggler);
    if (likedItemToggler) {
      addItemLiked(props.itemData);
    } else {
      removeItemLiked(props.itemId);
    }
  };

  return (
    <StyledFavButton onClick={() => favoriteItem()}>
      {
        likedItem ?
          <FavFilledIcon /> :
          <FavIcon color="#D4D2CB"/> 
      }
    </StyledFavButton>
  );
}

FavButton.defaultProps = {
  likedItem: false
}
FavButton.propTypes = {
  likedItem: PropTypes.bool,
}
