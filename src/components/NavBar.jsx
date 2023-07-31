import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../components/assets/fonts/fonts.css';

const NavBar = () => {
  return (
    <Container>
      <Link to='/'>
        <LogoContainer>
            <Logo
              src={'https://images.squarespace-cdn.com/content/v1/560d8157e4b0dfb263d37f7d/1447992635371-E29KM9C6YNABAP5MSETF/logo2.png?format=1500w'}
              alt="Folly Logo"
            />
        </LogoContainer>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  background-color: black;
  justify-content: center;
  cursor: pointer;
  display: flex;
  padding-bottom: 20px;
`;
const LogoContainer = styled.div`
  background-color: black;
  width: 13vw;
  @media (max-width: 1031px) {
    width: 25vw;
  }
  @media (max-width: 600px) {
    width: 30vw;
  }
  @media (max-width: 500px) {
    width: 35vw;
  }
`;
const Logo = styled.img`
  background-color: black;
  height: 7vh;
  transform: translateY(5px);
  width: 10vw;
  @media (max-width: 1031px) {
    width: 20vw;
  }
  @media (max-width: 600px) {
    width: 25vw;
  }
  @media (max-width: 500px) {
    width: 30vw;
  }
`;

export default NavBar;
