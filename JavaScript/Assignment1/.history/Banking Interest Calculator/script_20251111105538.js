// Banking Interest Calculator
// This file provides a calculateTotal(accountType, amount, years) function
// and wires a small browser UI when running in a browser. When run under Node,
// it runs a couple of sample tests and prints results to console.

let accountType, amount, years;

function calculateTotal(accountTypeInput, amountInput, yearsInput) {
    // Use provided args or fallback to outer variables
    const acctRaw = (accountTypeInput ? ? accountType ? ? '').toString().trim().toLowerCase();
    const amountVal = Number(amountInput ? ? amount);
    const yearsVal = Number(yearsInput ? ? years);

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

            // Calculate total and rate for detailed display
            const acctRaw = acct.toLowerCase();
            let baseRate = (acctRaw === 'savings') ? 4.0 : 6.5;
            let finalRate = baseRate;
            if (amt > 100000) finalRate += 1.0; // Bonus rate

            const total = calculateTotal(acct, amt, yrs);
            const interestEarned = total - amt;

            // Determine if bonus was applied
            const bonusApplied = amt > 100000 ? ' <span style="color: #27ae60; font-size: 13px;">(+ 1% bonus)</span>' : '';
            const acctType = (acctRaw === 'savings') ? 'Savings Account' : 'Fixed Deposit';

            // Display detailed result with enhanced styling
            result.innerHTML = `
                <div style="text-align: left; display: inline-block; width: 100%;">
                    <div>
                        <span style="display: inline-block; width: 140px;"><strong>📊 Account Type:</strong></span>
                        <span style="color: #764ba2;">${acctType}</span>
                    </div>
                    <div>
                        <span style="display: inline-block; width: 140px;"><strong>💰 Principal Amount:</strong></span>
                        <span style="color: #667eea;">₹ ${amt.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                    </div>
                    <div>
                        <span style="display: inline-block; width: 140px;"><strong>📈 Interest Rate:</strong></span>
                        <span style="color: #667eea;">${finalRate.toFixed(2)}% p.a.${bonusApplied}</span>
                    </div>
                    <div>
                        <span style="display: inline-block; width: 140px;"><strong>⏱️ Time Period:</strong></span>
                        <span style="color: #667eea;">${yrs} year(s)</span>
                    </div>
                    <div class="result-summary">
                        <div style="margin: 8px 0;">
                            <span style="display: inline-block; width: 140px;"><strong>✅ Interest Earned:</strong></span>
                            <span style="color: #27ae60; font-weight: 700;">₹ ${interestEarned.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                        </div>
                        <div class="final-amount" style="margin-top: 12px;">
                            <span style="display: inline-block; width: 140px;"><strong>🎯 Final Balance:</strong></span>
                            <span>₹ ${total.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                        </div>
                    </div>
                </div>
            `;
        } catch (err) {
            result.innerHTML = `<div style="color: #e74c3c; font-weight: 700;">❌ Error: ${err.message}</div>`;
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

// ============================================================================
// OUTPUT DOCUMENTATION AND CALCULATION DETAILS
// ============================================================================
// This section documents the output structure and calculation methodology
// used by the Banking Interest Calculator application.
//
// CALCULATION FORMULA:
// Final Amount = Principal × (1 + Rate/100) ^ Years
// Interest Earned = Final Amount - Principal
//
// INTEREST RATES:
// - Savings Account: 4% per annum (p.a.)
// - Fixed Deposit: 6.5% per annum (p.a.)
// - Bonus Rate: Additional 1% if principal amount exceeds ₹100,000
//
// OUTPUT FORMAT (Browser Display):
// The calculator displays results in a structured format with the following:
// 1. Account Type: Shows whether it's a Savings Account or Fixed Deposit
// 2. Principal Amount: The initial investment amount in Indian Rupees
// 3. Interest Rate: The applied annual interest rate (including any bonus)
// 4. Time Period: The investment duration in years
// 5. Interest Earned: Total interest amount calculated over the period
// 6. Final Balance: Total amount at the end of the investment period
//
// EXAMPLE CALCULATION:
// Input: Savings Account, Principal ₹100,000, Years 2
// Base Rate: 4% (Savings Account)
// Applied Rate: 4% (no bonus - amount is not > ₹100,000)
// Calculation: 100,000 × (1.04)^2 = 100,000 × 1.0816 = ₹108,160
// Interest Earned: ₹108,160 - ₹100,000 = ₹8,160
// Output: Displays all details with formatted currency and aligned layout
//
// EXAMPLE WITH BONUS:
// Input: Fixed Deposit, Principal ₹150,000, Years 3
// Base Rate: 6.5% (Fixed Deposit)
// Bonus Rate: +1% (amount is > ₹100,000)
// Applied Rate: 7.5% total
// Calculation: 150,000 × (1.075)^3 = 150,000 × 1.2423 = ₹186,344.53
// Interest Earned: ₹186,344.53 - ₹150,000 = ₹36,344.53
// Bonus Status: "✓ Bonus Applied" indicator shown in output
//
// OUTPUT STYLING:
// - Account details shown in purple (#764ba2)
// - Interest amounts shown in green (#27ae60)
// - Final balance highlighted in large purple text
// - Emojis used for visual clarity (📊, 💰, 📈, etc.)
// - Animation effect: Slide-in transition (0.4s ease-out)
// - Responsive design: Works on desktop and mobile devices
//
// ERROR HANDLING:
// - Invalid account type: Shows error message
// - Negative or zero amounts: Displays validation error
// - Non-numeric inputs: Caught and displayed as error
// - All errors shown in red (#e74c3c) with ❌ icon
//
// ============================================================================