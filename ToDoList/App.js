const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const ulList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const lastCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#todoClearButton");
const deleteButton = document.querySelector("#todoClearButton");

let todos = [];

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);
    lastCardBody.addEventListener("click",removeTodo);
    deleteButton.addEventListener("click", removeAll);
    
}

function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText === "" || inputText == null) {
        showAlert("danger","Lütfen boş bırakmayınız!")
    } else {
        //Arayüze ekleme
        addTodoUI(inputText);
        //Storage ekleme
        addStorage(inputText);
        // Uyarı 
        showAlert("success","Başarıyla eklendi");
    }
    console.log("Submit eventı çalıştı");
    e.preventDefault();
}
runEvents();

function addTodoUI(newTodo) {
    
    const li = document.createElement("li");
    const a = document.createElement("a");
    const i = document.createElement("i");
    li.className = "list-group-item d-flex justify-content-between";
    a.className = "delete-item";
    a.href = "#";
    i.className = "fa fa-remove";
    li.textContent = newTodo; 
    a.appendChild(i);
    li.appendChild(a);
    ulList.appendChild(li);
    addInput.value = "";

}

function addStorage(newTodo){
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage(){
    if(localStorage.getItem("todos") !== null){
        todos = JSON.parse(localStorage.getItem("todos"));
    }else{
        todos = [];
    }
}

function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    setTimeout(function(){
        alert.remove();
    },2000);
}

function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addTodoUI(todo);
    });
}

function removeTodo(e){
    if(e.target.className == "fa fa-remove"){
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        showAlert("success","Todo başarıyla silindi!")
        removeTodoStorage(todo.textContent);
    }    
}

function removeTodoStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){
        if(todo === removeTodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));

}

function removeAll() {

    const todoListesi = document.querySelectorAll(".list-group-item");
    if(todoListesi.length == 0){
        showAlert("danger","Liste boş!");
    }else{
        todoListesi.forEach(function(todo){
            todo.remove();

        });
        showAlert("success","Liste başarıyla temizlendi!");
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        
    }
}