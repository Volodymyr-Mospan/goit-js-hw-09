import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const ref = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btn: document.querySelector('button[type="submit"]'),
};

ref.form.addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();
  ref.btn.setAttribute('disabled', '');

  setTimeout(() => {
    let delay = Number(ref.firstDelay.value);
    let position = 1;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    const intervalId = setInterval(() => {
      position += 1;
      delay += Number(ref.step.value);

      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });

      if (position === Number(ref.amount.value)) {
        clearInterval(intervalId);
        ref.btn.removeAttribute('disabled');
      }
    }, ref.step.value);
  }, ref.firstDelay.value);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
