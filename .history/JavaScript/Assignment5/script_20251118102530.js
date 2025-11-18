"use strict";

// Function to print greeting and then execute callback
const greetUser = (name, callback) => {
    console.log(`Hello ${name}`); // Greeting message
    callback(); // Executing callback function
};

// Callback function to show ending message
const showEndMessage = () => {
    console.log("Welcome to the course!");
};

// Demonstrating callback flow
// greetUser prints greeting first, then callback runs

greetUser("Aditya", showEndMessage);