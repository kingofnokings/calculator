const add = function (num1, num2) {
  if (Number.isFinite(num1) && Number.isFinite(num2)) {
    return num1 + num2;
  }

  alert("Only numbers allowed!");
};

const subtract = function (num1, num2) {
  if (Number.isFinite(num1) && Number.isFinite(num2)) {
    return num1 - num2;
  }

  alert("Only numbers allowed!");
};

const multiply = function (num1, num2) {
  if (Number.isFinite(num1) && Number.isFinite(num2)) {
    return num1 * num2;
  }

  alert("Only numbers allowed!");
};

const divide = function (num1, num2) {
  if (num2 === 0) {
    return "Impossible division by 0";
  }
  if (Number.isFinite(num1) && Number.isFinite(num2)) {
    return num1 / num2;
  }

  alert("Only numbers allowed!");
};

let var1 = "";
let operation = null;
let var2 = "";
let resultDisplayed = false;

const operate = function (var1, var2, operation) {
  if (operation === "+") {
    return add(var1, var2);
  }
  if (operation === "-") {
    return subtract(var1, var2);
  }
  if (operation === "*") {
    return multiply(var1, var2);
  }
  if (operation === "/") {
    return divide(var1, var2);
  }
  return null;
};

const addDigit = function (digit) {
  if (resultDisplayed) {
    var1 = "";
    var2 = "";
    operation = null;
    resultDisplayed = false;

    displaOperation.textContent = "";
  }
  if (operation === null) {
    var1 += digit;
  } else {
    var2 += digit;
  }

  displayCharacter(digit);
};

const displaOperation = document.querySelector(".display-operation");

const displayCharacter = function (char) {
  displaOperation.textContent += char;
};

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const times = document.querySelector(".times");
const divisor = document.querySelector(".divisor");
const point = document.querySelector(".point");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear-button");

one.addEventListener("click", () => {
  addDigit("1");
});

two.addEventListener("click", () => {
  addDigit("2");
});

three.addEventListener("click", () => {
  addDigit("3");
});

four.addEventListener("click", () => {
  addDigit("4");
});

five.addEventListener("click", () => {
  addDigit("5");
});

six.addEventListener("click", () => {
  addDigit("6");
});

seven.addEventListener("click", () => {
  addDigit("7");
});

eight.addEventListener("click", () => {
  addDigit("8");
});

nine.addEventListener("click", () => {
  addDigit("9");
});

zero.addEventListener("click", () => {
  addDigit("0");
});

plus.addEventListener("click", () => {
  if (operation) {
    const result = operate(Number(var1), Number(var2), operation);
    displaOperation.textContent = "";
    displayCharacter(result);
    var1 = String(result);
    var2 = "";
    operation = "+";
    displayCharacter(" + ");
  } else {
    operation = "+";
    displayCharacter(" + ");
  }
});

minus.addEventListener("click", () => {
  if (operation) {
    const result = operate(Number(var1), Number(var2), operation);
    displaOperation.textContent = "";
    displayCharacter(result);
    var1 = String(result);
    var2 = "";
    operation = "-";
    displayCharacter(" - ");
  } else {
    operation = "-";
    displayCharacter(" - ");
  }
});

times.addEventListener("click", () => {
  if (operation) {
    const result = operate(Number(var1), Number(var2), operation);
    displaOperation.textContent = "";
    displayCharacter(result);
    var1 = String(result);
    var2 = "";
    operation = "*";
    displayCharacter(" × ");
  } else {
    operation = "*";
    displayCharacter(" × ");
  }
});

divisor.addEventListener("click", () => {
  if (operation) {
    const result = operate(Number(var1), Number(var2), operation);
    displaOperation.textContent = "";
    displayCharacter(result);
    var1 = String(result);
    var2 = "";
    operation = "/";
    displayCharacter(" ÷ ");
  } else {
    operation = "/";
    displayCharacter(" ÷ ");
  }
});

point.addEventListener("click", () => {
  displayCharacter(".");
});

equals.addEventListener("click", () => {
  const result = operate(Number(var1), Number(var2), operation);
  displaOperation.textContent = "";
  displayCharacter(result);
  var1 = String(result);
  var2 = "";
  operation = null;
  resultDisplayed = true;
});

clear.addEventListener("click", () => {
  var1 = "";
  var2 = "";
  operation = null;
  resultDisplayed = false;
  displaOperation.textContent = "";
});
