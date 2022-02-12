import React, { useContext } from 'react';
import styled from 'styled-components';
import MenuContext from '../context/MenuContext';

const MainContainer = styled.div`
  height: 0px;
  width: 300px;
  background-color: #F5F3F4;
  border: 1px solid black;
  border-top: none;
  border-right: none;
  position: absolute;
  right: 0;
  transition: 500ms;
`;
const NavList = styled.ul`
  transition: 200ms;
  z-index: 5;
`;

export const NavMenu = () => {
  const { menuActive } = useContext(MenuContext);
  
  let mcOnclickStyling = {
    height: '300px',
    opacity: 1,
  };
  let nlOnclickStyling = {
    opacity: 1,
  };

  if (!menuActive){
    mcOnclickStyling = {
      height: '0px',
      opacity: 0,
    };
    nlOnclickStyling = {
      opacity: 0,
    };
  }
  return (
    <MainContainer style={mcOnclickStyling}>
      <NavList style={nlOnclickStyling}>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </NavList>
    </MainContainer>
  );
};