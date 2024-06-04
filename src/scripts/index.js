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
const menu = document.querySelector('.menu');

openMenu.addEventListener('click', event => {
    if (openMenu.classList.contains("fa-bars")) {
        openMenu.classList.replace('fa-bars', 'fa-x');
        menu.classList.add('open');
    } else {
        openMenu.classList.replace('fa-x', 'fa-bars');
        menu.classList.remove('open');
    }
});

// ------- Banner -------
const banner = new Swiper(".banner", {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".banner-pagination",
        clickable: true
    }
});

// ------- Cards -------
const cards = document.querySelectorAll('.cards div');

cards.forEach(card => {
    let image = card.querySelector('img');

    card.addEventListener('mouseenter', () => {
        image.setAttribute('src', `./src/images/poster/${card.className}-active.png`);
    });

    card.addEventListener('mouseleave', () => {
        image.setAttribute('src', `./src/images/poster/${card.className}.png`);
    })

    card.addEventListener('click', () => {
        window.location.href = `www.google.com/${card.className}`;
    });
});

// ------- ISO -------
const clone = document.querySelector('.scroller').cloneNode(true);
document.querySelector('.iso').appendChild(clone);