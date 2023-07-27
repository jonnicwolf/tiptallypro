import React, { useState } from 'react';
import styled from 'styled-components';

const TipSheet = () => {
  const [data, setData] = useState([]);
  const [totals, setTotals] = useState(null);

  const countCC = (hours, totalHours, cc) => {
    const tipsPerHour = cc/totalHours;
    return (tipsPerHour * hours).toFixed(2);
  };

  const countCash = (hours, totalHours, cash) => {
    const tipsPerHour = cash/totalHours;
    return (tipsPerHour * hours).toFixed(2); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const hoursWorked = event.target.hoursWorked.value;
    setData([
      ...data,
      { 
        name,
        hoursWorked: Number(hoursWorked),
        cc: countCC(hoursWorked, totals.totalHours, totals.totalCC),
        cash: countCash(hoursWorked, totals.totalHours, totals.totalCash)
      }]);
      event.target.reset();
    };
    const handleSubmitTotals = (event) => {
      event.preventDefault();
      const totalCC = event.target.totalCC.value;
      const totalCash = event.target.totalCash.value;
      const totalHours = event.target.totalHours.value;
      setTotals({totalCC: Number(totalCC), totalCash: Number(totalCash), totalHours: Number(totalHours)});
      event.target.reset();
    };
    
    return (
      <TipSheetContainer>
      {totals ?
        <FormContainer onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <input type="text" id="name" name="name" required />

          <Label htmlFor="hoursWorked">Hours Worked</Label>
          <input type="text" id="hoursWorked" name="hoursWorked" required />

          <Button type="submit">Add Teammate</Button>
        </FormContainer>
        :
        <FormContainer onSubmit={handleSubmitTotals}>
          <Label htmlFor="totalCC">Total Credit Card Tips</Label>
          <input type="text" id="totalCC" name="totalCC" required />

          <Label htmlFor="totalCash">Total Cash Tips</Label>
          <input type="text" id="totalCash" name="totalCash" required />

          <Label htmlFor="totalHours">Total Hours</Label>
          <input type="text" id="totalHours" name="totalHours" required />

          <Button type='submit'>Add Totals</Button>
        </FormContainer>
      }
      <br />
      {data.length !== 0 ?
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Credit Card Tips</Th>
              <Th>Cash Tips</Th>
              <Th>Hours Worked</Th>
            </tr>
          </thead>
          <Tbody>
            {data.map((item, index) => (
              <EvenRow key={index}>
                <Td>{item.name}</Td>
                <Td>
                  {countCC(item.hoursWorked, totals.totalHours, totals.totalCC)}
                </Td>
                <Td>
                  {countCash(item.hoursWorked, totals.totalHours, totals.totalCash)}
                </Td>
                <Td>{item.hoursWorked}</Td>
              </EvenRow>
            ))}
          </Tbody>
        </Table>
        : null
      }
    </TipSheetContainer>
  );
};

const TipSheetContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
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
const Button = styled.button`
align-self: center;
width: 100px;
`;
const Table = styled.table`
border-collapse: collapse;
width: 40%;
`;
const Tbody = styled.tbody`
align-self: center;
`
const Th = styled.th`
background-color: #4CAF50;
color: white;
padding: 8px;
text-align: left;
`;
const Td = styled.td`
padding: 8px;
text-align: left;
`;
const EvenRow = styled.tr`
background-color: #f2f2f2;
`;

export default TipSheet;
