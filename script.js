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
