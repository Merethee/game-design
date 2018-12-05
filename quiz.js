
var berlin = document.getElementById("rigth");
var munchen = document.getElementById("wrong");
var hamburg = document.getElementById("wrong1"); 
var bronn = document.getElementById("wrong2"); 

function rigthAnswer() {
   berlin.style.borderColor = "limegreen";
}

function barcaAnswer() {
    munchen.style.borderColor = "red";
    berlin.style.borderColor = "limegreen";
}

function grandAnswer() {
    hamburg.style.borderColor = "red";
    berlin.style.borderColor = "limegreen";
}

function bronAnswer() {
    bronn.style.borderColor = "red";
    berlin.style.borderColor = "limegreen";
}


