import './style.css'
//FUNCTION CALLS

//DECLARATION OF GLOBAL VARIABLES
let bill = 0;
let tipAmount = 0;
let totalAmount = 0;

//Initialize
function Initialize(){

}

//INPUTS
//=>Bill input
const billInput = document.querySelector(".bill-input");

bill = billInput.value

//=>Custom input
const customInput = document.querySelector(".custom-input");

//=>Number of People input
const nopInput = document.querySelector(".nop-input");


//BUTTONS
//=>Event listeners for buttons
const tipButtons = document.querySelectorAll(".tip-button");

//=>Logic behind each button
tipButtons.forEach (button => {
    button.addEventListener("click",() => {
        console.log(button.textContent)
    });
});

