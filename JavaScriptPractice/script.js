// Variables declared with var, let, and const of different data types

// Declaring a variable with var
var myVar = "Hello, World!";
console.log(myVar); // Output: Hello, World!

// Declaring a variable with let
let myLet = 42;
console.log(myLet); // Output: 42

// Declaring a variable with const
const myConst = true;
console.log(myConst); // Output: true

// Named, anonymous, and built-in functions

// Named function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

// Anonymous function
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(2, 3)); // Output: 6

// Built-in function (using Math.random)
const randomNum = Math.random();
console.log(randomNum); // Output: Random number between 0 and 1

// If/else and switch conditional statements

// If/else statement
let age = 20;
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

// Switch statement
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("This is a banana.");
        break;
    case "apple":
        console.log("This is an apple.");
        break;
    case "orange":
        console.log("This is an orange.");
        break;
    default:
        console.log("Unknown fruit.");
}

// Arrays of different data types

// Array of numbers
let numberArray = [1, 2, 3, 4, 5];
console.log(numberArray); // Output: [1, 2, 3, 4, 5]

// Array of strings
let stringArray = ["one", "two", "three"];
console.log(stringArray); // Output: ["one", "two", "three"]

// Array of mixed data types
let mixedArray = [1, "two", true, {name: "John"}, [1, 2, 3]];
console.log(mixedArray); // Output: [1, "two", true, {name: "John"}, [1, 2, 3]]

// Loop through an array

// Using a for loop
for (let i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i]); // Output: 1 2 3 4 5
}

// Using a for...of loop
for (let num of numberArray) {
    console.log(num); // Output: 1 2 3 4 5
}
