import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import BillCountForm from '../components/BillCountForm';
import BillCountTable from '../components/BillCountTable';

const BalanceRegisterPage = () => {
  const [billCount, setBillCount] = useState(null);
  const [cashOwed, setCashOwed] = useState(0);
  console.log(`billCount balanceRegisterPage: ${JSON.stringify(billCount)}`)
  console.log(`cashOwed balanceRegisterPage: ${cashOwed}`)

  return (
    <div>
      <BillCountForm billCountSetter={setBillCount} cashOwedSetter={setCashOwed}/>
      {billCount && cashOwed && <BillCountTable billCount={billCount} cashOwed={cashOwed}/>}
    </div>
  );
};

export default BalanceRegisterPage;
