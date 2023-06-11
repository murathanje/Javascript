const formWrapper = document.querySelector(".formWrapper");
const form = document.querySelector("#form");
const inputSearch = document.querySelector("#input-search");
const buttonWrapper = document.querySelector(".button-wrapper");
const buttonSearch = document.querySelector("#button-search");
const buttonClear = document.querySelector("#button-clear");
const imageListWarpper = document.querySelector(".imageList-wrapper");


runEventListener();

function runEventListener(){
    buttonSearch.addEventListener("click", search)
    buttonClear.addEventListener("click", clearAll)
}

function search(e){
    const value = inputSearch.value.trim();
    if (inputSearch.value != null && Array.from(imageListWarpper.children) != null){
        clearAll()
    }
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
            Authorization: "Client-ID xm-ZbR8JLbuRy2t8hgRaXx5ZefM2uuNue4XwhHxvNxg"
        }
    })
    .then(res => res.json())
    .then((data) => {
        Array.from(data.results).forEach((image)=>{
            addImageToUI(image.urls.small);
        })
    })
    .catch(err => console.log(err))
    
    e.preventDefault();
}

function addImageToUI(url){
    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.height = "400";
    img.width = "400";
    div.append(img)
    imageListWarpper.append(div);
}

function clearAll(){
    Array.from(imageListWarpper.children).forEach(card=>card.remove()) 
    inputSearch.value = "";
}