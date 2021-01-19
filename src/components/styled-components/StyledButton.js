import styled from 'styled-components';

export const StyledButton = styled.button`
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
