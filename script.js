"use strict"

//basic math functions
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

//basic variables
let number1;
let operator;
let number2;

function operate(operator, number1, number2) {
    if (operator === "+") {
        return add(number1, number2)
    } else if (operator === "-") {
        return subtract(number1, number2)
    } else if (operator === "*") {
        return multiply(number1, number2)
    } else if (operator === "/") {
        return divide(number1, number2)
    }
}

function printer(input) {
    if(display === 0){
        document.getElementById("display").textContent = input;
    } else{
        document.getElementById("display").textContent += input;
    }
    return display += input;
}

let display = 0;
const printingButtons = document.getElementsByClassName("printingButtons");
console.log(printingButtons);
console.log(display);
Array.from(printingButtons).forEach((button) => {
    button.addEventListener('click', () => printer(button.id))
});

