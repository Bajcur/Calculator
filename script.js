"use strict"

//basic math functions
function add(a, b) {
    console.log(a, b);
    let result = Math.round(( +a + +b ) * 1000) / 1000;
    if (result > 999999){
        document.getElementById("display").textContent = result.toExponential(3);
    }else {
        document.getElementById("display").textContent = result;
    }
    number1 = result.toString();
    return number1;
}

function subtract(a, b) {
    let result = Math.round(( +a - +b ) * 1000) / 1000;
    if (result > 999999){
        document.getElementById("display").textContent = result.toExponential(3);
    }else {
        document.getElementById("display").textContent = result;
    }
    number1 = result.toString();
    return number1;
}

function multiply(a, b) {
    let result = Math.round(( +a * +b ) * 1000) / 1000;
    if (result > 999999){
        document.getElementById("display").textContent = result.toExponential(3);
    }else {
        document.getElementById("display").textContent = result;
    }
    number1 = result.toString();
    return number1;
}

function divide(a, b) {
    let result = Math.round(( +a / +b ) * 1000) / 1000;
    if (result > 999999 && b !== "0"){
        document.getElementById("display").textContent = result.toExponential(3);
    }else if(b === "0"){
        document.getElementById("display").textContent = "ERROR";
        alert("You can't divide by 0! Clear display and divide by other number!");
    } else {
        document.getElementById("display").textContent = result;
    }
    number1 = result.toString();
    return number1;
}

//basic variables
let number1 = "0";
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
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const dot = document.getElementById(".");
const minus = document.getElementById("-");
dot.disabled = false;
//console.log(printingButtons);
//console.log(display);

Array.from(printingButtons).forEach((button) => {
    button.addEventListener('click', () => {
        checkIfDecimal1();
        printer(button.id);   
        if (operator == "" && number1.length < 11){
            number1 += button.id;
            checkIfDecimal1();
            return console.log(number1);
        } else if (number2.length < 11) {
            number2 += button.id;
            checkIfDecimal2();
            return console.log(number2);
        }
    })
});

Array.from(operators).forEach((button) => {
    button.addEventListener('click', () => {
        secondOperator(operator, number1, number2);
        printer(button.id);
        return operator = button.id;
    })
});

equals.addEventListener('click', () => {
    operate(operator, number1, number2);
    clearOperator();
    clearNumber2();
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

//second operator
function secondOperator(operator, number1, number2){
    if(document.getElementById("display").textContent.match(/[+*\/-](\s?-)?/g, '+$1' && number2 == true)){
        operate(operator, number1, number2);
        clearNumber2();
    }
}

//delete
function deletingDisplay(){
    if(document.getElementById("display").textContent.length > 1){
        return document.getElementById("display").textContent = document.getElementById("display").textContent.slice(0, -1);
    } else {
        return document.getElementById("display").textContent = 0;
    }      
}

//deleting
function deleting(){
    if (number2){
        return number2 = number2.slice(0, -1);
    }else if (operator && !number2){
        return operator = operator.slice(0, -1);
    }else if (number1 && (!operator && !number2)){
        return number1 = number1.slice(0, -1);
    }
}

backspace.addEventListener('click', () => {
    deleting();
    deletingDisplay();
})

//only one dot per number
function checkIfDecimal2(){
    if(number2.match(/\./)){
        return dot.disabled = true;     
    } else{
        return dot.disabled = false;
    }
    
}

function checkIfDecimal1(){
    if(number1.match(/\./)){
        return dot.disabled = true;
    } else{
        return dot.disabled = false;
    }
}

//keyboard support

document.addEventListener('keydown', (event) => {
    checkIfDecimal1(); 
    if (operator == "" && number1.length < 11 && event.key.match(/^[\.0-9]*$/)){
        printer(event.key);
        number1 += event.key;
        checkIfDecimal1();
        return console.log(number1);
    } else if (number2.length < 11 && event.key.match(/^[\.0-9]*$/)){
        printer(event.key);
        number2 += event.key;
        checkIfDecimal2();
        return console.log(number2);
    }    
});

document.addEventListener('keydown', (event) => {
    if(event.key.match(/^[+*\/-]*$/)){
        secondOperator(operator, number1, number2);
        printer(event.key);
        return operator = event.key; 
    }   
})

document.addEventListener('keydown', (event) => {
    if(event.key === "Enter"){
        operate(operator, number1, number2);
        clearOperator();
        clearNumber2();
    }    
})

document.addEventListener('keydown', (event) => {
    if(event.key === "Delete"){
        clearDisplay();
        clearNumber1();
        clearNumber2();
        clearOperator();
    }
})

document.addEventListener('keydown', (event) => {
    if(event.key === "Backspace"){
        deleting();
        deletingDisplay();
    }
})
