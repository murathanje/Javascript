// i / Math Sınıfı Metotları

// 1 - Floor            Aşağı yuvarlar
// 2 - Ceil             Yukarı yuvarlar
// 3 - Round            Hangisine yakınsa ona yuvarlar

// 4 - Max              Dizideki en büyük sayıyı döner
// 5 - Min              Dizideki en küçük sayıyı döner

// 6 - Randam           
// 7 - Abs              Mutlak değer alır
// 8 - Sqrt             Kare kökünü alır
// 9 - Pow              Üstünü alır
// -----> Pi Sayisi



let a = 3.12;
console.log(Math.floor(a))

let b = 3.12
console.log(Math.ceil(b))

let c = 3.52
console.log(Math.round(c))


console.log(Math.max(1, 2, 3, 4, 5))
console.log(Math.min(1, -2, 3, 4, 5))

let rastgele = (Math.random()*10)
console.log(Math.round(rastgele))


let d = -12
console.log(Math.abs(d))

let f = 169
console.log(Math.sqrt(f))

let e = Math.pow(3,2)
console.log(e)

let pi = Math.PI
console.log(pi)