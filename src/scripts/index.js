"use strict";

// ------- Preloader -------
const body = document.body;
const preloader = document.querySelector('[preloader]');

body.style.overflow = 'hidden';

window.addEventListener('DOMContentLoaded', () => {
    preloader.classList.add('loaded');
    body.style.overflow = 'auto';
});

// ------- Images -------
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.setAttribute('loading', 'lazy');
    img.setAttribute('draggable', false);
});

// ------- Menu -------
const openMenu = document.querySelector('[menuToggle]');

openMenu.addEventListener('click', () => {
    if (openMenu.classList.contains('fa-bars')) {
        openMenu.classList.replace('fa-bars', 'fa-x');
    } else {
        openMenu.classList.replace('fa-x', 'fa-bars');
    }
});

const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination"
    }
});

// ------- Our Clients -------
const duplicate = document.querySelector('.logos-slide').cloneNode(true);
document.querySelector('.logos').appendChild(duplicate);