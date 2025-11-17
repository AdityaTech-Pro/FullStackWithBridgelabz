// Array representing the delay days for each late book
const delayedBooks = [3, 7, 12, 5];


// Function to calculate fine for a single book based on rules
function calculateFine(daysLate) {
    // 1–5 days → ₹10/day
    if (daysLate >= 1 && daysLate <= 5) {
        return daysLate * 10;
    }
    // 6–10 days → ₹20/day
    else if (daysLate >= 6 && daysLate <= 10) {
        return daysLate * 20;
    }
    // 11+ days → ₹50/day
    else if (daysLate >= 11) {
        return daysLate * 50;
    }
    // No fine if 0 or negative
    return 0;
}



// MAIN CALCULATION LOGIC

let totalFine = 0;
let detailedSummary = [];


// Loop through each delayed book and calculate individual fines
for (let i = 0; i < delayedBooks.length; i++) {
    const daysLate = delayedBooks[i];
    const fine = calculateFine(daysLate);


    // Add to total fine
    totalFine += fine;


    // Store readable summary for console output
    detailedSummary.push(`Book ${i + 1}: ${daysLate} days late → Fine: ₹${fine}`);
}


// Apply additional penalty if user returned more than 3 late books
let penalty = 0;
if (delayedBooks.length > 3) {
    penalty = 200;
    totalFine += penalty;
}



// FINAL OUTPUT

console.log("================= LIBRARY FINE SUMMARY =================");
detailedSummary.forEach(entry => console.log(entry));
console.log("---------------------------------------------------------");
console.log(`Additional Penalty (if applicable): ₹${penalty}`);
console.log("---------------------------------------------------------");
console.log("=========================================================");