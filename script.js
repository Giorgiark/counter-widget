let counterValue = 0;
const counter = document.querySelector('.counter-value');

function increment() {
  counterValue++;
  counter.innerHTML = counterValue;
}

function decrement() {
  counterValue--;
  counter.innerHTML = counterValue;
}