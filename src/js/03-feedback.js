import throttle from 'lodash.throttle';
import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const emailInput = document.querySelector('input[name=email]');
const feedbackInput = document.querySelector('textarea[name=message]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(() => {
    let feedback = {
      email: emailInput.value,
      message: feedbackInput.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
  }, 500)
);

window.addEventListener('load', () => {
  const saved = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (localStorage.getItem(LOCALSTORAGE_KEY) !== null) {
    emailInput.value = saved.email;
    feedbackInput.value = saved.message;
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});
