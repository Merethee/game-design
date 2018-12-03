
var pil = document.querySelector(".pil");
var merker = document.querySelector(".merker");
var klar = document.querySelector(".klar-btn");
var instruks = document.querySelector(".instruks"); 

pil.addEventListener("click", showBadges);
klar.addEventListener("click", removeWindow);

// skjuler merkene før click 
function showBadges() {

        if(merker.style.display !== "block") { 
            merker.style.display = "block"; 
            merker.style.opacity = "1"; 
            merker.style.transition = "opacity 2.0s ease-in";
 
        } else {
            merker.style.display = "none"; 
        }
    } 
    
var allowMapInput = false;

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