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

map                 : ForEach ile aynı fakat tüm elemanları dönerken farklı bir dizi oluşturur
some                : belirtilen koşul dizinin herhangi bir elemanına uyuyorsa true döner
every               : some ile aynı fakat koşulların tüm elemanlar için aynı olması lazım
filter              : Belirtilen koşulu sağlayan elemnalar yeni bir dizi içerisine alınır
find                : Belirtilen koşulu sağlayan dizi elemanını bulmamızı sağlar
sort                : Dizi içerisindeki elemanları sıralamyı sağlar. Yeni bir dizi oluşturmaz
reduce              : Bu metot diziyi bir değere indirger
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

let isimler = "Murathan"
console.log(isimler.split(","))

console.log(telefonlar.indexOf("Huawei"))


console.log(telefonlar.includes("Samsung"))


let yenitelefonlar = telefonlar.map(function(isim){
    return isim+"i"
})
console.log(yenitelefonlar);

let sayilar = [1,5,2,3,4]
let result = sayilar.some(function(sayi){
    return sayi<3
})
console.log(result);

let resultEvery = sayilar.every(function(sayi){
    return sayi < 5
})
console.log(resultEvery)

let resultFilter = sayilar.filter(function(sayi){
    return sayi > 2
})
console.log(resultFilter)

let resultFind = sayilar.find(function(sayi){
    return sayi > 2
})
console.log(resultFind)

sayilar.sort()
console.log(sayilar)


function indirgeyici(akumulator, sayi){
    return akumulator - sayi;
}
let sonuc = sayilar.reduce(indirgeyici, 0);
console.log(sonuc)

let nums = [1,2,3,6,6,5]
function getSecondLargest(nums) {
    let sayi = -1
    nums.forEach(function(num){
        if(num > sayi){
            sayi = num;
        }
    })
    let sayi1 = -1
    nums.forEach(function(num){
        if(num > sayi1 && num < sayi){
            sayi1 = num;
        }
    })
    
    return sayi1;
}
console.log(getSecondLargest(nums))

let  s = "Javascript"
function vowelsAndConsonants(s) {
    for(let i=0; i < s.length; i++){
        if(s.charAt(i).toLowerCase() == "a" || s.charAt(i).toLowerCase() == "e" ||  s.charAt(i).toLowerCase() == "i" || s.charAt(i).toLowerCase() == "o" ||  s.charAt(i).toLowerCase() == "u"){
         console.log(s.charAt(i));  
        }
    }
    
     for(let j=0; j < s.length; j++){
         if (s.charAt(j).toLowerCase() != "a" && s.charAt(j).toLowerCase() != "e" &&  s.charAt(j).toLowerCase() != "o" && s.charAt(j).toLowerCase() != "i"  &&  s.charAt(j).toLowerCase() != "u"){
         console.log(s.charAt(j));  
        }
    }
}

vowelsAndConsonants(s);