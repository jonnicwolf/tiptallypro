import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import {balanceRegister} from '../hooks/balanceRegister';

const CashOut = () => {
  const [data, setData] = useState([]);
  const [billCount, setBillCount] = useState({});
  const [totals, setTotals] = useState({});
  const [breakDown, setBreakDown] = useState({});

  const handleBillCount = (event) => {
    event.preventDefault();
    const [$100, $50, $20, $10, $5, $1 ] = [
      //convert type to number for future use
      Number(event.target._100s.value),
      Number(event.target._50s.value),
      Number(event.target._20s.value),
      Number(event.target._10s.value),
      Number(event.target._5s.value),
      Number(event.target._1s.value),
    ];
    setBillCount({$100, $50, $20, $10, $5, $1});
    event.target.reset();
  };
  const handleTotals = (event) => {
    const totalCC = event.target.totalCC.value;
    const totalHours = event.target.totalHours.value;
    const totalCashOwed = event.target.totalCashOwed.value;
    setTotals({
      totalCC: Number(totalCC),
      totalHours: Number(totalHours),
      totalCashOwed: Number(totalCashOwed)});
      event.target.reset();
    };
    const handleSubmitEmployeeData = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const hoursWorked = event.target.hoursWorked.value;
      setData([
        ...data,
        {
          name,
          hoursWorked: Number(hoursWorked),
          cc: countCC(hoursWorked, totals.totalHours, totals.totalCC)
        }]);
        event.target.reset();
      };
    const handleSubmit = (event) => {
      event.preventDefault()
      handleTotals(event)
      handleBillCount(event)
    }

  const countCC = (hours, totalHours, cc) => {
    const tipsPerHour = cc/totalHours;
    return (tipsPerHour * hours).toFixed(2);
  };
  const countCash = (hours, totalHours, cash) => {
    const tipsPerHour = cash/totalHours;
    return (tipsPerHour * hours).toFixed(2);
  };
  console.log('billCount: ',JSON.stringify(billCount))
  console.log('totals: ',JSON.stringify(totals))
  console.log('billCount size:',Object.keys(billCount).length)

  return (
    <CashOutContainer>
      {Object.keys(billCount).length > 0 ?
        <FormContainer onSubmit={handleSubmitEmployeeData}>
          <EmployeeData>
            <Label htmlFor="name">Name</Label>
            <input type="text" id="name" name="name" required />

            <Label htmlFor="hoursWorked">Hours Worked</Label>
            <input type="text" id="hoursWorked" name="hoursWorked" required />
            <button type='submit'>Add Teammate</button>
            <button type='button' onClick={()=>balanceRegister(billCount,totals.totalCashOwed, data, setBreakDown)}>Start Breakdown</button>
          </EmployeeData>
        </FormContainer>
      :
        <FormContainer onSubmit={handleSubmit}>
          <BillCount>
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
          </BillCount>

          <Totals>
            <Label htmlFor="totalCC">Total Credit Card Tips</Label>
            <input type="text" id="totalCC" name="totalCC" required />

            <Label htmlFor="totalHours">Total Hours</Label>
            <input type="text" id="totalHours" name="totalHours" required />

            <Label htmlFor="totalCashOwed">Cash owed to house</Label>
            <input type="text" id="totalCashOwed" name="totalCashOwed" required />
          </Totals>

          <ButtonBox>
            <Button type='submit'>Clear</Button>
            <Button type='refresh'>Submit Numbers</Button>
          </ButtonBox>
        </FormContainer>
      }
      <br />
      {data ?
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
    </CashOutContainer>
  );
};

const CashOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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
const Button = styled.button`
  align-self: center;
  width: 100px;
`;
const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 15%;
`;
const Label = styled.label`
  align-self: center;
`;
const Totals = styled.div`
  display: flex;
  flex-direction: column;
`;
const BillCount = styled.div`
  display: flex;
  flex-direction: column;
`;
const EmployeeData = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default CashOut;