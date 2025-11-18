"use strict";

// Product class representing an E‑commerce product
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method to apply discount (10% default)
    applyDiscount = (percent = 10) => {
        this.price = this.price - (this.price * percent) / 100;
    };

    // Method to return formatted product details
    getDetails = () => {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    };
}

// Creating multiple product objects
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Shoes", 1200, "Footwear"),
    new Product(3, "Watch", 800, "Accessories"),
    new Product(4, "Smartphone", 25000, "Electronics")
];

// Apply discount to all products
products.forEach(p => p.applyDiscount());

// Display all product details in DOM
const info = document.createElement("div");
info.innerHTML = `<h3>All Products (With Discount Applied)</h3>`;
products.forEach(p => {
    const item = document.createElement("p");
    item.textContent = p.getDetails();
    info.appendChild(item);
});
document.body.appendChild(info);

// Filter products with price > 1000 and log them
const filtered = products.filter(p => p.price > 1000);
console.log("Products with price > 1000:", filtered);