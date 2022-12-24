const ref = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

let colorTimerId = null;

ref.btnStart.addEventListener('click', onStartClick);
ref.btnStop.addEventListener('click', onStopClick);

function onStartClick() {
  ref.btnStart.setAttribute('disabled', '');

  colorTimerId = setInterval(() => {
    ref.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick() {
  ref.btnStart.removeAttribute('disabled', '');
  clearInterval(colorTimerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
