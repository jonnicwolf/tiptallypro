import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TipSheet = () => {
  const [data, setData] = useState([]);
  const [totals, setTotals] = useState(false);

  const reCountCC = (data,totals,showTotal) => {
    let total = 0;
    for (let emp of data) {
      total += Number(emp.cc);
    };
    if (showTotal) {
      return total;
    } else return totals.totalCC.toFixed(2) === total.toFixed(2);
  };
  const reCountCash = (data,totals,showTotal) => {
    let total = 0;
    for (let emp of data){
      total += Number(emp.cash);
    };
    if (showTotal) {
      return total;
    } else return totals.totalCash.toFixed(2) === total.toFixed(2);
  };
  const reCountHours = (data,totals,showTotal) => {
    let total = 0;
    for (let emp of data) {
      total += emp.hoursWorked;
    };
    if (showTotal) {
      return total;
    } else return totals.totalHours === total;
  };

  const countCC = (hours, totalHours, cc) => {
    const tipsPerHour = cc/totalHours;
    return (tipsPerHour * hours);
  };
  const countCash = (hours, totalHours, cash) => {
    const tipsPerHour = cash/totalHours;
    return (tipsPerHour * hours);
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
    setTotals(
      {totalCC: Number(totalCC), totalCash: Number(totalCash), totalHours: Number(totalHours)}
      );
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
      <Container>
        <ChecksContainer>
          <CheckContainer>
            <div>
              CC Tips Add Up
            </div>
            <div>
              {
                reCountCC(data,totals)
                  ? <Check>✓</Check>
                  : '❌'
              }
            </div>
            <div>{reCountCC(data,totals,true).toFixed(2)} / {totals.totalCC}</div>
          </CheckContainer>
          <CheckContainer>
            <div>Cash Tips Add Up</div>
            <div>
              {
                reCountCash(data,totals)
                  ? <Check>✓</Check>
                  : <div>❌</div>
              }
            </div>
            <div>{reCountCash(data,totals,true).toFixed(2)} / {totals.totalCash}</div>

          </CheckContainer>
          <CheckContainer>
            <div>
              Total Hours
            </div>
            <div>
              {
                reCountHours(data,totals)
                  ? <Check>✓</Check>
                  : '❌'
              }
            </div>
            <div>{reCountHours(data,totals,true)} / {totals.totalHours}</div>
          </CheckContainer>
        </ChecksContainer>
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>CC</Th>
              <Th>$$  </Th>
              <Th>Hours</Th>
            </tr>
          </thead>
          <Tbody>
            {data.map((item, index) => (
              <EvenRow key={index}>
                <Td>{item.name}</Td>
                <Td>
                  {countCC(item.hoursWorked, totals.totalHours, totals.totalCC).toFixed(2)}
                </Td>
                <Td>
                  {countCash(item.hoursWorked, totals.totalHours, totals.totalCash).toFixed(2)}
                </Td>
                <Td>{item.hoursWorked}</Td>
              </EvenRow>
            ))}
          </Tbody>
        </Table>
      </Container>
      : null
      }
    </TipSheetContainer>
  );
};

const Button = styled.button`
  align-self: center;
  font-family: Montserrat;
  width: 90%;
`;
const Check = styled.div`
  color:green;
  font-size: 30px;
  font-weight: 900;
`;
const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ChecksContainer = styled.div`
  display: flex;
  gap: 3vw;
  justify-content: space-between;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
`;
const EvenRow = styled.tr`
  background-color: #f2f2f2;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  white-space: nowrap;
  width: 15%;
`;
const Label = styled.label`
  align-self: center;
  font-family: Montserrat;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
const Tbody = styled.tbody`
  align-self: center;
`;
const Td = styled.td`
  padding: 8px;
  text-align: center;
`;
const Th = styled.th`
  background-color: black;
  color: white;
  padding: 8px;
  text-align: center;
`;
const TipSheetContainer = styled.div`
  align-items: center;
  display: flex;
  font-family: 'Montserrat';
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
`;

export default TipSheet;
