// String Sınıfının Metotları:


// charAt()
// concat()
// indexof()
// lastindexof()
// toUpperCase()
// toLowerCase()
// trim()
// slice()
// substring()
// replace()
// split()
// valueOf()
// startsWith()
// endsWith();

let kursIsmi = "Modern Javascript Kursu";
let tarih = " 18 Mart 2023"

let karakter = kursIsmi.charAt(3);
console.log(karakter);


let birlesmis = kursIsmi.concat(tarih)
console.log(birlesmis);

let index = kursIsmi.indexOf("n")
console.log(index)

let lastIndex = kursIsmi.lastIndexOf("u")
console.log(lastIndex);

let upper = kursIsmi.toUpperCase()
console.log(upper)

let lower = kursIsmi.toLowerCase()
console.log(lower)

let yaziTrim = kursIsmi.trim()
console.log(yaziTrim)

let yaziSlice = kursIsmi.slice(0,6)
console.log(yaziSlice)

let yaziSubstring = kursIsmi.substring(0,6)
console.log(yaziSubstring)

let yaziReplace = kursIsmi.replace("Modern", "Güncel")
console.log(yaziReplace)

let yaziSplit = kursIsmi.split(" ")
console.log(yaziSplit)

let yaziValueOf = kursIsmi.valueOf()
console.log(yaziValueOf)

let yaziStars = kursIsmi.toLowerCase().startsWith("m")
console.log(yaziStars)

let yaziEnds = kursIsmi.toLowerCase().endsWith("u")
console.log(yaziEnds);