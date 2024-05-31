"use strict";

// ------- Preloader -------
const body = document.body;
const preloader = document.querySelector('[preloader]');

body.style.overflow = "hidden";

window.addEventListener('DOMContentLoaded', () => {
    preloader.classList.add('loaded');
    body.style.overflow = "auto";
});

// ------- Table Content -------
const tbody = document.querySelector('tbody');
const categories = document.querySelectorAll('.equipments-list button');

const content = async () => {
    const res = await fetch("http://127.0.0.1:5500/src/jsons/inventory.json");
    const data = await res.json();

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === "VG") {
            let row = `
                <tr>
                    <td>${data[i].title}</td>
                    <td>${data[i].brand}</td>
                    <td>${data[i].partNumber}</td>
                    <td>${data[i].quantity}</td>
                </tr>
            `
            tbody.innerHTML += row;
        }        
    }
}

content();

// ------- Build The Table By Category -------
categories.forEach(category => {
    category.addEventListener('click', async () => {
        const response = await fetch("http://127.0.0.1:5500/src/jsons/inventory.json");
        const data = await response.json();

        let tr = document.querySelectorAll("tbody tr");
        let filter = category.innerHTML;

        for (let i = 0; i < tr.length; i++) {
            tr[i].remove();
        }

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === filter) {
                let row = `
                    <tr>
                        <td>${data[i].title}</td>
                        <td>${data[i].brand}</td>
                        <td>${data[i].partNumber}</td>
                        <td>${data[i].quantity}</td>
                    </tr>
                `
                tbody.innerHTML += row;
            }
        }
    });
});