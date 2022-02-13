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
  align-items: center;
`;
const AboutItemContainer = styled.div`
  min-height: 30vh;
  width: 13vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SVGContainer = styled.div`
  width: 160px;
  height: 160px;
`;
const AboutItemText = styled.p`
  margin: 5px;
  text-align: center;
`;

const AboutBlock = () => {
  return (
    <MainContainer>
      <AboutItemContainer>
        <SVGContainer>
          <Image src={Icon_Control} alt='control icon'/> 
        </SVGContainer> 
        <AboutItemText>Track and visualize your expenses</AboutItemText>
      </AboutItemContainer>
      <AboutItemContainer>
        <SVGContainer>
          <Image src={Icon_Collaboration} alt='meditation icon'/> 
        </SVGContainer> 
        <AboutItemText>Collaborate with multiple people by sharing the same dashboard</AboutItemText>
      </AboutItemContainer>
      <AboutItemContainer>
        <SVGContainer>
          <Image src={Icon_Meditation} alt='meditation icon'/> 
        </SVGContainer> 
        <AboutItemText>Easy to set up and use</AboutItemText>
      </AboutItemContainer>
    </MainContainer>
  );
};

export default AboutBlock;