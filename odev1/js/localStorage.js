
let user = {
    userName: "Murathan",
    isActive: true
}




localStorage.setItem("UserInfo", JSON.stringify(user) );

let userInfo = localStorage.getItem("UserInfo");
console.log(userInfo);  