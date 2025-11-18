"use strict";

// Adding a custom myMap() method to all arrays
Array.prototype.myMap = function(callback) {
    const resultArray = [];

    // 'this' refers to the array on which myMap is called
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callback(this[i], i, this));
    }

    return resultArray; // Returning the transformed array
};

// Example usage
const numbers = [1, 2, 3];
const doubled = numbers.myMap(num => num * 2);

console.log("Original Array:", numbers);
console.log("Doubled using myMap():", doubled);