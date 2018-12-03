// Viser butlerens svar til kongen
function nesteButlerBoble() {
    document.querySelector(".snakkeboble-konge").classList.add(".snakkeboble-fadeout");
    document.querySelector(".snakkeboble-konge").style.display = "none";
    document.querySelector(".snakkeboble-butler").classList.add(".snakkeboble-fadeout");
    document.querySelector(".snakkeboble-butler").style.display = "block";
}

// Viser kongens svar til butleren
function nesteKongeBoble() {
    document.querySelector(".snakkeboble-butler").style.display = "none";
    document.querySelector(".snakkeboble-konge").style.display = "block";
}