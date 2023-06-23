import React from 'react';
import { balanceRegister } from '../hooks/balanceRegister';

const BillCountTable = ({billCount, cashOwed}) => {
  const count = balanceRegister(billCount,cashOwed);
  console.log('BillCountTable :', count)
  const {bankCount, cashOwedCount} = count;
  return (
    <>
      <table>
        <thead>
          Bank Breakdown
          <tr>
            <th>100</th>
            <th>50</th>
            <th>20</th>
            <th>10</th>
            <th>5</th>
            <th>1</th>
          </tr>
        </thead>
        <tbody>
          {bankCount.map((bill, index) => {
            <tr key={index}>
              <td>{bill[1]}</td>
              <td>{bill[1]}</td>
              <td>{bill[1]}</td>
              <td>{bill[1]}</td>
              <td>{bill[1]}</td>
              <td>{bill[1]}</td>
            </tr>
          })}
        </tbody>
      </table>

      <table>
        <thead>
          Cash Owed Breakdown
          <tr>
            <th>100</th>
            <th>50</th>
            <th>20</th>
            <th>10</th>
            <th>5</th>
            <th>1</th>
          </tr>
        </thead>
        <tbody>
          {cashOwedCount.map((bill,index) => {
            <tr key={index}>
              <td>{bill[1]}</td>
              <td>{bill[1]}</td>
              <td>{bill[1]}</td>
              <td>{bill[1]}</td>
              <td>{bill[1]}</td>
              <td>{bill[1]}</td>
            </tr>
          })}
        </tbody>
      </table>
    </>
  );
};

export default BillCountTable;
