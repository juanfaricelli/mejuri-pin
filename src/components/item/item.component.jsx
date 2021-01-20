import React, { useContext, useState } from 'react';

import { ItemsContext } from '../../context/items.context';
import { endpoints } from '../../api/endpoints';

import { FavButton } from '../fav-button/fav-button.component';
import { FavFilledIcon } from '../icons/fav-filled-icon.component';
import { FavIcon } from '../icons/fav-icon.component';
import { SpinnerCirclesIcon } from '../icons/spinner-circles-icon.component';

import './item.component.scss';

export const Item = ({ itemData }) => {
  const { itemsLiked, itemDetails, addItemLiked, removeItemLiked } = useContext(ItemsContext);
  const { id, name, variant_images } = itemData;
  const [ loaded, setLoaded ] = useState(false);
  const [ likedItem, setLikedItem ] = useState(itemsLiked && itemsLiked.some(item => item.id === id));

  const imgSrc = `${endpoints.items}${variant_images && variant_images[0].attachment_url_small}`;

  const handlerOnDoubleClick = () => {
    const likedItemToggler = !likedItem;
    setLikedItem(likedItemToggler);
    if (likedItemToggler) {
      addItemLiked(itemData);
    } else {
      removeItemLiked(id);
    }
  };

  return (
    <div className="item-unit" data-testid="item-unit" onDoubleClick={handlerOnDoubleClick}>
      { !loaded && <SpinnerCirclesIcon /> }
      <span title={name}>
        <img
          onClick={() => itemDetails(itemData)} 
          title={name}
          alt={name}
          onLoad={() => setLoaded(true)}
          src={imgSrc}/>
      </span>
      <div className="item-unit__description">
        {name}
      </div>
      <div className="item-unit__favourite--bookmarked">
        {
          likedItem ? <FavFilledIcon /> : <FavIcon color='#FF9999' />
        }
      </div>
      <div className="item-unit__favourite">
        <FavButton likedItem={likedItem} itemId={id} itemData={itemData} handlerOnClick={handlerOnDoubleClick}/>
      </div>
    </div>
  )
}
