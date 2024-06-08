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

// ------- Products -------
const products = document.querySelector(".content");

const productData = async () => {
    const res = await fetch("http://127.0.0.1:5500/src/jsons/labEquipments.json");
    const content = await res.json();

    for (let i = 0; i < content.length; i++) {
        let card = `
            <div class="product-card">
                <img src="${content[i].src}" alt="${content[i].title}">
                <p>${content[i].title}</p>
            </div>
        `
        products.innerHTML += card;
    }
}
productData();