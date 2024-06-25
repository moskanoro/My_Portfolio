let displayValue = '0';
let operator = '';
let firstOperand = '';

let secondOperand = '';

let result = 0; 


const display = document.getElementById('display');


function appendToDisplay(value) 
{
    if (displayValue === '0') 
        {
        displayValue = value;
    } else {
        displayValue += value;
    }
    display.textContent = displayValue;

}

function clearDisplay() 
{
  displayValue = '0';

    operator = '';
    firstOperand = '';

    secondOperand = '';

    result = 0;

    display.textContent = displayValue;

}

function operation(op) 
{
    operator = op;

    firstOperand = displayValue;

    displayValue = '0';

}

function calculate()
 {
    secondOperand = displayValue;

    switch (operator)
     {
        case '+':

            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':

            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':

            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':

            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;

        default:

            result = 0;
            break;
    }
    display.textContent = result;

  displayValue = result.toString();
}
