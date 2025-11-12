/**
 * Scope Conflict Resolver - Payroll Script Demonstration
 *
 * This script demonstrates the use of global and local variables,
 * and how conditional logic affects the local variable calculation.
 * It also demonstrates how a function execution does *not* affect
 * the global scope variable unless explicitly reassigned.
 */

// --- Global Scope Variables ---
// Declare a global variable 'bonus' using const as its value is fixed.
// This variable is accessible throughout the entire script.
const bonus = 5000;

// --- Helper function to log output to the console and the HTML document ---
function logOutput(message) {
    console.log(message);
    const outputArea = document.getElementById('output-area');
    if (outputArea) {
        const p = document.createElement('p');
        p.textContent = message;
        outputArea.appendChild(p);
    }
}

// --- Payroll Calculation Function ---
/**
 * Calculates the total salary based on a base salary and a conditional bonus.
 * @param {boolean} isPermanent - A flag to determine if the employee is permanent.
 */
function calculateSalary(isPermanent) {
    // --- Local Function Scope Variables ---
    // Declare a local variable 'salary'. This variable only exists inside this function.
    let salary = 40000;
    let totalSalary = salary; // Initialize total salary with base salary

    logOutput(`\n--- Calculation for Permanent Status: ${isPermanent} ---`);
    logOutput(`Base Salary (Local): $${salary}`);
    logOutput(`Global Bonus: $${bonus}`);

    // --- Conditional Logic (Block Scope) ---
    // Add the bonus only if the local variable 'isPermanent' is true.
    if (isPermanent === true) {
        // Since 'totalSalary' is a 'let' variable declared in the function scope,
        // we can safely modify it here without affecting any variable outside this function.
        totalSalary += bonus;
        logOutput("Condition Met: Employee is permanent. Bonus added.");
    } else {
        logOutput("Condition Not Met: Employee is temporary. No bonus added.");
    }

    // Print total salary inside the function.
    // This value is calculated using both local ('salary') and global ('bonus') variables.
    logOutput(`Total Salary (Local): $${totalSalary}`);

    // Demonstrate global variable scope access (read-only inside the function).
    logOutput(`Checking Global Bonus inside function: $${bonus}`);
}

// --------------------------------------------------------------------------------
// --- Demonstration of Scope and Variable Persistence ---
// --------------------------------------------------------------------------------

// Test 1: Employee is Permanent (Bonus is added)
logOutput("--- Test 1: Permanent Employee (isPermanent = true) ---");
calculateSalary(true);

logOutput("\n---------------------------------------------------------");

// Test 2: Employee is Temporary (Bonus is NOT added)
logOutput("--- Test 2: Temporary Employee (isPermanent = false) ---");
calculateSalary(false);

logOutput("\n---------------------------------------------------------");

// --- Demonstrate how changing local variables does NOT affect the global scope ---
// The function execution above did not change the global 'bonus' variable.
logOutput(`\n### Global Scope Check ###`);
logOutput(`The global 'bonus' variable remains unchanged after function calls: $${bonus}`);
// If we had used 'var' and mistakenly created a variable named 'bonus' inside the function
// without 'let' or 'const', it *could* have overwritten a global 'var' in a non-strict environment,
// but with 'const' for the global and 'let' inside the function (if needed), this conflict is avoided. 
// A function *cannot* directly reassign a global 'const' variable.