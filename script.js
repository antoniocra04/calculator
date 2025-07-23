const display = document.querySelector('.display_input');

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}

function isAllowedFirstOperator(char) {
  return ['+', '-'].includes(char);
}

const cleanInput = (expr) => {
  return expr.replace(/\b0+(\d+)/g, '$1');
};

document.querySelectorAll('.button').forEach(button => {
  const id = button.id;

  button.addEventListener('click', () => {
    switch (id) {
      case 'clear':
        display.value = '';
        break;
      case 'backspace':
        display.value = display.value.slice(0, -1);
        break;
      default:
        if(button.textContent === '0' && (display.value === '0' || display.value === '')) {
            return;
        }

        const lastChar = display.value.slice(-1);

        const isInvalidOperatorInput =
            isOperator(button.textContent) &&
            (display.value === '' || isOperator(lastChar)) &&
            !isAllowedFirstOperator(button.textContent);

        if(isInvalidOperatorInput) {
            return;
        }

        if (isOperator(button.textContent) && isOperator(lastChar)) {
            display.value = display.value.slice(0, -1) + button.textContent;
            return;
        }

        display.value += button.textContent;
    }
  });
});

document.querySelector('.equals_button').addEventListener('click', () => {
  try {
    const cleanedInput = cleanInput(display.value);
    display.value = eval(cleanedInput);
  } catch {
    display.value = 'Error';
  }
});