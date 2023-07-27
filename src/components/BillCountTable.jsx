import React from 'react';
import styled from 'styled-components';
import '../components/assets/fonts/fonts.css';
import { balanceRegister } from '../hooks/balanceRegister';

const BillCountTable = ({billCount, cashOwed}) => {
  const count = balanceRegister(billCount,cashOwed);
  let {bankCount, cashOwedCount} = count;
  bankCount = Object.entries(bankCount).reverse();
  cashOwedCount = Object.entries(cashOwedCount).reverse();

  return (
    <>
      <Table>
        <thead>
          <Title>Bank Breakdown</Title>
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
          {bankCount.map((bill) => (
          <Td>
            {bill[1]}
          </Td>
          ))}
        </Tbody>
      </Table>
      <br />
      <Table>
        <thead>
          <Title>Cash Owed Breakdown</Title>
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
          {cashOwedCount.map((bill) => (
          <Td>
            {bill[1]}
          </Td>
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
const Title = styled.p`
  font-family: Montserrat;
  white-space: nowrap;
`;
const Tbody = styled.tbody`
  align-self: center;
`;
const Th = styled.th`
  background-color: black;
  color: white;
  font-family: Montserrat;
  text-align: center;
  height: 4vh;
`;
const Td = styled.td`
  font-family: Montserrat;
  padding: 8px;
  text-align: center;
  width: 100px;
`;

export default BillCountTable;
