//Deleting DOM Element

const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");
const todo1 = document.querySelector(".list-group-item");

// todo1.remove()

// todos[0].remove();
// todos[1].remove();
// console.log(todos);


// todos[todos.length-1].remove();

// todoList.removeChild(todos[0])
todoList.removeChild(todoList.lastElementChild)