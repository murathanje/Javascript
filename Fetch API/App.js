
function getStudents(url){
    fetch(url)
    .then(response=>response.json())
    .then((data)=>{
        data.forEach(element => {
            if(element.id == 1){
                console.log(element.firstName, element.lastName)
            }
        });
    }) 
    .catch(err => console.log(err))
}

getStudents("student.json")


function saveStudents(){
    fetch("https://jsonplaceholder.typicode.com/albums",{
        
        method: "POST",
        headers :{
            "Content—Type" :"application/json"
        },
        body: JSON.stringify(data)
    })
}