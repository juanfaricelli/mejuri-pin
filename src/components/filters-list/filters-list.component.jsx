import React from 'react';
import styled from 'styled-components';

import { FilterChip } from '../filters/filter-chip.component';

// NOTE: *.scss not used after styled-components
// import './filters-list.component.scss'

// NOTE: This could be imported into a different file.
const StyledFiltersList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  max-width: 1024px;
  margin-left: 10px;
`;

export const FiltersList = ({collection = [], setSelectedCategory = () => {}}) => {
  return(
    <StyledFiltersList data-testid="filter-list">
      {
        collection.map( category =>
          <FilterChip key={category.id} {...category} handlerOnClick={() => setSelectedCategory(category.id)}/>)
      }
    </StyledFiltersList>
  );
};
