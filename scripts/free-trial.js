import IndividualPricingCards2 from "../components/IndividualPricingCards2.js";
import MonthlyYearlyBtn from "../components/MonthlyYearlyBtn.js";
import MonthlyYearlyBtn2 from "../components/MonthlyYearlyBtn2.js";
import FourteenDayTeamTrial from "../components/FourteenDayTeamTrial.js";
import FourteenDayEnterpriseTrial from "../components/FourteenDayEnterpriseTrial.js";

let sliderZeroPercent = document.getElementById("sliderZeroPercent");
let sliderFiftyPercent = document.getElementById("sliderFiftyPercent");
let sliderHundredPercent = document.getElementById("sliderHundredPercent");

let slider = document.getElementById("slider");
let circleSlider = document.getElementById("circleSlider");

let buttonGroup2 = document.getElementsByClassName("buttonGroup2")[0];

let dataDiv = document.getElementsByClassName("dataDiv")[0];
buttonGroup2.innerHTML = MonthlyYearlyBtn2();
dataDiv.innerHTML = IndividualPricingCards2();

sliderZeroPercent.addEventListener("click", slideLeft);
function slideLeft() {
    slider.setAttribute("class", "slider0");
    circleSlider.setAttribute("class", "circleSlider0");

    buttonGroup2.innerHTML = MonthlyYearlyBtn2();

    dataDiv.innerHTML = IndividualPricingCards2();
}

sliderFiftyPercent.addEventListener("click", slideMiddle);
function slideMiddle() {
    slider.setAttribute("class", "slider50");
    circleSlider.setAttribute("class", "circleSlider50");

    buttonGroup2.innerHTML = null;

    dataDiv.innerHTML = FourteenDayTeamTrial();
}

sliderHundredPercent.addEventListener("click", slideRight);
function slideRight() {
    slider.setAttribute("class", "slider100");
    circleSlider.setAttribute("class", "circleSlider100");

    buttonGroup2.innerHTML = null;

    dataDiv.innerHTML = FourteenDayEnterpriseTrial();
}


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


let counter = 0;
buttonGroup2.addEventListener("click", changeData);
function changeData() {
    if(counter%2 == 0){
        let standardPricingCardBill = document.getElementById("standardPricingCardBill");
        let premiumPricingCardBill = document.getElementById("premiumPricingCardBill");
        standardPricingCardBill.innerHTML = "then ₹ 1024.88/month, billed annually (₹ 12,299.00)";
        premiumPricingCardBill.innerHTML = "then ₹ 1533.19/month, billed annually (₹ 18,399.00)";
        counter++;
    }else {
        let standardPricingCardBill = document.getElementById("standardPricingCardBill");
        let premiumPricingCardBill = document.getElementById("premiumPricingCardBill");
        standardPricingCardBill.innerHTML = "then ₹ 1,499.00/month, billed monthly";
        premiumPricingCardBill.innerHTML = "then ₹ 2,299.00/month, billed monthly";
        counter++;    
    }
}
