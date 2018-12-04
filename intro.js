let kongeBoble = document.querySelector(".snakkeboble-konge");
let butlerBoble = document.querySelector(".snakkeboble-butler");
let nesteBoble = document.querySelector(".neste");
let counter = document.querySelector(".neste"), count = 0;

if(count == 1) {
    nesteBoble = true;
    kongeBoble.classList.toggle("ut-venstre");
    butlerBoble.classList.toggle("inn-hoyre");

} if(count == 2) {

    nesteKongeBoble;
    nesteKongeTekst;
} if(count == 3) {

    // nesteButlerBoble;   
} if(count == 4) {
    
    nesteKongeBoble;
    nesteButlerTekst; 
}


// Viser butlerens svar til kongen
/* function nesteButlerBoble() {
    
    kongeBoble.classList.toggle("ut-venstre");
    butlerBoble.classList.toggle("inn-hoyre");
} */

function countClick() {
    count += 1;
    console.log("you clicked");
}

// Viser kongens svar til butleren
function nesteKongeBoble() {

    butlerBoble.classList.toggle("inn-hoyre");
    butlerBoble.classList.toggle("ut-hoyre");

    kongeBoble.classList.toggle("ut-venstre");
    kongeBoble.classList.toggle("inn-venstre");
}

function nesteKongeTekst() {
    document.querySelector("#konge-tekst").innerHTML = "Som ny konge trenger jeg informasjon fra de andre landene.";
}

function nesteButlerTekst() {
    document.querySelector("#butler-tekst").innerHTML = "OK!";
}
