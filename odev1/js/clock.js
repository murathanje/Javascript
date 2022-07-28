var name = promt("");

function showTime(){
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const second = minute / 60;

    // Divide Time with a year
    const d = new Date();
    let days = Math.round(d.getTime() / day);
    let hours = Math.round(d.getTime() / hour);
    let minutes = Math.round(d.getTime() / minute);
    let sec = Math.round(d.getTime() / second);

    document.getElementById("myClock").innerHTML = `${hours}:${minutes}:${sec} ${days}`
}


function ben(){
    document.getElementById("ilk").style.backgroundColor = "red"
}

