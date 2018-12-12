
let burgerElm = document.querySelector('.burgermenu');
let backElm = document.querySelector('.resumebtn');
let menu = document.querySelector(".menuwrapper"); 

burgerElm.addEventListener('click', openSideBar);
backElm.addEventListener('click', closeSideBar);

// Åpne meny

function openSideBar(event){

    menu.classList.add("open");

    if(menu.style.display !== "block") { 
        menu.style.display = "block"; 
    } else {
           menu.style.display = "none"; 
    }
}

// Lukk meny

function closeSideBar(event){

    if(menu.style.display !== "block") { 
        menu.style.display = "block"; 
    } else {
           menu.style.display = "none"; 
    }

}

// Åpne butikk

var klikkPåButikk = document.querySelector(".butikk");
var butikk = document.querySelector(".shopwrapper"); 

klikkPåButikk.addEventListener("click", openStore);

function openStore() {
   
    menu.classList.remove("open");

    if(butikk.style.display !== "block") { 
        butikk.style.display = "block"; 
        menu.style.display = "none"; 
 
    } else {
           butikk.style.display = "none"; 
      
    }

}

// tilbake til meny

var tilbake = document.querySelector(".tilbake"); 
tilbake.addEventListener("click", backToMenu);

function backToMenu() {

    if(menu.style.display !== "block") { 
        menu.style.display = "block"; 
        butikk.style.display = "none"; 
    } else {
           menu.style.display = "none"; 
    }
}

