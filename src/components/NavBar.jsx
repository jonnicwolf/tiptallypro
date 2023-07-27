import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Container>
      <NavLink to='/'>Tip Sheet</NavLink>
      <NavLink to='/balance-register'>Balance Register</NavLink>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid black;
  column-gap: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  padding-bottom: 20px;
`;
const NavLink = styled(Link)`
  
  color: inherit;
  text-decoration: none;
`;

export default NavBar;