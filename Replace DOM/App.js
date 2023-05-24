// Replace DOM Elemnts

const cardBody = document.querySelectorAll(".card-body")[1];

const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "Todo Listesi - Yeni";

cardBody.replaceChild(newTitle, cardBody.childNodes[1]);