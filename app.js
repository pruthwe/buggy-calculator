// --- DOM Elements ---
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultSpan = document.getElementById("result"); //

const addButton = document.getElementById("add-btn");
const subtractButton = document.getElementById("subtract-btn");
const multiplyButton = document.getElementById("multiply-btn");
const divideButton = document.getElementById("divide-btn");

// --- Functions ---
function add() {
    //
    const result = num1Input.value + num2Input.value;
    resultSpan.textContent = result;
}

function subtract() {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    resultSpan.textContent = num1 - num2;
}

function multiply() {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    resultSpan.textContent = num1 * num2;
}

function divide() {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    resultSpan.textContent = num1 / num2;
}

// --- Event Listeners ---
addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
//
divideButton.addEventListener("click", divide);
