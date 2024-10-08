document.addEventListener("DOMContentLoaded", () => {
    const add = (first, second) => first + second;
    const substract = (first, second) => first - second;
    const multiply = (first, second) => first * second;
    const divide = (first, second) => second === 0 ? "Error" : first / second;
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
    const maxDigits = 9;

    let shouldResetDisplay = false;

    const resetDisplay = () => {
        displayCurrVal = displayDefault;
        shouldResetDisplay = false;
    }

    const resetCalculator = () => {
        display.textContent = displayDefault;
        displayCurrVal = displayDefault;
        firstNumber = null;
        secondNumber = null;
    }

    const checkResultLength = result => {
        let resultString = String(result);
        if (resultString.length > maxDigits - 1) {
            resultString = Number(resultString).toExponential(maxDigits - 1);
            return String(resultString).slice(0, maxDigits);
        } else {
            return resultString;
        }
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
            resetDisplay();
        }
        if (displayCurrVal.length > maxDigits - 1) {
            return
        } else {
            display.textContent = displayCurrVal 
        }
        handleNumberInput(e.target.value);
    }))
    
    periodBtn.addEventListener("click", e => {
        if (shouldResetDisplay) {
            resetDisplay();
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

    const checkNumber = () => {
        if (firstNumber === null) {
            firstNumber = displayCurrVal;
        } else if (firstNumber && secondNumber === null) {
            secondNumber = displayCurrVal;
        }
    }

    const calculateResult = () => {
        const result = operate(operator, Number(firstNumber), Number(secondNumber));
        displayCurrVal = checkResultLength(result);
        secondNumber = null;
        display.textContent = displayCurrVal;
    }

    operatorBtn.forEach(btn => btn.addEventListener("click", e => {
        shouldResetDisplay = true;
        
        checkNumber()
        
        if (firstNumber && secondNumber) {
            if (operator === null) {
                operator = e.target.value
            }
            calculateResult()
            firstNumber = displayCurrVal;
        }
        operator = e.target.value
    }))

    equalBtn.addEventListener("click", () => {
        if (firstNumber) {
            secondNumber = displayCurrVal;
            if (firstNumber && secondNumber && operator) {
                calculateResult();
                operator = null;
                firstNumber = null;
                shouldResetDisplay = true;
            }
        }
    })

    percentBtn.addEventListener("click", () => {
        if (displayCurrVal !== displayDefault) {
            displayCurrVal = String(Number(displayCurrVal) / 100);
            display.textContent = displayCurrVal 
        }
    })
})