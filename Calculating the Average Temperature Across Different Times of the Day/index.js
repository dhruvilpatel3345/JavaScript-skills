// Step 1: Create an array of the five decimal numbers representing temperatures
let temperatures = [22.5, 24.3, 26.8, 21.4, 23.7];

// Step 2: Create a function that calculates the mean of the array of numbers
function calculateMean(array) {
    // 2.3.1: Create a variable to contain the sum of the values and initialize it to 0
    let sum = 0;
    
    // 2.3.2: Create a for loop to iterate over each value stored in the array
    for (let i = 0; i < array.length; i++) {
        // 2.3.3: Add the values of the array together, then assign the result to the sum variable
        sum += array[i];
    }
    
    // 2.3.4: Divide the sum by the number of values in the array and return the result
    return sum / array.length;
}

// Step 3: Store the result of the function in a variable that represents the mean
let meanTemperature = calculateMean(temperatures);

// Step 4: Use a method of the Math object to round the mean off to the nearest integer with only two decimal places
let roundedMeanTemperature = Math.round(meanTemperature * 100) / 100;

// Step 5: Create a variable that stores the result and concatenate it with a message
let temperatureMessage = "The average temperature recorded is: " + roundedMeanTemperature + "°C";

// Step 6: Log the message and the final result to the console
console.log(temperatureMessage);
