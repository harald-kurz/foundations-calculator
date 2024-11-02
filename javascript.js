let firstNum = '';
let operator;
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
          firstNum = firstNum + secondNum;
          break;
        case '-':
          firstNum = firstNum - secondNum;
          break;
        case '*':
          firstNum = (firstNum * secondNum).toFixed(5);
          break;
        case '/':
          firstNum = (firstNum / secondNum).toFixed(5);
        default:
          break;
      }
    }
  })
})

equalButton.addEventListener('click', function() {
  if(operator && firstNum && secondNum) {
    switch (operator) {
      case '+':
        firstNum = firstNum + secondNum;
        operator = '';
        secondNum = '';
        break;
      case '-':
        firstNum = firstNum - secondNum;
        operator = '';
        secondNum = '';
        break;
      case '*':
        firstNum = (firstNum * secondNum).toFixed(5);
        operator = '';
        secondNum = '';
        break;
      case '/':
        firstNum = (firstNum / secondNum).toFixed(5);
        operator = '';
        secondNum = '';
      default:
        break;
    }
  }
})