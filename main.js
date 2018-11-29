
var europa = document.querySelector(".pil");
var merker = document.querySelector(".merker");

europa.addEventListener("click", showBadges);

function showBadges() {

        if(merker.style.display !== "block") { 
            merker.style.display = "block";  
        } else {
            merker.style.display = "none"
        }
    } 


