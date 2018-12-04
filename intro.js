let kongeBoble = document.querySelector(".snakkeboble-konge-1");
let butlerBoble = document.querySelector(".snakkeboble-butler-1");
let kongeBoble2 = document.querySelector(".snakkeboble-konge-2");
let butlerBoble2 = document.querySelector(".snakkeboble-butler-2");
let kongeBoble3 = document.querySelector(".snakkeboble-konge-3");

// Viser butlerens svar til kongen
function nesteButlerBoble() {
    
    kongeBoble.classList.add("ut-venstre");
    butlerBoble.classList.add("inn-hoyre");
}

// Viser kongens svar til butleren
function nesteKongeBoble() {

    butlerBoble.classList.remove("inn-hoyre");
    kongeBoble.style.display = ("none");
    kongeBoble2.classList.add("inn-venstre");
}

// Viser butlerens neste svar til kongen
function nesteButlerBoble2() {
    
    kongeBoble2.classList.remove("inn-venstre");
    butlerBoble2.classList.add("inn-hoyre");
}
function nesteKongeBoble2() {
    
    butlerBoble2.classList.remove("inn-hoyre");
    butlerBoble2.classList.add("ut-hoyre");
    kongeBoble3.classList.add("inn-venstre");
}