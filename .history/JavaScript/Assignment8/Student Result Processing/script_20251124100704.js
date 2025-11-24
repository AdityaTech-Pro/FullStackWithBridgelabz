// Student Result Processing using Classes + reduce()

"use strict";

// Student class\aclass Student {
constructor(name, marks) {
    this.name = name;
    this.marks = marks; // array of numbers
}

// Calculate average using reduce()
calculateAverage() {
    if (this.marks.length === 0) return 0;

    const total = this.marks.reduce((sum, num) => sum + num, 0);
    return total / this.marks.length;
}

// Return grade based on average
getGrade() {
    const avg = this.calculateAverage();

    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 50) return "C";
    return "F";
}

// Display details
printResult() {
    console.log(`Name: ${this.name}`);
    console.log(`Marks: ${this.marks.join(", ")}`);
    console.log(`Average: ${this.calculateAverage().toFixed(2)}`);
    console.log(`Grade: ${this.getGrade()}`);
    console.log("-----------------------------");
}
}

// Test the class for 3 students
const student1 = new Student("Aditya", [95, 92, 88, 90]);
const student2 = new Student("Dhruv", [70, 65, 75, 72]);
const student3 = new Student("Ahana", [45, 50, 40, 55]);

student1.printResult();
student2.printResult();
student3.printResult();