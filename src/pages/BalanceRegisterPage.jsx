import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import BillCountForm from '../components/BillCountForm';
import BillCountTable from '../components/BillCountTable';

const BalanceRegisterPage = () => {
  const [billCount, setBillCount] = useState(null);
  const [cashOwed, setCashOwed] = useState(0);

  return (
    <Page>
      <BillCountForm billCountSetter={setBillCount} cashOwedSetter={setCashOwed}/>
      <br /><br />
      {billCount && cashOwed && <BillCountTable billCount={billCount} cashOwed={cashOwed}/>}
    </Page>
  );
};

const Page = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

export default BalanceRegisterPage;
