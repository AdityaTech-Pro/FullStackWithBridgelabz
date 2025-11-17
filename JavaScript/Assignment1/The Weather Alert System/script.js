// Weather Alert System — Console-Based Logic Implementation


// ---------------------------------------------------------
// 1. Sample weather data (these simulate sensor or API inputs)
// ---------------------------------------------------------
const temperature = 33; // in °C
const humidity = 75; // percentage
const windSpeed = 18; // in km/h


// ---------------------------------------------------------
// 2. Safety evaluation for outdoor events
// ---------------------------------------------------------
// Condition 1: Extreme heat and humidity risk
if (temperature > 35 && humidity > 70) {
    console.log("Cancel: Heat Alert.");
}
// Condition 2: Cold weather or excessively strong winds
else if (temperature < 10 || windSpeed > 40) {
    console.log("Cancel: Cold/Windy Alert.");
}
// Condition 3: Safe to proceed
else {
    console.log("Event Approved.");
}


// ---------------------------------------------------------
// 3. Clothing / comfort recommendation based on temperature
// ---------------------------------------------------------
if (temperature < 20) {
    console.log("Wear Jacket");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("Comfortable");
} else {
    console.log("Stay Hydrated");
}


// ---------------------------------------------------------
// All results appear in the browser console or Node console
// ---------------------------------------------------------