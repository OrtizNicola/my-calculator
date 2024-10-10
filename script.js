// functions for math operators
function add(a, b) {
    return Number.parseInt(a) + Number.parseInt(b);
}

function substract(a, b) {
    return Number.parseInt(a) - Number.parseInt(b);
}

function multiply(a, b) {
    return Number.parseInt(a) * Number.parseInt(b);
}

function divide(a, b) {
    if (Number.parseInt(b) !== 0) {
        return "illegal"
    }
    return Number.parseInt(a) / Number.parseInt(b);
}

let operatorMap = {
    "+": add,
    "-": substract,
    "*": multiply,
    "/": divide,
}

function operate(operator, num1, num2) {
    let func = operatorMap(operator);
    return func(num1, num2)
}

let buttonsText = [
    "AC", "+/-", "%", "+",
    "7" , "8"  , "9", "-",
    "4" , "5"  , "6", "*",
    "1" , "2"  , "3", "/",
    "." , "0"  , "="
]

let screen = document.querySelector(".screen");
let displayValue = "";
let currValue = "";
let storedValue = "";
let operation;
let alreadyDecimal = false;

// populate buttons
let buttons = document.querySelector(".buttons");
for (let i = 0; i < 19; i++) {
    let button = document.createElement("div");
    button.textContent = buttonsText[i];
    button.addEventListener("mousedown", () => {
        button.classList.toggle("pressed");
    })
    button.addEventListener("mouseup", () => {
        button.classList.toggle("pressed");
    })
    if (i < 3) {
        button.classList.add("special");
    } else if ((i + 1) % 4 == 0) {
        button.classList.add("operator");
    } else if (i == 18) {
        button.id = "equals";
    } else if (i == 16) {
        button.classList.add("number");
        button.addEventListener("click", () => {
            if (!alreadyDecimal) {
                displayValue += button.textContent;
                screen.textContent = displayValue;
                alreadyDecimal = true;
            } 
        })
    } else {
        button.classList.add("number");
        button.addEventListener("click", () => {
            displayValue += button.textContent;
            screen.textContent = displayValue;
            
        })
    }
    buttons.appendChild(button);
}
