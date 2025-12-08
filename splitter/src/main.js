import './style.css';

document.addEventListener("DOMContentLoaded", () => {
  const billInput = document.querySelector(".bill-input");
  const customInput = document.querySelector(".custom-input");
  const peopleInput = document.querySelector(".nop-input");
  const tipButtons = document.querySelectorAll(".tip-button");
  const peopleError = document.getElementById("people-error");
  
  // Fix: Select the SPAN inside the display divs
  const tipAmountDisplay = document.querySelector(".tip-amount .amount-value");
  const totalDisplay = document.querySelector(".total-amount .amount-value");
  const resetBtn = document.querySelector(".reset-button");

  let bill = 0;
  let tipPercent = 0;
  let people = 1;

  function calculate() {
    if (bill <= 0 || people <= 0 || tipPercent < 0) {
      tipAmountDisplay.textContent = "0.00";
      totalDisplay.textContent = "0.00";
      return;
    }

    const tipTotal = bill * (tipPercent / 100);
    const total = bill + tipTotal;

    tipAmountDisplay.textContent = (tipTotal / people).toFixed(2);
    totalDisplay.textContent = (total / people).toFixed(2);
  }

  // Bill input
  billInput.addEventListener("input", (e) => {
    bill = parseFloat(e.target.value) || 0;
    calculate();
  });

//Tip buttons
tipButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Reset all buttons to default look
    tipButtons.forEach(b => {
      b.classList.remove("bg-[#26c2ae]", "text-white");
      b.classList.add("bg-bx1-button", "text-white"); // keep text white!
    });
    // Activate clicked button
    btn.classList.remove("bg-bx1-button");
    btn.classList.add("bg-[#26c2ae]"); // only change background
    // text-white stays because it's already there from HTML

    tipPercent = parseInt(btn.textContent);
    customInput.value = "";
    calculate();
  });
});
  // Custom tip
    customInput.addEventListener("input", (e) => {
    tipPercent = parseFloat(e.target.value) || 0;
    tipButtons.forEach(b => {
        b.classList.remove("bg-[#26c2ae]");
        b.classList.add("bg-bx1-button");
    });
    calculate();
    });

  // Number of people
  peopleInput.addEventListener("input", (e) => {
    people = parseInt(e.target.value) || 1;
    if (people < 1) people = 1;
    peopleInput.value = people;
    calculate();
  });

  //Warning message
  peopleInput.addEventListener("input", (e) => {
  people = parseInt(e.target.value) || 0;

  if (people === 0) {
    peopleError.classList.add("border-2", "border-red-500");
    peopleError.classList.remove("hidden");
    // Don't calculate
    tipAmountDisplay.textContent = "0.00";
    totalDisplay.textContent = "0.00";
  } else {
    people.classList.remove("border-2", "border-red-500");
    peopleError.classList.add("hidden");
    calculate();
  }
});

  // Reset button
    resetBtn.addEventListener("click", () => {
    bill = 0;
    tipPercent = 0;
    people = 1;

    billInput.value = "";
    customInput.value = "";
    peopleInput.value = "5";

    tipButtons.forEach(b => {
        b.classList.remove("bg-[#26c2ae]");
        b.classList.add("bg-bx1-button");
    });

    tipAmountDisplay.textContent = "0.00";
    totalDisplay.textContent = "0.00";

    peopleInput.classList.remove("border-2", "border-red-500");
    peopleError.classList.add("hidden");
    });

  // Initialize
  peopleInput.value = 5;
  tipAmountDisplay.textContent = "0.00";
  totalDisplay.textContent = "0.00";
});