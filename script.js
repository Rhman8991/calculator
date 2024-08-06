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
    const operatorBtn = document.querySelectorAll(".opBtn");
    const periodBtn = document.getElementById("periodBtn");
    const percentBtn = document.getElementById("percentBtn");
    const clearBtn = document.getElementById("clearBtn");
    const bckspcBtn = document.getElementById("bckspcBtn");
    const equalBtn = document.getElementById("equalBtn");

    const displayDefault = "0";
    display.textContent = displayDefault;
    let displayCurrVal = displayDefault;

    let shouldResetDisplay = false;

    const resetCurrVal = () => {
        displayCurrVal = displayDefault;
        shouldResetDisplay = false;
    }

    const resetCalculator = () => {
        display.textContent = displayDefault;
        displayCurrVal = displayDefault;
        firstNumber = null;
        secondNumber = null;
    }

    const handleNumberInput = val => {
        if(displayCurrVal === displayDefault && val === "0") {
            displayCurrVal = val;
        } else if (displayCurrVal === displayDefault && val !== "0") {
            displayCurrVal = "";
            displayCurrVal += val;
        } else {
            displayCurrVal += val
        }
        display.textContent = displayCurrVal
    }

    numberBtn.forEach(btn => btn.addEventListener("click", e => {
        if (shouldResetDisplay) {
            resetCurrVal();
        }
        handleNumberInput(e.target.value);
    }))
    
    periodBtn.addEventListener("click", e => {
        if (shouldResetDisplay) {
            resetCurrVal();
        }

        if (!displayCurrVal.includes(e.target.value)) {
            displayCurrVal += e.target.value;
            display.textContent = displayCurrVal;
        }
    })
    
    clearBtn.addEventListener("click", () => {
        resetCalculator();
    })

    bckspcBtn.addEventListener("click", () => {
        if(displayCurrVal.length > 1) {
            const removeVal = displayCurrVal.split("");
            removeVal.pop()
            displayCurrVal = removeVal.join("");
            display.textContent = displayCurrVal
        } else if (displayCurrVal.length === 1 && displayCurrVal !== displayDefault) {
            displayCurrVal = displayDefault
            display.textContent = displayCurrVal
        }
    })

})