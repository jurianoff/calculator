function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    return a / b;
};

function operate(operator,a,b) {
    switch (operator) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
    };
};

let input = '';
let memory = '';
let newInput = '';

const re = /undefined/g;

const lastInput = document.querySelector('.lastInput');
const result = document.querySelector('.result');

const numbers = document.querySelectorAll(".numbers button");
const operators = document.querySelectorAll(".operators button");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");

function calc(res) {
    try {
        return new Function('return ' + res)();
    }catch(e) {
        console.log("Invalid Expression");
        result.textContent = 'ERROR';
        lastInput.textContent = 'Invalid Expression';
    }
}

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        input += button.textContent;
        newInput += button.textContent;
        lastInput.textContent = input;
        result.textContent = newInput;
        if (result.textContent.length > 14 || lastInput.textContent.length > 14) {
            result.textContent = 'Num too long';
            lastInput.textContent = '';
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (input) {
            input = calc(input);
        }
        result.textContent = Math.round(calc(input)*100)/100;
        input += memory + operator.textContent;
        lastInput.textContent += operator.textContent;
        newInput = '';
        if (result.textContent == 'Infinity') {
            result.textContent = 'Just don\'t';
        }
    })
})

equals.addEventListener('click', () => {
    lastInput.textContent = input;
    result.textContent = Math.round(calc(input)*100)/100;
    memory = calc(input);
    input = '';
    newInput = '';
    if (result.textContent == 'Infinity') {
        result.textContent = 'Just don\'t';
    }
})

clear.addEventListener('click' , () => {
    input = '';
    memory = '';
    newInput = '';
    result.textContent = '-';
    lastInput.textContent = '-';
})

