var calculator = (function() {
  var input = "";
  var equation = [];
  var result;
  var numbers;

  function add(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function storeOperator(callback) {
    equation.push(input);
    equation.push(callback);
    input = "";
  }

  function updateDisplay() {
    document.getElementById('display').innerHTML = input;
  }

  function clearCalculator() {
    input = "";
    equation = [];
    updateDisplay();
  }

  function calculate() {
    equation.push(input);
    result =  equation[1](parseInt(equation[0],10), parseInt(equation[2], 10));
    clearCalculator();
    document.getElementById('display').innerHTML = result;
  }

  function addToInput(value) {
    input += value;
    updateDisplay();
  }

  function attachNumbers() {
    numbers = document.getElementsByClassName('numbers');
    for(var i = 0; i < numbers.length; i++) {
      numbers[i].addEventListener('click', function() {
        addToInput(this.innerHTML);
      });
    }
  }

  function attachOperators() {
    document.getElementById('addButton').addEventListener('click', function() { storeOperator(add) });
    document.getElementById('subtractButton').addEventListener('click', function() { storeOperator(subtract) });
    document.getElementById('multiplyButton').addEventListener('click', function() { storeOperator(multiply) });
    document.getElementById('divideButton').addEventListener('click', function() { storeOperator(divide) });
    document.getElementById('calculateButton').addEventListener('click', calculate);
    document.getElementById('clearButton').addEventListener('click', clearCalculator);
  }


  function init() {
    attachNumbers();
    attachOperators();
  }

  return { init: init }
})();

window.onload = calculator.init();
