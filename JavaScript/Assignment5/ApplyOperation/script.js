"use strict";

// Function that applies a callback operation to each element in an array
const applyOperation = (numbers, operation) => {
    // Using map to return a new array with the operation applied
    return numbers.map(num => operation(num));
};

// Callback to double a number
const doubleNumber = num => num * 2;

// Callback to square a number
const squareNumber = num => num * num;

// Input array
const inputArray = [1, 2, 3, 4];

// Applying operations
const doubledResult = applyOperation(inputArray, doubleNumber);
const squaredResult = applyOperation(inputArray, squareNumber);

// Displaying results
console.log("Original Array:", inputArray);
console.log("Doubled Values:", doubledResult);
console.log("Squared Values:", squaredResult);