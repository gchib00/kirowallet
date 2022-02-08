import React from 'react';
import styled from 'styled-components';
import { Menu } from './Menu';

const MainContainer = styled.header`
  width: 100%;
  max-width: 100vw;
  height: 60px;
  background-color: #c3c3c3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const index = () => {
  return (
    <MainContainer>
      <h2 style={{ marginLeft: '2rem' }}>Logo Placeholder</h2>
      <Menu />
    </MainContainer>
  );
};

export default index;