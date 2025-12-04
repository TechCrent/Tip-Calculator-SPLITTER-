import './style.css'

//DECLARATION OF SCREEN VARIABLES
//=>Bill input
const billInput = document.querySelector(".bill-input");

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
        console.log(button.dataset.name)
    });
});