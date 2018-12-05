let konge1 = document.querySelector(".snakkeboble-konge-1");
let butler1 = document.querySelector(".snakkeboble-butler-1");
let konge2 = document.querySelector(".snakkeboble-konge-2");
let butler2 = document.querySelector(".snakkeboble-butler-2");
let konge3 = document.querySelector(".snakkeboble-konge-3");


// Viser butlerens svar til kongen
function nesteButlerBoble() {
    
    // konge1.style.animationFillMode = ("backwards");
    konge1.classList.add("ut-venstre");
    butler1.classList.add("inn-hoyre");
}

// Viser kongens svar til butleren
function nesteKongeBoble() {

    butler1.classList.remove("inn-hoyre");
    konge2.classList.add("inn-venstre");
}

// Viser butlerens neste svar til kongen
function nesteButlerBoble2() {
    
    konge2.classList.remove("inn-venstre");
    butler2.classList.add("inn-hoyre");
}

// Viser kongens siste til butleren
function nesteKongeBoble2() {
    let kongeLast = konge3.classList.add("inn-venstre");
    let startKnapp = document.querySelector(".start-knapp");
    
    butler2.classList.remove("inn-hoyre");
    butler2.classList.add("ut-hoyre");
    //konge3.classList.add("inn-venstre");
    kongeLast;

    if(kongeLast = true) {
        startKnapp.style.display = ("block");
    }
}
