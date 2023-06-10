
// 1- Timing
// 2- Events
// 3- HTTP istekleri

// Asenkron Problemleri


const users = [
    {
        userId: 5,
        post: "Murathan 1"
    },
    {
        userId: 5,
        post: "Murathan 2"
    },
    {
        userId: 5,
        post: "Murathan 3"
    },
    {
        userId: 6,
        post: "Ali 1"
    },
    {
        userId: 7,
        post: "Mehmet 4"
    }
    
]

function getUserId(){
    setTimeout(()=>{
        return 5;
    },1000)
}

function getPost(userId){
    setTimeout(()=>{
        users.forEach((user)=>{
            if(user.userId == userId){
                console.log(user.post)
            }
        })
    },500);
}

let userId = getUserId();
getPost(userId)


// Call Back   Bir fonskiyonu bir fonksiyona parametre olarak verilmesidir.

function getName(callback){
    setTimeout(()=> {
        let name = "Murathan";
        callback(name);
    },1000)
}

function getLastName(callback){
    setTimeout(() => {
        let surName = "Bayram"
        callback(surName);
    }, 1000)
}

function getAge(callback){
    setTimeout(() => {
        let age = 25;
        callback(age);
    },1000);
}

getName((name)=>{
    getLastName((surName)=>{
        getAge((age)=>{
            console.log(name, surName, age)
        });
    });
});