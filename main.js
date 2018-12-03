
var europa = document.querySelector(".pil");
var merker = document.querySelector(".merker");
var klar = document.querySelector(".klar-btn");
var instruks = document.querySelector(".instruks"); 

europa.addEventListener("click", showBadges);
klar.addEventListener("click", removeWindow);

// skjuler merkene før click 
function showBadges() {

        if(merker.style.display !== "block") { 
            merker.style.display = "block"; 
            merker.style.transition = "all 1s ease-in-out"; 
        } else {
            merker.style.display = "none"
          
        }
    } 
    
// instruks popup 
function removeWindow() {
       instruks.style.visibility = "hidden"; 
} 

// Zoom på kart 
$(document).ready(function() {
    $("#nord").zoomTarget();
    $("#sor").zoomTarget();
    $("#ost").zoomTarget();
    $("#vest").zoomTarget();
});

// dot/meny/merker vises når man trykker på nord 

var nord = document.querySelector("#nord");
var dot = document.querySelector(".dot");
var meny = document.querySelector(".zoom"); 
var total = document.querySelector(".zoom-to")

var zoom = document.querySelector(".zoomTarget"); 

nord.addEventListener("click", elmShow);

elmVises = false; 

function elmShow() {

    if(elmVises === false) {
        elmVises = true; 
        dot.style.visibility = "visible"; 
        meny.style.visibility = "visible"; 
        total.style.visibility = "visible"; 
    } else {
        elmVises = false; 
        dot.style.visibility = "hidden"; 
        meny.style.visibility = "hidden"; 
        total.style.visibility = "hidden"; 
    }
}