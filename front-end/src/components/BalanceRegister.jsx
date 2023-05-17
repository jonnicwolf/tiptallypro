import React, { useState } from 'react'

const BalanceRegister = () => {
  const [billCount, setBillCount] = useState({});
  const [tipData, setTipData] = useState({});

  const billCountSubmit = (event) => {
    event.preventDefault();
    const [$100, $50, $20, $10, $5, $1 ] = [
      event.target._100s.value,
      event.target._50s.value,
      event.target._20s.value,
      event.target._10s.value,
      event.target._5s.value,
      event.target._1s.value,
    ]
    setBillCount({$100, $50, $20, $10, $5, $1})
  }
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
      </form>
    </div>
  );
};

export default BalanceRegister;