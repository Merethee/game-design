
var europa = document.querySelector(".pil");
var merker = document.querySelector(".merker");
var klar = document.querySelector(".klar-btn");
var instruks = document.querySelector(".instruks"); 

europa.addEventListener("click", showBadges);
klar.addEventListener("click", removeWindow);

function showBadges() {

        if(merker.style.display !== "block") { 
            merker.style.display = "block"; 
            merker.style.transition = "all .5s ease-in-out"; 
        } else {
            merker.style.display = "none"
          
        }
    } 

function removeWindow() {
       instruks.style.visibility = "hidden"; 
} 


$(document).ready(function() {
    $("#nord").zoomTarget();
});

