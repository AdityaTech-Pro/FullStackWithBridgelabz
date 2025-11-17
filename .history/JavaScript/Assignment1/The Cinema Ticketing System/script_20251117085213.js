// Cinema Ticketing System — Console-based logical implementation only


// ------------------------------
// 1. Show pricing information
// ------------------------------
const morningShowPrice = 120; // Ticket price for the morning show
const eveningShowPrice = 180; // Ticket price for the evening show


// ------------------------------
// 2. User booking details (example inputs)
// These may later come from prompts — here they are hardcoded for logic testing
// ------------------------------
const showType = "evening"; // Options: "morning" or "evening"
const numberOfTickets = 4; // Total tickets being booked
const userCategory = "student"; // Options: "student", "senior", "regular"
const userAge = 21; // Used for senior discount validation


// ------------------------------
// 3. Determine base ticket price based on show type
// ------------------------------
let basePricePerTicket = 0;


if (showType === "morning") {
    basePricePerTicket = morningShowPrice;
} else if (showType === "evening") {
    basePricePerTicket = eveningShowPrice;
}


// Total base price for all tickets
const baseTotal = basePricePerTicket * numberOfTickets;


// ------------------------------
// 4. Calculate applicable discount
// Students → 10% discount
// Seniors (age > 60) → 20% discount
// Regular users → no discount
// ------------------------------
let discountRate = 0;


if (userCategory === "student") {
    discountRate = 0.10;
} else if (userCategory === "senior" && userAge > 60) {
    discountRate = 0.20;
}


// Discounted price after applying percentage reduction
const discountedTotal = baseTotal - (baseTotal * discountRate);


// ------------------------------
// 5. Apply service fee
// If user books more than 3 tickets → flat ₹50 added
// ------------------------------
let finalAmount = discountedTotal;
const serviceFee = 50;


if (numberOfTickets > 3) {
    finalAmount += serviceFee;
}


// ------------------------------
// 6. Display calculation results
// ------------------------------
console.log("===== Cinema Ticketing System =====");
console.log("\nFinal Amount Payable: ₹" + finalAmount);