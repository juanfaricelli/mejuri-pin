import React, { useContext, useEffect, useState } from 'react';

import { ItemsContext } from '../../context/items.context';

import './filter-chip.component.scss';

export const FilterChip = ({id, name = 'Text', handlerOnClick = () => {}}) => {
  const { filter } = useContext(ItemsContext);
  const [ selected, setSelectedOption ] = useState(false);

  useEffect(() => {
    if (filter) {
      setSelectedOption(filter.includes(id || name))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className="filter-chip__container">
      <span
        role="button"
        className={`filter-chip${selected ? ' filter-chip--active' : ''}`}
        tabIndex="0"
        onClick={e => {
          e.stopPropagation();
          handlerOnClick()
        }}>
        <span>{name}</span>
      </span>
    </div>
  );
};
