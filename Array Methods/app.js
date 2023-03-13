/* 

push                : dizinin sonuna eleman ekler , ayrıca dizinin uzunlugunu döner 
unshift             : dizinin basına eleman ekler , eleman sayısını geriye döner 

pop                 : dizinin sonundan eleman siler , eleman sayısını döner 
shift               : dizinin basından eleman siler , eleman sayısını döner 

splice(index,incdex) :eleman eklemek ve silmek icin kullanılır. 

toString            : diziyi stringe gevirebiliriz. 
join                : diziyi stringe gevirir . Farkı ise araya eleman ekleyebiliriz 

concat              : dizileri birlestirmek icin kullanılır. 

slice(dilimlemek)   : diziyi istenilen yerden bölüp yeni bir dizi olusturur 
length              : dizinin uzunlugunu verir. 

reverse             : dizinin elemanlarını ters gevirmek 

split(bölmek)       : Stringi belirli bir ifadeye göre bölüp diziye cevirmek. 

indexOf             : elemanın index numarasını verir. 
includes            : verilen elemanı içeriyor mu ona bakar 
*/


let telefonlar = ["IPhone", "Samsung", "Huawei", "Xiaomi"];
let apps = ["Facebook", "Youtube", "Instagram"];

telefonlar.shift();
telefonlar.unshift("Nokia")

telefonlar.splice(2,0,"Vivo")

console.log(telefonlar)

telefonlar.splice(2,0,"Oppo")
console.log(telefonlar)

telefonlar.splice(2,2)
console.log(telefonlar)

console.log(telefonlar.toString());
console.log(telefonlar.join(" "));

console.log(telefonlar.concat(apps))

console.log(telefonlar.slice(2))

let isimler = "Ali,Veli,Murathan"
console.log(isimler.split(","))

console.log(telefonlar.indexOf("Huawei"))


console.log(telefonlar.includes("Samsung"))