import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../components/assets/fonts/fonts.css';

import logo from './assets/tpr_logo.jpg';

const NavBar = () => {
  return (
    <Container>
      <Link to='/'>
        <LogoContainer>
            <Logo
              src={logo}
              alt="TPR"
            />
        </LogoContainer>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  background-color: #FFFCF1;
  border-bottom: 1px solid black;
  justify-content: center;
  cursor: pointer;
  display: flex;
  padding-bottom: 20px;
`;
const LogoContainer = styled.div`
  background-color: #FFFCF1;
  // height: 20vh;
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
