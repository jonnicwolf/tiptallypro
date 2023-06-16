const billCount = {
  100: 1,
  50: 2,
  20: 20,
  10: 30,
  5: 45,
  1: 200
}
const cashOwed = 400
const shares = {
  fezz: 8,
  justine: 6,
  jess: 6,
  chuck: 12
}

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

  function breakDownCash (tips, cash) {
    const denoms = [100, 50, 20, 10, 5, 1];
    const names = Object.keys(tips);
    const totalHours = Object.values(tips).reduce((pre, cur) => pre + cur);
    const breakdown = { employeeShares: {} };

    for (const employee of names) {
      const employeeHours = tips[employee];
      let employeeShare = Math.floor(((cash / totalHours) * employeeHours));
      breakdown.employeeShares[employee] = {};
      for (const denom of denoms) {
        const number_of_bills = Math.floor(employeeShare / denom);
        console.log(denom, number_of_bills, billCountClone[denom])
        if (number_of_bills <= billCountClone[denom]) {
          breakdown.employeeShares[employee][denom] = number_of_bills;
          billCountClone[denom]-=number_of_bills;
          employeeShare -= denom * number_of_bills;
        }
        else continue;
      };
    };
    return breakdown;
  };

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
  const cashTips = total-(500+cashOwed)
  console.log(total-(500+cashOwed))
  Object.assign(breakDown, breakDownCash(shares, cashTips));
  //remove bank
  let bank = 0;
  for (let bill of billDenominations.reverse()) {
    // let count = Math.min(billCounts[bill], billCountClone[bill], Math.floor((500 - bank) / bill));
    let count = Math.min(billCountClone[bill], Math.floor((500 - bank) / bill));
    console.log(billCountClone[bill], ((500-bank)/bill))
    console.log(500)
    billCountClone[bill] -= count;
    bank += count * bill;
    breakDown.bank[bill] += count;
  };
  console.log(
    Object.entries(breakDown.bank).map(sumOfDenom => Number(sumOfDenom[0]) * sumOfDenom[1]).reduce((pre,cur)=> pre+cur)
  )
  return breakDown;
};

console.log(balanceRegister(billCount, cashOwed, shares));

console.log(billCount)