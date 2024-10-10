// functions for math operators
function add(a, b) {
    return (Number.parseFloat(a) + Number.parseFloat(b)).toString();
}

function substract(a, b) {
    return (Number.parseFloat(a) - Number.parseFloat(b)).toString();
}

function multiply(a, b) {
    return (Number.parseFloat(a) * Number.parseFloat(b)).toString();
}

function divide(a, b) {
    if (Number.parseFloat(b) == 0) {
        return "illegal"
    }
    return (Number.parseFloat(a) / Number.parseFloat(b)).toString();
}

let operatorMap = {
    "+": add,
    "-": substract,
    "*": multiply,
    "/": divide,
}

function operate(operator, num1, num2) {
    let f = operatorMap[operator];
    return f(num1, num2)
}

let buttonsText = [
    "AC", "+/-", "%", "+",
    "7" , "8"  , "9", "-",
    "4" , "5"  , "6", "*",
    "1" , "2"  , "3", "/",
    "." , "0"  , "="
]

let screen = document.querySelector(".screen");
let currValue = "";
let storedValue = "";
let operation;
let alreadyDecimal = false;
let justClickedEqual = false;

function addPressedStyle(button, index) {
    button.textContent = buttonsText[index];
    button.addEventListener("mousedown", () => {
        button.classList.toggle("pressed");
    })
    button.addEventListener("mouseup", () => {
        button.classList.toggle("pressed");
    })
}

function renderScreen() {
    let n = currValue.length;
    if (n > 18) {
        alert("Too big, brother");
        currValue = currValue.slice(-18);
    }
    screen.style.fontSize = `${70/(Math.pow(n, 0.28))}px`;
    screen.textContent = currValue;
}

// populate buttons
let buttons = document.querySelector(".buttons");
for (let i = 0; i < 19; i++) {
    let button = document.createElement("div");
    addPressedStyle(button, i);
    if (i < 3) {
        button.classList.add("special");
        if (i == 0) {
            button.addEventListener("click", () => {
                currValue = "";
                storedValue = "";
                renderScreen();
            })
        } else if (i == 1) {
            button.addEventListener("click", () => {
                if (currValue[0] == "-") {
                    currValue = currValue.slice(1);
                } else {
                    currValue = "-" + currValue;
                }
                renderScreen();
            })
        } else {
            button.addEventListener("click", () => {
                currValue = (Number.parseFloat(currValue) / 100).toString();
                renderScreen();
            })
        }
    } else if ((i + 1) % 4 == 0) {
        button.classList.add("operator");
        button.addEventListener("click", () => {
            if (operation != "") {
                let e = new Event("click");
                let equalsButton = document.querySelector(".equals");
                equalsButton.dispatchEvent(e);
            }
            storedValue = currValue;
            currValue = "";
            alreadyDecimal = false;
            operation = button.textContent;
        })
    } else if (i == 18) {
        button.classList.add("equals");
        button.addEventListener("click", () => {
            if (storedValue && currValue) {
                currValue = operate(operation, storedValue, currValue);
                console.log(currValue);
                if (currValue.length != 0 && currValue != "illegal") {
                    let numValue = Number.parseFloat(currValue);
                    numValue = Math.round(numValue * 10_000_000) / 10_000_000;
                    currValue = numValue.toString();
                }
                storedValue = "";
                justClickedEqual = true;
                operation = "";
                renderScreen();
            }
        })
    } else {
        button.classList.add("number");
        button.addEventListener("click", () => {
            if (justClickedEqual) {
                currValue = "";
                justClickedEqual = false;
            }
            if (i == 16 && !alreadyDecimal) {
                currValue += button.textContent;
                alreadyDecimal = true;
            } else if (i !=16) {
                currValue += button.textContent;
            }
            renderScreen();
        })
    }
    buttons.appendChild(button);
}
