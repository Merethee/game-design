// Viser butlerens svar til kongen
function nesteButlerBoble() {
    // document.querySelector(".snakkeboble-konge").style.animation = "fadeout 1s linear";
    document.querySelector(".snakkeboble-konge").style.display = "none";
    // document.querySelector(".snakkeboble-butler").style.animation = "fadein 1s linear";
    document.querySelector(".snakkeboble-butler").style.display = "block";
}

// Viser kongens svar til butleren
function nesteKongeBoble() {
    document.querySelector(".snakkeboble-butler").style.display = "none";
    document.querySelector(".snakkeboble-konge").style.display = "block";
    document.querySelector("#konge-tekst-1").innerHTML = "Som ny konge trenger jeg informasjon fra de andre landene.";
}