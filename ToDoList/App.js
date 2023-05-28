const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const ulList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const lastCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#todoClearButton");


function runEvents(){
    form.addEventListener("submit", addTodo);
}

function addTodo(e){
    const inputText = addInput.value.trim();
    if(inputText === "" || inputText == null){
        alert("Please enter a valid todo");
    }else{
        //Arayüze ekleme
        addTodoUI(inputText);
    }
    console.log("Submit eventı çalıştı");
    e.preventDefault();
} 
runEvents();

function addTodoUI(newTodo){

}