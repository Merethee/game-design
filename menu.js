
let burgerElm = document.querySelector('.burgermenu');
let backElm = document.querySelector('.resumebtn');
let menu = document.querySelector(".menuwrapper"); 

burgerElm.addEventListener('click', openSideBar);
backElm.addEventListener('click', closeSideBar);

function openSideBar(event){

    menu.classList.add("open");

    if(menu.style.display !== "block") { 
        menu.style.display = "block"; 
    } else {
           menu.style.display = "none"; 
    }
}

function closeSideBar(event){

    // menu.classList.add("close");

    if(menu.style.display !== "block") { 
        menu.style.display = "block"; 
    } else {
           menu.style.display = "none"; 
    }

}

