import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const savedData = localStorage.getItem("feedback-form-state");
let formData = savedData ? JSON.parse(savedData) : {};

function onInput({target}) {
    formData[target.name] = target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

form.addEventListener('input', throttle(onInput, 500));

if (formData.email) {
    input.value = formData.email;
}

if (formData.message) {
    textarea.value = formData.message;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(formData);
    formData = {};
});
