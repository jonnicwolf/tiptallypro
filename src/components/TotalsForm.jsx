import React from 'react';
import styled from 'styled-components';

const TotalsForm = (totalsSetter, isPrimaryVisible, isSecondaryVisible) => {
  const handleSubmitTotals = (event) => {
    event.preventDefault();
    const totalCC = event.target.totalCC.value;
    const totalHours = event.target.totalHours.value;
    const totalCashOwed = event.target.totalCashOwed.value;
    totalsSetter({totalCC: Number(totalCC), totalHours: Number(totalHours), totalCashOwed: Number(totalCashOwed)});
    isPrimaryVisible(false);
    isSecondaryVisible(true);
  };

  return (
    <FormContainer onSubmit={()=>handleSubmitTotals}>
      <Label htmlFor="totalCC">Total Credit Card Tips</Label>
      <input type="text" id="totalCC" name="totalCC" required />

      <Label htmlFor="totalHours">Total Hours</Label>
      <input type="text" id="totalHours" name="totalHours" required />

      <Label htmlFor="totalCashOwed">Cash owed to house</Label>
      <input type="text" id="totalCashOwed" name="totalCashOwed" required />

      <Button type='submit'>Add Totals</Button>
    </FormContainer>
  );
};

const Button = styled.button`
  align-self: center;
  width: 100px;
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
`;

export default TotalsForm;