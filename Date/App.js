// Date


let tarih = new Date();

console.log(tarih)
console.log(tarih.getTime())
console.log(tarih.getFullYear())
console.log(tarih.getDay())
console.log(tarih.getHours())
console.log(tarih.getMonth())
console.log(tarih.getDate())
console.log(tarih.toLocaleDateString())
console.log(tarih.toDateString())
console.log(tarih.toTimeString())
console.log(tarih.toLocaleTimeString())
console.log(tarih.toLocaleString())



// SET Metodları

console.log(tarih)
tarih.setDate(24)
tarih.setFullYear(2024)
tarih.setMonth(3)
console.log(tarih)


tarih.setHours(tarih.getHours()+2)
console.log(tarih)

