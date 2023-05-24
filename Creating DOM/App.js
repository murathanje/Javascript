//DOM element oluşturma
const cardBody = document.querySelectorAll(".card-body")[1];

console.log(cardBody)

const link = document.createElement("a");

const todoList = document.querySelector(".list-group");

link.id = "goBlogWebsite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "https://wwww.goole.com";
link.target = "_blank";
link.innerHTML = "Google'a git!"


cardBody.appendChild(link);
console.log(link)


    // < li class="list-group-item d-flex justify-content-between" > Todo 3
    //     < a href = "#" class="delete-item" >
    //         <i class="fa fa-remove"></i>
    //                         </ >
    //                     </li >

const todo = document.createElement("li");
const todoLink = document.createElement("a");
const todoItalic = document.createElement("i");
todo.className = "list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";

todoLink.className = "delete-item"
todoLink.href = "#";

todoItalic.className = "fa fa-remove";

todoLink.appendChild(todoItalic);
todo.appendChild(todoLink);
todoList.appendChild(todo);
