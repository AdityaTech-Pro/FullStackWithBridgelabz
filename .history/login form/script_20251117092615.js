// Sample stored credentials (for demo purposes)
//const storedUsername = "admin";
//const storedPassword = "12345";

// User-provided login values (in a real system, these would come from inputs)
const inputUsername = "admin"; // modify to test
const inputPassword = "12345"; // modify to test

console.log("================ LOGIN AUTHENTICATION ================");
console.log(`Entered Username: ${inputUsername}`);
console.log(`Entered Password: ${inputPassword}`);
console.log("-------------------------------------------------------");

// Authentication logic
if (inputUsername === storedUsername && inputPassword === storedPassword) {
    console.log("Login Successful ✔");
    console.log("Welcome to the system!");
} else {
    console.log("Login Failed ✘");
    console.log("Invalid username or password.");
}

console.log("=======================================================");