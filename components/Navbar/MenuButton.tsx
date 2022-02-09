import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import MenuContext from '../context/MenuContext';

const MenuBtn = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 30px;
	height: 21px;
  margin-right: 2.6rem;
  cursor: pointer;
`;
const MenuBar = styled.span`
  height: 0.2rem;
	width: 2.2rem;
	background-color: black;
	border-radius: 5px;
  transition: 0.3s;
`;

export const MenuButton = () => {
  const { menuActive, setMenuActive } = useContext(MenuContext);
  //for controlling additional styling of MenuBar in order to animate them on click:
  const [menuBar1Styling, setMenuBar1Styling] = useState<React.CSSProperties>({});
  const [menuBar2Styling, setMenuBar2Styling] = useState<React.CSSProperties>({});
  const [menuBar3Styling, setMenuBar3Styling] = useState<React.CSSProperties>({});

  const handleClick = () => {
    if (!menuActive) { //provide MenuBar components with additional styles in order to form an "X" shape
      setMenuBar1Styling({
        transform: 'rotate(40deg) translateY(0.7rem)',
      });
      setMenuBar2Styling({
        opacity: 0,
        transform: 'translateX(-20px)',
      });
      setMenuBar3Styling({
        transform: 'rotate(-40deg) translateY(-0.7rem)',
      });
    } else { //remove "X" shape styles from MenuBar components
      setMenuBar1Styling({
        transform: 'rotate(0deg) translateY(0rem)',
      });
      setMenuBar2Styling({
        transform: 'translateX(0px)',
      });
      setMenuBar3Styling({
        transform: 'rotate(0deg) translateY(0rem)',
      });
    }
    return setMenuActive(!menuActive);
  };

  return (
    <MenuBtn onClick={handleClick}>
      <MenuBar style={ menuBar1Styling }/>
      <MenuBar style={ menuBar2Styling }/>
      <MenuBar style={ menuBar3Styling }/>
    </MenuBtn>
  );
};
