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

let currentNumber = '';
let previousNumber = '';
let operator = '';

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (number.textContent >= 0 && number.textContent <= 9 || number.textContent === '.') {
            currentNumber += number.textContent;
            outputCurrent.textContent = currentNumber;
        }
    })
})

add.addEventListener('click', () => {
    if (currentNumber !== '') {
        previousNumber = currentNumber;
        currentNumber = '';
        operator = '+';
        outputPrevious.textContent = `${previousNumber} ${operator}`;
        outputCurrent.textContent = currentNumber;
    }
}
)

subtract.addEventListener('click', () => {
    if (currentNumber !== '') {
        previousNumber = currentNumber;
        currentNumber = '';
        operator = '-';
        outputPrevious.textContent = `${previousNumber} ${operator}`;
        outputCurrent.textContent = currentNumber;
    }
}
)

multiply.addEventListener('click', () => {
    if (currentNumber !== '') {
        previousNumber = currentNumber;
        currentNumber = '';
        operator = '*';
        outputPrevious.textContent = `${previousNumber} ${operator}`;
        outputCurrent.textContent = currentNumber;
    }
}
)

divide.addEventListener('click', () => {
    if (currentNumber !== '') {
        previousNumber = currentNumber;
        currentNumber = '';
        operator = '÷';
        outputPrevious.textContent = `${previousNumber} ${operator}`;
        outputCurrent.textContent = currentNumber;
    }
}
)

equals.addEventListener('click', () => {
    if (currentNumber !== '' && previousNumber !== '') {
        outputPrevious.textContent = '';
        outputCurrent.textContent = operate(operator, Number(previousNumber), Number(currentNumber));
        previousNumber = '';
        currentNumber = '';
    }
}
)

clear.addEventListener('click', () => {
    outputPrevious.textContent = '';
    outputCurrent.textContent = '';
    previousNumber = '';
    currentNumber = '';
}
)

backspace.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    outputCurrent.textContent = currentNumber;
}
)

