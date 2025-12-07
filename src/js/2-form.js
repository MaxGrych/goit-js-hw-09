'use strict';

let formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedData) {
  formData = savedData;

  form.elements.email.value = savedData.email || '';
  form.elements.message.value = savedData.message || '';
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
}
