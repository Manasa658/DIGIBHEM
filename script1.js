let display = document.querySelector('#display');
let expression = '';

// Function to update the display
function updateDisplay(value) {
    display.innerText = value;
}

// Function to handle number and decimal button clicks
function handleNumberClick() {
    expression += this.getAttribute('data-num');
    updateDisplay(expression);
}

// Function to handle operator button clicks
function handleOperatorClick() {
    const operator = this.getAttribute('data-ops');
    if (expression !== '' && !['+', '-', '*', '/'].includes(expression.slice(-1))) {
        expression += operator;
        updateDisplay(expression);
    }
}

// Function to handle clear button click
function handleClear() {
    expression = '';
    updateDisplay('0');
}

// Function to handle equals button click
function handleEquals() {
    try {
        const result = eval(expression);
        updateDisplay(result);
        expression = result.toString();
    } catch (error) {
        updateDisplay('Error');
        expression = '';
    }
}

// Add event listeners to number buttons
document.querySelectorAll('.num').forEach(button => {
    button.addEventListener('click', handleNumberClick);
});

// Add event listeners to operator buttons
document.querySelectorAll('.ops').forEach(button => {
    button.addEventListener('click', handleOperatorClick);
});

// Add event listener to equals button
document.querySelector('#equals').addEventListener('click', handleEquals);

// Add event listener to clear button
document.querySelector('#clear').addEventListener('click', handleClear);
