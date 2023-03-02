// Header
const header = document.createElement("header");
document.body.appendChild(header);
// header title
const h1 = document.createElement("h1");
h1.setAttribute("id", "title");
h1.innerText = "CALCULATOR";
header.appendChild(h1);
// header description 
const p = document.createElement("p");
p.setAttribute("id", "description");
p.innerText = "Arithmetic operation calculator";
header.appendChild(p);
// calculator container 
const container = document.createElement("main");
container.setAttribute("id", "calculator");
document.body.appendChild(container);

//calculator Display 
const calculatorDisplay = document.createElement("div");
calculatorDisplay.setAttribute("id", "result");
calculatorDisplay.setAttribute("class", "calculator-display");
const mainContainer = document.querySelector("#calculator");
mainContainer.appendChild(calculatorDisplay);

// Result Displayer

const result = document.createElement("h1");
result.setAttribute("id", "resulter");
result.innerText = "0";
const contain = document.querySelector(".calculator-display");
contain.appendChild(result);

//Button Container

const wrap = document.createElement("div");
wrap.setAttribute("class", "buttons");
mainContainer.appendChild(wrap);

const wrappe = document.querySelector(".buttons");
// Buttons
const btnsText = ['÷', "X", "-", "+", 7, 8, 9, "↩", 4, 5, 6, 1, 2, 3, ".", 0, "C", "="];
const btnclass = ["operator", "operator", "operator", "operator", "number", "number", "number", "backspace", "number", "number", "number", "number", "number", "number", "decimal", "number", "clear", "equal-sign"];


for (let i = 0; i < btnsText.length; i++) {
  const btn = document.createElement("button");
  btn.setAttribute("class", btnclass[i]);
  btn.innerText = btnsText[i];
  wrappe.appendChild(btn);
}

// Operator id and value setting;
const operators = document.querySelectorAll(".operator");
const operatorId = ["division", "multiplication", "subtract", "add"];
const operatorValue = ["/", "*", "-", "+"];

for (let i = 0; i < operators.length; i++) {
  operators[i].setAttribute("id", `${operatorId[i]}`);
  operators[i].setAttribute("value", `${operatorValue[i]}`);
}

//Number buttons id and value setting:

const numbers = document.querySelectorAll(".number");
const numberId = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
for (let i = 0; i < numbers.length; i++) {
  numbers[i].setAttribute("id", `${numberId[i]}`);
  numbers[i].setAttribute("value", `${numberId[i]}`);
}

// decimal value id and value setting;

const deci = document.querySelector(".decimal");
deci.setAttribute("id", ".");
deci.setAttribute("value", ".");


//clear Button Setting: 

const clear = document.querySelector(".clear");
clear.setAttribute("id", "clear");
clear.setAttribute("value", "c")

// Equal to button Setting: 
const equal = document.querySelector(".equal-sign");
equal.setAttribute("id", "equal");
equal.setAttribute("value", "=");


const display = document.querySelector("#resulter");
const inputBtn = document.querySelectorAll("button");
const clearBtn = document.querySelector("#clear");

function sendNumberValue(number) {
  // if the current display value is zero, then replace it otherwise concatinate it.
  const displayValue = display.innerText;
  return display.innerText = displayValue === "0" ? number : displayValue + number;
}

inputBtn.forEach((x) => {
  if (x.classList.contains("number")) {
    x.addEventListener("click", () => sendNumberValue(x.value));
  }
  else if (x.classList.contains("operator")) {
    x.addEventListener("click", () => addOperator(x.value));
  }
  else if (x.classList.contains("decimal")) {
    x.addEventListener("click", () => addDecimal());
  }
  else if (x.classList.contains("backspace")) {
    x.addEventListener("click", () => backspace());
  }
})
//Add operator

function addOperator(x) {
  if (!(display.innerText.endsWith("+") || display.innerText.endsWith("-") || display.innerText.endsWith("*") || display.innerText.endsWith("/"))) {
    display.innerText += x;
  }
}



//Decimal
function addDecimal() {
  if (!display.innerText.endsWith(".")) {
    display.innerText += ".";
  }
}
//Reset Display 
function resetAll() {
  display.innerText = "0";
}

//backspace function;

function backspace() {
  let x = display.innerText;
  let y = x.split("");
  y.pop();
  display.innerText = y.join("");
}

//EventListener:

clearBtn.addEventListener("click", () => resetAll());


//Calculation

const equalTo = document.querySelector(".equal-sign");
equalTo.addEventListener("click", () => {
  if (!(display.innerText.endsWith("+") || display.innerText.endsWith("-") || display.innerText.endsWith("*") || display.innerText.endsWith("/"))) {
    display.innerText = `${parseInt(eval(display.textContent))}`;
  }
  else {
    display.innerText = `Operator Error`
  }
})

