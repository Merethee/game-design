let burgerElm = document.querySelector('.burgermenu');
let backElm = document.querySelector('.resumebtn')

burgerElm.addEventListener('click', openSideBar);
backElm.addEventListener('click', closeSideBar);

function openSideBar(event){
    var burgerBtnElm = document.querySelector('.menuwrapper')
    burgerBtnElm.classList.add('menuwrapper1');
}

function closeSideBar(event){
    var backBtnElm = document.querySelector('.menuwrapper')
    backBtnElm.classList.remove('menuwrapper1');
}