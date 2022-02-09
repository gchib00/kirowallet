import React, { useContext } from 'react';
import styled from 'styled-components';
import MenuContext from '../context/MenuContext';

const MainContainer = styled.div`
  height: 400px;
  width: 200px;
  border: 2px solid black;
`;

export const NavMenu = () => {
  const { menuActive } = useContext(MenuContext);

  if (!menuActive){
    return null;
  }
  return (
    <MainContainer>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </MainContainer>
  );
};