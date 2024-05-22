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

// ======= Images Attributes ==============
images.forEach(image => {
    image.setAttribute("loading", "lazy");
    image.setAttribute("draggable", false);
});

const swiper = new Swiper('.swiper', {
    speed: 400,
    slidesPerView: 1,
    autoplay: {
        delay: 2000
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    effect: "fade",
    rewind: true,
});