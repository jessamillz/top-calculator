
let inputDisplay = "0";
let resultDisplay = false;
let result = 0;

document.addEventListener("DOMContentLoaded", () => {
    // Select all buttons
    const buttons = document.querySelectorAll("button");

    // Add a click event listener to each button
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const buttonClass = button.className; // Get the button's class name
            const value = button.innerText; // Get the button's text content

            // Perform actions based on the button's class
            if (buttonClass.includes("number")) {
                appendToDisplay(value); // Append numbers to the display
            } else if (buttonClass.includes("operator")) {
                appendToDisplay(value); // Append operators to the display
            } else if (buttonClass.includes("delete-clear")) {
                if (value === "AC") {
                    clearDisplay(); // Clear the display
                } else if (value === "Del") {
                    deletePrevious(); // Delete the last character
                }
            } else if (buttonClass.includes("equals")) {
                calculateResult(); // Perform the calculation
            }
        });
    });
});

function calculateResult() {

}

function clearDisplay() {
    inputDisplay = "0";
    resultDisplay = false;

    updateDisplay();
}

function deletePrevious() {

}

function appendToDisplay(value) {

    if (inputDisplay === "0" || resultDisplay) {
        inputDisplay = value;
    } else {
        inputDisplay += " " + value;
    }

    // Reset the result display flag to false, as the user entered a new value
    resultDisplay = false;

    // Update the calculator display to show the new content
    updateDisplay();
}

// Update display with current content
function updateDisplay() {
    const displayElement = document.getElementById("input-display");
    displayElement.innerText = inputDisplay;

    if (resultDisplay) {
        const resultElement = document.getElementById("result-display");
        resultElement.innerText = result;
    }
}

// Mathematical operations
function add (num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Cannot divide by 0!";
    }
}
