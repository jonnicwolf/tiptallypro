const billCount = {
  $100: 1,
  $50: 2,
  $20: 20,
  $10: 30,
  $5: 45,
  $1: 200
}
const cashOwed = 400
const shares = {
  fezz: 8,
  justine: 6,
  jess: 6,
  chuck: 12
}

export const balanceRegister = (billCounts, cashOwed, shares) => {
  console.log(billCount)
  console.log(cashOwed)
  console.log(shares)
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
  const billCountClone = {...billCounts};
  // find the total of all bills
  // const total = 
  //   Object.entries(billCounts)
  //         .map(billCount => billCount = billCount[0]*billCount[1])
  //         .reduce((cur,val)=>cur+val);
  // find all available denominations
  const billDenominations =
    Object.keys(billCountClone)
          .sort((a, b) => b - a);
  
  console.log(billDenominations)
  //remove cash owed from total using appropriate bills
  let cashOwedCount = 0;
  for (let bill of billDenominations) {
    bill = Number(bill.slice(1))
    let count = Math.min(billCounts['$'+bill], Math.floor((cashOwed - cashOwedCount) / bill));
    billCountClone['$'+bill] -= count;
    cashOwedCount += count * bill;
    breakDown.cashOwed[bill] += count;
  };
  //add cash shares to breakdown
  Object.assign(breakDown, breakDownCash(shares));
  //remove bank
  let bank = 0;
  for (let bill of billDenominations) {
    console.log(bill)
    bill = Number(bill.slice(1))
    console.log(bill)
    let count = Math.min(billCounts['$'+bill], billCountClone['$'+bill], Math.floor((500 - bank) / bill));
    console.log(bank)
    console.log(count)
    billCountClone['$'+bill] -= count;
    billCountClone
    bank += count * bill;
    breakDown.bank[bill] += count;
  };
  return breakDown;
};

console.log(balanceRegister(billCount, cashOwed, shares))