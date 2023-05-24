import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CashOut = () => {
  const [data, setData] = useState([]);
  const [billCount, setBillCount] = useState({});
  const [totals, setTotals] = useState(null);
  const [tipData, setTipData] = useState({});

  const handleSubmitBillCount = (event) => {
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
  };

  const countCC = (hours, totalHours, cc) => {
    const tipsPerHour = cc/totalHours;
    return (tipsPerHour * hours).toFixed(2);
  };
  const countCash = (hours, totalHours, cash) => {
    const tipsPerHour = cash/totalHours;
    return (tipsPerHour * hours).toFixed(2); 
  };

  function breakDownCash(tips) {
    const denoms = [100, 50, 20, 10, 5, 1];
    const names = Object.keys(tips);
    const breakdown = {};
  
    for (const employee of names) {
      breakdown[employee] = {};
      let remainingAmount = tips[employee];
  
      for (const denom of denoms) {
        const billsAdded = Math.floor(remainingAmount / denom);
        if (billsAdded > 0) {
          breakdown[employee][denom] = billsAdded;
          remainingAmount -= denom * billsAdded;
        };
      };
    };
    return breakdown;
  };

  const BalanceRegister = (billCounts, cashOwed, shares) => {
    let breakDown ={
      bank: {
        100: 0,
         50: 0,
         20: 0,
         10: 0,
          5: 0,
          1: 0,
      },
      cashOwed: {
        100: 0,
         50: 0,
         20: 0,
         10: 0,
          5: 0,
          1: 0,
      }
    };
    const billCountClone = {...billCounts};
    //find the total of all bills 
    const total = 
      Object.entries(billCounts)
            .map(billCount => billCount = billCount[0]*billCount[1])
            .reduce((cur,val)=>cur+val);
    //find all available denominations 
    const billDenominations =
      Object.keys(billCounts)
            .map(Number)
            .sort((a, b) => b - a);
    //remove cash owed from total using appropriate bills
    let cashOwedCount = 0;
    for (let bill of billDenominations) {
      let count = Math.min(billCounts[bill], Math.floor((cashOwed - cashOwedCount) / bill));
      billCountClone[bill] -= count;
      cashOwedCount += count * bill;
      breakDown.cashOwed[bill] += count;
    };
    //add cash shares to breakdown
    Object.assign(breakDown, breakDownCash(shares));
    //remove bank
    let bank = 0;
    for (let bill of billDenominations) {
      let count = Math.min(billCounts[bill], billCountClone[bill], Math.floor((500 - bank) / bill));
      billCountClone[bill] -= count;
      bank += count * bill;
      breakDown.bank[bill] += count;
    };
    setTotals(...totals, {totalCash: Number(total-(bank+cashOwed))})
    console.log(totals)
    return breakDown;
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
        cc: countCC(hoursWorked, totals.totalHours, totals.totalCC),
        cash: countCash(hoursWorked, totals.totalHours, totals.totalCash)
      }]);
      event.target.reset();
    };
    const handleSubmitTotals = (event) => {
      event.preventDefault();
      const totalCC = event.target.totalCC.value;
      const totalHours = event.target.totalHours.value;
      setTotals({totalCC: Number(totalCC), totalHours: Number(totalHours)});
      event.target.reset();
    };

  return (
    <CashOutContainer>
      {totals ?
        <FormContainer onSubmit={handleSubmitTotals}>
          <Label htmlFor="totalCC">Total Credit Card Tips</Label>
          <input type="text" id="totalCC" name="totalCC" required />

          <Label htmlFor="totalCash">Total Cash Tips</Label>
          <input type="text" id="totalCash" name="totalCash" required />

          <Label htmlFor="totalHours">Total Hours</Label>
          <input type="text" id="totalHours" name="totalHours" required />

          <Button type='submit'>Add Totals</Button>
        </FormContainer>
        :
        billCount ?
        <form onSubmit={handleSubmitBillCount}>
          <label htmlFor="_100s">100s</label>
          <input type="text" id='_100s' name='_100s'/>

          <label htmlFor="_50s">50s</label>
          <input type="text" id='_50s' name='_50s'/>

          <label htmlFor="_20s">20s</label>
          <input type="text" id='_20s' name='_20s'/>

          <label htmlFor="_10s">10s</label>
          <input type="text" id='_10s' name='_10s'/>

          <label htmlFor="_5s">5s</label>
          <input type="text" id='_5s' name='_5s'/>

          <label htmlFor="_1s">1s</label>
          <input type="text" id='_1s' name='_1s'/>

          <button type='submit'>Submit</button>
        </form>
        :
        <FormContainer onSubmit={handleSubmitEmployeeData}>
          <Label htmlFor="name">Name</Label>
          <input type="text" id="name" name="name" required />

          <Label htmlFor="hoursWorked">Hours Worked</Label>
          <input type="text" id="hoursWorked" name="hoursWorked" required />

          <Button type="submit">Add Teammate</Button>
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
      };
    </CashOutContainer>
  );
};

const CashOutContainer = styled.div`
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

export default CashOut; 