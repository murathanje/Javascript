// Destructing

let langs = ["Java", "Python", "C#", "Swift", "Go"]

let lang1 = langs[0]
let lang2 = langs[1]
let lang3 = langs[2]
let lang4 = langs[3]

console.log(lang1, lang2, lang3, lang4);

let [lang5, lang6, lang7, lang8, lang9] = langs;

console.log(lang5, lang6, lang7, lang8, lang9);


const hesapla = (a,b) =>{
    const toplam = a + b;
    const cikar = a - b;
    const carp = a * b;
    const bol = a / b;

    const dizi = [toplam, cikar, carp, bol]
    return dizi

}

let [toplam, cikar, carp, bol ] = hesapla(5,4);

console.log(toplam,cikar,carp,bol);


const person = {
    firstNAme : "Murathan",
    lastName : "Kaya",
    age : 25,
    salary: 1000
}

// let { firstNAme, lastName, age, salary } = person;   // Aynı değişken isimlerinin olması şart

let { firstNAme:isim, lastName, age, salary } = person;   // Aynı değişken isimlerinin olması şart

// isim = person.firstNAme;
// soyIsim = person.lastName;
// yas = person.age;
// maas = person.salary;

console.log(isim, lastName, age, salary)

