import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../components/assets/fonts/fonts.css';

const NavBar = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo
          src={'https://images.squarespace-cdn.com/content/v1/560d8157e4b0dfb263d37f7d/1447992635371-E29KM9C6YNABAP5MSETF/logo2.png?format=1500w'}
          alt="Folly Logo"
        />
      </LogoContainer>
      <NavLink to='/'>Tip Sheet</NavLink>
      <NavLink to='/balance-register'>Balance Register</NavLink>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid black;
  background-color: black;
  cursor: pointer;
  gap: 50px;
  display: flex;
  padding-bottom: 20px;
  overflow: hidden;
`;
const LogoContainer = styled.div`
  width: 70vw;
`;
const Logo = styled.img`
  background-color: black;
  height: 7vh;
  width: 10vw;
  transform: translate(-15px, 8px);
`;
const NavLink = styled(Link)`
  color: white; 
  font-family: 'Alegreya', serif;
  font-size: 30px;
  text-decoration: none;
  transform: translate(15px, 15px);
`;

export default NavBar;