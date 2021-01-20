import React, { useContext, useEffect, useState } from 'react';

import { ItemsContext } from '../../context/items.context';
import { endpoints } from '../../api/endpoints';
import { StyledButton } from '../styled-components/StyledButton';
import { CloseIcon } from '../icons/close-icon.component';

import './item-details.component.scss';

export const ItemDetails = ({ itemData }) => {
  const { itemView, itemDetails } = useContext(ItemsContext);
  const [ showDetails, setShowDetails ] = useState(false);

  useEffect(() => {
    setShowDetails(!!itemView);
  }, [itemView]);

  const getCurrency = { USD: '$' };

  const closeModal = () => {
    setShowDetails(false);
    itemDetails();
  }

  const ItemDescription = () => {
    return (
      <div className="item-details__description" onClick={(e) => e.stopPropagation()} data-testid="item-details-description">
        <div className="item-details__description-close">
          <StyledButton onClick={closeModal}><CloseIcon /></StyledButton>
        </div>
        <div className="item-details__description-galery">
          {
            itemView.variant_images.map( (image, index) => <img 
              key={`${itemView.name}_${index}`}
              title={itemView.name}
              alt={itemView.name}
              src={`${endpoints.items}${image.attachment_url_large}`}/>)
          }
        </div>
        <div className="item-details__description-text">{itemView.name}</div>
        <div className="item-details__description-price">{`${getCurrency[itemView.price.currency]} ${itemView.price.amount}`}</div>
        <div className="item-details__description-material">{itemView.material_name}</div>
        <div className="item-details__description-label">{itemView.product_label}</div>
      </div>
    );
  }

  return (
    <div className={`item-details__container${showDetails ? ' item-details__container--visible' : ''}`} data-testid="item-details">
      <div className="item-details" onClick={closeModal}>
        {itemView && <ItemDescription />}
      </div>
    </div>
  )
}
