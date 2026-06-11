const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;

  countDisplay.classList.remove('positive', 'negative');

  if (count > 0) {
    countDisplay.classList.add('positive');
  } else if (count < 0) {
    countDisplay.classList.add('negative');
  }
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

updateDisplay();
