const add = function (num1, num2) {
  if (Number.isInteger(num1) || Number.isInteger(num2)) {
    return num1 + num2;
  }

  alert("Only numbers allowed!");
};

const subtract = function (num1, num2) {
  if (Number.isInteger(num1) || Number.isInteger(num2)) {
    return num1 - num2;
  }

  alert("Only numbers allowed!");
};

const multiply = function (num1, num2) {
  if (Number.isInteger(num1) || Number.isInteger(num2)) {
    return num1 * num2;
  }

  alert("Only numbers allowed!");
};

const divide = function (num1, num2) {
  if (Number.isInteger(num1) || Number.isInteger(num2)) {
    return num1 / num2;
  }

  alert("Only numbers allowed!");
};

let var1 = 0;
let operation = "";
let var2 = 0;

const operate = function (var1, operation, var2) {
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
  return 0;
};

const displaOperation = document.querySelector(".display-operation");

const displayCharacter = function (char) {
  displaOperation.innerHTML = char;
};

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".one");
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
  displayCharacter("1");
});

two.addEventListener("click", () => {
  displayCharacter("2");
});

three.addEventListener("click", () => {
  displayCharacter("3");
});

four.addEventListener("click", () => {
  displayCharacter("4");
});

five.addEventListener("click", () => {
  displayCharacter("5");
});

six.addEventListener("click", () => {
  displayCharacter("6");
});

seven.addEventListener("click", () => {
  displayCharacter("7");
});

eight.addEventListener("click", () => {
  displayCharacter("8");
});

nine.addEventListener("click", () => {
  displayCharacter("9");
});

zero.addEventListener("click", () => {
  displayCharacter("0");
});

plus.addEventListener("click", () => {
  displayCharacter(" + ");
});

minus.addEventListener("click", () => {
  displayCharacter(" - ");
});

times.addEventListener("click", () => {
  displayCharacter(" × ");
});

divisor.addEventListener("click", () => {
  displayCharacter(" ÷ ");
});

point.addEventListener("click", () => {
  displayCharacter(".");
});

equals.addEventListener("click", () => {
  displayCharacter(operate());
});

clear.addEventListener("click", () => {
  displayCharacter("");
});
