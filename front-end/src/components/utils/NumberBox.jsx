// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

// const NumberBox = () => {
//   const [pin, setPin] = useState('');

//   // useEffect(pin=>{
//   //   if (pin.length !== 4){
//   //     //do network check in db for correct pin
//   //   }
//   // })
//   return (
//     <Container>
//       <TypedNumberContainer>
//         {pin && Array(pin).map((num)=> <TypedNumber/>)}
//       </TypedNumberContainer>
//       <NumberContainer>
//         <Number onClick={()=>setPin(pin+='1')}>1</Number>
//         <Number onClick={setPin(pin+='2')}>2</Number>
//         <Number onClick={setPin(pin+='3')}>3</Number>
//         <Number onClick={setPin(pin+='4')}>4</Number>
//         <Number onClick={setPin(pin+='5')}>5</Number>
//         <Number onClick={setPin(pin+='6')}>6</Number>
//         <Number onClick={setPin(pin+='7')}>7</Number>
//         <Number onClick={setPin(pin+='8')}>8</Number>
//         <Number onClick={setPin(pin+='9')}>9</Number>
//         <Zero   onClick={setPin(pin+='0')}>0</Zero>
//       </NumberContainer>
//     </Container>
//   )
// };

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const NumberContainer = styled.div`
//   display: inline-grid;
//   grid-template-columns: repeat(3, 100px);
//   grid-template-rows: repeat(4, 100px);
//   box-sizing: border-box;
//   row-gap: 4px;
//   column-gap: 4px;
// `;
// const TypedNumberContainer = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
// const TypedNumber = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: brown;
//   border: solid brown;
//   border-radius: 20px;
// `;
// const Number = styled.button`
//   border-radius: 50px;
//   background-color: white;
//   color: orange;
// `;
// const Zero = styled.button`
//   grid-column-start: 2;
//   border-radius: 50px;
//   color: orange;
// `;

// export default NumberBox;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NumberBox = () => {
  const [pin, setPin] = useState('');

  useEffect(() => {
    if (pin.length === 4) {
      // TODO: Perform network check with pin
      console.log(`Checking pin ${pin}...`);
    }
  }, [pin]);

  const handleNumberClick = (digit) => {
    setPin((currentPin) => currentPin.length < 4 ? currentPin + digit : currentPin);
  };

  const isTyped = (index) => index < pin.length;

  return (
    <Container>
      <TypedNumberContainer>
        {Array.from({ length: 4 }, (_, index) => (
          <TypedNumber key={index} typed={isTyped(index)} />
        ))}
      </TypedNumberContainer>
      <NumberContainer>
        <Number onClick={()=> handleNumberClick(1)}>1</Number>
        <Number onClick={()=> handleNumberClick(2)}>2</Number>
        <Number onClick={()=> handleNumberClick(3)}>3</Number>
        <Number onClick={()=> handleNumberClick(4)}>4</Number>
        <Number onClick={()=> handleNumberClick(5)}>5</Number>
        <Number onClick={()=> handleNumberClick(6)}>6</Number>
        <Number onClick={()=> handleNumberClick(7)}>7</Number>
        <Number onClick={()=> handleNumberClick(8)}>8</Number>
        <Number onClick={()=> handleNumberClick(9)}>9</Number>
        <Zero   onClick={()=> handleNumberClick(0)}>0</Zero>
      </NumberContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NumberContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(4, 100px);
  box-sizing: border-box;
  row-gap: 4px;
  column-gap: 4px;
`;

const TypedNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 32px;
`;

const TypedNumber = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ typed }) => typed ? 'orange' : 'gray'};
  border: solid 1px ${({ typed }) => typed ? 'orange' : 'gray'};
  border-radius: 50%;
  margin-right: 8px;
`;

const Number = styled.button`
  border-radius: 50%;
  background-color: white;
  color: orange;
  font-size: 24px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: lightgray;
  }
`;

const Zero = styled.button`
  grid-column-start: 2;
  border-radius: 50px;
  color: orange;
  font-size: 24px;
  font-weight: bold;
  background-color: white;
`;

export default NumberBox;
