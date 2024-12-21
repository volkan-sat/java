

const mydive = document.getElementById("container");

const title ={
    adi : "Volkan",
    soyad : "SATIROĞLU",
    yas : 34 ,
    tc : 87559875448 ,
    serino : 985,
    dyeri: "Rize"
}


const aile ={
    kardesler : ["tolga", "kadir","hüseyin","ayse"],
    büyükler : ["abdi" , "fatma", "ismet","yalçın"]

}

const kütük ={
    köy : "Elmalı",
    sırano :16,
    dini : "İslam",
    mhali : "Evli",
    aadi : "Ayşe",
    badi : "Mehmet",
    uyruk : "TC",
}
console.log (kütük ["sırano"]);
console.log (kütük ["uyruk"]);


const iller= {
    Rize : "merkez", 
    Mersin:{ilceler :[
        "Anamur","Mut",]},
    Gaziantep : "nizip" ,
    Artvin : "yusufeli" , 
    
}

console.log (iller ["Mersin"]["ilceler"]);
console.log (iller ["Gaziantep"]);





console.log (kütük ["köy"]);
console.log (kütük ["sırano"]);


console.log (aile ["kardesler"]);
console.log (aile);
console.log(aile ["büyükler"]);


const mydiv=document.createElement("h2");
mydiv.innerHTML=  `ADI : ${title["adi"]}`;
mydive.appendChild(mydiv);

const myfive = document.createElement("h2");
myfive.innerHTML =`SOYADI : ${title["soyad"]}`;
mydive.appendChild(myfive);

const myfived = document.createElement("h2");
myfived.innerHTML =`YAŞ : ${title ["yas"]}`;
mydive.appendChild(myfived);

const myfivedi = document.createElement("h2");
myfivedi.innerHTML =`D.YERİ : ${title ["dyeri"]}`;
mydive.appendChild(myfivedi);

const ves= document.createElement("h2");
ves.innerHTML=` KÖY : ${kütük ["köy"]}`;
mydive.appendChild(ves);

const mydiva=document.createElement("h2");
mydiva.innerHTML= `UYRUK :${ kütük ["uyruk"]}`;
mydive.appendChild(mydiva);

for (let i = 0; i < aile["kardesler"].length; i++) {
    console.log(aile["kardesler"][i]);
  }


