/**
 * E-Commerce Delivery Estimator
 * 
 * This script calculates the total cost and estimated delivery time for an order
 * based on the order amount, premium membership status, and delivery address type.
 * 
 * Business Rules:
 * 1. Orders below ₹500 incur a ₹50 delivery fee
 * 2. Premium members are waived from delivery fees
 * 3. Standard delivery time is 3 days
 * 4. Remote addresses add 2 extra days to delivery time
 */

// ============================================================================
// VARIABLE DECLARATIONS
// ============================================================================

/**
 * The total order amount in rupees (₹).
 * This value determines whether a delivery fee applies.
 */
let orderAmount;

/**
 * Boolean flag indicating whether the customer is a premium member.
 * Premium members are exempt from delivery fees.
 */
let isPremium;

/**
 * Boolean flag indicating whether the delivery address is marked as remote.
 * Remote addresses add additional delivery time.
 */
let isRemote;

// ============================================================================
// CONSTANT DEFINITIONS
// ============================================================================

/**
 * Minimum order amount threshold (in rupees) below which a delivery fee applies.
 * @constant {number}
 */
const DELIVERY_FEE_THRESHOLD = 500;

/**
 * Fixed delivery fee amount (in rupees) for orders below the threshold.
 * @constant {number}
 */
const STANDARD_DELIVERY_FEE = 50;

/**
 * Standard delivery time in days for non-remote addresses.
 * @constant {number}
 */
const STANDARD_DELIVERY_DAYS = 3;

/**
 * Additional delivery days to be added for remote addresses.
 * @constant {number}
 */
const REMOTE_DELIVERY_EXTRA_DAYS = 2;

// ============================================================================
// DELIVERY FEE CALCULATION LOGIC
// ============================================================================

/**
 * Function: calculateDeliveryFee()
 * 
 * Purpose: Determines the applicable delivery fee based on order amount and membership status.
 * 
 * Logic:
 * - If the customer is a premium member, no delivery fee is charged (return 0)
 * - If the customer is not premium and order amount is below ₹500, charge ₹50
 * - If the customer is not premium and order amount is ₹500 or above, no fee
 * 
 * @param {number} amount - The order amount in rupees
 * @param {boolean} premium - Whether the customer is a premium member
 * @returns {number} The calculated delivery fee in rupees
 */
function calculateDeliveryFee(amount, premium) {
  // Premium members always get free delivery regardless of order amount
  if (premium) {
    return 0;
  }

  // Non-premium members pay delivery fee only if order is below ₹500
  if (amount < DELIVERY_FEE_THRESHOLD) {
    return STANDARD_DELIVERY_FEE;
  }

  // Orders of ₹500 or above have no delivery fee for non-premium members
  return 0;
}

// ============================================================================
// DELIVERY TIME CALCULATION LOGIC
// ============================================================================

/**
 * Function: calculateDeliveryTime()
 * 
 * Purpose: Determines the estimated delivery time based on address type.
 * 
 * Logic:
 * - Start with standard delivery time of 3 days
 * - If the address is marked as remote, add 2 extra days
 * - Return the total delivery time
 * 
 * @param {boolean} remote - Whether the delivery address is remote
 * @returns {number} The estimated delivery time in days
 */
function calculateDeliveryTime(remote) {
  // Initialize with standard delivery time
  let deliveryTime = STANDARD_DELIVERY_DAYS;

  // Add extra days if the address is remote
  if (remote) {
    deliveryTime += REMOTE_DELIVERY_EXTRA_DAYS;
  }

  return deliveryTime;
}

// ============================================================================
// TOTAL COST CALCULATION LOGIC
// ============================================================================

/**
 * Function: calculateTotalCost()
 * 
 * Purpose: Computes the final cost the customer needs to pay, including delivery fees.
 * 
 * Logic:
 * - Start with the base order amount
 * - Add the applicable delivery fee (which may be ₹0 based on the rules)
 * - Return the total cost to be paid
 * 
 * @param {number} amount - The base order amount in rupees
 * @param {number} deliveryFee - The calculated delivery fee in rupees
 * @returns {number} The total cost including delivery fee
 */
function calculateTotalCost(amount, deliveryFee) {
  return amount + deliveryFee;
}

// ============================================================================
// MAIN ESTIMATOR LOGIC
// ============================================================================

/**
 * Function: estimateDelivery()
 * 
 * Purpose: Main function that orchestrates the entire delivery estimation process.
 * 
 * Logic:
 * 1. Calculate applicable delivery fee using order amount and premium status
 * 2. Calculate total cost by adding delivery fee to order amount
 * 3. Calculate delivery time based on address type (remote or not)
 * 4. Display results in a formatted manner to the console
 * 
 * This function brings together all the helper functions to provide
 * a complete delivery estimation for the customer.
 */
function estimateDelivery() {
  // Step 1: Calculate the delivery fee based on order amount and membership status
  const deliveryFee = calculateDeliveryFee(orderAmount, isPremium);

  // Step 2: Calculate the total cost (order amount + applicable delivery fee)
  const totalCost = calculateTotalCost(orderAmount, deliveryFee);

  // Step 3: Calculate the estimated delivery time (base time + remote adjustment)
  const deliveryTime = calculateDeliveryTime(isRemote);

  // Step 4: Display the results in a clear, readable format
  console.log("========================================");
  console.log("   E-Commerce Delivery Estimator");
  console.log("========================================");
  console.log(`\nOrder Details:`);
  console.log(`  Base Amount: ₹${orderAmount}`);
  console.log(`  Premium Member: ${isPremium ? "Yes ✓" : "No"}`);
  console.log(`  Remote Address: ${isRemote ? "Yes" : "No"}`);
  console.log(`\nCost Breakdown:`);
  console.log(`  Delivery Fee: ₹${deliveryFee}`);
  console.log(`  Total Cost: ₹${totalCost}`);
  console.log(`\nDelivery Estimate:`);
  console.log(`  Estimated Delivery Time: ${deliveryTime} days`);
  console.log("\n========================================\n");
}

// ============================================================================
// TEST CASES & DEMONSTRATION
// ============================================================================

/**
 * Test Case 1: Non-Premium Member with Small Order (Below ₹500)
 * Expected: Delivery fee = ₹50, Delivery time = 3 days
 */
console.log("TEST CASE 1: Small order, non-premium member, standard address\n");
orderAmount = 300;
isPremium = false;
isRemote = false;
estimateDelivery();

/**
 * Test Case 2: Premium Member with Small Order
 * Expected: Delivery fee = ₹0 (premium waiver), Delivery time = 3 days
 */
console.log("TEST CASE 2: Small order, premium member, standard address\n");
orderAmount = 300;
isPremium = true;
isRemote = false;
estimateDelivery();

/**
 * Test Case 3: Non-Premium Member with Large Order
 * Expected: Delivery fee = ₹0 (order >= ₹500), Delivery time = 3 days
 */
console.log("TEST CASE 3: Large order (₹500+), non-premium member, standard address\n");
orderAmount = 1000;
isPremium = false;
isRemote = false;
estimateDelivery();

/**
 * Test Case 4: Non-Premium Member with Remote Address
 * Expected: Delivery fee = ₹50, Delivery time = 5 days (3 + 2 extra)
 */
console.log("TEST CASE 4: Small order, non-premium member, remote address\n");
orderAmount = 250;
isPremium = false;
isRemote = true;
estimateDelivery();

/**
 * Test Case 5: Premium Member with Remote Address
 * Expected: Delivery fee = ₹0 (premium waiver), Delivery time = 5 days (3 + 2 extra)
 */
console.log("TEST CASE 5: Small order, premium member, remote address\n");
orderAmount = 400;
isPremium = true;
isRemote = true;
estimateDelivery();

/**
 * Test Case 6: Premium Member with Large Order and Remote Address
 * Expected: Delivery fee = ₹0 (premium waiver), Delivery time = 5 days (3 + 2 extra)
 */
console.log("TEST CASE 6: Large order, premium member, remote address\n");
orderAmount = 2000;
isPremium = true;
isRemote = true;
estimateDelivery();
