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

// ------- Swiper -------
const swiper = new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 100,
    rewind: true,
    // loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});


// ------- Our Clients -------
const duplicate = document.querySelector('.logos-slide').cloneNode(true);
document.querySelector('.logos').appendChild(duplicate);