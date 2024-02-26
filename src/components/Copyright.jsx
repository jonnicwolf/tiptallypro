import React from 'react';
import styled from 'styled-components';

const Copyright = () => {
  return (
    <Footer>&#169; 2023 Jonathan N. W. Narine </Footer>
  );
};

const Footer = styled.footer`
  border-top: 1px solid black;
  display: flex;
  justify-content: center;
  font-family: 'Gruppo' , sans-serif;
`;

export default Copyright;
