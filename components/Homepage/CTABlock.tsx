import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 50%;
  background-color: #E5383B;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 26%;
`;
const HeaderText = styled.p`
  font-size: 2.1rem;
  color: white;
  margin-bottom: 2rem;
`;
const CTAButton = styled.button`
  transition: 650ms;
  width: 16rem;
  height: 44px;
  background-color: transparent;
  color: white;
  border-radius: 2px;
  border: 2px solid #F5F3F4;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.06rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transition: 650ms;
    background-color: #F5F3F4;
    color: #E5383B;
    border-color: #E5383B;
  }
  &:active {
    opacity: 0.25;
  }
`;

const CTABlock = () => {
  return (
    <MainContainer>
      <SecondaryContainer>
        <HeaderText>Personal finance made easy</HeaderText>
        <CTAButton>Get started</CTAButton>
        <p style={{ color: 'white' }}>
          *It takes just a few seconds to set up your dashboard!
        </p>
      </SecondaryContainer>
    </MainContainer>
  );
};

export default CTABlock;