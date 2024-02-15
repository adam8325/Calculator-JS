let num1 = 0;
let num2 = 0;
let sum = document.getElementById("sum-el");

function updateNumbers() {
    num1 = parseFloat(document.getElementById("num1-el").value);
    num2 = parseFloat(document.getElementById("num2-el").value);
}

function add() {
    updateNumbers();
    let result = num1 + num2;
    sum.textContent = result;
}

function subtract() {
    updateNumbers();
    let result = num1 - num2;
    sum.textContent = result;
}

function divide() {
    updateNumbers();
    let result = num1 / num2;
    sum.textContent = result;
}

function multiply() {
    updateNumbers();
    let result = num1 * num2;
    sum.textContent = result;
}
