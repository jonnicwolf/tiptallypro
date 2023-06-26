import React from 'react';
import styled from 'styled-components';

const HoursWorkedForm = (dataGetter, dataSetter, totalsGetter,) => {
  const countCC = (hours, totalHours, cc) => {
    const tipsPerHour = cc/totalHours;
    return (tipsPerHour * hours).toFixed(2);
  };
  const countCash = (hours, totalHours, cash) => {
    const tipsPerHour = cash/totalHours;
    return (tipsPerHour * hours).toFixed(2); 
  };

  const handleSubmitEmployeeData = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const hoursWorked = event.target.hoursWorked.value;
    dataSetter([
      ...dataGetter,
      {
        name,
        hoursWorked: Number(hoursWorked),
        cc: countCC(hoursWorked, totalsGetter.totalHours, totalsGetter.totalCC)
      }]);
    event.target.reset();
  };

  return (
    <FormContainer onSubmit={()=>handleSubmitEmployeeData}>
      <Label htmlFor="name">Name</Label>
      <input type="text" id="name" name="name" required />

      <Label htmlFor="hoursWorked">Hours Worked</Label>
      <input type="text" id="hoursWorked" name="hoursWorked" required />

      <Button type="submit">Add Teammate</Button>
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
export default HoursWorkedForm;

