let formDOM = document.getElementById("userForm");
formDOM.addEventListener("submit", eventt);

function eventt(event){
    event.preventDefault();
    const User_Name = document.querySelector("#username");
    const User_Score = document.querySelector("#score");
    if(User_Name.value && User_Score.value){
        addItem(User_Name.value, User_Score.value);
        User_Name.value = '';
        User_Score.value = '';
    }
}

let userListDOM = document.querySelector('#userList');
const addItem = (username, score) => { 
    let liDOM = document.createElement('li');

    
    liDOM.innerHTML = `
    ${username}
         <span class="badge badge-primary badge-pill"> ${score}</span>
   `;
    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    userListDOM.append(liDOM) 
}
 