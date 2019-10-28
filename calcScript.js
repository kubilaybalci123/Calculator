const numberButton = document.querySelectorAll(".numberButton");
const operationButton = document.querySelectorAll(".oprButton");
const equalsButton = document.getElementById("equal");
const allClearButton = document.getElementById("ac");
const deleteButton = document.getElementById("")
const displayArea = document.getElementById("dP");
const currentOperandTextElement = document.getElementById("current-operand");


function getCurrent() {
  return currentOperandTextElement.innerText;
}

function printCurrent(num) {
  currentOperandTextElement.innerText = num;
}



operationButton.forEach(btn => {
  btn.addEventListener("click", function() {

    if (this.value == "ac") {
      printCurrent("");
    }
    if (this.value == "delete") {
      var display = getCurrent();
      display = display.substr(0, display.length - 1);
      printCurrent(display);
    } else if (this.value == "/" || this.value == "*" ||
    this.value == "+" || this.value == "-" || this.value == ".") {
      var display = getCurrent();
      display = display + this.value;
      printCurrent(display);
    } else if (this.value == "=") {
      var display = getCurrent();
      if (display.includes("/0")==true) {
        printCurrent("It can't divide by zero");
      }else{
        var result = eval(display)
        printCurrent(result);
      }

    }
  })
})


numberButton.forEach(btn => {
  btn.addEventListener("click", function() {
    var display = getCurrent();
    if (display != NaN) {
      display += this.value;
    }
    printCurrent(display);
  })
})
