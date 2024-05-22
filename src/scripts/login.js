"use strict";

const inputs = document.querySelectorAll('input');
const userInput = document.querySelector('#username');
const passInput = document.querySelector('#password');
const eye = document.querySelector('#show-hide');
const submit = document.querySelector('#submit');
const modal = document.querySelector('.modal');
const OpenModal = document.querySelectorAll('[modal-toggle]');
const closeModal = document.querySelector('.close-modal');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value) {
            input.classList.add('active');
        } else {
            input.classList.remove('active');
        }
    });
});

eye.addEventListener('click', () => {
    if (passInput.type === 'password') {
        eye.classList.replace('fa-eye-slash', 'fa-eye');
        password.type = 'text';
    } else {
        eye.classList.replace('fa-eye', 'fa-eye-slash');
        password.type = 'password';
    }
});

const login = async () => {
    const response = await fetch("http://127.0.0.1:5500/src/jsons/accounts.json");
    const data = await response.json();

    if (userInput.value === "" || passInput.value === "") {
        alert("Fill the form completely");
    } else {
        let result = data.find(arr => arr.username === userInput.value && arr.password === passInput.value)
        if (result) {
            window.location.href = `http://127.0.0.1:5500/panels/${result.id}/dashboard.html`;
        } else {
            userInput.value = '';
            passInput.value = '';
            inputs.forEach(input => {
                input.classList.remove('active');
            });
            alert("Invalid username or password");
        }
    }
};

submit.addEventListener('click', login);

OpenModal.forEach(toggle => {
    toggle.addEventListener('click', () => {
        modal.classList.add('open');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('open');
})