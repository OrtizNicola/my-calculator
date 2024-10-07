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