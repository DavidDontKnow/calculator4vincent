const outputPrevious = document.querySelector('.previous');
const outputCurrent = document.querySelector('.current');
const clear = document.getElementById('clear');
const backspace = document.querySelector('.backspace');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const numbers = document.querySelectorAll('.number');

// sets up arithmetic functions
function addNumber(a, b) {
    return a + b;
}

function subtractNumber(a, b) {
    return a - b;
}

function multiplyNumber(a, b) {
    return a * b;
}

function divideNumber(a, b) {
    return a / b;
}

// sets up operate function to be used in equals event listener
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return addNumber(a, b);
        case '-':
            return subtractNumber(a, b);
        case '*':
            return multiplyNumber(a, b);
        case '÷':
            return divideNumber(a, b);
    }
}

// sets up variables to be used in event listeners
let currentNumber = '';
let previousNumber = '';
let operator = '';

// sets up event listeners for numbers and decimal
numbers.forEach(number => {
    number.addEventListener('click', () => {
        // if btn with number or decimal is clicked, add to currentNumber and display
        if (number.textContent >= 0 && number.textContent <= 9 || number.textContent === '.') {
            currentNumber += number.textContent;
            // prints currentNumber to outputCurrent
            outputCurrent.textContent = currentNumber;
        }
    })
})

// sets up event listeners for operators


add.addEventListener('click', () => {
    // if previousNumber and currentNumber are not empty, operate and display ie. chaining operations
    if (previousNumber !== '' && currentNumber !== '') {
        previousNumber = operate(operator, Number(previousNumber), Number(currentNumber));
        currentNumber = '';
        operator = '+';
        outputPrevious.textContent = `${previousNumber} ${operator}`;
        outputCurrent.textContent = currentNumber;
    } else
        // if currentNumber is not empty, set previousNumber to currentNumber and operator to +, display
        if (currentNumber !== '') {
            previousNumber = currentNumber;
            // clears currentNumber
            currentNumber = '';
            // sets operator to + for use in operate function
            operator = '+';
            outputPrevious.textContent = `${previousNumber} ${operator}`;
            outputCurrent.textContent = currentNumber;
        }
})

subtract.addEventListener('click', () => {
    // chaining operations
    if (previousNumber !== '' && currentNumber !== '') {
        previousNumber = operate(operator, Number(previousNumber), Number(currentNumber));
        currentNumber = '';
        operator = '-';
        outputPrevious.textContent = `${previousNumber} ${operator}`;
        outputCurrent.textContent = currentNumber;
    } else
        // if currentNumber is not empty, set previousNumber to currentNumber and operator to -, display
        if (currentNumber !== '') {
            previousNumber = currentNumber;
            currentNumber = '';
            operator = '-';
            outputPrevious.textContent = `${previousNumber} ${operator}`;
            outputCurrent.textContent = currentNumber;
        }
})

multiply.addEventListener('click', () => {
    // chaining operations
    if (previousNumber !== '' && currentNumber !== '') {
        previousNumber = operate(operator, Number(previousNumber), Number(currentNumber));
        currentNumber = '';
        operator = '*';
        outputPrevious.textContent = `${previousNumber} ${operator}`;
        outputCurrent.textContent = currentNumber;
    } else
        // if currentNumber is not empty, set previousNumber to currentNumber and operator to *, display
        if (currentNumber !== '') {
            previousNumber = currentNumber;
            currentNumber = '';
            operator = '*';
            outputPrevious.textContent = `${previousNumber} ${operator}`;
            outputCurrent.textContent = currentNumber;
        }
})

divide.addEventListener('click', () => {
    // chaining operations
    if (previousNumber !== '' && currentNumber !== '') {
        previousNumber = operate(operator, Number(previousNumber), Number(currentNumber));
        currentNumber = '';
        operator = '÷';
        outputPrevious.textContent = `${previousNumber} ${operator}`;
        outputCurrent.textContent = currentNumber;
    } else
        //  if currentNumber is not empty, set previousNumber to currentNumber and operator to ÷, display
        if (currentNumber !== '') {
            previousNumber = currentNumber;
            currentNumber = '';
            operator = '÷';
            outputPrevious.textContent = `${previousNumber} ${operator}`;
            outputCurrent.textContent = currentNumber;
        }
})

equals.addEventListener('click', () => {
    // if previousNumber and currentNumber are not empty, operate and display
    if (currentNumber !== '' && previousNumber !== '') {
        // clears previousNumber
        outputPrevious.textContent = '';
        // displays result of operate function
        outputCurrent.textContent = operate(operator, Number(previousNumber), Number(currentNumber));
        previousNumber = '';
        currentNumber = `${outputCurrent.textContent}`;
    }
})

// sets up clear 
clear.addEventListener('click', () => {
    // sets all variables to empty string
    outputPrevious.textContent = '';
    outputCurrent.textContent = '';
    previousNumber = '';
    currentNumber = '';
})
// clears last character from currentNumber
backspace.addEventListener('click', () => {
    // removes last character from currentNumber and displays
    currentNumber = currentNumber.slice(0, -1);
    outputCurrent.textContent = currentNumber;
})

