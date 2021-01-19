import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FavIcon } from '../icons/fav-icon.component';
import { FavFilledIcon } from '../icons/fav-filled-icon.component';
import { StyledButton } from '../styled-components/StyledButton';

// NOTE: *.scss not used after styled-components
// import './fav-button.component.scss'

export const FavButton = ({ likedItem, handlerOnClick }) => {
  const [isLikedItem, setIsLikedItem] = useState(false);

  useEffect(() => {
    setIsLikedItem(likedItem);
  }, [likedItem]);

  const favoriteItem = () => {
    handlerOnClick();
    setIsLikedItem(!isLikedItem);
  };

  return (
    <StyledButton onClick={favoriteItem}>
      {
        isLikedItem ?
          <FavFilledIcon /> :
          <FavIcon color="#D4D2CB"/> 
      }
    </StyledButton>
  );
}

FavButton.defaultProps = {
  likedItem: false
}
FavButton.propTypes = {
  likedItem: PropTypes.bool,
}
