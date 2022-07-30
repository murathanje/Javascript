let artir = document.getElementById("artir");
let azalt = document.getElementById("azalt");
let icerik = document.getElementById("sayiYazdir");
let counter = localStorage.getItem("sayi") ? Number(localStorage.getItem('sayi')) : 0
icerik.innerHTML = counter;
artir.addEventListener("click", tevent);
azalt.addEventListener("click", tevent);


function tevent() {
    this.id == "artir" ? counter+=1 : counter -= 1
    localStorage.setItem('sayi', counter);
    document.getElementById("sayiYazdir").innerHTML = counter;

} 


