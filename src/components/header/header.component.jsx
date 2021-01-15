import React from 'react';
import styled from 'styled-components';
import { MejuriLogo } from '../icons/mejuri-logo.component';

// import './header.component.scss';

const StyledLogoContainer = styled.div`
  text-align: center;
  border-bottom: 1px solid #dddddd;
  width: 100%;
  svg {
    max-height: 70px;
    width: 40%;
  }
`;

export const Header = () => {
  return(
    <StyledLogoContainer data-testid="header">
      <MejuriLogo />
    </StyledLogoContainer>
  );
};