export const balanceRegister = (billCounts, cashOwed) => {
  let breakDown = {
    bankCount: {
      100: 0,
      50: 0,
      20: 0,
      10: 0,
      5: 0,
      1: 0,
    },
    cashOwedCount: {
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
      .map(billCount => Number(billCount[0].slice(1)) * billCount[1])
      .reduce((cur,val)=>cur+val);

  // find all available denominations
  const billDenominations = Object.keys(billCountClone).map(num=>Number(num.slice(1))).sort((a, b) => b - a);

  //remove cash owed from total using appropriate bills
  let owedToHouse = 0;
  for (let bill of billDenominations) {
    let count = Math.min(billCounts['$'+bill], Math.floor((cashOwed - owedToHouse) / bill));
    billCountClone['$'+bill] -= count;
    owedToHouse += count * bill;
    breakDown.cashOwedCount[bill] += count;
  };

  //remove bank
  let bank = 0;
  for (let bill of billDenominations.reverse()) {
    let count = Math.min(billCountClone['$'+bill], Math.floor((500 - bank) / bill));
    billCountClone['$'+bill] -= count;
    bank += count * bill;
    breakDown.bankCount[bill] += count;
  };

  //calculate if over or under
  const remainder = (bank + owedToHouse) % total;
  if (remainder > 0) Object.assign(breakDown, {over: total - (bank + owedToHouse)})
  else if (remainder === total) Object.assign(breakDown, {over: total-(bank + owedToHouse)})

  return breakDown;
};

// const billCount = {
// console.log(balanceRegister(billCount,cashOwed));
