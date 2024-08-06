document.addEventListener("DOMContentLoaded", () => {
    const add = (first, second) => first + second;
    const substract = (first, second) => first - second;
    const multiply = (first, second) => first * second;
    const divide = (first, second) => first / second;
    function operate (op, first, second) {
        switch (op) {
            case "+":
                return add(first, second);
            case "-":
                return substract(first, second);
            case "*":
                return multiply(first, second);
            case "/":
                return divide(first, second);
        }
    }

    let firstNumber = null;
    let secondNumber = null;
    let operator = null;

    const display = document.getElementById("display");
    const numberBtn = document.querySelectorAll(".numBtn");
    const operatorBtn = document.querySelectorAll(".operator");
    const periodBtn = document.getElementById("periodBtn");
    const percentBtn = document.getElementById("percentBtn");
    const clearBtn = document.getElementById("clearBtn");
    const bckspcBtn = document.getElementById("bckspcBtn");
    const equalBtn = document.getElementById("equalBtn");
})