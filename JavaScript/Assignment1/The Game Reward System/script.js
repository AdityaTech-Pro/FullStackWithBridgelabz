// Game Reward System — Console-only logic with detailed professional comments


// -------------------------------------------------------------
// 1. Player performance input data (example hard-coded values)
// -------------------------------------------------------------
const level = 12; // Player level in game
const performanceScore = 34; // Score based on performance
const missionsCompleted = true; // Whether all missions were completed


// -------------------------------------------------------------
// 2. Base coin calculation using given formula
// coins = (level * 50) + (performanceScore * 10)
// -------------------------------------------------------------
let coins = (level * 50) + (performanceScore * 10);


// -------------------------------------------------------------
// 3. Bonus logic
// If all missions are completed → coins are doubled
// -------------------------------------------------------------
if (missionsCompleted === true) {
    coins = coins * 2;
}


// -------------------------------------------------------------
// 4. Rank assignment based on final coin value
// If coins > 1000 → Elite
// Else → Regular
// -------------------------------------------------------------
let rank = coins > 1000 ? "Elite" : "Regular";


// -------------------------------------------------------------
// 5. Print all details with clear descriptive messages
// -------------------------------------------------------------
console.log("===== Game Reward System =====");
console.log(`Player Level: ${level}`);
console.log(`Performance Score: ${performanceScore}`);
console.log(`Missions Completed: ${missionsCompleted}`);
console.log(`\nCoins Earned (after bonuses if any): ${coins}`);
console.log(`Assigned Rank: ${rank}`);