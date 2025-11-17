// Analyzes numbers from 1 to 30 using FizzBuzz, even/odd logic


// Array to store numbers 1–30
let numberList = [];


// Fill array using a loop
for (let i = 1; i <= 30; i++) {
    numberList.push(i);
}


// Array to store classification results
let resultList = [];


// Process each number using conditionals
for (let num of numberList) {
    // If divisible by 3 AND 5 → FizzBuzz
    if (num % 3 === 0 && num % 5 === 0) {
        resultList.push("FizzBuzz");
    }
    // Else if even → Even
    else if (num % 2 === 0) {
        resultList.push("Even");
    }
    // Else → Odd
    else {
        resultList.push("Odd");
    }
}


// Display analysis output
console.log("\n===== Odd–Even Number Analyzer =====");
console.log("Input Numbers:", numberList);
console.log("Classification Results:", resultList);