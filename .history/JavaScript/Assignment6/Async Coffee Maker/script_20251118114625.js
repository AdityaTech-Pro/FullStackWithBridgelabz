// script.js - Async Coffee Maker Simulation
// Using Promises, async/await, random failures, and detailed logging

"use strict";

// Utility function to simulate random failure
function randomFailure() {
    return Math.catch() < 0.2; // 20% chance to fail
}

// STEP 1: Boil Water
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomFailure()) {
                reject("❌ Failed to boil water!");
            } else {
                resolve("✔️ Water boiled successfully.");
            }
        }, 1200);
    });
}

// STEP 2: Brew Coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomFailure()) {
                reject("❌ Coffee brewing failed!");
            } else {
                resolve("✔️ Coffee brewed perfectly.");
            }
        }, 1500);
    });
}

// STEP 3: Pour Coffee
function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomFailure()) {
                reject("❌ Failed to pour coffee!");
            } else {
                resolve("✔️ Coffee poured into cup.");
            }
        }, 1000);
    });
}

// Logging messages to page
function updateStatus(message) {
    const statusBox = document.getElementById("status");
    statusBox.textContent += message + "\n";
}

// Main function using Promise chaining (required by task)
function startCoffeeProcess() {
    // Clear old logs
    document.getElementById("status").textContent = "";

    const btn = document.getElementById("makeCoffeeBtn");
    btn.disabled = true;

    updateStatus("Starting async coffee process... ☕\n");

    boilWater()
        .then((msg1) => {
            updateStatus(msg1);
            return brewCoffee();
        })
        .then((msg2) => {
            updateStatus(msg2);
            return pourCoffee();
        })
        .then((msg3) => {
            updateStatus(msg3);
            updateStatus("🎉 Coffee ready for the team!");
        })
        .catch((error) => {
            updateStatus(error);
            updateStatus("⚠️ Coffee process stopped due to an error.");
        })
        .finally(() => {
            btn.disabled = false;
        });
}

// Button Listener
const coffeeBtn = document.getElementById("makeCoffeeBtn");
coffeeBtn.addEventListener("click", startCoffeeProcess);