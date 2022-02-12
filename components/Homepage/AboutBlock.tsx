import React from 'react';
import styled from 'styled-components';
import Icon_Control from  '../images/iconControl.svg';
import Icon_Meditation from  '../images/iconMeditation.svg';
import Icon_Collaboration from '../images/iconCollaboration.svg';
import Image from 'next/image';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  color: white;
  display: flex;
  justify-content: space-around;
`;
const SVGContainer = styled.div`
  width: 160px;
  height: 160px;
  border: 1px solid white;
`;

const AboutBlock = () => {
  return (
    <MainContainer>
      <SVGContainer>
        <Image src={Icon_Control} alt='control icon'/> 
      </SVGContainer> 
      <SVGContainer>
        <Image src={Icon_Meditation} alt='meditation icon'/> 
      </SVGContainer> 
      <SVGContainer>
        <Image src={Icon_Collaboration} alt='meditation icon'/> 
      </SVGContainer> 
    </MainContainer>
  );
};

export default AboutBlock;