"use strict"

//basic math functions
function add(a, b) {
    let result = +a + +b;
    document.getElementById("display").textContent = result;
    return number1 = result;
}

function subtract(a, b) {
    let result = +a - +b;
    document.getElementById("display").textContent = result;
    return number1 = result;
}

function multiply(a, b) {
    let result = +a * +b;
    document.getElementById("display").textContent = result;
    return number1 = result;
}

function divide(a, b) {
    let result = +a / +b;
    document.getElementById("display").textContent = result;
    return number1 = result;
}

//basic variables
let number1 = "";
let operator = "";
let number2 = "";

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
const operators = document.getElementsByClassName("operator");
const equals = document.getElementById("=");
//console.log(printingButtons);
//console.log(display);
Array.from(printingButtons).forEach((button) => {
    button.addEventListener('click', () => {
        printer(button.id);
        if (number1 === ""){
            number1 += button.id
            return console.log(number1);
        } else {
            number2 += button.id;
            return console.log(number2);
        }
    })
});

Array.from(operators).forEach((button) => {
    button.addEventListener('click', () => {
        printer(button.id);
        return operator = button.id;
    })
});

equals.addEventListener('click', () => {
    operate(operator, number1, number2);
    return number2 = "";
});