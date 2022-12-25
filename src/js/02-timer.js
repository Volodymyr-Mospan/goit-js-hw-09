import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const ref = {
  btnStart: document.querySelector('[data-start]'),
  inputDate: document.querySelector('input[type="text"]'),
  day: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

ref.btnStart.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < options.defaultDate) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }

    ref.btnStart.removeAttribute('disabled');
    ref.btnStart.addEventListener('click', onStartClick);

    function onStartClick() {
      ref.btnStart.setAttribute('disabled', '');
      ref.inputDate.setAttribute('disabled', '');

      const timerId = setInterval(() => {
        const remainingTime = selectedDates[0] - Date.now();
        const convertTime = convertMs(remainingTime);

        setRemainingTime(convertTime);

        if (remainingTime < 900) {
          clearInterval(timerId);
        }
      }, 1000);
    }
  },
};

flatpickr(ref.inputDate, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function setRemainingTime({ days, hours, minutes, seconds }) {
  ref.day.textContent = addLeadingZero(String(days));
  ref.hours.textContent = addLeadingZero(String(hours));
  ref.minutes.textContent = addLeadingZero(String(minutes));
  ref.seconds.textContent = addLeadingZero(String(seconds));
}

function addLeadingZero(value) {
  return value.padStart(2, '0');
}
