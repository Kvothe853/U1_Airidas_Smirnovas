'use strict';

const stars = document.querySelectorAll('.stars');

// form submit button
const btn = document.getElementById('submit-btn');
btn.addEventListener('click', e => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const nameInput = document.querySelector('#firstname').value;
  const emailInput = document.querySelector('#email').value;
  if (!nameInput || !emailInput) {
    alert('Būtina užpildyti visus laukus!');
  } else {
    const successInput = document.createElement('div');
    successInput.classList.add('success-msg');
    successInput.textContent = `Naujienlaiškio prenumerata adresu: ${emailInput} sėkmingai užsakyta! :)`;
    document.querySelector('.success-section').appendChild(successInput);
    setTimeout(function () {
      document.querySelector('.success-msg').remove();
    }, 6000);
  }
  document.querySelector('#firstname').value = '';
  document.querySelector('#email').value = '';
}

// rewiev modal

stars.forEach(star => {
  star.addEventListener('click', openModal);
});

document.querySelector('.modal-exit').addEventListener('click', closeModal);
document.querySelector('.shadow').addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

function openModal() {
  document.querySelector('.stars-modal').classList.remove('hidden');
  document.querySelector('.shadow').classList.remove('hidden');
}
function closeModal() {
  document.querySelector('.stars-modal').classList.add('hidden');
  document.querySelector('.shadow').classList.add('hidden');
}

// stars submit

document.getElementById('starsSubmit').addEventListener('click', e => {
  e.preventDefault();
});

document.getElementById('starsSubmit').addEventListener('click', () => {
  closeModal();
});
