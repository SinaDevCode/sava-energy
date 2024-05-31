"use strict";

// ------- Login -------
const inputs = document.querySelectorAll("input");
const userInput = document.querySelector('#username');
const passInput = document.querySelector('#password');
const eye = document.querySelector('#show-hide');
const submit = document.querySelector('#submit');

inputs.forEach(input => {
    input.addEventListener("click", () => {
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
    const res = await fetch("http://127.0.0.1:5501/src/jsons/accounts.json");
    const data = await res.json();

    if (userInput.value === "" || passInput.value === "") {
        alert("Fill the form completely");
    } else {
        let result = data.find(arr => arr.username === userInput.value && arr.password === passInput.value);
        if (result) {
            window.location.href = `http://127.0.0.1:5501/panels/${result.id}/reports.html`;
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

// ------- Modal -------
const modalToggles = document.querySelectorAll('[modalToggle]');
const modal = document.querySelector('[modal]');
const closeModal = document.querySelector(".close-modal");

modalToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        modal.classList.add('open');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('open');
});











