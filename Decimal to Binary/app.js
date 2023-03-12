let number = Number(prompt("Bir sayi giriniz."));

let result1 = decimalToBinary(number);

let result2 = reverse(result1);

console.log(result2);

function decimalToBinary(number){
    let hold = "";

    while(number > 1){
        hold += (number%2).toString();
        number = Math.floor(number/2);
        if(number == 1){
            hold += "1";
        }
    }
    return hold;
}


function reverse(result){
    let hold1 = "";
    for (let i = result.length-1; i >= 0; i--){
        hold1 += result.charAt(i);
    }
    return hold1;
}