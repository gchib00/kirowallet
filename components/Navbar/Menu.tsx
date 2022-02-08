import React from 'react';
import styled from 'styled-components';

const MenuBtn = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 30px;
	height: 21px;
  margin-right: 2.6rem;
`;
const MenuBar = styled.span`
  height: 0.2rem;
	width: 2.2rem;
	background-color: black;
	border-radius: 5px;
`;

export const Menu = () => {
  return (
    <MenuBtn>
      <MenuBar />
      <MenuBar />
      <MenuBar />
    </MenuBtn>
  );
};
