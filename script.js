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

const lastInput = document.querySelector('.lastInput');
const result = document.querySelector('.result');

const numbers = document.querySelectorAll(".numbers button");
const operators = document.querySelectorAll(".operators button");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");

function calc(res) {
    return new Function('return ' + res)();
}

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        input += button.textContent;
        newInput += button.textContent;
        lastInput.textContent = input;
        result.textContent = newInput;
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        input = calc(input);
        input += memory + operator.textContent;
        lastInput.textContent += operator.textContent;
        result.textContent = newInput;
        newInput = '';
    })
})

equals.addEventListener('click', () => {
    lastInput.textContent = input;
    result.textContent = calc(input);
    memory = calc(input);
    input = '';
    newInput = '';
})

clear.addEventListener('click' , () => {
    input = '';
    memory = '';
    newInput = '';
    result.textContent = '-';
    lastInput.textContent = '-';
})