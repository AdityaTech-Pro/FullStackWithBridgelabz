"use strict";

// Constructor function for Car objects
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding a prototype method shared by all Car instances
Car.prototype.getDetails = function() {
    console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
};

// Creating car objects
const carOne = new Car("Toyota", "Fortuner");
const carTwo = new Car("Honda", "City");

// Calling shared prototype method
carOne.getDetails();
carTwo.getDetails();