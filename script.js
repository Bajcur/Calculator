"use strict"

//basic math functions
function add(a, b) {
    let result = Math.round(( +a + +b ) * 1000) / 1000;
    if (result > 999999){
        document.getElementById("display").textContent = result.toExponential(3);
    }else {
        document.getElementById("display").textContent = result;
    }
    number1 = result;
    return toString(number1);
}

function subtract(a, b) {
    let result = Math.round(( +a - +b ) * 1000) / 1000;
    if (result > 999999){
        document.getElementById("display").textContent = result.toExponential(3);
    }else {
        document.getElementById("display").textContent = result;
    }
    number1 = result;
    return toString(number1);
}

function multiply(a, b) {
    let result = Math.round(( +a * +b ) * 1000) / 1000;
    if (result > 999999){
        document.getElementById("display").textContent = result.toExponential(3);
    }else {
        document.getElementById("display").textContent = result;
    }
    number1 = result;
    return toString(number1);
}

function divide(a, b) {
    let result = Math.round(( +a / +b ) * 1000) / 1000;
    if (result > 999999){
        document.getElementById("display").textContent = result.toExponential(3);
    }else {
        document.getElementById("display").textContent = result;
    }
    number1 = result;
    return toString(number1);
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
    display = document.getElementById("display").textContent
    if (display.length < 11){
        if(display === "0" ){
            return document.getElementById("display").textContent = input;
        } else{
            return document.getElementById("display").textContent += input;
        }
    }
}

let display = 0;
const printingButtons = document.getElementsByClassName("printingButtons");
const operators = document.getElementsByClassName("operator");
const equals = document.getElementById("=");
const clear = document.getElementById("clear")
//console.log(printingButtons);
//console.log(display);
Array.from(printingButtons).forEach((button) => {
    button.addEventListener('click', () => {
        printer(button.id);    
        if (operator === "" && number1.length < 11){
            number1 += button.id
            return console.log(number1);
        } else if (number2.length < 11) {
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

//cleanup functions
clear.addEventListener('click', () => {
    clearDisplay();
    clearNumber1();
    clearNumber2();
    clearOperator();
})

function clearDisplay(){
    return document.getElementById("display").textContent = 0;
}

function clearNumber1(){
    return number1 = "";       
}

function clearNumber2(){
    return number2 = "";
}

function clearOperator(){
    return operator = "";
}

