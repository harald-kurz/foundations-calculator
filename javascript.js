let firstNum = '';
let operator = '';
let secondNum = '';

const result = document.querySelector('#result');
const numberButtons = document.querySelectorAll('.calcButton');
const operatorButtons = document.querySelectorAll('.calcOperatorButton');
const equalButton = document.querySelector('#calcEqualButton');

numberButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    if(!operator) {
      firstNum += this.innerText;
    } else {
      secondNum += this.innerText;
    }
    
    result.innerText = `${firstNum} ${operator} ${secondNum}`;
  });
});

operatorButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    if(!operator) {
      operator = this.innerText;
    } else if(!secondNum) {

    } else {
      switch (operator) {
        case '+':
          firstNum = (parseFloat(firstNum) + parseFloat(secondNum)).toString();
          secondNum = '';
          break;
        case '-':
          firstNum = (parseFloat(firstNum) - parseFloat(secondNum)).toString();
          secondNum = '';
          break;
        case '*':
          firstNum = (parseFloat(firstNum) * parseFloat(secondNum)).toFixed(5).toString();
          secondNum = '';
          break;
        case '/':
          firstNum = (parseFloat(firstNum) / parseFloat(secondNum)).toFixed(5).toString();
          secondNum = '';
        default:
          break;
      }
    }
  
    operator = this.innerText;
    result.innerText = `${firstNum} ${operator} ${secondNum}`;
  })
})

equalButton.addEventListener('click', function() {
  if(operator && firstNum && secondNum) {
    switch (operator) {
      case '+':
        firstNum = (parseFloat(firstNum) + parseFloat(secondNum)).toString();
        break;
      case '-':
        firstNum = (parseFloat(firstNum) - parseFloat(secondNum)).toString();
        break;
      case '*':
        firstNum = (parseFloat(firstNum) * parseFloat(secondNum)).toFixed(5).toString();
        break;
      case '/':
        firstNum = (parseFloat(firstNum) / parseFloat(secondNum)).toFixed(5).toString();
      default:
        break;
    }
  }
  
  operator = '';
  secondNum = '';

  result.innerText = `${firstNum} ${operator} ${secondNum}`;
})