"use strict";

const docs = [
    {
        batchNumber: "SS-F-02",
        date: "Nov 30, 2021",
        category: "Starch LV",
        src: "./documents/Starch LV/BN-SS-F-02-SAVA QC report Starch Lv 30 Nov 2021.pdf",
        download: "SS-F-02-SAVA QC report Starch Lv 30 Nov 2021.pdf"
    },
    {
        batchNumber: "SS-F-13",
        date: "May 22, 2022",
        category: "Starch LV",
        src: "./documents/Starch LV/BN-SS-F-13-SAVA QC report Starch Lv 22 May 2022-NISOC.pdf",
        download: "SS-F-13-SAVA QC report Starch Lv 22 May 2022 NISOC.pdf"
    },
    {
        batchNumber: "SS-F-13",
        date: "Jun 23, 2022",
        category: "Starch LV",
        src: "./documents/Starch LV/BN-SS-F-13-SAVA QC report Starch Lv 23 June 2022-NISOC.pdf",
        download: "BN-SS-F-13-SAVA QC report Starch Lv 23 Jun 2022 NISOC.pdf"
    },
    {
        batchNumber: "SS-F-14",
        date: "May 24, 2022",
        category: "Starch LV",
        src: "./documents/Starch LV/BN-SS-F-14-SAVA QC report Starch Lv 24 May 2022-API.pdf",
        download: "SS-F-14-SAVA QC report Starch Lv 24 May 2022 API.pdf"
    },
    {
        batchNumber: "SS-F-14",
        date: "Jun 25, 2022",
        category: "Starch LV",
        src: "./documents/Starch LV/BN-SS-F-14-SAVA QC report Starch Lv 25 June 2022-API.pdf",
        download: "SS-F-14-SAVA QC report Starch Lv 25 Jun 2022 API.pdf"
    },
    {
        batchNumber: "SS-F-15",
        date: "Jun 25, 2022",
        category: "Starch LV",
        src: "./documents/Starch LV/BN-SS-F-15-SAVA QC report Starch Lv 25 June 2022-NISOC.pdf",
        download: "SS-F-15-SAVA QC report Starch Lv 25 Jun 2022 NISOC.pdf"
    },
    {
        batchNumber: "SS-F-17",
        date: "Dec 16, 2022",
        category: "Starch LV",
        src: "./documents/Starch LV/BN-SS-F-17-SAVA QC report Starch Lv 16 Dec 2022-NISOC.pdf",
        download: "SS-F-17-SAVA QC report Starch Lv 16 Dec 2022 NISOC.pdf"
    },
    {
        batchNumber: "SS-F-21",
        date: "Jan 30, 2023",
        category: "Starch LV",
        src: "./documents/Starch LV/BN-SS-F-21-SAVA QC report Starch Lv 30 ـJan 2023-API.pdf",
        download: "SS-F-21-SAVA QC report Starch Lv 30 Jan 2023 API.pdf"
    },
    {
        batchNumber: "SS-F-25",
        date: "Jun 17, 2023",
        category: "Starch LV",
        src: "./documents/Starch LV/BN-SS-F-25-SAVA QC report Starch Lv 17 June 2023-NISOC.pdf",
        download: "SS-F-25-SAVA QC report Starch Lv 17 Jun 2023 NISOC.pdf"
    },
    {
        batchNumber: "SS-F-27",
        date: "Aug 9, 2023",
        category: "Starch LV",
        src: "./documents/Starch LV/BN-SS-F-27-SAVA QC report Starch Lv 9 Aug 2023-NISOC.pdf",
        download: "SS-F-27-SAVA QC report Starch Lv 9 Aug 2023 NISOC.pdf"
    },
    {
        batchNumber: "SS-F-28",
        date: "Sep 2, 2023",
        category: "Starch LV",
        src: "./documents/Starch LV/BN-SS-F-28-SAVA QC report Starch Lv-API-02 Sep 2023.pdf",
        download: "SS-F-28-SAVA QC report Starch Lv API 2 Sep 2023.pdf"
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