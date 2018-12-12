/*
    Hangman.js, Berliner Dom
*/

//Declare variables

//option box elements for letter L and N

let optBoxLElm = document.querySelector('.userChoiceL');
let optBoxNElm = document.querySelector('.userChoiceN');

//answer box elements for user choice l and user choice n

let ansBoxLElm = document.querySelector('.ucl');
let ansBoxNElm = document.querySelector('.ucn');

//answer wrapper

let ansWrapper = document.querySelector('.answerwrapper');

//all answer boxes inside answer wrapper

let ansBoxAll = document.querySelector('.berlinerdom');

//set letters in answer box to false by default

let hasLetterL = false;
let hasLetterN = false;

var arrowTo = document.querySelector('.arrow-to'); 

//event listeners for letter l and n in option boxes

optBoxLElm.addEventListener('click', showLetterL);
optBoxNElm.addEventListener('click', showLetterN);

//show letter n, set letter n answer box to true and run green glow func

function showLetterN(event){
        ansBoxNElm.style.display = "block";
        hasLetterN = true;
        greenGlow();
}

//show letter l, set letter l answer box to true and run green glow func

function showLetterL(event){
        ansBoxLElm.style.display = 'block';
        hasLetterL = true;
        greenGlow();
}

//check if letter n and l equals true, and add green border class

function greenGlow() {
    if((hasLetterN == true)&&(hasLetterL == true)) {
        ansWrapper.classList.add('green');
        arrowTo.style.visibility = "visible"; 
    }

}