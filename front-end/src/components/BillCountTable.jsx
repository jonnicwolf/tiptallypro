import React from 'react';
import styled from 'styled-components';
import { balanceRegister } from '../hooks/balanceRegister';

const BillCountTable = ({billCount, cashOwed}) => {
  const count = balanceRegister(billCount,cashOwed);
  let {bankCount, cashOwedCount} = count;
  bankCount = Object.entries(bankCount).reverse();
  cashOwedCount = Object.entries(cashOwedCount).reverse();

  console.log(`bankCount :`,bankCount)
  console.log(`cashOwedCount :`,cashOwedCount)

  return (
    <>
      <Table>
        <thead>
          Bank Breakdown
          <tr>
            <Th>100</Th>
            <Th>50</Th>
            <Th>20</Th>
            <Th>10</Th>
            <Th>5</Th>
            <Th>1</Th>
          </tr>
        </thead>
        <Tbody>
          {bankCount.map((bill, index) => (
          <tr key={index}>
            <Td>{bill[1]}</Td>
            <Td>{bill[1]}</Td>
            <Td>{bill[1]}</Td>
            <Td>{bill[1]}</Td>
            <Td>{bill[1]}</Td>
            <Td>{bill[1]}</Td>
          </tr>
          ))}
        </Tbody>
      </Table>
      <br />
      <Table>
        <thead>
          Cash Owed Breakdown
          <tr>
            <Th>100</Th>
            <Th>50</Th>
            <Th>20</Th>
            <Th>10</Th>
            <Th>5</Th>
            <Th>1</Th>
          </tr>
        </thead>
        <Tbody>
          {cashOwedCount.map((bill,index) => (
          <tr key={index}>
            <Td>{bill[1]}yo</Td>
            <Td>{bill[1]}</Td>
            <Td>{bill[1]}</Td>
            <Td>{bill[1]}</Td>
            <Td>{bill[1]}</Td>
            <Td>{bill[1]}</Td>
          </tr>
        ))}
        </Tbody>
      </Table>
    </>
  );
};

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

export default BillCountTable;
