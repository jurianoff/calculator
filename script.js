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

const lastInput = document.querySelector('.lastInput');
const result = document.querySelector('.result');

const numbers = document.querySelectorAll(".numbers button");
const operators = document.querySelectorAll(".operators button");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        input += button.textContent;
        result.textContent = input;
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        input += operator.textContent;
        result.textContent = input;
    })
})

equals.addEventListener('click', () => {
    lastInput.textContent = input;
    function calc(res) {
        return new Function('return ' + res)();
    }
    result.textContent = calc(input);
})