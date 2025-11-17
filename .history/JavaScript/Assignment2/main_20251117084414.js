// Dynamic discount evaluator based on product category and cart total


// --- Cart Data (Array of Objects) ---
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];


// Function to calculate discounted prices
function evaluateDiscount(cartItems) {
    let totalBeforeDiscount = 0;


    // Apply category-based discounts
    const updatedCart = cartItems.map(product => {
        let discount = 0;


        // Electronics → 10%
        if (product.category === "electronics") {
            discount = 0.10;
        }
        // Fashion → 5%
        else if (product.category === "fashion") {
            discount = 0.05;
        }


        // Calculate discounted price
        const discountedPrice = product.price - (product.price * discount);


        // Add to running total
        totalBeforeDiscount += discountedPrice;


        return {
            ...product,
            discountedPrice: discountedPrice
        };
    });


    // If cart total exceeds 50000 → apply extra 5% discount
    let finalTotal = totalBeforeDiscount;
    if (totalBeforeDiscount > 50000) {
        finalTotal = finalTotal - (finalTotal * 0.05);
    }


    return {
        updatedCart,
        totalBeforeDiscount,
        finalTotal
    };
}


// Calculate final billing details
const result = evaluateDiscount(cart);


// Display formatted results in console
console.log("\n===== Dynamic Discount Evaluator =====");
console.log("Updated Cart with Discounts:", result.updatedCart);
console.log("Total Before Extra Discount:", result.totalBeforeDiscount);
console.log("Final Total After Evaluations:", result.finalTotal);