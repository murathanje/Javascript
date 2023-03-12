let number  = Number(prompt("Sayı giriniz"));
let result = isPerfectNumber(number);

console.log(result);
function isPerfectNumber(number){
    let hold = 0;
    for(let i = 1; i <= number; i++){
        if(number % i == 0){
            hold += i;
        }
    }
    if(hold == number * 2){
            return "The number is a perfect number.";
    }else{
            return "The number is not a  perfect number.";
    }
}