//Function to get values from input

getValues = function() {
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  resultObject = {
    number1: number1,
    number2: number2
  };
  return resultObject;
};

//Function to set display text
showResult = function(result) {
  resultElement = document.getElementById("result");
  resultElement.innerText = result;
};

//plus operation
plusButton = document.getElementById("addButton");
plusOperation = function() {
  numberValues = getValues();

  sum = parseInt(numberValues.number1) + parseInt(numberValues.number2);
  showResult(sum);
};

plusButton.addEventListener("click", plusOperation);

//minus operation

minusButton = document.getElementById("minusButton");

minusOperation = function() {
  numberValues = getValues();

  difference = parseInt(numberValues.number1) - parseInt(numberValues.number2);

  showResult(difference);
};

minusButton.addEventListener("click", minusOperation);

//multiply operation
mulButton = document.getElementById("mulButton");

multiplyOperation = function() {
  numberValues = getValues();

  multiply = parseInt(numberValues.number1) * parseInt(numberValues.number2);

  showResult(multiply);
};

mulButton.addEventListener("click", multiplyOperation);

//divider operation
divButton = document.getElementById("divButton");

dividerOperation = function() {
  numberValues = getValues();
  divider = parseInt(numberValues.number1) / parseInt(numberValues.number2);
  showResult(divider);
};

divButton.addEventListener("click", dividerOperation);
