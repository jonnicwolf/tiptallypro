import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Container>
      <NavLink to='/'>Tip Sheet</NavLink>
      <NavLink to='/balance-register'>Balance Register</NavLink>
      {/* <NavLink to='/manuals'>Manuals</NavLink> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  column-gap: 10px;
  cursor: pointer;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default NavBar;