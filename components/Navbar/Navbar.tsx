import React, { useState } from 'react';
import styled from 'styled-components';
import MenuContext from '../context/MenuContext';
import { MenuButton } from './MenuButton';
import { NavMenu } from './NavMenu';

const MainContainer = styled.header`
  width: 100%;
  max-width: 100vw;
  height: 60px;
  background-color: #c3c3c3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ menuActive, setMenuActive }}>
      <MainContainer>
        <h2 style={{ marginLeft: '2rem' }}>Logo Placeholder</h2>
        <MenuButton />
      </MainContainer>
      <NavMenu />
    </MenuContext.Provider>
  );
};

export default Navbar;