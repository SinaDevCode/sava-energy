"use strict";

const body = document.querySelector('body');
const preloader = document.querySelector('[preloader]');
const images = document.querySelectorAll('img');

// ======= Preloader ==============
body.style.overflow = "hidden";

window.addEventListener('load', () => {
    preloader.classList.add('loaded');
    body.style.overflow = "hidden";
});