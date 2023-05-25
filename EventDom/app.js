// Events

// function changeTitle(){
//     document.querySelector(".card-title").textContent = "Yenilendi";
// }

const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click",changeTitle());

function changeTitle(){
    document.querySelector(".card-title").textContent = "Yenilendi";
};

function changeTitle1(e){
    console.log(e.target.textContent);
    console.log(e.target.className);
}

//                                                  MOUSE EVENTS
    //DOMContentLoaded
    //load
    //click
    //dblclick
    //mouseover
    //mouseout
    //mouseenter
    //mouseleave

// document.addEventListener("DOMContentLoaded",run);

// function run(){
//     console.log("Merhaba");
// };


// const cardTitle = document.querySelectorAll(".card-title")[1];
// const cardBody = document.querySelectorAll(".card-body")[1];

// cardTitle.addEventListener("dblclick",run);

// cardBody.addEventListener("mouseover",run1);


// function run(e){
//     console.log(e.target);
// }

// function run1(){
//     cardBody.style.color = "red"
// }

//                                                 KLAVYE EVENTLARI


//keypress  :    Sadece harf ve sayılarda tetiklenir
//keydown   :    Her şey algılar
//keyup     :    Tuştan elinizi kaldırdığınızda çalışır

// document.addEventListener("keydown",run);

// function run(e){
//     console.log(e.key);
//     // console.log(e.keyCode); for ASCII
//     // console.log(e.which);

//     if(e.keyCode == 116){
//         alert("Sayfa yenileme engellendi.")
//     }
// }

//                                                      İNPUT EVENTLARI
//  focus   : inputa girildiğinde
//  blur    : inputtan çıkıldığında
//  copy    : inputtaki değeri kopyaladığınızda
//  paste   : inputa kopyalama yapıldığı zaman
//  cut     : inputtaki değeri kesdiğinizde
//  select  : inputtaki değer seçildiğinde

const todo = document.querySelector("#todoName");

todo.addEventListener("select",run);

function run(){
    todo.style.backgroundColor = "red";
}