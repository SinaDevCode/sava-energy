"use strict";

const docs = [
    {
        batchNumber: "SS-F-43",
        date: "May 5, 2024",
        category: "Starch LV",
        src: "./documents/Starch LV/BN-SS-F-43-SAVA QC report Starch Lv API-05 May 2024.pdf",
        download: "SS-F-43-SAVA QC report Starch Lv API 5 May 2024.pdf"
    }
]

// ------- Preloader -------
const body = document.body;
const preloader = document.querySelector("[preloader]");

body.style.overflow = "hidden";

window.addEventListener("DOMContentLoaded", () => {
    preloader.classList.add("loaded");
    body.style.overflow = "auto";
});

// ------- Table -------
drawTable(docs)

function drawTable(docs) {
    const tbody = document.querySelector('tbody');

    for (let i = 0; i < docs.length; i++) {
        let row = `
            <tr>
                <td>${docs[i].batchNumber}</td>
                <td>${docs[i].date}</td>
                <td>${docs[i].category}</td>
                <td class="icons">
                    <a href="${docs[i].src}" download="${docs[i].download}" class="download-pdf">
                        <i class="fa-regular fa-file-pdf"></i>
                    </a>
                </td>
            </tr>
        `
        tbody.innerHTML += row;
    }
}

// ------- Filter Table Content By Category -------
const tags = document.querySelectorAll('.tags span');
const tr = document.querySelectorAll('tr');

tags.forEach((tag, index) => {
    tag.addEventListener('click', event => {
        // Active Category Tags By Click
        for (let i = 0; i < tags.length; i++) {
            if (i === index) {
                event.target.classList.add('active');
            } else {
                tags[i].classList.remove('active');
            }
        }
        // Filter The Table By Category
        let active = event.target.innerHTML;

        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].querySelectorAll('td')[2];

            if (td) {
                let categoryValue = td.innerHTML;

                if (active === "All") {
                    tr[i].style.display = '';
                } else if (active === categoryValue) {
                    tr[i].style.display = '';
                } else {
                    tr[i].style.display = 'none';
                }
            }
        }
    });
});