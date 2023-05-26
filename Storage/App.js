//              STORAGE 
// Session storage
//Veri ekleme
sessionStorage.setItem("isim", "Murathan");
sessionStorage.setItem("soyIsim", "Bayram"); 

//Veri Silme
sessionStorage.removeItem("isim");

// Veri Alma
const veri = sessionStorage.getItem("soyIsim");
console.log(typeof veri);

const namesDeger = JSON.parse(sessionStorage.getItem("names"));
console.log(typeof namesDeger);


let names = ["Ali","Enes","Süleyman"]; 
// sessionStorage.setItem("names", names);
sessionStorage.setItem("names", JSON.stringify(names));
// Hepsini silme
// sessionStorage.clear();


// Local Storage

localStorage.setItem("isim", "Murathan");
localStorage.setItem("soyIsim", "Bayram"); 