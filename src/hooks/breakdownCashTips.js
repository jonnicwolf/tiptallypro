export function allocateCash(billCount, hoursWorked) {
  let totalCash = 0;
  let totalHours = 0;
  let remainderCash

  // Step 1: Calculate total cash and worked hours
  for (const bill in billCount) {
    totalCash += bill * billCount[bill];
  }

  for (const hours in hoursWorked) {
    totalHours += hoursWorked[hours];
  }

  // Step 2: Calculate share per hour
  const sharePerHour = totalCash / totalHours;

  // Step 3: Distribute cash to employees
  const cashAllocations = {};

  const sortedBills = Object.keys(billCount)
    .map(Number)
    .sort((a, b) => b - a);

  for (const employee in hoursWorked) {
    const workedHours = hoursWorked[employee];
    const cashAllocation = workedHours * sharePerHour;
    const cashDistribution = {};

    let remainingCash = cashAllocation;

    for (const bill of sortedBills) {
      const billCountAvailable = billCount[bill];
      const billCountToAllocate = Math.floor(remainingCash / bill);

      const allocatedBills = Math.min(billCountToAllocate, billCountAvailable);

      billCount[bill] -= allocatedBills;
      cashDistribution[bill] = allocatedBills;

      remainingCash -= allocatedBills * bill;
    }

    cashAllocations[employee] = cashDistribution;
    remainderCash = remainingCash
  }

  // Step 4: Allocate remaining cash
  const remainderAllocations = {};

  const sortedRemainingBills = sortedBills.filter((bill) => bill <= remainderCash);

  for (const bill of sortedRemainingBills) {
    const billCountAvailable = billCount[bill];
    const billCountToAllocate = Math.floor(remainderCash / bill);

    const allocatedBills = Math.min(billCountToAllocate, billCountAvailable);

    billCount[bill] -= allocatedBills;
    remainderAllocations[bill] = allocatedBills;

    remainingCash -= allocatedBills * bill;
  }

  cashAllocations.remainder = remainderAllocations;

  // Step 5: Return cash allocations
  return cashAllocations;
};
