

let check = false;

const promise = new Promise((resolve,reject)=>{
    if(check){
        resolve("Success");
    }else{
        reject("Error");
    }
})

console.log(promise);

function createPromise(){
    return new Promise((resolve,reject)=>{
        if(check){
            resolve("Success");
        }else{
            reject("Error");
        }})
}
createPromise()
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Her zaman çalışır");
})


function readStudent(url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        try {

            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })

        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    })
}

readStudent("student.json")
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

const p1 = Promise.resolve("P1 başarılı")
const p2 = Promise.resolve("P2 başarılı")
const p3 = new Promise((resolve,reject)=>{
    resolve("Başarılı 1")
})

Promise.all([p1,p2,p3])     // En az biri hatalıysa catch e düşer aksi taktirde then e düşer
.then(()=> console.log("Başarılı1"))
.catch(()=> console.log("Başarısız"))