// Spresad
let numbers = [1,2,3,4];

function sum(a,b,c,d){
    console.log(a+b+c+d);
}

// sum(1,2,3,4)
// sum(numbers[0], numbers[1], numbers[2], numbers[3]);
sum(...numbers);   // using func with spread

const brands = ["Mercedes","Audi"]
const brands1 = ["BMW", "Ferrari", ...brands];

brands1.forEach((brand) => {
    console.log(brand);
})

const numbes = [1,2,3,4,5,6,7,8,9]

let [a,b,...kalanSayilar] = numbes;

console.log(a, b, kalanSayilar)


const isimler = ["Murathan", "Hüseyin", "Kadir"];

let isimler2 = [...isimler];

console.log(isimler2)