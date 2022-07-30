let isim = prompt("Lütfen isminizi giriniz!");
function showTime() {
    document.getElementById("myName").innerHTML = isim;
    const today = new Date();
    let day = today.getDay();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    minute = CheckTime(minute);
    second = CheckTime(second);
    day = checkDay(day)


    document.getElementById("myClock").innerHTML = `${hour}:${minute}:${second} ${day}`
    setTimeout(showTime, 1000)
}


function CheckTime(i) {
    if (i < 10) {
        i = "0" + i;
        return i;
    } else {
        return i;
    }
}


function checkDay(i) {

    switch (i) {
        case 1:
            return "Pazartesi";
            break;
        case 2:
            return "Salı";
            break;
        case 3:
            return "Çarşamba";
            break;
        case 4:
            return "Perşembe";
            break;
        case 5:
            return "Cuma";
            break;
        case 6:
            return "Cumartesi";
            break;
        case 7:
            return "Pazar";
            break;
    }

}
showTime();



let al = document.getElementById("myName");

al.addEventListener("mouseup", yap);
function yap(){
    this.style.color = "red"
   
}