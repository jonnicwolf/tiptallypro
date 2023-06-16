export const balanceRegister = (billCounts, cashOwed, shares) => {
  let breakDown = {
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

  const total =
    Object
      .entries(billCounts)
      .map(billCount => billCount[0] * billCount[1])
      .reduce((cur,val)=>cur+val);

  // find all available denominations
  const billDenominations = Object.keys(billCountClone).sort((a, b) => b - a);

  //remove cash owed from total using appropriate bills
  let cashOwedCount = 0;
  for (let bill of billDenominations) {
    let count = Math.min(billCounts[bill], Math.floor((cashOwed - cashOwedCount) / bill));
    billCountClone[bill]-=count;
    cashOwedCount += count * bill;
    breakDown.cashOwed[bill] += count;
  };

  //remove bank
  let bank = 0;
  for (let bill of billDenominations.reverse()) {
    let count = Math.min(billCountClone[bill], Math.floor((500 - bank) / bill));
    billCountClone[bill] -= count;
    bank += count * bill;
    breakDown.bank[bill] += count;
  };

  return breakDown;
};
