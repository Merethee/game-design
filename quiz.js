
var berlin = document.getElementById("rigth")
var munchen = document.getElementById("wrong")
var hamburg = document.getElementById("wrong1") 
var bronn = document.getElementById("wrong2")
var arrow = document.querySelector(".arrow"); 

function rigthAnswer() {
 
   berlin.style.borderColor = "limegreen";

   if(berlin = "limegreen") {
       arrow.style.visibility = "visible"; 

   } 
}

function barcaAnswer() {
    munchen.style.borderColor = "red";
    berlin.style.borderColor = "limegreen";

    if(berlin = "limegreen") {
        arrow.style.visibility = "visible"; 
       }
 }

function grandAnswer() {
    hamburg.style.borderColor = "red";
    berlin.style.borderColor = "limegreen";

    if(berlin = "limegreen") {
        arrow.style.visibility = "visible"; 
       }
 }

function bronAnswer() {
    bronn.style.borderColor = "red";
    berlin.style.borderColor = "limegreen";

    if(berlin = "limegreen") {
        arrow.style.visibility = "visible"; 
       }
}


