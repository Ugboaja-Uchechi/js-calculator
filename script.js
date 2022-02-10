const result = document.getElementById('result');
const buttons = Array.from(document.getElementsByClassName('button'));

const check = document.querySelector('#check');
check.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});

// eslint-disable-next-line array-callback-return
buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'C':
        result.value = '';
        break;
      case '=':
        try {
          // eslint-disable-next-line no-eval
          result.value = eval(result.value);
        } catch {
          result.value = 'Error';
        }
        break;
      case '←':
        if (result.value) {
          result.value = result.value.slice(0, -1);
        }
        break;
      default:
        result.value += e.target.innerText;
    }
  });
});