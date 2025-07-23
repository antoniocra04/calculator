const display = document.querySelector('.display_input');

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
        display.value += button.textContent;
    }
  });
});

const cleanInput = (expr) => {
  return expr.replace(/\b0+(\d+)/g, '$1');
};

document.querySelector('.equals_button').addEventListener('click', () => {
  try {
    const cleanedInput = cleanInput(display.value);
    display.value = eval(cleanedInput);
  } catch {
    display.value = 'Error';
  }
});