const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('.start-btn'),
  stopBtn: document.querySelector('.stop-btn'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// const randomColor = colors[randomIntegerFromInterval(0, 5)];
// console.log(randomColor);

refs.startBtn.addEventListener('click', setColorSwitch);
refs.stopBtn.addEventListener('click', stopColorSwitch);

let colorSwitchID = null;

function setColorSwitch() {
  colorSwitchID = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    console.log(colors[randomIntegerFromInterval(0, 5)]);
  }, 1000);
  refs.startBtn.setAttribute('disabled', true);
}

function stopColorSwitch() {
  clearInterval(colorSwitchID);
  refs.startBtn.removeAttribute('disabled', false);
}

