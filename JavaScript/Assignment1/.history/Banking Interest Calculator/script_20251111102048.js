/**
 * Banking Interest Calculator
 * 
 * This script calculates the final balance after applying compound interest
 * based on the account type, deposit amount, and investment duration.
 * 
 * Business Rules:
 * 1. Savings Account: 4% annual interest rate
 * 2. Fixed Deposit: 6.5% annual interest rate
 * 3. Bonus Interest: +1% if deposit amount exceeds ₹1,00,000
 * 4. Calculation: total = amount * Math.pow((1 + rate/100), years)
 */

// ============================================================================
// VARIABLE DECLARATIONS
// ============================================================================

/**
 * The type of bank account.
 * Acceptable values: "savings" or "fixed"
 * This determines the base interest rate applicable.
 */
let accountType;

/**
 * The initial deposit amount in rupees (₹).
 * This value determines whether bonus interest applies.
 * Bonus interest is added if amount > ₹1,00,000
 */
let amount;

/**
 * The investment duration in years.
 * This is the time period for which the compound interest is calculated.
 */
let years;

// ============================================================================
// CONSTANT DEFINITIONS
// ============================================================================

/**
 * Base interest rate for Savings accounts (annual percentage).
 * @constant {number}
 */
const SAVINGS_RATE = 4;

/**
 * Base interest rate for Fixed Deposit accounts (annual percentage).
 * @constant {number}
 */
const FIXED_DEPOSIT_RATE = 6.5;

/**
 * Threshold amount (in rupees) above which bonus interest applies.
 * @constant {number}
 */
const BONUS_THRESHOLD = 100000;

/**
 * Additional interest rate granted for deposits exceeding the threshold (annual percentage).
 * @constant {number}
 */
const BONUS_RATE = 1;

// ============================================================================
// ACCOUNT TYPE VALIDATION
// ============================================================================

/**
 * Function: isValidAccountType()
 * 
 * Purpose: Validates that the provided account type is one of the supported types.
 * 
 * Logic:
 * - Convert account type to lowercase for case-insensitive comparison
 * - Check if it matches either "savings" or "fixed"
 * - Return true if valid, false otherwise
 * 
 * @param {string} type - The account type to validate
 * @returns {boolean} True if account type is valid, false otherwise
 */
function isValidAccountType(type) {
    // Normalize to lowercase for comparison
    const normalizedType = type.toLowerCase();

    // Check against supported account types
    return normalizedType === "savings" || normalizedType === "fixed";
}

// ============================================================================
// BASE INTEREST RATE RETRIEVAL
// ============================================================================

/**
 * Function: getBaseInterestRate()
 * 
 * Purpose: Retrieves the base interest rate for the specified account type.
 * 
 * Logic:
 * - Normalize the account type to lowercase
 * - If type is "savings", return the Savings account rate (4%)
 * - If type is "fixed", return the Fixed Deposit rate (6.5%)
 * - This rate will be adjusted if bonus conditions are met
 * 
 * @param {string} type - The account type ("savings" or "fixed")
 * @returns {number} The base annual interest rate as a percentage
 */
function getBaseInterestRate(type) {
    // Normalize to lowercase for consistent comparison
    const normalizedType = type.toLowerCase();

    // Return appropriate rate based on account type
    if (normalizedType === "savings") {
        return SAVINGS_RATE;
    } else if (normalizedType === "fixed") {
        return FIXED_DEPOSIT_RATE;
    }

    // Default case (should not occur if validation is performed)
    return 0;
}

// ============================================================================
// BONUS INTEREST ELIGIBILITY CHECK
// ============================================================================

/**
 * Function: isBonusEligible()
 * 
 * Purpose: Determines if the deposited amount qualifies for bonus interest.
 * 
 * Logic:
 * - Check if the deposit amount exceeds the bonus threshold (₹1,00,000)
 * - Return true if eligible, false otherwise
 * - This bonus is applicable to both account types
 * 
 * @param {number} depositAmount - The deposit amount in rupees
 * @returns {boolean} True if deposit amount qualifies for bonus interest
 */
function isBonusEligible(depositAmount) {
    return depositAmount > BONUS_THRESHOLD;
}

// ============================================================================
// EFFECTIVE INTEREST RATE CALCULATION
// ============================================================================

/**
 * Function: calculateEffectiveRate()
 * 
 * Purpose: Calculates the total effective annual interest rate for the account.
 * 
 * Logic:
 * 1. Start with the base interest rate for the account type
 * 2. Check if the deposit amount qualifies for bonus interest
 * 3. If eligible, add the bonus rate (1%) to the base rate
 * 4. Return the final effective rate
 * 
 * Example:
 * - Fixed deposit (₹50,000): 6.5% rate, no bonus → 6.5%
 * - Fixed deposit (₹1,50,000): 6.5% base + 1% bonus → 7.5%
 * 
 * @param {string} type - The account type
 * @param {number} depositAmount - The deposit amount
 * @returns {number} The effective annual interest rate as a percentage
 */
function calculateEffectiveRate(type, depositAmount) {
    // Step 1: Get the base rate for the account type
    let effectiveRate = getBaseInterestRate(type);

    // Step 2: Check and add bonus interest if applicable
    if (isBonusEligible(depositAmount)) {
        effectiveRate += BONUS_RATE;
    }

    return effectiveRate;
}

// ============================================================================
// FINAL BALANCE CALCULATION (COMPOUND INTEREST)
// ============================================================================

/**
 * Function: calculateFinalBalance()
 * 
 * Purpose: Computes the final balance after compound interest is applied.
 * 
 * Logic:
 * - Uses the compound interest formula: total = amount * Math.pow((1 + rate/100), years)
 * - Takes the effective interest rate (including any bonus)
 * - Calculates the compound effect over the specified number of years
 * - Returns the result rounded to 2 decimal places
 * 
 * Formula Breakdown:
 * - (1 + rate/100): Converts percentage rate to a multiplier
 * - Math.pow(..., years): Applies the multiplier for each year
 * - amount * ...: Multiplies by the principal amount
 * - .toFixed(2): Rounds to 2 decimal places
 * 
 * @param {number} principal - The initial deposit amount
 * @param {number} effectiveRate - The annual interest rate (as percentage)
 * @param {number} investmentYears - The number of years for investment
 * @returns {number} The final balance rounded to 2 decimal places
 */
function calculateFinalBalance(principal, effectiveRate, investmentYears) {
    // Apply compound interest formula
    const finalBalance = principal * Math.pow((1 + effectiveRate / 100), investmentYears);

    // Round to 2 decimal places and convert back to number
    return parseFloat(finalBalance.toFixed(2));
}

// ============================================================================
// INTEREST EARNED CALCULATION
// ============================================================================

/**
 * Function: calculateInterestEarned()
 * 
 * Purpose: Calculates the total interest earned during the investment period.
 * 
 * Logic:
 * - Subtract the principal amount from the final balance
 * - This gives the pure interest earned (not including the initial deposit)
 * - Useful for understanding the profit from the investment
 * 
 * @param {number} finalBalance - The final balance after interest
 * @param {number} principal - The initial deposit amount
 * @returns {number} The total interest earned
 */
function calculateInterestEarned(finalBalance, principal) {
    return parseFloat((finalBalance - principal).toFixed(2));
}

// ============================================================================
// MAIN CALCULATOR FUNCTION
// ============================================================================

/**
 * Function: calculateBankingInterest()
 * 
 * Purpose: Main orchestrator function that performs the complete interest calculation.
 * 
 * Logic:
 * 1. Validate the account type
 * 2. Calculate the effective interest rate (with bonus if applicable)
 * 3. Calculate the final balance using compound interest formula
 * 4. Calculate the interest earned
 * 5. Display comprehensive results in a formatted manner
 * 
 * This function integrates all helper functions to provide a complete
 * banking interest calculation and display the results.
 */
function calculateBankingInterest() {
    // Step 1: Validate account type
    if (!isValidAccountType(accountType)) {
        console.log(`❌ Invalid account type: ${accountType}`);
        console.log("   Please use 'savings' or 'fixed'\n");
        return;
    }

    // Step 2: Calculate effective interest rate (including bonus if applicable)
    const effectiveRate = calculateEffectiveRate(accountType, amount);

    // Step 3: Calculate final balance using compound interest formula
    const finalBalance = calculateFinalBalance(amount, effectiveRate, years);

    // Step 4: Calculate interest earned during the period
    const interestEarned = calculateInterestEarned(finalBalance, amount);

    // Step 5: Display the results in a clear, formatted manner
    console.log("========================================");
    console.log("   Banking Interest Calculator");
    console.log("========================================\n");

    console.log("📋 Account Details:");
    console.log(`  Account Type: ${accountType.charAt(0).toUpperCase() + accountType.slice(1)}`);
    console.log(`  Principal Amount: ₹${amount.toLocaleString("en-IN")}`);
    console.log(`  Investment Period: ${years} year${years !== 1 ? "s" : ""}`);

    console.log("\n📊 Interest Rate Breakdown:");
    console.log(`  Base Rate: ${getBaseInterestRate(accountType)}%`);

    // Show bonus information if applicable
    if (isBonusEligible(amount)) {
        console.log(`  Bonus Rate: +${BONUS_RATE}% (Amount > ₹1,00,000)`);
        console.log(`  Effective Rate: ${effectiveRate}%`);
    } else {
        console.log(`  Effective Rate: ${effectiveRate}%`);
    }

    console.log("\n💰 Final Results:");
    console.log(`  Interest Earned: ₹${interestEarned.toLocaleString("en-IN")}`);
    console.log(`  Final Balance: ₹${finalBalance.toLocaleString("en-IN")}`);

    console.log("\n========================================\n");
}

// ============================================================================
// TEST CASES & DEMONSTRATION
// ============================================================================

/**
 * Test Case 1: Savings Account with Standard Amount
 * Expected: 4% rate, no bonus, final balance = 15,000 * (1.04)^5
 */
console.log("TEST CASE 1: Savings account, ₹15,000, 5 years (No Bonus)\n");
accountType = "savings";
amount = 15000;
years = 5;
calculateBankingInterest();

/**
 * Test Case 2: Savings Account with Bonus Eligible Amount
 * Expected: 4% + 1% = 5% effective rate
 */
console.log("TEST CASE 2: Savings account, ₹1,50,000, 3 years (Bonus Eligible)\n");
accountType = "savings";
amount = 150000;
years = 3;
calculateBankingInterest();

/**
 * Test Case 3: Fixed Deposit with Standard Amount
 * Expected: 6.5% rate, no bonus
 */
console.log("TEST CASE 3: Fixed deposit, ₹50,000, 2 years (No Bonus)\n");
accountType = "fixed";
amount = 50000;
years = 2;
calculateBankingInterest();

/**
 * Test Case 4: Fixed Deposit with Bonus Eligible Amount
 * Expected: 6.5% + 1% = 7.5% effective rate
 */
console.log("TEST CASE 4: Fixed deposit, ₹2,00,000, 4 years (Bonus Eligible)\n");
accountType = "fixed";
amount = 200000;
years = 4;
calculateBankingInterest();

/**
 * Test Case 5: Fixed Deposit Exactly at Bonus Threshold
 * Expected: No bonus (amount must be > ₹1,00,000, not equal)
 */
console.log("TEST CASE 5: Fixed deposit, ₹1,00,000, 1 year (At Threshold, No Bonus)\n");
accountType = "fixed";
amount = 100000;
years = 1;
calculateBankingInterest();

/**
 * Test Case 6: Fixed Deposit Just Above Bonus Threshold
 * Expected: 6.5% + 1% = 7.5% effective rate (bonus applies)
 */
console.log("TEST CASE 6: Fixed deposit, ₹1,00,001, 1 year (Just Above Threshold, Bonus)\n");
accountType = "fixed";
amount = 100001;
years = 1;
calculateBankingInterest();

/**
 * Test Case 7: Savings Account with Long Investment Period
 * Expected: 5% effective rate (4% + 1% bonus), compounded over 10 years
 */
console.log("TEST CASE 7: Savings account, ₹5,00,000, 10 years (Bonus, Long Term)\n");
accountType = "savings";
amount = 500000;
years = 10;
calculateBankingInterest();

/**
 * Test Case 8: Invalid Account Type (Error Handling)
 * Expected: Error message indicating invalid account type
 */
console.log("TEST CASE 8: Invalid account type - Error Handling\n");
accountType = "premium";
amount = 100000;
years = 5;
calculateBankingInterest();

// ============================================================================
// WEB FORM FUNCTIONS
// ============================================================================

/**
 * Function: formatCurrency()
 * Formats a number as Indian Rupees currency string
 * 
 * @param {number} value - The amount to format
 * @returns {string} The formatted currency string
 */
function formatCurrency(value) {
    return "₹" + parseFloat(value).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

/**
 * Function: addLog()
 * Adds a line to the calculation log displayed in the web interface
 * 
 * @param {string} message - The message to add to the log
 */
function addLog(message) {
    const logContent = document.getElementById("logContent");
    const logLine = document.createElement("p");
    logLine.innerHTML = message;
    logContent.appendChild(logLine);
}

/**
 * Function: calculateInterest()
 * Main calculator function triggered when the form is submitted
 * Retrieves form values, performs calculations, and displays results
 * 
 * @param {Event} event - The form submission event
 */
function calculateInterest(event) {
    event.preventDefault();

    // Get input values from form
    const accountTypeValue = document.getElementById("accountType").value;
    const amountValue = parseFloat(document.getElementById("amount").value);
    const yearsValue = parseInt(document.getElementById("years").value);

    // Clear previous results
    document.getElementById("logContent").innerHTML = "";

    // Log calculation details
    addLog(`<span class="info">⏰ Calculation initiated...</span>`);
    addLog(`Account Type: ${accountTypeValue.charAt(0).toUpperCase() + accountTypeValue.slice(1)}`);
    addLog(`Principal Amount: ${formatCurrency(amountValue)}`);
    addLog(`Investment Period: ${yearsValue} year${yearsValue !== 1 ? "s" : ""}`);

    // Calculate effective rate
    const baseRate = getBaseInterestRate(accountTypeValue);
    const isEligible = isBonusEligible(amountValue);
    const effectiveRate = calculateEffectiveRate(accountTypeValue, amountValue);

    addLog(`<span class="info">--- Interest Rate Breakdown ---</span>`);
    addLog(`Base Rate: ${baseRate}%`);

    if (isEligible) {
        addLog(`<span class="bonus">Bonus Applied: +${BONUS_RATE}% (Amount > ₹1,00,000)</span>`);
        addLog(`<span class="highlight">Effective Rate: ${effectiveRate}%</span>`);
    } else {
        addLog(`Effective Rate: ${effectiveRate}%`);
    }

    // Calculate final balance and interest
    const finalBalance = calculateFinalBalance(amountValue, effectiveRate, yearsValue);
    const interestEarned = calculateInterestEarned(finalBalance, amountValue);

    addLog(`<span class="info">--- Compound Interest Formula ---</span>`);
    addLog(`Total = Amount × (1 + Rate/100)^Years`);
    addLog(`Total = ${formatCurrency(amountValue)} × (1 + ${effectiveRate}/100)^${yearsValue}`);
    addLog(`<span class="success">Total = ${formatCurrency(finalBalance)}</span>`);

    // Display results
    document.getElementById("resultAccountType").textContent =
        accountTypeValue.charAt(0).toUpperCase() + accountTypeValue.slice(1);
    document.getElementById("resultPrincipal").textContent = formatCurrency(amountValue);
    document.getElementById("resultYears").textContent = yearsValue + " year" + (yearsValue !== 1 ? "s" : "");
    document.getElementById("resultBaseRate").textContent = baseRate + "%";
    document.getElementById("resultBonusRate").textContent =
        isEligible ? `+${BONUS_RATE}%` : "None";
    document.getElementById("resultEffectiveRate").textContent = effectiveRate + "%";
    document.getElementById("resultInterestEarned").textContent = formatCurrency(interestEarned);
    document.getElementById("resultFinalBalance").textContent = formatCurrency(finalBalance);

    // Show results section
    document.getElementById("resultsSection").style.display = "block";

    // Scroll to results
    setTimeout(() => {
        document.getElementById("resultsSection").scrollIntoView({
            behavior: "smooth"
        });
    }, 100);
}

// Allow Enter key to submit form
document.addEventListener("DOMContentLoaded", function() {
    const yearsInput = document.getElementById("years");
    if (yearsInput) {
        yearsInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.querySelector(".btn-calculate").click();
            }
        });
    }
});