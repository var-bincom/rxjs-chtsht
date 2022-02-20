'use strict';

function onBlur(defaultClasses, errorClasses) {
  return function (event) {
    if (event.target.value !== '') {
      event.target.className = defaultClasses;
    } else {
      event.target.className = defaultClasses + errorClasses;
    }
  };
}

function onSubmit(event) {
  const fname = document.querySelector('.js-fname');
  const email = document.querySelector('.js-email');
  const defaultFnameClasses = 'required form-control js-fname';
  const defaultEmailClasses = 'required email form-control js-email';
  const borderDangerClasses = ' border border-danger border-3';

  if (!fname.value || !email.value) {
    event.preventDefault();
    const fnameClasses = fname.className;
    const emailClasses = email.className;
    fname.className = fnameClasses + borderDangerClasses;
    email.className = emailClasses + borderDangerClasses;
  }

  if (fname.value) {
    fname.className = defaultFnameClasses;
  }

  if (email.value) {
    email.className = defaultEmailClasses;
  }

  fname.addEventListener('blur', onBlur(defaultFnameClasses, borderDangerClasses));
  email.addEventListener('blur', onBlur(defaultEmailClasses, borderDangerClasses));
}

function checkForm() {
  const signupForm = document.querySelector('.js-signup-form');
  signupForm.addEventListener('submit', onSubmit);
}

document.addEventListener('DOMContentLoaded', checkForm);
