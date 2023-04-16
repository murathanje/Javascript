// DOM HTML 

const todo = document.querySelector(".list-group-item")

const todoList = document.querySelector(".list-group")

// const card = document.getElementsByClassName("card")[0]
const card = document.querySelector(".card")

const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");

let value;

// Anneden çocuklara erişmek

value = todoList;
value = todoList.children[0];
value = todoList.children[1];
value = todoList.children[3].textContent = "Değişti";

value = Array.from(todoList.children);

value.forEach(function(todo){
    console.log(todo.textContent)
})


value = todo.parentElement.parentElement
// Çocuktan anneye erişmek
value = todo;
let ul = todo.parentElement;
let cardBody = ul.parentElement;
let cardElement = cardBody.parentElement;
let row = cardElement.parentElement;
let container = row.parentElement;



// Kardeşler arasında gezinmek

value = todo;
value = todo.nextElementSibling.nextElementSibling;
value = todoLastChild;
value = todoLastChild.previousElementSibling;
console.log(value);


