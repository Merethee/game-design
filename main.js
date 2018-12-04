
var pil = document.querySelector(".pil");
var merker = document.querySelector(".merker");

pil.addEventListener("click", showBadges);


// skjuler merkene før click 
function showBadges() {

        if(merker.style.display !== "block") { 
            merker.style.display = "block"; 
        } else {
            merker.style.display = "none"; 
        }
    } 
    
var allowMapInput = false;

var klar = document.querySelector(".klar-btn");
var instruks = document.querySelector(".instruks"); 

klar.addEventListener("click", removeWindow);

// instruks popup 
function removeWindow() {
       instruks.style.visibility = "hidden";
       allowMapInput = true; 
} 

// Zoom på kart 
var kart = document.querySelector(".kart");

// Zoom Nord
var nord = document.querySelector("#nord");
nord.addEventListener("click", function (event) {
    if(allowMapInput) kart.classList.toggle('zoom-nord');
});

// Zoom Sør
var sor = document.querySelector("#sor");
sor.addEventListener("click", function (event) {
    if(allowMapInput) kart.classList.toggle('zoom-sor');
});

// Zoom Øst
var ost = document.querySelector("#ost");
ost.addEventListener("click", function (event) {
    if(allowMapInput) kart.classList.toggle('zoom-ost');
});

// Zoom Vest
var vest = document.querySelector("#vest");

vest.addEventListener("click", function (event) {
    if(allowMapInput) kart.classList.toggle('zoom-vest');
});

    // Vest Europa - spørsmål dot

    var vestDot = document.querySelector(".vDot"); 
    var hangman = document.querySelector(".hangmanwrapper"); 

    vestDot.addEventListener("click", questionVest);

    function questionVest() {
        kart.classList.remove('zoom-vest');

        if(hangman.style.display !== "block") { 
            hangman.style.display = "block"; 
        } else {
           hangman.style.display = "none"; 
        }
      
    }    

