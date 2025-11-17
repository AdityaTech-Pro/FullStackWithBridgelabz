// Scientific calculator math utilities for the dashboard


// Store the number
let x = 16.75; // Using a meaningful variable name


// --- Math Operations ---


// Rounded value
let roundedValue = Math.round(x); // Rounds to nearest integer


// Square root
let squareRoot = Math.sqrt(x); // Calculates √x


// Power (x^3)
let cubeValue = Math.pow(x, 3); // Raises x to power 3


// Random number between 10 and 50
// Math.random() → range 0 to 1
// *41 → range 0 to 40
// +10 → range 10 to 50
let randomNumber = Math.floor(Math.random() * 41) + 10;


// --- Output Summary using Template Literals ---
let resultSummary = `\nMath Utility Dashboard Results:\n-------------------------------\nOriginal Number: ${x}\nRounded Value: ${roundedValue}\nSquare Root: ${squareRoot}\nCube (x^3): ${cubeValue}\nRandom Number (10-50): ${randomNumber}\n`;


// Display result in console
console.log(resultSummary);