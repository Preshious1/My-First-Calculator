let num1 = 8;
let num2 = 10;

num1 = document.getElementById("num1-el").innerText
num2 = document.getElementById("num2-el").innerText
sumEl = document.getElementById("sum-el")


function add() {
    let sum = num1 + num2
    sumEl.innerText = "SUM: " + sum
}

function subtract() {
    let difference = num1 - num2
    sumEl.innerText = "DIFFERENCE: " + difference
}
function divide() {
    if (num2 !== 0) {
        let quotient = num1 / num2;
        sumEl.innerText = "QUOTIENT: " + quotient;
    } else {
        sumEl.innerText = "Cannot divide by zero";
    }
}
function multiply() {
    let product = num1 * num2
    sumEl.innerText = "PRODUCT: " + product
}
