import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NumberBox = () => {
  const [pin, setPin] = useState('');

  useEffect(pin=>{
    if (pin.length !== 4){
      //do network check in db for correct pin
    }
  })
  return (
    <Container>
      <TypedNumberContainer>
        {pin.forEach((num)=> <TypedNumber></TypedNumber>)}
      </TypedNumberContainer>
      <NumberContainer>
        <Number onClick={()=> setPin(pin+='1')}>1</Number>
        <Number onClick={()=> setPin(pin+='2')}>2</Number>
        <Number onClick={()=> setPin(pin+='3')}>3</Number>
        <Number onClick={()=> setPin(pin+='4')}>4</Number>
        <Number onClick={()=> setPin(pin+='5')}>5</Number>
        <Number onClick={()=> setPin(pin+='6')}>6</Number>
        <Number onClick={()=> setPin(pin+='7')}>7</Number>
        <Number onClick={()=> setPin(pin+='8')}>8</Number>
        <Number onClick={()=> setPin(pin+='9')}>9</Number>
        <Zero onClick={()=> setPin(pin+='0')}>0</Zero>
      </NumberContainer>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NumberContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(4, 100px);
  box-sizing: border-box;
  row-gap: 4px;
  column-gap: 4px;
`;
const TypedNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const TypedNumber = styled.p`
  width: 20px;
  height: 20px;
  background-color: brown;
  border: solid brown;
  border-radius: 20px;
`;
const Number = styled.button`
  border-radius: 50px;
  background-color: white;
  color: orange;
`;
const Zero = styled.button`
  grid-column-start: 2;
  border-radius: 50px;
  color: orange;
`;

export default NumberBox;