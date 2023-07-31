import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../components/assets/fonts/fonts.css'
const Home = () => {
  return (
    <Container>
      <PageLinkContainer>
        <PageLink to='/tip-calculator'>
          Tip-out Calculator
        </PageLink>
        <PageLink to='/register-calculator'>
          Bank Breakdown Calculator
        </PageLink>
      </PageLinkContainer>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 5vh;
`;
const PageLinkContainer = styled.div`
  display: flex;
  @media (max-width: 688px) {
    flex-direction: column;
  }
  gap: 2vw;
`;
const PageLink = styled(Link)`
  border: 1px solid black;
  border-radius:50px;
  color: black;
  font-size: 130%;
  font-family: Montserrat;
  height: 15vh;
  line-height: 15vh;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  width: 40vh;
  @media (max-width: 330px) {
    overflow:hidden;
    width: 30vh;
  }
`;

export default Home;
