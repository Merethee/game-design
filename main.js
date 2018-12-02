
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
            merker.style.transition = "all .5s ease-in-out"; 
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

