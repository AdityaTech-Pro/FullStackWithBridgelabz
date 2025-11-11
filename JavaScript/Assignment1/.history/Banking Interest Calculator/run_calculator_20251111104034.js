// Temporary runner for Banking Interest Calculator (avoids existing malformed file)
function calculateTotal(accountTypeInput, amountInput, yearsInput) {
  const acctRaw = (accountTypeInput ?? '').toString().trim().toLowerCase();
  const amountVal = Number(amountInput);
  const yearsVal = Number(yearsInput);

  if (!acctRaw) throw new Error('accountType is required ("savings" or "fixed").');
  if (!isFinite(amountVal) || amountVal <= 0) throw new Error('amount must be a positive number.');
  if (!isFinite(yearsVal) || yearsVal <= 0) throw new Error('years must be a positive number.');

  let rate;
  if (acctRaw === 'savings' || acctRaw === 'saving') rate = 4.0;
  else if (acctRaw === 'fixed' || acctRaw === 'fixed deposit' || acctRaw === 'fixed_deposit') rate = 6.5;
  else throw new Error('Unknown accountType. Use "savings" or "fixed" (or "fixed deposit").');

  if (amountVal > 100000) rate += 1.0;
  const total = amountVal * Math.pow(1 + rate / 100, yearsVal);
  return Number(total.toFixed(2));
}

const samples = [
  { accountType: 'savings', amount: 50000, years: 2 },
  { accountType: 'fixed', amount: 150000, years: 3 },
  { accountType: 'savings', amount: 120000, years: 5 }
];

console.log('Running temporary runner for Banking Interest Calculator:');
for (const s of samples) {
  const total = calculateTotal(s.accountType, s.amount, s.years);
  console.log(`- ${s.accountType} | ₹${s.amount} | ${s.years}yr -> ₹${total.toFixed(2)}`);
}
