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

let num1;
let num2;
let operation;

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

// populate buttons
let buttons = document.querySelector(".buttons");
for (let i = 0; i < 19; i++) {
    let button = document.createElement("div");
    if (i < 3) {
        button.classList = "special";
    } else if ((i + 1) % 4 == 0) {
        button.classList = "operator";
    } else if (i == 18) {
        button.id = "equals";
    } else {
        button.classList = "number";
    }
    button.textContent = buttonsText[i];
    buttons.appendChild(button);
}
