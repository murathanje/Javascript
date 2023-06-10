
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

function getUserId(callback){
    setTimeout(()=>{
        let number = 5;
        callback(number);
    },1000)
}

function getPost(number){
    setTimeout(()=>{
        users.forEach((user)=>{
            if(user.userId == number){
                console.log(user.post)
            }
        })
    },1000);
}

getUserId(getPost)


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

//      AJAX

// const xhr = new XMLHttpRequest();
// console.log(xhr)

function prepareURL(url, id){
    if(id === null){
        return url;
    }else{
        return `${url}/?postId=${id}`;
    }
}
function getComments(url, id){
    let newURL = prepareURL(url,id);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState == 4 && xhr.status ==200){
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET", newURL);
    xhr.send();
}

getComments("https://jsonplaceholder.typicode.com/comments",1)