
const aileUyeniz = [
    { isim: "VOLKAN", soyisim: "SATIROĞLU", yas: 34, cinsiyet: "Erkek" },
    { isim: "AYŞE", soyisim: "SATIROĞLU", yas: 32, cinsiyet: "Kadın" },
    { isim: "TAMER", soyisim: "SATIROĞLU", yas: 18, cinsiyet: "Erkek" },
    { isim: "ELİF", soyisim: "SATIROĞLU", yas: 16, cinsiyet: "Kadın" },
    { isim: "EMİNE", soyisim: "SATIROĞLU", yas: 6, cinsiyet: "Kadın" },
    { isim: "MÜSTEKİM", soyisim: "SATIROĞLU", yas: 45, cinsiyet:"Erkek" },
    { isim: "TOLGA", soyisim: "SATIROĞLU", yas: 35, cinsiyet: "Erkek" },
];


const ailemDiv = document.getElementById('ailem');


const table = document.createElement('table');
const headerRow = document.createElement('tr');


['İsim', 'Soyisim', 'Yaş', 'Cinsiyet'].forEach(headerText => {
    const header = document.createElement('th');
    header.innerText = headerText;
    headerRow.appendChild(header);
});

table.appendChild(headerRow);


aileUyeniz.forEach(uye => {
    const row = document.createElement('tr');
    
    Object.values(uye).forEach(text => {
        const cell = document.createElement('td');
        cell.innerText = text;
        
        if (uye.cinsiyet === "Erkek") {
            cell.style.color = "blue";
        } else if (uye.cinsiyet === "Kadın") {
            cell.style.color = "red";
        }
        row.appendChild(cell);
    });

    table.appendChild(row);
});


ailemDiv.appendChild(table);



