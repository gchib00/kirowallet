import { useState } from 'react';
import styled from 'styled-components';
import AuthModalContext from '../components/context/AuthModalContext';
import AboutBlock from '../components/Homepage/AboutBlock';
import CTABlock from '../components/Homepage/CTABlock';
import VisualBlock from '../components/Homepage/VisualBlock';
import AuthModal from '../components/Modals/AuthModal';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 94.5vh;
`;
const SecondaryContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  
  return ( 
    <AuthModalContext.Provider value={{ loginModal, setLoginModal }}>
      <MainContainer>
        <CTABlock />
        <SecondaryContainer>
          <AboutBlock />
          <VisualBlock />
        </SecondaryContainer>
      </MainContainer>
      {loginModal ? <AuthModal loginModal={loginModal} setLoginModal={setLoginModal} /> : null}
    </AuthModalContext.Provider>
  );
};

export default Home;
