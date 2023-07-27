import React from 'react';
import styled from 'styled-components';
import '../components/assets/fonts/fonts.css';

const BillCountForm = ({billCountSetter, cashOwedSetter}) => {
  const handleSubmitBillCount = (event) => {
    event.preventDefault();
    const [$100, $50, $20, $10, $5, $1 ] = [
      Number(event.target._100s.value),
      Number(event.target._50s.value),
      Number(event.target._20s.value),
      Number(event.target._10s.value),
      Number(event.target._5s.value),
      Number(event.target._1s.value),
    ];

    billCountSetter({$100, $50, $20, $10, $5, $1});
    cashOwedSetter(Number(event.target.cashOwed.value));

    event.target.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmitBillCount}>
      <Label htmlFor="cashOwed">Cash owed to house</Label>
      <input type="text" id="cashOwed" name="cashOwed" required />

      <Label htmlFor="_100s">100s</Label>
      <input type="text" id='_100s' name='_100s'/>

      <Label htmlFor="_50s">50s</Label>
      <input type="text" id='_50s' name='_50s'/>

      <Label htmlFor="_20s">20s</Label>
      <input type="text" id='_20s' name='_20s'/>

      <Label htmlFor="_10s">10s</Label>
      <input type="text" id='_10s' name='_10s'/>

      <Label htmlFor="_5s">5s</Label>
      <input type="text" id='_5s' name='_5s'/>

      <Label htmlFor="_1s">1s</Label>
      <input type="text" id='_1s' name='_1s'/>

      <Button type='submit'>Submit</Button>
    </FormContainer>
  );
};

const Button = styled.button`
  font-family: Montserrat;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 15%;
`;
const Label = styled.label`
  align-self: center;
  font-family: Montserrat;
`;

export default BillCountForm;
