"use strict";

/*
  Employee Bonus Calculator
  ---------------------------------------
  ✔ Converts salary & years to numbers
  ✔ Applies bonus logic (10% or 5%)
  ✔ Uses strict mode (no accidental globals)
  ✔ Uses try...catch for validation errors
  ✔ Uses template strings for output
  ✔ Debug messages printed using console.log()
*/

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

/* 
  Converts any value to a number.
  - Function declaration is hoisted (available anywhere).
  - Throws error if missing or invalid.
*/
function toNumberSafe(value, fieldName) {
    if (value === undefined || value === null) {
        throw new Error(`Missing property: ${fieldName}`);
    }

    const num = Number(value);

    if (isNaN(num)) {
        throw new Error(`Invalid number for ${fieldName}: ${value}`);
    }

    return num;
}

/*
  Calculates employee bonus.
  - Uses branching based on years.
  - Salary & years must already be numbers.
*/
function calculateBonus(salary, years) {
    let bonusRate = years > 3 ? 0.10 : 0.05;
    return salary * bonusRate;
}

console.log("Starting employee bonus calculation...\n");

// Process each employee
employees.forEach((emp) => {
    try {
        console.log(`Processing: ${emp.name}`);

        const salaryNum = toNumberSafe(emp.salary, "salary");
        const yearsNum = toNumberSafe(emp.years, "years");

        const bonus = calculateBonus(salaryNum, yearsNum);

        console.log(`
Employee: ${emp.name}
Salary: ₹${salaryNum}
Experience: ${yearsNum} years
Bonus: ₹${bonus}
-----------------------------------------
    `);

    } catch (err) {
        console.log(`❌ Error for ${emp.name}: ${err.message}`);
    }
});

console.log("Processing completed.");