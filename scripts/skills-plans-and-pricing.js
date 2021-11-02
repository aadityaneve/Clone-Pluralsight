import IndividualPricingCards from "../components/IndividualPricingCards.js";
import TeamPricingCards from "../components/TeamPricingCards.js";
import MonthlyYearlyBtn from "../components/MonthlyYearlyBtn.js";

let pricingCardsDiv = document.getElementsByClassName("pricingCards")[0];
let monthlyYearlyBtn = document.getElementsByClassName("buttonGroup2")[0];
let individualBtn = document.getElementsByClassName("individualBtn")[0];
let teamBtn = document.getElementsByClassName("teamBtn")[0];
let buttonGroup1 = document.getElementsByClassName("buttonGroup1")[0];
let innerOval = document.getElementsByClassName("innerOval")[0];


// Clicking on Month and Year toggle button will change plans pricing
let counter = 0;
monthlyYearlyBtn.addEventListener("click", () => {
    if(counter%2 == 0){
        let individualPricingCardStandardPrice = document.getElementsByClassName("standardPrice")[0];
        let period = document.getElementsByClassName("period")[0];
        individualPricingCardStandardPrice.innerHTML = `<sup class="rupees">₹</sup>12,299`;
        period.innerText = `per year`;
        
        let premiumPricingCardStandardPrice = document.getElementsByClassName("premiumPrice")[0];
        premiumPricingCardStandardPrice.innerHTML = `<sup class="rupees">₹</sup>18,399`;
        let period2 = document.getElementsByClassName("period")[1];
        period2.innerText = `per year`;

        counter++;
    }else {
        let individualPricingCardStandardPrice = document.getElementsByClassName("standardPrice")[0];
        let period = document.getElementsByClassName("period")[0];
        individualPricingCardStandardPrice.innerHTML = `<sup class="rupees">₹</sup>1,499`;
        period.innerText = `per month`;
        
        let premiumPricingCardStandardPrice = document.getElementsByClassName("premiumPrice")[0];
        premiumPricingCardStandardPrice.innerHTML = `<sup class="rupees">₹</sup>2,299`;
        let period2 = document.getElementsByClassName("period")[1];
        period2.innerText = `per month`;

        counter++;
    }
})


// Individual button click event listener
individualBtn.addEventListener("click", () => {
    showCards(monthlyYearlyBtn, MonthlyYearlyBtn);
    showCards(pricingCardsDiv, IndividualPricingCards);
    buttonGroup1.classList.toggle("active");
});


// Team button click event listener
teamBtn.addEventListener("click", () => {
    monthlyYearlyBtn.innerHTML = null;
    showCards(pricingCardsDiv, TeamPricingCards);
    buttonGroup1.classList.toggle("active");
    counter = 0;
});


// showCards will accept div element and component to show
function showCards(div, cards) {
    pricingCardsDiv.innerHTML = null;
    div.innerHTML = cards();
}
showCards(monthlyYearlyBtn, MonthlyYearlyBtn);
showCards(pricingCardsDiv, IndividualPricingCards);
