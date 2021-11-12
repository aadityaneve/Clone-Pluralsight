import IndividualPricingCards from "../components/IndividualPricingCards.js";
import TeamPricingCards from "../components/TeamPricingCards.js";
import MonthlyYearlyBtn from "../components/MonthlyYearlyBtn.js";

import Navbar from '../components/Navbar.js';
import NavItems from '../components/NavItems.js'
import Footer from '../components/Footer.js';

let navItems = document.getElementById("navItems");
let nav = document.getElementById('nav');
let footer = document.getElementById('footer');
navItems.innerHTML = NavItems();
nav.innerHTML = Navbar();
footer.innerHTML = Footer();

let pricingCardsDiv = document.getElementsByClassName("pricingCards")[0];
let monthlyYearlyBtn = document.getElementsByClassName("buttonGroup2")[0];
let individualBtn = document.getElementsByClassName("individualBtn")[0];
let teamBtn = document.getElementsByClassName("teamBtn")[0];
let buttonGroup1 = document.getElementsByClassName("buttonGroup1")[0];
let innerOval = document.getElementsByClassName("innerOval")[0];

// Clicking on Month and Year toggle button will change plans pricing
let counter = 0;
monthlyYearlyBtn.addEventListener("click", () => {
    if (counter % 2 == 0) {
        let individualPricingCardStandardPrice =
            document.getElementsByClassName("standardPrice")[0];
        let period = document.getElementsByClassName("period")[0];
        individualPricingCardStandardPrice.innerHTML = `<sup class="rupees">₹</sup>12,299`;
        period.innerText = `per year`;

        let premiumPricingCardStandardPrice =
            document.getElementsByClassName("premiumPrice")[0];
        premiumPricingCardStandardPrice.innerHTML = `<sup class="rupees">₹</sup>18,399`;
        let period2 = document.getElementsByClassName("period")[1];
        period2.innerText = `per year`;

        counter++;
    } else {
        let individualPricingCardStandardPrice =
            document.getElementsByClassName("standardPrice")[0];
        let period = document.getElementsByClassName("period")[0];
        individualPricingCardStandardPrice.innerHTML = `<sup class="rupees">₹</sup>1,499`;
        period.innerText = `per month`;

        let premiumPricingCardStandardPrice =
            document.getElementsByClassName("premiumPrice")[0];
        premiumPricingCardStandardPrice.innerHTML = `<sup class="rupees">₹</sup>2,299`;
        let period2 = document.getElementsByClassName("period")[1];
        period2.innerText = `per month`;

        counter++;
    }
});

// Individual button click event listener
function slideRight() {
    showCards(monthlyYearlyBtn, MonthlyYearlyBtn);
    showCards(pricingCardsDiv, IndividualPricingCards);
    buttonGroup1.classList.toggle("active");

    individualBtn.removeEventListener("click", slideRight, true);
    teamBtn.addEventListener("click", slideLeft, true);
}
individualBtn.addEventListener("click", slideRight, true);

// Team button click event listener
function slideLeft() {
    monthlyYearlyBtn.innerHTML = null;
    showCards(pricingCardsDiv, TeamPricingCards);
    buttonGroup1.classList.toggle("active");

    teamBtn.removeEventListener("click", slideLeft, true);
    individualBtn.addEventListener("click", slideRight, true);

    counter = 0;
}
teamBtn.addEventListener("click", slideLeft, true);

// showCards will accept div element and component to show
function showCards(div, cards) {
    pricingCardsDiv.innerHTML = null;
    div.innerHTML = cards();
}
showCards(monthlyYearlyBtn, MonthlyYearlyBtn);
showCards(pricingCardsDiv, IndividualPricingCards);



var collapsibles = document.getElementsByClassName("collapsible");
for (let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
