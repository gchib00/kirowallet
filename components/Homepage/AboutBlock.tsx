import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  color: white;
`;

const AboutBlock = () => {
  return (
    <MainContainer>About this app</MainContainer>
  );
};

export default AboutBlock;