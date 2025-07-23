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

document.querySelector('.equals_button').addEventListener('click', () => {
  try {
    display.value = eval(clean);
  } catch {
    display.value = 'Error';
  }
});