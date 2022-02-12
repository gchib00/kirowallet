import styled from 'styled-components';
import AboutBlock from '../components/Homepage/AboutBlock';
import CTABlock from '../components/Homepage/CTABlock';
import VisualBlock from '../components/Homepage/VisualBlock';

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
  return ( 
    <MainContainer>
      <CTABlock />
      <SecondaryContainer>
        <AboutBlock />
        <VisualBlock />
      </SecondaryContainer>
    </MainContainer>
  );
};

export default Home;
