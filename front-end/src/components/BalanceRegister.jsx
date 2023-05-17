import React, { useState } from 'react'

const BalanceRegister = () => {
  const [billCount, setBillCount] = useState({});
  const [tipData, setTipData] = useState({})
  const RegisterBalancer = (billCounts, cashOwed) => {
    const breakDown ={
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
      },
    };
    const billCountClone = {...billCounts};

    //find the total of all bills ✅
    const total = Object.entries(billCounts)
                        .map(billCount => billCount = billCount[0]*billCount[1])
                        .reduce((cur,val)=>cur+val);

    //find all available denominations ✅
    const billDenominations =
      Object.keys(billCounts)
            .map(Number)
            .sort((a, b) => b - a);

    //remove cash owed from total using appropriate bills
    let cashOwedCount = 0;
    for (let bill of billDenominations) {
      for (let i=0; i<=billCounts[bill]; i++) {
        if (billCountClone[bill] > 0 && cashOwedCount !== cashOwed) {
              billCountClone[bill]--;
              cashOwedCount += bill;
              breakDown.cashOwed[bill]++;
          }
        else continue;
      };
    };

    //remove bank
    let bank = 0;
    for (let bill of billDenominations) {
      for (let i=0; i<billCounts[bill]; i++) {
        if (billCountClone[bill] > 0 && bank !== 500) {
          billCountClone[bill]--;
          bank += bill;
          breakDown.bank[bill]++;
        };
      };
    };
    return breakDown;
  };

  return (
    <div>
      <form action="">
        <label htmlFor="100s">100s</label>
        <input type="text" id='100s' name='100s'/>

        <label htmlFor="50s">50s</label>
        <input type="text" id='50s' name='50s'/>

        <label htmlFor="20s">20s</label>
        <input type="text" id='20s' name='20s'/>

        <label htmlFor="10s">10s</label>
        <input type="text" id='10s' name='10s'/>

        <label htmlFor="5s">5s</label>
        <input type="text" id='5s' name='5s'/>

        <label htmlFor="1s">1s</label>
        <input type="text" id='1s' name='1s'/>
      </form>
    </div>
  )
}

export default BalanceRegister;