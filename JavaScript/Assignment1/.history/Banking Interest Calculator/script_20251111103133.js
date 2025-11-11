// Banking Interest Calculator
// This file provides a calculateTotal(accountType, amount, years) function
// and wires a small browser UI when running in a browser. When run under Node,
// it runs a couple of sample tests and prints results to console.

let accountType, amount, years;

function calculateTotal(accountTypeInput, amountInput, yearsInput) {
  // Use provided args or fallback to outer variables
  const acctRaw = (accountTypeInput ?? accountType ?? '').toString().trim().toLowerCase();
  const amountVal = Number(amountInput ?? amount);
  const yearsVal = Number(yearsInput ?? years);

  if (!acctRaw) throw new Error('accountType is required ("savings" or "fixed").');
  if (!isFinite(amountVal) || amountVal <= 0) throw new Error('amount must be a positive number.');
  if (!isFinite(yearsVal) || yearsVal <= 0) throw new Error('years must be a positive number.');

  // Determine base rate
  let rate;
  if (acctRaw === 'savings' || acctRaw === 'saving') rate = 4.0;
  else if (acctRaw === 'fixed' || acctRaw === 'fixed deposit' || acctRaw === 'fixed_deposit') rate = 6.5;
  else throw new Error('Unknown accountType. Use "savings" or "fixed" (or "fixed deposit").');

  // Bonus if amount > 100000
  if (amountVal > 100000) rate += 1.0; // +1% bonus

  const total = amountVal * Math.pow(1 + rate / 100, yearsVal);
  // Round to two decimals and return as number
  return Number(total.toFixed(2));
}

// Browser wiring: attach to DOM if present
if (typeof document !== 'undefined') {
  const btn = document.getElementById('calc');
  const result = document.getElementById('result');
  btn.addEventListener('click', () => {
    try {
      const acct = document.getElementById('accountType').value;
      const amt = Number(document.getElementById('amount').value);
      const yrs = Number(document.getElementById('years').value);
      const total = calculateTotal(acct, amt, yrs);
      result.textContent = `Final balance after ${yrs} year(s): ₹ ${total.toFixed(2)}`;
    } catch (err) {
      result.textContent = 'Error: ' + err.message;
    }
  });
}

// Node/test runner
if (typeof window === 'undefined' && typeof module !== 'undefined') {
  // Run quick sample tests and print results
  const samples = [
    { accountType: 'savings', amount: 50000, years: 2 },
    { accountType: 'fixed', amount: 150000, years: 3 },
    { accountType: 'savings', amount: 120000, years: 5 }
  ];

  console.log('Running sample calculations for Banking Interest Calculator:');
  for (const s of samples) {
    try {
      const total = calculateTotal(s.accountType, s.amount, s.years);
      console.log(`- ${s.accountType} | ₹${s.amount} | ${s.years}yr -> ₹${total.toFixed(2)}`);
    } catch (err) {
      console.error('Error for sample:', s, err.message);
    }
  }

  // Export for other Node code if required
  module.exports = { calculateTotal };
}
