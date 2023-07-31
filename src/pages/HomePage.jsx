import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  gap: 2vw;
`;
const PageLink = styled(Link)`
  border: 1px solid red;
  font-size: 2rem;
  height: 15vh;
  line-height: 15vh;
  justify-content: center;
  width: 40vh;
  text-align: center;
  text-decoration: none;
`;

export default Home;
