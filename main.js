
let europa = document.querySelector(".europa");
let merker = document.querySelector(".merker");

var visesMerkene = false; 

europa.addEventListener("click", showBadges);

function showBadges() {

        if(merker.style.display === "none") {
            visesMerkene = false;
            merker.style.display = "block"; 
        } else {
            merker.style.display = "none"
            visesMerkene = ture; 
        }
    } 


