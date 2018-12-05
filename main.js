
var pil = document.querySelector(".pil");
var merker = document.querySelector(".merker");

pil.addEventListener("click", showBadges);

// skjuler merkene før click 
function showBadges() {

   merker.classList.toggle('smooth');

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

var nord = document.querySelector("#nord");
nord.addEventListener("click", function (event) {
    zoomMap('zoom-nord');
});

var sor = document.querySelector("#sor");
sor.addEventListener("click", function (event) {
    zoomMap('zoom-sor');
});

var ost = document.querySelector("#ost");
ost.addEventListener("click", function (event) {
    zoomMap('zoom-ost');
});

var vest = document.querySelector("#vest");
vest.addEventListener("click", function (event) {
    zoomMap('zoom-vest');
});

var kart = document.querySelector(".kart");
var zoomState = "map";

function zoomMap(position){
    console.log(position);  
    if(allowMapInput) {
        if(zoomState == "map") {
            // zoom in
            kart.classList.add(position);
            zoomState = "";
        } else {
            // zoom out
            kart.classList.remove('zoom-nord');
            kart.classList.remove('zoom-sor');
            kart.classList.remove('zoom-ost');
            kart.classList.remove('zoom-vest');
            zoomState = "map";
        }
    }
}


// Vest Europa - spørsmål 

var vestDot = document.querySelector(".vDot"); 
var hangman = document.querySelector(".hangmanwrapper"); 

vestDot.addEventListener("click", questionVest);

function questionVest() {
    
    zoomMap('zoom-vest');

    hangman.classList.add("ruteanim"); 

    if(hangman.style.display !== "block") { 
        hangman.style.display = "block"; 
    } else {
    hangman.style.display = "none"; 
    }

}    

