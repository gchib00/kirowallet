import React from 'react';
import styled from 'styled-components';

const DimmerContainer = styled.div`
  width: 100%;
  height: 92.4vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0px 40px 0px;
  position: absolute;
  left: 0;
  top: 0;
`;

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Dimmer = ({ children }: Props) => {
  return (
    <DimmerContainer>
      {children}
    </DimmerContainer>
  );
};

export default Dimmer;