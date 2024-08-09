// Initialize the array
let array = [];

// Function to display the array elements
function displayArray() {
    const arrayDisplay = document.getElementById('arrayElements');
    arrayDisplay.innerHTML = ''; // Clear previous content

    // Use forEach to display each element
    array.forEach((element, index) => {
        arrayDisplay.innerHTML += `Element ${index + 1}: ${element}<br>`;
    });
}

// Function to add an element to the end of the array
function addElement() {
    const elementInput = document.getElementById('elementInput').value;
    if (elementInput) {
        array.push(elementInput);
        displayArray();
        document.getElementById('elementInput').value = ''; // Clear input field
    }
}

// Function to add an element to the beginning of the array
function addFirstElement() {
    const elementInput = document.getElementById('elementInput').value;
    if (elementInput) {
        array.unshift(elementInput);
        displayArray();
        document.getElementById('elementInput').value = ''; // Clear input field
    }
}

// Function to remove the last element from the array
function removeLastElement() {
    if (array.length > 0) {
        array.pop();
        displayArray();
    } else {
        alert('Array is already empty');
    }
}

// Function to remove the first element from the array
function removeFirstElement() {
    if (array.length > 0) {
        array.shift();
        displayArray();
    } else {
        alert('Array is already empty');
    }
}

// Function to remove an element at a specific index
function removeElementAtIndex() {
    const indexInput = parseInt(document.getElementById('indexInput').value);
    if (indexInput >= 0 && indexInput < array.length) {
        array.splice(indexInput, 1);
        displayArray();
        document.getElementById('indexInput').value = ''; // Clear input field
    } else {
        alert('Invalid index');
    }
}
