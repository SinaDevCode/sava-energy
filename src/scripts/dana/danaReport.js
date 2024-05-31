"use strict";

const docs = [
    {
        batchNumber: "SS-CMC-01",
        date: "Mar 6, 2024",
        category: "CMC",
        src: "./documents/CMC/SS-CMC-01-SAVA QC report- CMC HV- 06 March 2024-API.pdf",
        download: "SS-CMC-01-SAVA QC report CMC HV 06 Mar 2024 API.pdf"
    },
    {
        batchNumber: "SS-CMC-02",
        date: "Apr 7, 2024",
        category: "CMC",
        src: "./documents/CMC/SS-CMC-02-SAVA QC report- CMC HV- 07 Apr 2024-API.pdf",
        download: "SS-CMC-02-SAVA QC report CMC HV 07 Apr 2024 API.pdf"
    },
    {
        batchNumber: "SE-1402-42-RIPI",
        date: "Mar 15, 2024",
        category: "Lime",
        src: "./documents/Lime/SE-1402-42-RIPI QC report Lime-15 March 2024.pdf",
        download: "SE-1402-42-RIPI QC report Lime 15 Mar 2024.pdf"
    },
    {
        batchNumber: "PAC-202304",
        date: "Apr 20, 2024",
        category: "Polyanionic Cellulose",
        src: "./documents/Polyanlomic Cellulose/202304-QC Report PAC-20 Apr 2024 .pdf",
        download: "202304 QC Report PAC 20 Apr 2024.pdf"
    },
    {
        batchNumber: "SO-SA-14020826",
        date: "Nov 20, 2023",
        category: "Soda Ash",
        src: "./documents/Soda Ash/SO-SA-13-SAVA QC report Soda Ash-25 Apr 2024.pdf",
        download: "SO-SA-13-SAVA QC report Soda Ash 25 Apr 2024.pdf"
    },
    {
        batchNumber: "SO-SA-13",
        date: "Apr 25, 2024",
        category: "Soda Ash",
        src: "./documents/Soda Ash/SO-SA-14020826-SAVA QC report Soda Ash-20 Nov 2023.pdf",
        download: "SO-SA-14020826-SAVA QC report Soda Ash 20 Nov 2023.pdf"
    },
    {
        batchNumber: "SS-F-33",
        date: "Oct 2, 2024",
        category: "Starch HT",
        src: "./documents/Starch HT/SS-F-33-SAVA QC report Starch HT-02 Oct 2024.pdf",
        download: "SS-F-33-SAVA QC report Starch HT 2 Oct 2024.pdf"
    },
    {
        batchNumber: "SS-F-43",
        date: "Apr 25, 2024",
        category: "Starch HT",
        src: "./documents/Starch HT/SS-F-43-SAVA QC report Starch HT-25 Apr 2024.pdf",
        download: "SS-F-43-SAVA QC report Starch HT 25 Apr 2024.pdf"
    },
    {
        batchNumber: "SS-F-30",
        date: "Sep 25, 2023",
        category: "Starch LV",
        src: "./documents/Starch LV/SS-F-30-SAVA QC report Starch Lv 25 Sep 2023-NISOC.pdf",
        download: "SS-F-30-SAVA QC report Starch Lv 25 Sep 2023 NISOC.pdf"
    },
    {
        batchNumber: "SS-F-34",
        date: "Oct 25, 2023",
        category: "Starch LV",
        src: "./documents/Starch LV/SS-F-34-SAVA QC report Starch Lv-25 Oct 2023-NISOC.pdf",
        download: "SS-F-34-SAVA QC report Starch Lv 25 Oct 2023 NISOC.pdf"
    },
    {
        batchNumber: "SS-F-36",
        date: "Nov 22, 2023",
        category: "Starch LV",
        src: "./documents/Starch LV/SS-F-36-SAVA QC report Starch Lv-22 Nov 2023-NISOC.pdf",
        download: "SS-F-36-SAVA QC report Starch Lv 22 Nov 2023 NISOC.pdf"
    },
    {
        batchNumber: "SS-F-38",
        date: "Jan 18, 2024",
        category: "Starch LV",
        src: "./documents/Starch LV/SS-F-38-SAVA QC report Starch Lv-18 Jan 2024-NISOC.pdf",
        download: "SS-F-38-SAVA QC report Starch Lv 18 Jan 2024-NISOC.pdf"
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